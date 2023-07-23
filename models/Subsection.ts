import mongoose from "mongoose";

const SubSectionSchema = new mongoose.Schema({
	title: { type: String },
	timeDuration: { type: String },
	description: { type: String },
	videoUrl: { type: String },
});

const subSection = mongoose.model("SubSection", SubSectionSchema);
export default subSection;