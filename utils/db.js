import mongoose from "mongoose";
const db = async () => {
  const mongoUri = process.env.DB_URI;
  try {
    const connect = await mongoose.connect(mongoUri);
    if (connect) {
      console.log("Connected");
    }
  } catch (error) {
    console.log(error);
  }
};

export default db;
