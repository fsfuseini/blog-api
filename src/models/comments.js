import { Schema, model } from "mongoose";
import {toJSON} from "@reis/mongoose-to-json";

// Define the comment schema
const commentSchema = new Schema({
    // Define the fields for the comment schema
    content: { type: String, required: true },
    articleId: { type: Schema.Types.ObjectId, ref: "Article", required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
}, { timestamps: true });

// Apply the toJSON plugin to the comment schema
commentSchema.plugin(toJSON);

// Create the comment model
export  const CommentModel = model("Comment", commentSchema);