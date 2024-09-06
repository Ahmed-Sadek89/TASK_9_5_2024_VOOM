"use client"
import { loginUser } from '@/store/slices/user/login.slice'
import { AppDispatch, RootState } from '@/store/store'
import ButtonSubmit from '@/ui/button-submit'
import FormInput from '@/ui/form-input'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data, error } = useSelector((state: RootState) => state.login_reducer);
    const handleSubmit = async (formData: FormData) => {
        const email = formData.get("email") as string
        const password = formData.get("password") as string

        await dispatch(loginUser({ email, password }))
            .then(async (res: any) => {
                if (res.payload.status === 200) {
                    window.location.href = '/';
                }
            })
    }
    return (
        <form className="flex flex-col gap-y-8" action={handleSubmit}>
            <FormInput type="email" name="email" placeholder="Email address" />
            <FormInput type="password" name="password" placeholder="Password" />
            {error && <p className="text-xs text-red-400 text-center">{data?.message}</p>}
            <ButtonSubmit btnValue='Login' colors="bg-green-800 hover:bg-green-700 disabled:bg-custom-green2"/>
        </form>
    )
}

export default Login
