"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("../model/post/store");
const post_service_1 = require("../service/post.service");
describe("PostServices", () => {
    beforeEach(() => {
        store_1.posts.length = 0;
        store_1.posts.push({
            id: 1,
            title: "Introduction to Football",
            description: "An in-depth guide to the basics of football.",
            category: "Sports",
            image: "https://example.com/images/football.jpg",
            created_at: new Date("2023-01-15"),
        }, {
            id: 2,
            title: "Latest in AI Technologies",
            description: "Exploring the advancements in Artificial Intelligence.",
            category: "Technologies",
            image: "https://example.com/images/ai.jpg",
            created_at: new Date("2023-03-22"),
        });
    });
    it("should return true if category is valid", () => {
        expect(post_service_1.PostService.validateCategory("Sports")).toBe(true);
    });
    describe('PostService.all', () => {
        it('should return sorted and paginated posts when a valid page and sort_by field are provided', () => {
            const page = 1;
            const sortBy = 'title'; // or any other valid field like 'id', 'created_at', etc.
            const result = post_service_1.PostService.all(page, sortBy);
            expect(result).toBeDefined();
            expect(result.length).toBeLessThanOrEqual(5); // Assuming page size of 5
        });
        it('should throw an error when an invalid page number is provided', () => {
            const invalidPage = 0;
            expect(() => post_service_1.PostService.all(invalidPage, 'title')).toThrow('Page number must be greater than 0');
        });
        it('should throw an error when an invalid sort_by field is provided', () => {
            const page = 1;
            const invalidSortBy = 'invalidField';
            expect(() => post_service_1.PostService.all(page, invalidSortBy)).toThrow('Invalid sort_by field');
        });
        it('should return paginated posts without sorting when no sort_by field is provided', () => {
            const page = 2; // For example, second page
            const result = post_service_1.PostService.all(page, '');
            expect(result).toBeDefined();
            expect(result.length).toBeLessThanOrEqual(5);
        });
    });
    it("should insert new Post", () => {
        const newPost = {
            title: "new one",
            description: "new One",
            category: "sports",
        };
        const newPostImage = "image.jpg";
        const newPostId = store_1.posts.length + 1;
        expect(post_service_1.PostService.addPost(newPost, newPostImage).id).toBe(newPostId);
    });
    it("should return true when delete existing Post by id", () => {
        const deletedId = 2;
        expect(post_service_1.PostService.deletePost(deletedId)).toBe(true);
    });
    describe('PostService.updatePost', () => {
        it('should update the post with valid data', () => {
            const id = 1;
            const updatedData = { title: 'Updated Title', category: 'Technologies' };
            const imagePath = '/uploads/new-image.jpg';
            const updatedPost = post_service_1.PostService.updatePost(id, updatedData, imagePath);
            expect(updatedPost).toBeDefined();
            expect(updatedPost === null || updatedPost === void 0 ? void 0 : updatedPost.title).toBe('Updated Title');
            expect(updatedPost === null || updatedPost === void 0 ? void 0 : updatedPost.category).toBe('Technologies');
            expect(updatedPost === null || updatedPost === void 0 ? void 0 : updatedPost.image).toBe(imagePath);
        });
        it('should return null if the post is not found', () => {
            const invalidId = 999; // Assume no post with this ID exists
            const updatedData = { title: 'Nonexistent Post' };
            const imagePath = '/uploads/nonexistent-image.jpg';
            const result = post_service_1.PostService.updatePost(invalidId, updatedData, imagePath);
            expect(result).toBeNull();
        });
        it('should throw an error for an invalid category', () => {
            const id = 1; // Assume a post with this ID exists
            const invalidData = { category: 'InvalidCategory' }; // Invalid category
            const imagePath = '/uploads/new-image.jpg';
            expect(() => post_service_1.PostService.updatePost(id, invalidData, imagePath))
                .toThrow('Invalid category. Must be one of: Sports, Technologies, Sciences, Arts, Medicenes, Foods');
        });
        it('should retain the existing image path if none is provided', () => {
            var _a;
            const id = 1; // Assume a post with this ID exists
            const updatedData = { title: 'Title without changing image' };
            const existingImagePath = (_a = store_1.posts.find(post => post.id === id)) === null || _a === void 0 ? void 0 : _a.image;
            const updatedPost = post_service_1.PostService.updatePost(id, updatedData, null);
            expect(updatedPost).toBeDefined();
            expect(updatedPost === null || updatedPost === void 0 ? void 0 : updatedPost.image).toBe(existingImagePath); // Ensure image path is unchanged
        });
    });
});
