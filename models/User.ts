import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName:{
    type: String,
    required: true,
    trim: true
  },

  lastName:{
    type: String,
    required: true,
    trim: true
  },

  email:{
    type: String,
    required: true,
    trim: true
  },

  password:{
    type: String,
    required: true,
  },

  accountType:{
    type: String,
    enum: ["Admin", "Student", "Instructor"],
    required: true,
  },

  active:{
    type: Boolean,
    default: true
  },
  approved:{
    type: Boolean,
    default: true
  },

  additionalDetails:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref:"Profile",
  },
  courses:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course"
    }
  ],
  token:{
    type: String,
  },
  resetPasswordExpires:{
    type:Date,
  },

  image:{
    type: String,
  },
  courseProgress:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "courseProgress"
    }
  ]
},
// Marks the time when the doc is created and updated
{
  timestamps: true,
}
);

const User = mongoose.model("User", userSchema);
export default User;
