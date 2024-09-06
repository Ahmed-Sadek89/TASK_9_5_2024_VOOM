import express from 'express';
import { PostController } from '../controller/post.controller';
import { checkAuth } from '../guard/auth.guard';
import { upload } from '../config/multer.config';

const router = express();
const postController = new PostController();

router.use(checkAuth)
router.get("/all", postController.all)
router.get('/:id', postController.getById)
router.delete('/:id', postController.delete)

router.use(upload.single('image'))
router.post('/', postController.insert)
router.put('/:id', postController.update)

export default router