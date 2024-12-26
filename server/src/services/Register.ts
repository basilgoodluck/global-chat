import { User } from "@/models";
import bcrypt from "bcryptjs"

const Register = async (data?: any): Promise<void> => {
    const { username, email, password } = data;
    const existinguser = await User.findOne({ email, username });
    if(existinguser){
        throw new Error("User exists")
    }

    const hashedpass = await bcrypt.hash(password, 10);
    const newuser = new User({
        username,
        email,
        password: hashedpass
    })
    await newuser.save()
}

export default Register