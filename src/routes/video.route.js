import { Router } from 'express';
import {
    deleteVideo,
    getAllVideos,
    getVideoById,
    publishAVideo,
    togglePublishStatus,
    updateVideo,
} from "../controllers/video.controller.js"
import {jwtVerify} from "../middlewares/auth.middlware.js"
import {upload} from "../middlewares/multer.middleware.js"

const router = Router();
router.use(jwtVerify); // Apply jwtVerify middleware to all routes in this file

router.route("/get-videos").get(jwtVerify, getAllVideos)
router.route("/upload-video").post(
    jwtVerify,

    upload.fields([
        {
            name: "videoFile",
            maxCount: 1,
        },
        {
            name: "thumbnail",
            maxCount: 1,
        }
    ]),
    
    publishAVideo
);
    
router
    .route("/c/:videoId")
    .get(getVideoById)
    .delete(jwtVerify, deleteVideo)
    .patch(jwtVerify, upload.single("thumbnail"), updateVideo);

router.route("/toggle/publish/:videoId").patch(togglePublishStatus);

export default router