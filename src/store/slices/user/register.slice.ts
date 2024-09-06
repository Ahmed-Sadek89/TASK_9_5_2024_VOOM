import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface UserBase {
    username: string;
    email: string;
}

interface UserInput extends UserBase {
    password: string;
}

interface User extends UserBase {
    id: number;
}

interface UserOutput {
    status: number,
    users?: User[],
    message?: string
}

interface state {
    loading: boolean,
    data: null | UserOutput,
    error: boolean
}

const initialState: state = {
    loading: false,
    data: null,
    error: false
}

export const registerUser = createAsyncThunk<UserOutput, UserInput>(
    "user/register",
    async (payload, { rejectWithValue }) => {
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_LINK}/user/register`, {
                ...payload
            })
            return res.data
        } catch (error: any) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const registerUser_slice = createSlice({
    name: "user/register",
    initialState,
    reducers: {},
    extraReducers: (bulider) => {
        bulider
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.data = null;
                state.error = false;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = false;
            })
            .addCase(registerUser.rejected, (state, action) => {
                const payload = action.payload as UserOutput
                state.loading = false;
                state.data = payload;
                state.error = true;
            })
    }
})

export default registerUser_slice.reducer