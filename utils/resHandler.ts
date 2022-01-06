import { NextApiRequest, NextApiResponse } from "next";

const __success = (
    res: NextApiResponse,
    data: any,
    message: string = "Successfully fetched"
) => {
    res.status(200).json({ message, data, success: true });
};
const __error = (res: NextApiResponse, err: Error, status: number = 400) => {
    res.status(status).json({ message: err.message, success: false });
};

export { __success, __error };
