import { configureStore } from '@reduxjs/toolkit';
import registerUser_slice from './slices/user/register.slice';
import loginUser_slice from './slices/user/login.slice';
import all_slice from './slices/post/all.slice';
import createPost_slice from './slices/post/create.slice';
import deletePost_slice from './slices/post/delete.slice';
import getById_slice from './slices/post/getById.slice';
import editPost_slice from './slices/post/edit_slice';

export const store = configureStore({
    reducer: {
        register_reducer: registerUser_slice,
        login_reducer: loginUser_slice,

        postAll_reducer: all_slice,
        postCreate_reducer: createPost_slice,
        deletePost_reducer: deletePost_slice,
        getById_reducer: getById_slice,
        editById_reducer: editPost_slice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
