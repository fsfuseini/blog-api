import { Schema, model } from "mongoose";
import {toJSON} from "@reis/mongoose-to-json";

// Define the user schema
const userSchema = new Schema({
    // Define the fields for the user schema
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
}, { timestamps: true });

// Apply the toJSON plugin to the user schema
userSchema.plugin(toJSON);

// Create the user model
export const UserModel = model("User", userSchema);