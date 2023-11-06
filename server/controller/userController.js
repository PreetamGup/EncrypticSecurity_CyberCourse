import UserModel from "../model/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


export const loginController = async(req, res)=>{

    try {
        const {email, password}= req.body;

        if(!email || !password){
            return res.status(200).json({
                message:"Credential Required",
                success:false,
            })
        }
      
        const user= await UserModel.findOne({email});

        if (!user){
            return res.status(200).json({
                message:"User not Exist",
                success:false
            })
        }

        
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
        return res.status(200).json({
            message: "Invalid Email or Password",
            success: false,
        });
        }

        user.password= undefined;

        const accessToken = jwt.sign({ id: user._id, user  }, process.env.ACCESS_JWT_SECRET, {
            expiresIn: "15d",
        });

        const refreshToken = jwt.sign({ id: user._id}, process.env.REFRESH_JWT_SECRET, {
          expiresIn: "30d",
      });

      

        res.cookie("refresh_token", refreshToken, {
          // maxAge:24 * 60 * 60 * 1000,
          httpOnly: true,
          sameSite: "none",
          secure: true,
        })

        res.cookie("access_token", accessToken, {
            // maxAge:24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: "none",
            secure: true,
          }).status(200).send({
            message: "Login Success",
            success: true,
            accessToken,
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
          message: `Error in LonginController ${error.message}`,
        });
    }
}



export const registerController = async (req, res) => {
    try {
      const user = await UserModel.findOne({ email: req.body.email });
      if (user) {
        return res.status(200).json({
          message: "User already exists",
          success: false,
        });
      }
      
      const password = req.body.password;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      req.body.password = hashedPassword;
      
      const newUser = new UserModel(req.body);
      await newUser.save();
      
      
      res.status(201).json({
        message: "Registered Successfully",
        success: true,
      });

    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: `register Controller ${error.message}`,
      });
    }
  };



export const logoutController = async (req, res)=>{
  res.clearCookie("access_token");
  res.clearCookie("refresh_token");

  res.status(200).json({ message: "Successfully logged out", success:true });
    
}