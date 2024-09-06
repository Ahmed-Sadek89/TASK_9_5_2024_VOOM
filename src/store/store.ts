import { configureStore } from '@reduxjs/toolkit';
import registerUser_slice from './slices/user/register.slice';
import loginUser_slice from './slices/user/login.slice';
import all_slice from './slices/post/all.slice';

export const store = configureStore({
    reducer: {
        register_reducer: registerUser_slice,
        login_reducer: loginUser_slice,

        postAll_reducer: all_slice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
