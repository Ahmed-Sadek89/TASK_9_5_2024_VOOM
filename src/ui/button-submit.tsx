"use client"
import React from 'react'
import { useFormStatus } from 'react-dom'

type props = {
    btnValue: string,
}
const ButtonSubmit = ({ btnValue }: props) => {
    const status = useFormStatus();

    return (
        <input
            disabled={status.pending}
            className='w-full bg-custom-green rounded-xl py-2 text-white cursor-pointer transition duration-300 hover:bg-custom-green2 disabled:bg-custom-green2 disabled:cursor-not-allowed'
            type="submit"
            value={btnValue}
        />
    )
}

export default ButtonSubmit