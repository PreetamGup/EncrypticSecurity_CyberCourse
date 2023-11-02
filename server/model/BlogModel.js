import mongoose from "mongoose";

const BlogSchema= mongoose.Schema({
    title:{
        type:String,
        required:[true, "Blog Title Required"]
    },

    createdBy:{
        type:String,
        required:[true, "Creator Name Required"]
    },

    createdAt:{
        type:Date,
        default:Date.now
    },

    description:{
        type:String,
        required:[true, "Description Required"]
    },

    content:{
        type:String,
        required:[true, "Blog Content is required"]
    }
})


const BlogModel= mongoose.model("Blogs",BlogSchema);

export default BlogModel;