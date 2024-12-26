import { User, RefreshToken } from "@/models";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs";
import { JWT_ACCESS_TOKEN } from "@/config";
import { JWT_REFRESH_TOKEN } from "@/config";

const Login = async (data: any): Promise<any> => {
    const { userTracker, password } = data;
    const user = await User.findOne({ 
        $or: [{ email: userTracker }, { username: userTracker }]
    });

    if(!user){
        throw new Error("Email does not exist")        
    }
    
    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword){
        throw new Error(`Invalid password or email`)
    }

    const accessToken = jwt.sign(
        { userId: user._id },
        JWT_ACCESS_TOKEN,
        { subject: "Access API", expiresIn: "1h" }
    );
  
    const refreshToken = jwt.sign(
        { userId: user._id },
        JWT_REFRESH_TOKEN,
        { subject: "Refresh token", expiresIn: "1d" }
    );

    const prevRefreshToken = await RefreshToken.findOne({ userId: user._id });
    if(prevRefreshToken){
        await prevRefreshToken.deleteOne();
    }

    const newRefreshToken = new RefreshToken({
        refreshToken, 
        userId: user._id 
    });
    await newRefreshToken.save();

    return {
        accessToken,
        refreshToken, 
        email: user.email,
        username: user.username,
        isOnline: user.isOnline,        
    }
}

export default Login