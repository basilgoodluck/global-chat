import { Request, Response, NextFunction } from "express";
import { Login } from "@/services";
import { error } from "node:console";

const LoginUser = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try{
        const { userTracker, password } = req.body;
        if(!userTracker || !password){
            return res.status(401).json({ message: "Fill in required fields" })
        }
        await Login({ userTracker, password })
        return res.status(200).json({ message: "User logged in successfully" })
    }
    catch(err){
        next(error)
    }
}

export default LoginUser