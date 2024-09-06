import React from 'react'

type props = {
    defaultValue?: string
}
const UploadInput = ({ defaultValue }: props) => {
    return (
        <div className="flex items-center">
            <input
                type="file"
                accept='image/*'
                name='image'
                defaultValue={defaultValue}
                className=" p-1 w-full text-slate-500 text-sm rounded-full leading-6 file:bg-violet-200 file:text-violet-700 file:font-semibold file:border-none file:px-4 file:py-1 file:mr-6 file:rounded-full hover:file:bg-violet-100 border border-gray-300"
            />
        </div>
    )
}

export default UploadInput
