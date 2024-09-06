import { Category } from '@/mock/categories'
import React from 'react'

type props = {
    defaultValue?: string
}
const FieldSetInput = ({ defaultValue }: props) => {
    return (
        <fieldset className='text-custom-white'>
            <div className="relative bg-transparent border border-custom-green rounded-md text-white overflow-hidden">
                <label htmlFor="frm-whatever" className="sr-only ">Category</label>
                <select className="appearance-none w-full py-1 px-2 bg-transparent border text-white border-custom-green rounded-md" name="category" id="frm-whatever" defaultValue={defaultValue}>
                    <option className='text-custom-black' value="" >Please choose one</option>
                    {
                        Category.map(index => (
                            <option key={index} className='text-custom-black' value={index}>{index}</option>
                        ))
                    }
                </select>
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-white">
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </div>
            </div>
        </fieldset>
    )
}

export default FieldSetInput
