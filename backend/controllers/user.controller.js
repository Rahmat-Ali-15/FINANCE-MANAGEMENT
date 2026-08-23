import { UserModel } from "../models/User.model.js";
import bcrypt from "bcrypt";


//# Create User
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