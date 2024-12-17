import mongoose from "mongoose";

export const connectdb = async () => {
  if (mongoose.connection.readyState === 1) {
    console.log("Already connected to the database.");
    return;
  }

  try {
    console.log("Connecting to the database...");
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Successfully connected to the database!");
  } catch (error) {
    console.error("Database connection error:", error);
    throw new Error("Failed to connect to the database");
  }
};
