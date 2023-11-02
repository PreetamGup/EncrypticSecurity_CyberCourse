import BlogModel from "../model/BlogModel.js"; 

export const blogFormController=async(req, res)=>{
   
    try {
        const {title, createdBy, createdAt, content, description}= req.body;

        const newBlog= new BlogModel({title, createdAt, createdBy, content, description});
        await newBlog.save();

        res.status(200).json({
            message:"Blog Created",
            success: true
        })

    } catch (error) {
        
        res.send(error)
    }

}


export const allBlogsController= async(req, res)=>{

    try{
        const allBlogs = await BlogModel.find({});
        res.status(200).json({
            allBlogs,
            message:"All Blogs fetched",
            success:true
        })
    }
    catch(error){
        res.send(error)
    }

}