import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../utils/dbConnect";
import Product from "../../../models/product.model";

connectDB();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    switch (req.method) {
        case "POST":
            await addProduct(req, res);
            break;
        case "GET":
            await getProduct(req, res);
            break;
    }
}

const addProduct = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const {} = req.query;
        const newProduct = new Product({});
    } catch (error) {}
};

const getProduct = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
    } catch (error) {}
};
