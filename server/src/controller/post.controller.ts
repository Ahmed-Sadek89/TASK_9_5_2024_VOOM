import { Request, Response } from "express";
import { Post } from "../model/post/schema";
import { PostService } from "../service/post.service";

export class PostController {

    all(req: Request, res: Response) {
        const { page, sort_by } = req.query;
        try {
            const posts = PostService.all(Number(page), sort_by as keyof Post)
            return res.status(200).json({
                status: 200,
                count: posts.length,
                posts
            })
        } catch (error: any) {
            return res.status(404).json({
                status: 404,
                message: error.message
            })
        }
    }

    getById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const post = PostService.getById(Number(id))
            return res.status(200).json({
                status: 200,
                post
            })
        } catch (error: any) {
            return res.status(404).json({
                status: 404,
                message: error.message
            })
        }
    }

    delete(req: Request, res: Response) {
        const id = parseInt(req.params.id);

        const successDeleting = PostService.deletePost(id);
        if (successDeleting) {
            return res.status(200).json({
                status: 200,
                message: `Post number ${id} deleted successfully`
            });
        } else {
            return res.status(404).json({
                status: 404,
                message: `Post number ${id} not found`
            });
        }
    }

    insert(req: Request, res: Response) {
        const { title, description, category }: Omit<Post, 'id' | 'created_at'> = req.body;
        if (!title || !description || !category) {
            console.log({ title, description, category })
            return res.status(400).json({
                status: 400,
                message: "Bad request, title, description, and category are required"
            });
        }

        if (!PostService.validateCategory(category)) {
            return res.status(400).json({
                status: 400,
                message: "Invalid category. Must be one of: Sports, Technologies, Sciences, Arts, Medicenes, Foods"
            });
        }

        try {
            let imagePath = PostService.checkImageUploaded(req.file)

            const newPost = PostService.addPost({ title, description, category }, imagePath);

            return res.status(201).json({
                status: 201,
                message: "New post added successfully",
                post: newPost
            });
        } catch (error: any) {
            return res.status(400).json({
                status: 400,
                message: error.message
            });
        }
    }

    update(req: Request, res: Response) {
        const id = parseInt(req.params.id, 10);
        const updatedData: Partial<Omit<Post, 'id' | 'created_at'>> = req.body;
        const imagePath = req.file ? `/uploads/${req.file.filename}` : null;


        if (updatedData.category && !PostService.validateCategory(updatedData.category)) {
            return res.status(400).json({
                status: 400,
                message: "Invalid category. Must be one of: Sports, Technologies, Sciences, Arts, Medicenes, Foods"
            });
        }

        const updatedPost = PostService.updatePost(id, updatedData, imagePath);
        if (updatedPost) {
            return res.status(200).json({
                status: 200,
                message: "Post updated successfully",
                post: updatedPost
            });
        } else {
            return res.status(404).json({
                status: 404,
                message: "Post not found"
            });
        }
    }
}