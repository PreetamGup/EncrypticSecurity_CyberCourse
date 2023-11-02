import FormModel from "../model/FormModel.js"



export const feedbackformController=async(req, res)=>{
    try {
        const newForm= new FormModel(req.body);
        await newForm.save();

        res.status(201).json({
            message:"Feedback Submited",
            success:true
        })

    } catch (error) {
        console.log(error)
        res.json({
            message:`${error.mesage}`,
            success:false
        })
    }
}

export const applyFormController =async(req, res)=>{
    try {
       
        const {phoneNumber} = req.body;
        const Existedform= await FormModel.findOne({phoneNumber})

        if(Existedform){
            return res.status(200).json({
                message:"phone Number already exist",
                success:true
            })
        }

        const newForm= new FormModel(req.body);
        await newForm.save();

        res.status(201).json({
            message:"Form Submited",
            success:true
        })

    } catch (error) {
        console.log(error)
        res.json({
            message:`${error.mesage}`,
            success:false
        })
    }
    
}

export const applyFormData =async(req,res)=>{

    try {
        const formData = await FormModel.aggregate([{$match:{formName:"ApplyForm"}}, {$sort: {createdAt: -1}}]);
        res.send(formData);
    } catch (error) {
        res.send(error)
    }
}


export const feedbackformData =async(req,res)=>{
    try {
        const formData = await FormModel.aggregate([{$match:{formName:"FeedbackForm"}}, {$sort: {createdAt: -1}}]);
        res.send(formData);
    } catch (error) {
        res.send(error)
    }
}



export const updateFormData = async(req, res)=>{
    
    try {
        const {id}=req.params;
        const {isRead}= req.query;

        await FormModel.updateOne({_id:id},{isRead})
        
        res.status(200).send("Update successfully");

    } catch (error) {
        res.send(error)
    }
}