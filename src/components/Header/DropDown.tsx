"use client"
import { post_attributes } from '@/mock/post_attributes'
import Link from 'next/link'
import { useSearchParams } from "next/navigation";
import React from 'react'

const DropDown = () => {
    const searchParam = useSearchParams()
    const linkStyle = `hover:bg-custom-black py-2 px-4 block whitespace-no-wrap transition duration-300`;

    return (
        <div className="dropdown inline-block relative">
            <button className="bg-custom-black text-white text-sm p-2 rounded flex gap-2 items-center">
                <span>Sort by</span>
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
            </button>
            <div className="dropdown-menu absolute hidden pt-1 text-xs capitalize font-semibold">
                <Link
                    className={`rounded-t ${linkStyle} ${searchParam.get("sort_by") === null ? "bg-custom-black" : "bg-custom-green2"}`}
                    href={{
                        pathname: '/',
                    }}
                >
                    None
                </Link>
                {
                    post_attributes.map((key, index) => (
                        <Link
                            key={index}
                            className={`${index === post_attributes.length - 1 && "rounded-b"} ${linkStyle} ${searchParam.get("sort_by") === key ? "bg-custom-black" : "bg-custom-green2"}`}
                            href={{
                                pathname: '/',
                                query: { sort_by: key },
                            }}
                        >
                            {key}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default DropDown
