import Otp from "@/model/Otp";
import bcrypt from "bcryptjs";
import db from "@/utils/db";
import User from "@/model/User";
import jwt from "jsonwebtoken";
import { otpSchemaZod } from "@/utils/zodConfig";
import { NextResponse } from "next/server";
import { serialize, parse } from "cookie";

export async function POST(req) {
  const data = await req.json();
  const parsed = otpSchemaZod.safeParse(data);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, message: "Invalid OTP format" },
      { status: 400 }
    );
  }

  const cookieHeader = req.headers.get("cookie") || "";
  const cookiesObj = parse(cookieHeader);
  const token = cookiesObj.authToken;

  if (!token) {
    return NextResponse.json({ error: "No auth token" }, { status: 401 });
  }

  await db();
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const validUser = await Otp.findOne({ userId: decoded.id });
    if (!validUser) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const otpMatch = await bcrypt.compare(parsed.data.otp, validUser.code);
    if (!otpMatch) {
      return NextResponse.json(
        { success: false, message: "Wrong otp" },
        { status: 400 }
      );
    }

    await User.findByIdAndUpdate(
      { _id: decoded.id },
      {
        verified: true,
      },
      { new: true }
    );

    const cookie = serialize("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 12, // 12 hour
      path: "/",
    });
    await Otp.findOneAndDelete({ userId: decoded.id });

    const res = NextResponse.json(
      { success: true, message: "Otp verification successful" },
      { status: 200 }
    );
    res.headers.set("Set-Cookie", cookie);
    return res;
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal server error!" },
      { status: 400 }
    );
  }
}
