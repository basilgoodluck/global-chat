import { Request, Response, NextFunction } from "express";
import { Register } from "@/services";

const RegisterUser = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try{
        console.log(req.body)
        const { username, email, password } = req.body;
        if(!username || !email || !password){
            return res.status(401).json({ message: "Invalid data" })
        }
        await Register({ username, email, password })
        return res.status(201).json({ message: "User registered successfully" })
    }
    catch(err){
        next(err)
    }
}

export default RegisterUser