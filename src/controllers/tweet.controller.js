import mongoose, { isValidObjectId } from "mongoose"
import {Tweet} from "../models/tweet.model.js"
import {User} from "../models/user.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const createTweet = asyncHandler(async (req, res) => {
    //TODO: create tweet
    const {content}=req.body
    if(!content)
    {
        throw new ApiError(400,"content is missing");
    }
    const tweet= await Tweet.create({
        content,
        owner:new mongoose.Types.ObjectId(req.user?._id),
    })
 return res.status(200).json(new ApiResponse(200,tweet,"tweet is created successfully"));
})

const getUserTweets = asyncHandler(async (req, res) => {
    // TODO: get user tweets
    const userId = req.user?._id;
    if(!userId)
    {
        throw new ApiError(400,"user is missing");
    }
    const tweet=Tweet.findById(userId);
    return res.status(200).json(new ApiResponse(200,tweet,"get user tweets"))

})

const updateTweet = asyncHandler(async (req, res) => {
    //TODO: update tweet
    const tweetId =req.tweet?._id;
    if(!tweetId)
    {
        throw new ApiError(400,"tweet id is not find")
    }
    const {newContent} = req.body;
    if(!newContent)
    {
        throw new ApiError(400,"tweet update content is not find")

    }
    const tweet = Tweet.findByIdAndUpdate(tweetId,{
        $set:{content:newContent},
    },
    {
        new: true,
      }
      )
   return res.status(200).json(new ApiResponse(200,tweet,"updated successfully"));
    
})

const deleteTweet = asyncHandler(async (req, res) => {
    //TODO: delete tweet
    
})

export {
    createTweet,
    getUserTweets,
    updateTweet,
    deleteTweet
}
