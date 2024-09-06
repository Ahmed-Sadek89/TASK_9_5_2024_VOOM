import React, { Suspense } from 'react'
import DropDown from './DropDown'

const Header = () => {
    return (
        <header className='bg-custom-green py-3 text-white'>
            <div className="custom-container">
                <div className="flex w-full items-center justify-between">
                    <h2>Voom Posts</h2>
                    <div className='flex items-center gap-5'>
                        <Suspense fallback={<h1>loading...</h1>}>
                            <DropDown />
                        </Suspense>
                        <button className='rounded text-white bg-red-700 p-2 text-sm transition duration-300 hover:bg-red-600'>Logout</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
