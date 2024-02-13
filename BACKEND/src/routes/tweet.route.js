import { Router } from 'express';
import {
    createTweet,
    deleteTweet,
    getUserTweets,
    updateTweet,
} from "../controllers/tweet.controller.js"

import { jwtVerify } from "../middlewares/auth.middleware.js";

const router = Router();
router.use(jwtVerify); // Apply jwtVerify middleware to all routes in this file

router.route("/create").post(createTweet);
router.route("/user/:userId").get(getUserTweets);
router.route("/:tweetId").patch(updateTweet).delete(deleteTweet);

export default router