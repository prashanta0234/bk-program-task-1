import { Request, Response } from "express";
import { TryCatch } from "../../utils/tryCatch";
import { SendSuccessResponse } from "../../utils/responseHelper";
import { CreatePostService } from "../services/createPost.service";

export const CreatePostController = TryCatch(
	async (req: Request, res: Response) => {
		console.log(req.body);
		const result = await CreatePostService(req.body);

		SendSuccessResponse(res, {
			status: 201,
			message: "Post Created successfully",
			data: result,
		});
	}
);
