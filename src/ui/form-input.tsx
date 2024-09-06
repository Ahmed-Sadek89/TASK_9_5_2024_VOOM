import React from 'react'

type props = {
    type: string,
    name: string,
    placeholder: string
}

const FormInput = ({ type, name, placeholder }: props) => {
    return (
        <input
            required
            className='w-full bg-transparent border border-custom-green rounded-md px-2 text-sm py-1 text-white'
            type={type}
            name={name}
            placeholder={placeholder}
        />
    )
}

export default FormInput
