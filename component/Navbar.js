import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      <div className="flex items-center space-x-2 text-xl font-semibold">
        <Link href={"/"}>
          <span className="text-blue-600">DocLocker</span>
        </Link>
      </div>

      <div className="space-x-3">
        <button
          onClick={() => router.push("/login")}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Sign In
        </button>
      </div>
    </nav>
  );
}
