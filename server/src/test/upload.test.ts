import { PostService } from "../service/post.service";

describe('PostService.checkImageUploaded', () => {
    it('should return the image path when an image is uploaded', () => {
        const mockFile = {
            filename: 'test-image.jpg',
        } as Express.Multer.File;

        const result = PostService.checkImageUploaded(mockFile);

        expect(result).toBe(`${process.env.IMAGE_BACKEND_LINK}/uploads/test-image.jpg`);
    });

    it('should throw an error when no image is uploaded or if the uploaded file is not image', () => {
        expect(() => PostService.checkImageUploaded(undefined)).toThrow('No image uploaded');
    });
});
