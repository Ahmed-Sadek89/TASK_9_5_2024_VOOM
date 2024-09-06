"use client"
import React, { Suspense } from 'react'
import DropDown from './DropDown'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
    const pathname = usePathname()
    return (
        <header className='bg-custom-green py-3 text-white'>
            <div className="custom-container">
                <div className="flex w-full items-center justify-between flex-wrap gap-y-4">
                    <Link href={'/'}>Voom Posts</Link>
                    <div className='flex items-center gap-x-5 gap-y-2 flex-wrap'>
                        {
                            pathname !== '/add' &&
                            <Link href={'/add'} className='rounded text-white bg-green-700 p-2 text-sm transition duration-300 hover:bg-green-600'>
                                Add new Post +
                            </Link>
                        }
                        {
                            pathname === '/' &&
                            <Suspense fallback={<h1>loading...</h1>}>
                                <DropDown />
                            </Suspense>
                        }
                        <button className='rounded text-white bg-red-700 p-2 text-sm transition duration-300 hover:bg-red-600'>Logout</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
