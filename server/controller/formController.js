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