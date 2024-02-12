import { Router } from 'express';
import { jwtVerify } from '../middlewares/auth.middlware.js';
import {
    getChannelStats,
    getChannelVideos,
} from "../controllers/dashboard.controller.js"

const router = Router();

router.use(jwtVerify);

router.route("/stats").get(getChannelStats);
router.route("/videos").get(getChannelVideos);

export default router