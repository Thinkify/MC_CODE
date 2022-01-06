import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setToken } from "../../utils/tokenHelper";
import { Status } from "../constant";
export const verifyToken = createAsyncThunk(
    "user/fetchUser",
    async (payload, thunkApi) => {
        try {
            const resposne = await axios.post("/api/auth/accesstoken", {
                token: payload,
            });
            return resposne.data.data;
        } catch (error) {
            console.log(error);
            return thunkApi.rejectWithValue(error);
        }
    }
);

export const login = createAsyncThunk(
    "user/login",
    async (payload, thunkApi) => {
        try {
            const user = await axios.post("api/auth/login", payload);
            setToken(user.data.data.token);
            return user.data.data;
        } catch (error) {
            console.log(error);
            return thunkApi.rejectWithValue(error);
        }
    }
);

export const register = createAsyncThunk(
    "user/register",
    async (payload, thunkApi) => {
        try {
            const user = await axios.post("api/auth/register", payload);
            return user.data.data;
        } catch (error) {
            console.log(error);
            return thunkApi.rejectWithValue(error);
        }
    }
);

export const logout = createAsyncThunk(
    "user/logout",
    async (payload, thunkApi) => {
        try {
            const user = await axios.post("api/auth/logout", {});
            setToken("");
        } catch (error) {
            console.log(error);
            return thunkApi.rejectWithValue(error);
        }
    }
);

export const userSlice = createSlice({
    name: "User",
    initialState: {
        data: {},
        status: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.status = Status.PENDING;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = Status.FULFILLED;
        });
        builder.addCase(login.rejected, (state) => {
            state.status = Status.REJECTED;
        });
        builder.addCase(verifyToken.pending, (state) => {
            state.status = Status.PENDING;
        });
        builder.addCase(verifyToken.fulfilled, (state, action) => {
            state.status = Status.FULFILLED;
            state.data = action.payload;
        });
        builder.addCase(verifyToken.rejected, (state) => {
            state.status = Status.REJECTED;
        });
        builder.addCase(logout.pending, (state) => {
            state.status = Status.PENDING;
        });
        builder.addCase(logout.fulfilled, (state) => {
            state.data = {};
            state.status = Status.FULFILLED;
        });
        builder.addCase(logout.rejected, (state) => {
            state.status = Status.REJECTED;
        });
    },
});

export default userSlice.reducer;
