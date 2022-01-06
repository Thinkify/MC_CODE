import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Status } from "../constant";

export const add = createAsyncThunk(
    "product/add",
    async (payload, thunkApi) => {}
);

export const getAll = createAsyncThunk(
    "product/all",
    async (payload, thunkApi) => {}
);

const product = createSlice({
    name: "product",
    initialState: {
        productList: [],
        status: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(add.pending, (state) => {
            state.status = Status.PENDING;
        });
        builder.addCase(add.fulfilled, (state) => {
            state.status = Status.FULFILLED;
        });
        builder.addCase(add.rejected, (state) => {
            state.status = Status.REJECTED;
        });
    },
});
