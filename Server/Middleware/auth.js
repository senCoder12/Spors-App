import jwt from "jsonwebtoken";
import userModel from "../Models/user.model.js"

const secret_key = process.env.JWT_SECRET_KEY;
export const auth = async(req,res,next)=> {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        let decodedData = jwt.verify(token,secret_key);
        req.userId = decodedData?.id;
        next();
    } catch (error) {
        console.log(error);
    }
}