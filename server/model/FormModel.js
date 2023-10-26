import mongoose from "mongoose";

const FormSchema= mongoose.Schema({
    formName :{
        type:String, 
        required: true,
    },
    firstName: String,
    lastName:String,
    phoneNumber:String,
    email:String,
    name:String,
    branch:{
        type:String,
        enum:["Thane", "Andheri", "Ghatkopar"],
        default:"Thane"
    },
    feedback:String
})

const FormModel= mongoose.model("Forms",FormSchema);

export default FormModel;