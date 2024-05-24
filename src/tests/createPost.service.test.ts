import { z } from "zod";
import mongoose from "mongoose";
import { CreatePostDataType } from "../validationSchemas/post.schema";
import { PostModel } from "../models/post.model";
import { CreatePostService } from "../post/services/createPost.service";

jest.mock("../models/post.model", () => ({
	PostModel: {
		create: jest.fn(),
	},
}));

describe("CreatePostService", () => {
	afterEach(() => {
		jest.clearAllMocks();
	});
	it("should create a new post with valid data", async () => {
		const postData: CreatePostDataType = {
			title: "Test Title",
			description: "Test Description",
		};
		const expectedResult = { _id: new mongoose.Types.ObjectId(), ...postData };
		(PostModel.create as jest.Mock).mockResolvedValue(expectedResult);

		const result = await CreatePostService(postData);
		await expect(PostModel.create).toHaveBeenCalledWith(postData);
		await expect(result).toEqual(expectedResult);
	});
	it("should fail to create a new post with invalid data", async () => {
		const postData = {
			title: "h",
			description: "Test Description",
		};

		(PostModel.create as jest.Mock).mockRejectedValue(
			new Error("Invalid data")
		);
		await expect(
			CreatePostService(postData as CreatePostDataType)
		).rejects.toThrow("Invalid data");
	});
});
