
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import OTP from "../models/OTP.js";
import jwt from "jsonwebtoken";
import otpGenerator from "otp-generator";
import { mailData } from "../mail/data.js";
dotenv.config();

export const login = async (req, res) => {
  try {
    // get data from request body
    const { id, email, role } = req.body;
    // console.log("Role in login func",role);
    // console.log("email in login func",email);
    // console.log("id in login func",id);
    // validation
    if (!email || !id || !role) {
      return res.status(400).json({
        success: false,
        message: "All fields are required, please try again.",
      });
    }

    // Check if user is authorized
    const checkUserPresent = mailData.includes(email);
    
    if (!checkUserPresent) {
      return res.status(401).json({
        success: false,
        message: "User not authorized",
      });
    }

    // Find user in database or create if doesn't exist
    let user = await User.findOne({ email });
    
    if (!user) {
      // Create new user if doesn't exist
      user = await User.create({
        id,
        email,
        accountType: role, // default type
        image: `https://api.dicebear.com/5.x/initials/svg?seed=${email}`,
      });
    }

    // Create JWT token
    const payload = {
      email: user.email,
      id: user._id,
      accountType: user.accountType,
    };
    
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    // Remove sensitive data
    user.password = undefined;

    // create cookie and send response
    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    
    res.cookie("token", token, options).status(200).json({
      success: true,
      token,
      user,
      message: "Logged in Successfully.",
    });
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Login Failure, please try again",
    });
  }
};


export const sendOTP = async (req, res) => {
  try {
    const { email } = req.body;
    // console.log("Email in send OTP func",email);
    if (!email) { 
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    // Check if user is authorized (exists in mailData or database)
    const checkUserPresent = mailData.includes(email);
    
    // Also check if user exists in database
    // const existingUser = await User.findOne({ email });

    if (!checkUserPresent) {
      return res.status(401).json({
        success: false,
        message: "User Not Authorized",
      });
    }



    var otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
		

    let result = await OTP.findOne({ otp: otp });

    while (result) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });

      result = await OTP.findOne({ otp: otp });
    }
   
    
		// console.log("Result is Generate OTP Func");
		// console.log("Result", result);

    const otpPayload = { email, otp };

    //create an en entry in db for otp

    const otpBody = await OTP.create(otpPayload);
    // console.log("OTP body:-",otpBody);
    res.status(200).json({
      success: true,
      message: "OTP sent Successfully.",
      otp,
    });
  } catch (error) {
    console.log("Issues Occure in generate Otp");
    console.error(error.message);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
