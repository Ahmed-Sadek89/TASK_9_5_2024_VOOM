import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from 'js-cookie';
import { Post } from "@/types";

interface PostOutput {
    status: number;
    Posts?: Post[];
    message: string;
}

interface State {
    loading: boolean;
    data: null | PostOutput;
    error: boolean;
}

const initialState: State = {
    loading: false,
    data: null,
    error: false,
};

export const createPost = createAsyncThunk<PostOutput, FormData>(
    "Post/create",
    async (payload, { rejectWithValue }) => {
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_LINK}/post`, payload, {
                headers: {
                    "Authorization": Cookies.get("token"),
                },
            });
            return res.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const createPost_slice = createSlice({
    name: "Post/create",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createPost.pending, (state) => {
                state.loading = true;
                state.data = null;
                state.error = false;
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = false;
            })
            .addCase(createPost.rejected, (state, action) => {
                const payload = action.payload as PostOutput;
                state.loading = false;
                state.data = payload;
                state.error = true;
            });
    },
});

export default createPost_slice.reducer;
