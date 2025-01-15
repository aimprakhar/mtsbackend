import { text } from "express";
import mongoose from "mongoose";
const { Schema } = mongoose;


const qualitySchema = {
    type: Map,
    of: String, // values will be strings like "high", "medium", "low"
};
const PersonSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,  // Ensure the name is provided
            unique: true,    // Ensure unique names (optional)
        },
        qualities: qualitySchema,
    }
);

export default mongoose.model("Person", PersonSchema)
