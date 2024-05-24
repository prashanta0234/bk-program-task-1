import mongoose from "mongoose";

// MongoDB connection URI
const uri = process.env.DB_URI;

// Connect to MongoDB
export const connectDB = async () => {
	try {
		await mongoose.connect(uri!, {
			dbName: "ding-dong",
		});
		console.log("Connected to MongoDB");
	} catch (error) {
		console.error("MongoDB connection error:", error);
	}
};
