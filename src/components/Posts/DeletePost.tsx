import React from 'react'
import { all } from '@/store/slices/post/all.slice';
import { deletePost } from '@/store/slices/post/delete.slice';
import { AppDispatch } from '@/store/store';
import { useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

const DeletePost = ({ id }: { id: number }) => {
    const dispatch = useDispatch<AppDispatch>();
    const searchParams = useSearchParams();
    const page = searchParams.get("page") as string;
    const sort_by = searchParams.get("sort_by") as string;

    const handleDelete = (id: number) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await dispatch(deletePost({ id }))
                    .then((res: any) => {
                        if (res.payload.status === 200) {
                            Swal.fire({
                                title: res.payload.message,
                                icon: "success"
                            });
                            dispatch(all({ page: page || "1", sort_by: sort_by || "" }))
                        }
                    })
            }
        });
    }
    return (
        <button
            type='button'
            className='bg-red-700 text-sm mt-4 rounded py-1 px-3 transition duration-300 hover:bg-red-600 text-white w-auto'
            onClick={() => handleDelete(id)}
        >
            delete
        </button>
    )
}

export default DeletePost
