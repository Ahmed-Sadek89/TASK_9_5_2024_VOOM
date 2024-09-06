"use client"
import { useEffect } from 'react'
import { AppDispatch, RootState } from '@/store/store'
import ButtonSubmit from '@/ui/button-submit'
import FieldSetInput from '@/ui/fieldset-input'
import FormInput from '@/ui/form-input'
import TextAreaInput from '@/ui/textarea-input'
import UploadInput from '@/ui/upload-input'
import { useParams, useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { getById } from '@/store/slices/post/getById.slice'
import { Post } from '@/types'
import { editPost } from '@/store/slices/post/edit_slice'

const EditPost = () => {
    const router = useRouter()
    const { id } = useParams()
    const dispatch = useDispatch<AppDispatch>()
    const { data } = useSelector((state: RootState) => state.getById_reducer);
    const post: Post | undefined = data?.post
    useEffect(() => {
        dispatch(getById({ id: Number(id) }))
    }, [dispatch])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const title = formData.get("title") as string
        const description = formData.get("description") as string
        const category = formData.get("category") as string
        const image = formData.get("image") as File

        const payload = new FormData();
        payload.append('title', title);
        payload.append('description', description);
        payload.append('category', category);
        if (image) payload.append('image', image);

        await dispatch(editPost({ id: Number(id), body: payload }))
            .then((res: any) => {
                if (res.payload.status === 200) {
                    router.push('/')
                }
            })
    }
    return (
        <form className="flex flex-col gap-y-8" encType="multipart/form-data" onSubmit={handleSubmit}>
            <FormInput type="text" name="title" placeholder="Title" defaultValue={post?.title} />
            <TextAreaInput name="description" placeholder="Description" defaultValue={post?.description} />
            <FieldSetInput defaultValue={post?.category as string} />
            <UploadInput />
            <ButtonSubmit btnValue='Edit' colors="bg-blue-800 hover:bg-blue-700 disabled:bg-blue-700" />
        </form>
    )
}

export default EditPost
