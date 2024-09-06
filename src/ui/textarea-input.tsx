import React from 'react'

type props = {
    defaultValue?: string,
    name: string,
    placeholder: string
}

const TextAreaInput = ({ defaultValue, name, placeholder }: props) => {
    return (
        <textarea
            required
            className='w-full h-[20vh] bg-transparent border border-custom-green rounded-md px-2 text-sm py-1 text-white'
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
        />

    )
}

export default TextAreaInput
