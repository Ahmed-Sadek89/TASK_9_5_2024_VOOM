"use client"
import React, { useState } from 'react'
import { posts } from '@/mock/posts'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const Pagination = () => {
    const postsPerPage = 5
    const totalPages = Math.ceil(posts.length / postsPerPage)
    const [currentPage, setCurrentPage] = useState(1)

    // Get the posts for the current page


    // Handle page change
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }
    const searchParam = useSearchParams();
    return (
        <div className="container mx-auto px-4">

            {
                totalPages > 1 && (
                    <nav className="flex flex-row flex-nowrap justify-between md:justify-center items-center" aria-label="Pagination">
                        {/* Previous Page Link */}
                        <Link
                            className={`flex w-10 h-10 mr-1 justify-center items-center rounded-full bg-custom-black text-white ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}
                            href={{
                                pathname: '/',
                                query: { page: currentPage === 1 ? "1" : currentPage - 1, sort_by: searchParam.get("sort_by") || "" }
                            }}
                            title="Previous Page"
                            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                        >
                            <span className="sr-only">Previous Page</span>
                            <svg className="block w-4 h-4 fill-current" viewBox="0 0 256 512" aria-hidden="true" role="presentation">
                                <path d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path>
                            </svg>
                        </Link>

                        {/* Page Numbers */}
                        {[...Array(totalPages)].map((_, index) => (
                            <Link
                                key={index}
                                className={`hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full ${currentPage === index + 1 ? 'bg-custom-white text-custom-black' : 'bg-custom-black text-white'}`}
                                href={{
                                    pathname: '/',
                                    query: { page: index + 1, sort_by: searchParam.get("sort_by") || "" }
                                }}
                                title={`Page ${index + 1}`}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </Link>
                        ))}

                        {/* Next Page Link */}
                        {

                        }
                        <Link
                            className={`flex w-10 h-10 ml-1 justify-center items-center rounded-full bg-custom-black text-white ${currentPage === totalPages && 'opacity-50 cursor-not-allowed'}`}
                            href={{
                                pathname: '/',
                                query: { page: currentPage === totalPages ? searchParam.get("page") : currentPage + 1, sort_by: searchParam.get("sort_by") || "" }
                            }}
                            title="Next Page"
                            onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                        >
                            <span className="sr-only">Next Page</span>
                            <svg className="block w-4 h-4 fill-current" viewBox="0 0 256 512" aria-hidden="true" role="presentation">
                                <path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path>
                            </svg>
                        </Link>
                    </nav>
                )
            }
        </div>
    )
}

export default Pagination
