import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from 'js-cookie';
import { Post } from "@/types";

interface PostInput {
    id: number;
    body: FormData
}

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

export const editPost = createAsyncThunk<PostOutput, PostInput>(
    "Post/edit",
    async (payload, { rejectWithValue }) => {
        try {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_LINK}/post/${payload.id}`, payload.body, {
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

export const editPost_slice = createSlice({
    name: "Post/edit",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(editPost.pending, (state) => {
                state.loading = true;
                state.data = null;
                state.error = false;
            })
            .addCase(editPost.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = false;
            })
            .addCase(editPost.rejected, (state, action) => {
                const payload = action.payload as PostOutput;
                state.loading = false;
                state.data = payload;
                state.error = true;
            });
    },
});

export default editPost_slice.reducer;
