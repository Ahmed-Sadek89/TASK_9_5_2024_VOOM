"use client"
import React from 'react'
import { useFormStatus } from 'react-dom'

type props = {
    btnValue: string,
    colors: string
}
const ButtonSubmit = ({ btnValue, colors }: props) => {
    const status = useFormStatus();

    return (
        <input
            disabled={status.pending}
            className={`w-full rounded-xl py-2 text-white cursor-pointer transition duration-300 hover:bg-custom-green2 disabled:cursor-not-allowed ${colors}`}
            type="submit"
            value={btnValue}
        />
    )
}

export default ButtonSubmit