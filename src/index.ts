require("dotenv").config();
import express from "express";
import { connectDB } from "./utils/connectDb";
import { GlobalErrorHandler } from "./middlewares/globalErrorhandler";
import { CreatePostController } from "./post/controller/CreatePost.controller";
import { GlobalValidation } from "./middlewares/globalValidation";
import { createPostSchema } from "./validationSchemas/post.schema";

const app = express();
app.use(express.json());
// app.use(cors)

app.post("/post", GlobalValidation(createPostSchema), CreatePostController);
app.get("/", (req, res) => {
	res.send({ message: "I am running fine" });
});
app.use(GlobalErrorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
	connectDB();
	console.log(`Server Started at ${PORT}`);
});
