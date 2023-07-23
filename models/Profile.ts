import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({

    gender: {
        type: String
    },

    about:{
        type: String,
        trim: true
    },

    constactNumber:{
        type: String,
        trim: true
    },
    dateOfBirth: {
        type: String
    }


})

const Profile = mongoose.model("Profile", ProfileSchema)
export default Profile;