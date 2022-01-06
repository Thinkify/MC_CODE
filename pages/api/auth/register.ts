import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../utils/dbConnect";
import { __success, __error } from "../../../utils/resHandler";
import User from "../../../models/user.model";
import { verify } from "../../../utils/verifyField";
import { generatePassword } from "../../../utils/passwordVerify";

connectDB();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    switch (req.method) {
        case "POST":
            await Register(req, res);
    }
}

const Register = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { email, password, confirmPassword, name, role } = req.body;

        const valid = verify({ email, password, confirmPassword, name });
        if (valid) throw new Error(valid);

        const hashPassword = await generatePassword(password);
        console.log("password",hashPassword)
        const newUser = new User({
            name,
            email,
            password: hashPassword,
            role,
        });
        await newUser.save();
        __success(res, {}, "User registered SuccessFully");
    } catch (error) {
        __error(res, error);
    }
};
