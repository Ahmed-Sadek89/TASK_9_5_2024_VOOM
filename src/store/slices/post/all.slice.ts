import { Post } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from 'js-cookie';

interface PostInput {
    page: string;
    sort_by: string;
}


interface PostOutput {
    status: number,
    message?: string,
    count?: number,
    posts?: Post[]
}

interface state {
    loading: boolean,
    data: null | PostOutput,
    error: boolean
}

const initialState: state = {
    loading: false,
    data: null,
    error: false
}

export const all = createAsyncThunk<PostOutput, PostInput>(
    "Post/all",
    async ({ page, sort_by }, { rejectWithValue }) => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_LINK}/post/all?page=${page ? page : 1}&sort_by=${sort_by}`, {
                headers: {
                    "Authorization": Cookies.get("token")
                }
            })
            return res.data
        } catch (error: any) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const all_slice = createSlice({
    name: "Post/all",
    initialState,
    reducers: {},
    extraReducers: (bulider) => {
        bulider
            .addCase(all.pending, (state) => {
                state.loading = true;
                state.data = null;
                state.error = false;
            })
            .addCase(all.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = false;
            })
            .addCase(all.rejected, (state, action) => {
                const payload = action.payload as PostOutput
                state.loading = false;
                state.data = payload;
                state.error = true;
            })
    }
})

export default all_slice.reducer