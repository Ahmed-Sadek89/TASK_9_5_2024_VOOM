import React from 'react'

type props = {
    defaultValue?: string,
    type: string,
    name: string,
    placeholder: string
}

const FormInput = ({ defaultValue, type, name, placeholder }: props) => {
    return (
        <input
            required
            className='w-full bg-transparent border border-custom-green rounded-md px-2 text-sm py-1 text-white'
            type={type}
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
        />
    )
}

export default FormInput
