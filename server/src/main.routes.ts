import express from 'express';
import user_routes from './routes/user.routes';
import post_routes from './routes/post.routes';

const router = express();

router.use("/user", user_routes)
router.use("/post", post_routes)

export default router