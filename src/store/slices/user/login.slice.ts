import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from 'js-cookie';

interface UserInput {
    email: string;
    password: string;
}


interface UserOutput {
    status: number,
    message: string,
    token?: string
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

export const loginUser = createAsyncThunk<UserOutput, UserInput>(
    "user/login",
    async (payload, { rejectWithValue }) => {
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_LINK}/user/login`, {
                ...payload
            })
            Cookies.set('token', res.data.token)
            return res.data
        } catch (error: any) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const loginUser_slice = createSlice({
    name: "user/login",
    initialState,
    reducers: {},
    extraReducers: (bulider) => {
        bulider
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.data = null;
                state.error = false;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = false;
            })
            .addCase(loginUser.rejected, (state, action) => {
                const payload = action.payload as UserOutput
                state.loading = false;
                state.data = payload;
                state.error = true;
            })
    }
})

export default loginUser_slice.reducer