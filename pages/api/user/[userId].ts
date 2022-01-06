import { NextApiRequest, NextApiResponse } from "next";
import User from "../../../models/user.model";
import connectDB from "../../../utils/dbConnect";
import { __error, __success } from "../../../utils/resHandler";

connectDB();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    switch (req.method) {
        case "GET":
            await getUserById(req, res);
            break;
        case "UPDATE":
            await updateUserById(req, res);
            break;
        case "DELETE":
            await deleteUserById(req, res);
            break;
    }
}

const getUserById = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { userId } = req.query;
        const user = await User.findById(userId);
        if (!user) throw new Error("user not found");
        __success(res, user, "User fetched successfully");
    } catch (error) {
        __error(res, error);
    }
};

const updateUserById = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
    } catch (error) {}
};

const deleteUserById = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { userId } = req.query;
        const user = await User.findByIdAndDelete(userId);
        if (!user) throw new Error("User not found");
        __success(res, user, "User deleted");
    } catch (error) {
        __error(res, error);
    }
};
