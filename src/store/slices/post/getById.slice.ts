
import { Post } from '@/types';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

interface postId {
    id: number
}

interface PostOutput {
    status: number,
    message?: string
    post: Post
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

export const getById = createAsyncThunk<PostOutput, postId>(
    'post/getById',
    async (paylaod, { rejectWithValue }) => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_LINK}/post/${paylaod.id}`, {
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

export const getById_slice = createSlice({
    name: 'post/getById',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getById.pending, (state) => {
                state.loading = true;
                state.data = null;
                state.error = false;
            })
            .addCase(getById.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.data = payload;
                state.error = false;

            })
            .addCase(getById.rejected, (state, action) => {
                let payload = action.payload as PostOutput
                state.loading = false;
                state.data = payload
                state.error = true;
            })
    }
})

export default getById_slice.reducer