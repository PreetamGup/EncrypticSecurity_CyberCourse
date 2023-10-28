import mongoose from "mongoose";

const UserSchema= mongoose.Schema({
  name:{
    type:String,
    required:[true, "Full Name required"],
  },

  email:{
    type:String,
    required:[true, "Email required"],
  },
  password:{
    type:String,
    required:[true, "Password required"],
  },
  role:{
    type:String,
    enum:['Admin', 'Moderator', 'User'],
    default:"User"
  }
})

const UserModel= mongoose.model("Users",UserSchema);

export default UserModel;