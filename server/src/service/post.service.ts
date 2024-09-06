import { Category, Post } from "../model/post/schema";
import { posts } from "../model/post/store";

export class PostService {
    private static validCategories: Set<Category> = new Set([
        "Sports",
        "Technologies",
        "Sciences",
        "Arts",
        "Medicenes",
        "Foods"
    ]);

    static validateCategory(category: string): category is Category {
        return this.validCategories.has(category as Category);
    }

    static all(page: number, sort_by: keyof Post) {
        if (page < 1) {
            throw new Error("Page number must be greater than 0");
        }

        let sortedPosts;
        if (sort_by) {
            if (!["id", "title", "description", "category", "created_at", ""].includes(sort_by)) {
                throw new Error("Invalid sort_by field");
            }
            sortedPosts = [...posts].sort((a, b) => {
                const aValue = a[sort_by];
                const bValue = b[sort_by];

                if (typeof aValue === 'string' && typeof bValue === 'string') {
                    return aValue.localeCompare(bValue);
                } else if (typeof aValue === 'number' && typeof bValue === 'number') {
                    return aValue - bValue;
                } else if (aValue instanceof Date && bValue instanceof Date) {
                    return aValue.getTime() - bValue.getTime();
                } else {
                    return 0;
                }
            });
        } else {
            sortedPosts = posts
        }
        return page ? sortedPosts.slice((page - 1) * 5, page * 5) : sortedPosts.slice(0, 5)
    }

    static getById(id: number) {
        const post = posts.find(index => index.id === id)
        if (post) {
            return post
        } else {
            throw new Error("No post with this id")
        }
    }

    static checkImageUploaded(file: Express.Multer.File | undefined) {
        let imagePath
        if (file) {
            imagePath = `/uploads/${file.filename}`
        } else {
            imagePath = null;
            throw new Error("No image uploaded")
        }
        return imagePath
    }

    static addPost(postData: Omit<Post, 'id' | 'image' | 'created_at'>, imagePath: string | null): Post {
        const newPost: Post = {
            id: posts.length + 1,
            ...postData,
            category: postData.category,
            image: imagePath,
            created_at: new Date()
        };
        posts.push(newPost);
        return newPost;
    }

    static deletePost(id: number): boolean {
        const index = posts.findIndex(post => post.id === id);
        if (index === -1) {
            return false;
        }
        posts.splice(index, 1);
        return true;
    }

    static updatePost(id: number, updatedData: Partial<Omit<Post, 'id' | 'created_at'>>, imagePath: string | null): Post | null {
        const index = posts.findIndex(post => post.id === id);
        if (index === -1) {
            return null;
        }

        if (updatedData.category && !this.validateCategory(updatedData.category)) {
            throw new Error("Invalid category. Must be one of: Sports, Technologies, Sciences, Arts, Medicenes, Foods");
        }

        const existingPost = posts[index];
        const updatedPost = { ...existingPost, ...updatedData, image: imagePath ?? existingPost.image };

        posts[index] = updatedPost;
        return updatedPost;
    }
}
