import { posts } from '@/mock/posts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Posts = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 items-start'>
            {
                posts.map((post, index) => (
                    <div
                        key={index}
                        className='overflow-hidden rounded-md bg-custom-gray text-custom-black shadow-2xl'
                    >
                        <div className='relative'>
                            <span className='absolute top-0 right-0 bg-custom-green p-2 text-white rounded-b'>{post.category}</span>
                            <Image src={post.image || "/not_found.jpg"} alt={post.title} width={400} height={400} className='object-cover w-full h-[40vh]' />
                        </div>
                        <div className='py-4 px-6 flex flex-col gap-2 items-start'>
                            <div className='flex flex-col gap-1'>
                                <h3 className='text-black font-black text-xl'>{post.title}</h3>
                                <span className='text-[10px] italic font-light'>Created at: {post.created_at.toLocaleString()}</span>
                            </div>
                            <p className='font-light text-sm'>{post.description}</p>
                            <Link href={`/edit/${post.id}`} className='bg-blue-700 text-sm mt-4 rounded py-1 px-3 transition duration-300 hover:bg-blue-600 text-white w-auto'>
                                Edit
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Posts
