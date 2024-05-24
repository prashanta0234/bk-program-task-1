import { PostModel } from "../../models/post.model";
import { CreatePostDataType } from "../../validationSchemas/post.schema";

export const CreatePostService = async (data: CreatePostDataType) => {
	const result = await PostModel.create(data);
	return result;
};
