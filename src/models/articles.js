import { Schema, model } from "mongoose";
import toJSON from "@reis/mongoose-to-json";

// Define the article schema
const articleSchema = new Schema({
    // Define the fields for the article schema
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    publishedAt: { type: Date, default: new Date() },
}, { timestamps: true });

// Apply the toJSON plugin to the article schema
articleSchema.plugin(toJSON);

// Create the article model
const ArticleModel = model("Article", articleSchema);

export default ArticleModel;