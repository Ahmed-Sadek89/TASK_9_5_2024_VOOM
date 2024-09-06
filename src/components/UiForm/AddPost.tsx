"use client"
import { createPost } from '@/store/slices/post/create.slice'
import { AppDispatch } from '@/store/store'
import ButtonSubmit from '@/ui/button-submit'
import FieldSetInput from '@/ui/fieldset-input'
import FormInput from '@/ui/form-input'
import TextAreaInput from '@/ui/textarea-input'
import UploadInput from '@/ui/upload-input'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'

const AddPost = () => {
    const router = useRouter()
    const dispatch = useDispatch<AppDispatch>()

    const handleSubmit = async (formData: FormData) => {
        const title = formData.get("title") as string
        const description = formData.get("description") as string
        const category = formData.get("category") as string
        const image = formData.get("image") as File

        const payload = new FormData();
        payload.append('title', title);
        payload.append('description', description);
        payload.append('category', category);
        if (image) payload.append('image', image);

        await dispatch(createPost(payload))
            .then((res: any) => {
                if (res.payload.status === 201) {
                    router.push('/')
                }
            })
    }
    return (
        <form className="flex flex-col gap-y-8" action={handleSubmit} encType="multipart/form-data">
            <FormInput type="text" name="title" placeholder="Title" />
            <TextAreaInput name="description" placeholder="Description" />
            <FieldSetInput />
            <UploadInput />
            <ButtonSubmit btnValue='Create' colors="bg-green-800 hover:bg-green-700 disabled:bg-custom-green2" />
        </form>
    )
}

export default AddPost
