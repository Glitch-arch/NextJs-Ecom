import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({

    courseName:{
        type: String,
    },

    courseDescription:{type: String},
    instructor:{ type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    whatYouWillLearn:{type: String},
    courseContent: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Section"
    }],
    ratingAndReviews:[{
        type: mongoose.Schema.Types.ObjectId,  // Gonna track the id of the related object 
        ref: "RatingAndReview" // The model we are referring too
    }],
    price: {type: Number},
    thumbnail: {type: String},
    tag: {
        type: [String],
        required: true,
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    },
    studentEnroled:[{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }],
    instructions: {
        type: [String],
      },
      status: {
        type: String,
        enum: ["Draft", "Published"],
      },
      createdAt: { type: Date, default: Date.now },

})

const Course = mongoose.model("Course", courseSchema);
export default Course;