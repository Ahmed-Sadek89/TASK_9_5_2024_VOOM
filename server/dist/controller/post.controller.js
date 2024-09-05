"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const post_service_1 = require("../service/post.service");
class PostController {
    all(req, res) {
        const { page, sort_by } = req.query;
        try {
            const posts = post_service_1.PostService.all(Number(page), sort_by);
            console.log(req.query);
            return res.status(200).json({
                status: 200,
                count: posts.length,
                posts
            });
        }
        catch (error) {
            return res.status(404).json({
                status: 404,
                message: error.message
            });
        }
    }
    delete(req, res) {
        const id = parseInt(req.params.id);
        const successDeleting = post_service_1.PostService.deletePost(id);
        if (successDeleting) {
            return res.status(200).json({
                status: 200,
                message: `Post number ${id} deleted successfully`
            });
        }
        else {
            return res.status(404).json({
                status: 404,
                message: `Post number ${id} not found`
            });
        }
    }
    insert(req, res) {
        const { title, description, category } = req.body;
        if (!title || !description || !category) {
            return res.status(400).json({
                status: 400,
                message: "Bad request, title, description, and category are required"
            });
        }
        if (!post_service_1.PostService.validateCategory(category)) {
            return res.status(400).json({
                status: 400,
                message: "Invalid category. Must be one of: Sports, Technologies, Sciences, Arts, Medicenes, Foods"
            });
        }
        try {
            let imagePath = post_service_1.PostService.checkImageUploaded(req.file);
            const newPost = post_service_1.PostService.addPost({ title, description, category }, imagePath);
            return res.status(201).json({
                status: 201,
                message: "New post added successfully",
                post: newPost
            });
        }
        catch (error) {
            return res.status(400).json({
                status: 400,
                message: error.message
            });
        }
    }
    update(req, res) {
        const id = parseInt(req.params.id, 10);
        const updatedData = req.body;
        const imagePath = req.file ? `/uploads/${req.file.filename}` : null;
        if (updatedData.category && !post_service_1.PostService.validateCategory(updatedData.category)) {
            return res.status(400).json({
                status: 400,
                message: "Invalid category. Must be one of: Sports, Technologies, Sciences, Arts, Medicenes, Foods"
            });
        }
        const updatedPost = post_service_1.PostService.updatePost(id, updatedData, imagePath);
        if (updatedPost) {
            return res.status(200).json({
                status: 200,
                message: "Post updated successfully",
                post: updatedPost
            });
        }
        else {
            return res.status(404).json({
                status: 404,
                message: "Post not found"
            });
        }
    }
}
exports.PostController = PostController;
