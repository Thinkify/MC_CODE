import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
        address: String,
        mobile: String,
        cart: Array,
        total: Number,
        paymentId: String,
        method: String,
        delivered: {
            type: Boolean,
            default: false,
        },
        paid: {
            type: Boolean,
            default: false,
        },
        dateOfPayment: Date,
    },
    {
        timestamps: true,
    }
);
const dataSet = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default dataSet;
