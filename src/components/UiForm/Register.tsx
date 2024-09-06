"use client"
import { registerUser } from "@/store/slices/user/register.slice"
import { AppDispatch, RootState } from "@/store/store"
import ButtonSubmit from "@/ui/button-submit"
import FormInput from "@/ui/form-input"
import { useRouter } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"

const Register = () => {
    const router = useRouter()
    const dispatch = useDispatch<AppDispatch>();
    const { data, error } = useSelector((state: RootState) => state.register_reducer);

    const handleSubmit = async (formData: FormData) => {
        const username = formData.get("username") as string
        const email = formData.get("email") as string
        const password = formData.get("password") as string

        await dispatch(registerUser({ username, email, password }))
            .then((res: any) => {
                if (res.payload.status === 201) {
                    router.push('/login')
                }
            })
    }
    return (
        <form className="flex flex-col gap-y-8" action={handleSubmit}>
            <FormInput type="text" name="username" placeholder="Username" />
            <FormInput type="email" name="email" placeholder="Email address" />
            <FormInput type="password" name="password" placeholder="Password" />
            {error && <p className="text-xs text-red-400 text-center">{data?.message}</p>}
            <ButtonSubmit btnValue='Sign up' colors="bg-green-800 hover:bg-green-700 disabled:bg-custom-green2"/>
        </form>
    )
}

export default Register
