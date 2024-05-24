require("dotenv").config();
import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

const PORT = process.env.PORT;
console.log(PORT);
app.listen(PORT, () => {
	console.log(`Server Started at ${PORT}`);
});
