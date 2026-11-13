import { UserModel } from "../models/User.model";

export const auth = (req, res, next) => {
    try {

        //# Getting token from cookie 
        const token = req.cookies.token;

        //# Checking token availability 
        if (!token) {
            return res.status(401).json(
                {
                    success: false,
                    msg: "Authentication Required!"
                }
            )
        }

        jwt.verify(token, process.env.JWT_SECRET, async (err, decode) => {
            if (err) {
                return res.status(401).json(
                    {
                        success: false,
                        msg: "Invalid or Expire token"
                    }
                )
            }

            //# Finding usre in database
            const user = await UserModel.findById(decode.userId).select("_password");

            //# Checking user availability
            if (!user) {
                return res.status(401).json(
                    {
                        success: false,
                        msg: "User not find. Please login again."
                    }
                )
            }


            //# Attaching user to request 
            req.user = user

            //# Proceed to next middleware/controller 
            next();
        })

    } catch (error) {
        console.log("Auth Middleware Error", error);

        return res.status(500).json(
            {
                success: false,
                msg: "Internal server error"
            }
        )
    }
}