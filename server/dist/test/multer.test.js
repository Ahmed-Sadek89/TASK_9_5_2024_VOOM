"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_service_1 = require("../service/post.service");
describe('PostService.checkImageUploaded', () => {
    it('should return the image path when an image is uploaded', () => {
        const mockFile = {
            filename: 'test-image.jpg',
        };
        const result = post_service_1.PostService.checkImageUploaded(mockFile);
        expect(result).toBe('/uploads/test-image.jpg');
    });
    it('should throw an error when no image is uploaded or if the uploaded file is not image', () => {
        expect(() => post_service_1.PostService.checkImageUploaded(undefined)).toThrow('No image uploaded');
    });
});
