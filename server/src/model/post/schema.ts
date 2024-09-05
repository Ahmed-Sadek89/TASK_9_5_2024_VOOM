export type Category = "Sports" | "Technologies" | "Sciences" | "Arts" | "Medicenes" | "Foods";

export interface Post {
    id: number,
    title: string,
    description: string,
    category: Category,
    image: string | null,
    created_at: Date
}