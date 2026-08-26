import { UserModel } from "../models/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"


//# ======================== SignUp User or Create User =========================
export const signup = async (req, res) => {
    try {
        const {firstName, lastName, email, password, confirmPassword} = req.body;
        
        //# Field validation
        if(!firstName || !lastName || !email || !password || !confirmPassword){
            return res.status(400).json(
                {
                    success: false,
                    title: "Signup Failed",
                    message: "All field are required",
                    reason: "One or more fields are empty"
                }
            )
        }

        //# Check Password confirmation
        if(password !== confirmPassword){
            return res.status(400).json(
                {
                    success: false,
                    title: "Password Error",
                    message: "Password does not match",
                    reason: "Please match your password"
                }
            )
        }

        //# Check if email(user) is already exist
        const existingUser = await UserModel.findOne({email});
        
        if(existingUser){
            return res.status(409).json(
                {
                    success: false,
                    title: "Account already exist",
                    message: "User already exist, Please Login!",
                    reason: "Please login or use another email address."
                }
            )
        }

        //# Hash Password
        const salt = await bcrypt.genSalt(+process.env.SALT_ROUND);
        const hashedPassword = await bcrypt.hash(password, salt);

        //# Create user
        const userCreated = await UserModel.create(
            {
                firstName,
                lastName,
                email,
                password: hashedPassword
            }
        )

        //# Remove password from response
        const userResponse = userCreated.toObject();
        delete userResponse.password;
        
        //# Send response
        return res.status(201).json(
            {
                success: true,
                title: "Welcome to Finance Management",
                message: "Your account has been created successfully.",
                description: "You can now log in and start using Finance Management.",
                reason: "Your account is ready to use.",
                user: userResponse
            }
        ) 

    } catch (error) {
        console.error("Signup Error:", error);

        //# Check Mongoose validation error
        if(error.name === "ValidationError"){
            return res.status(400).json(
                {
                    success: false,
                    title: "Validation Error",
                    message: "Please check your inputs.",
                    reason: Object.values(error.errors).map((e) => e.message).join(", ")
                }
            )
        }

        //# Generic server error
        return res.status(500).json(
            {
                success: false,
                title: "Something Went Wrong❌",
                message: "An unexpected error occurred during signup.",
                reason: process.env.NODE_ENV === "development" ? error.message : "Please try again in few moments."
            }
        ) 

    }
}



//# =========================== Login User ===============================
export const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        //# Field validation
        if(!email || !password){
            return res.status(400).json(
                {
                    success: false,
                    title: "Login Failed",
                    message: "Email and Password are required.",
                    reason: "One or more fields are empty."
                }
            )
        }

        //# Find user
        const user = await UserModel.findOne({email});
        
        if(!user){
            return res.status(400).json(
                {
                    success: false,
                    title: "User not found",
                    message: "No account was found with this email.",
                    reason: "Check the email or create new account."
                }
            )
        }

        //# Compare password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid){
            return res.status(401).json(
                {
                    success: false,
                    title: "Login Failed",
                    message: "Incorrect Password",
                    reason: "The password you entered is incorrect."
                }
            )
        }

        //# Generate JWT
        const token = jwt.sign(
            {
                userId: user._id,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        //# Store JWT in cookie
        res.cookie("token", token, {
            httpOnly: false,
            secure: false,
            sameSite: "Lax",
            maxAge: 24 * 60 * 60 * 1000
        });

        //# Remove password from response
        const userResponse = user.toObject();
        delete userResponse.password;
        
        //# Send Resonse
        return res.status(200).json(
            {
                success: true,
                title: "Welcome Back!",
                message: "Login successful.",
                description: "Redirecting you to your home...",
                reason: "You have been successfully authenticated.",
                user: userResponse
            }
        ) 

    } catch (error) {
        console.error("Login Error:", error);

        //# Check if it's a MongoDB connection error
        if (error.name === "MongooseError" || error.message.includes("connect")) {
          return res.status(500).json({
            success: false,
            title: "Database Connection Error",
            message: "Unable to connect to the database.",
            reason:
              "The server encountered a database issue. Please try again in a moment.",
          });
        }

        //# Check if it's a JWT error
        if (error.name === "JsonWebTokenError") {
          return res.status(500).json({
            success: false,
            title: "Authentication Error",
            message: "Failed to generate authentication token.",
            reason: "Please try logging in again.",
          });
        }

        //# Generic server error
        return res.status(500).json({
          success: false,
          title: "Something Went Wrong",
          message: "An unexpected error occurred during login.",
          reason:
            process.env.NODE_ENV === "development"
              ? error.message
              : "Please try again in a few moments.",
        });
    }
}