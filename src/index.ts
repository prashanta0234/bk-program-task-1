require("dotenv").config();
import express from "express";
import { connectDB } from "./utils/connectDb";

const app = express();

app.use(express.json());

const PORT = process.env.PORT;
app.listen(PORT, () => {
	connectDB();
	console.log(`Server Started at ${PORT}`);
});
