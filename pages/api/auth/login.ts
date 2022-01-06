import User from "../../../models/user.model";
import connectDB from "../../../utils/dbConnect";
import { NextApiRequest, NextApiResponse } from "next";
import { __error, __success } from "../../../utils/resHandler";
import { verifyPassword } from "../../../utils/passwordVerify";
import { tokenGenerator } from "../../../utils/tokenHelper";

connectDB();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "POST":
            Login(req, res);
    }
}

const Login = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) throw new Error("All fields are required");

        const userExist = await User.findOne({ email });
        if (!userExist) throw new Error("Wrong credentials");

        const verifyPass = await verifyPassword(password, userExist.password);
        if (!verifyPass) throw new Error("Wrong credentials");
        const token = tokenGenerator({ ...userExist._doc });
        __success(res, { token, ...userExist._doc }, "Successfully logged in");
    } catch (error) {
        console.log("error", error);
        __error(res, error, 401);
    }
};
