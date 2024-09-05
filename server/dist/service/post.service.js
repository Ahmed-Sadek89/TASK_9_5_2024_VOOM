"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const store_1 = require("../model/post/store");
class PostService {
    static validateCategory(category) {
        return this.validCategories.has(category);
    }
    static all(page, sort_by) {
        if (page < 1) {
            throw new Error("Page number must be greater than 0");
        }
        let sortedPosts;
        if (sort_by) {
            if (!["id", "title", "description", "category", "created_at", ""].includes(sort_by)) {
                throw new Error("Invalid sort_by field");
            }
            sortedPosts = [...store_1.posts].sort((a, b) => {
                const aValue = a[sort_by];
                const bValue = b[sort_by];
                if (typeof aValue === 'string' && typeof bValue === 'string') {
                    return aValue.localeCompare(bValue);
                }
                else if (typeof aValue === 'number' && typeof bValue === 'number') {
                    return aValue - bValue;
                }
                else if (aValue instanceof Date && bValue instanceof Date) {
                    return aValue.getTime() - bValue.getTime();
                }
                else {
                    return 0;
                }
            });
        }
        else {
            sortedPosts = store_1.posts;
        }
        return page ? sortedPosts.slice((page - 1) * 5, page * 5) : sortedPosts.slice(0, 5);
    }
    static checkImageUploaded(file) {
        let imagePath;
        if (file) {
            imagePath = `/uploads/${file.filename}`;
        }
        else {
            imagePath = null;
            throw new Error("No image uploaded");
        }
        return imagePath;
    }
    static addPost(postData, imagePath) {
        const newPost = Object.assign(Object.assign({ id: store_1.posts.length + 1 }, postData), { category: postData.category, image: imagePath, created_at: new Date() });
        store_1.posts.push(newPost);
        return newPost;
    }
    static deletePost(id) {
        const index = store_1.posts.findIndex(post => post.id === id);
        if (index === -1) {
            return false;
        }
        store_1.posts.splice(index, 1);
        return true;
    }
    static updatePost(id, updatedData, imagePath) {
        const index = store_1.posts.findIndex(post => post.id === id);
        if (index === -1) {
            return null;
        }
        if (updatedData.category && !this.validateCategory(updatedData.category)) {
            throw new Error("Invalid category. Must be one of: Sports, Technologies, Sciences, Arts, Medicenes, Foods");
        }
        const existingPost = store_1.posts[index];
        const updatedPost = Object.assign(Object.assign(Object.assign({}, existingPost), updatedData), { image: imagePath !== null && imagePath !== void 0 ? imagePath : existingPost.image });
        store_1.posts[index] = updatedPost;
        return updatedPost;
    }
}
exports.PostService = PostService;
PostService.validCategories = new Set([
    "Sports",
    "Technologies",
    "Sciences",
    "Arts",
    "Medicenes",
    "Foods"
]);
