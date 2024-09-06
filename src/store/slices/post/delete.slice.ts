
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';
import { revalidatePath } from 'next/cache';

interface postId {
    id: number
}

interface PostOutput {
    status: number,
    message: string
}

interface State {
    loading: boolean;
    data: null | PostOutput;
    error: boolean;
}

const initialState: State = {
    data: null,
    loading: false,
    error: false
}

export const deletePost = createAsyncThunk<PostOutput, postId>(
    'post/deleteById',
    async (paylaod, { rejectWithValue }) => {
        try {
            const res = await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_LINK}/post/${paylaod.id}`, {
                headers: {
                    "Authorization": Cookies.get("token"),
                }
            })
            return res.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const deletePost_slice = createSlice({
    name: 'post/deleteById',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(deletePost.pending, (state) => {
                state.loading = true;
                state.data = null;
                state.error = false;
            })
            .addCase(deletePost.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.data = payload;
                state.error = false;
                
            })
            .addCase(deletePost.rejected, (state, action) => {
                let payload = action.payload as PostOutput
                state.loading = false;
                state.data = payload
                state.error = true;
            })
    }
})

export default deletePost_slice.reducer