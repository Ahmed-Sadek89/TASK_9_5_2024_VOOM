"use client"
import React, { useEffect } from 'react'
import { all } from '@/store/slices/post/all.slice'
import { AppDispatch, RootState } from '@/store/store'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { Post } from '@/types'
import { useSearchParams } from 'next/navigation'
import { formateDate } from '@/lib/formateDate'
import DeletePost from './DeletePost'

const Posts = () => {
    const dispatch = useDispatch<AppDispatch>();

    const searchParams = useSearchParams();
    const page = searchParams.get("page") as string;
    const sort_by = searchParams.get("sort_by") as string;

    const { data } = useSelector((state: RootState) => state.postAll_reducer);
    const posts: Post[] | undefined = data?.posts
    useEffect(() => {
        dispatch(all({ page: page || "1", sort_by: sort_by || "" }))
    }, [dispatch, page, sort_by])

    
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 items-start'>
            {
                posts?.map((post, index) => (
                    <div
                        key={index}
                        className='overflow-hidden rounded-md bg-custom-gray text-custom-black shadow-2xl'
                    >
                        <div className='relative'>
                            <span className='absolute top-0 right-0 bg-custom-green p-2 text-white rounded-b text-xs sm:text-base'>{post.category}</span>
                            <Image src={post.image as string || "/not_found.jpg"} alt={post.title} width={400} height={400} className='object-fill w-full h-[40vh]' />
                        </div>
                        <div className='py-4 px-6 flex flex-col gap-2 items-start'>
                            <div className='flex flex-col gap-1'>
                                <h3 className='text-black font-black text-md sm:text-xl'>{post.title}</h3>
                                <span className='text-[10px] italic font-light'>Created at: {formateDate(post.created_at.toString())}</span>
                            </div>
                            <p className='font-light text-sm'>{post.description}</p>
                            <div className='flex items-center gap-3'>
                                <Link href={`/edit/${post.id}`} className='bg-blue-700 text-sm mt-4 rounded py-1 px-3 transition duration-300 hover:bg-blue-600 text-white w-auto'>
                                    Edit
                                </Link>
                                <DeletePost id={post.id} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Posts
