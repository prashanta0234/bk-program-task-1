import mongoose, { Schema, Types } from "mongoose";

const postSchema = new Schema(
	{
		title: { type: String, required: true },
		description: { type: Types.ObjectId, ref: "User" },
	},
	{
		timestamps: true,
	}
);

export const PostModel =
	mongoose.models.Posts || mongoose.model("Posts", postSchema);
