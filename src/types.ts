export type Post = {
    id: number,
    title: string,
    description: string,
    category: string,
    image: File | string,
    created_at: Date
}