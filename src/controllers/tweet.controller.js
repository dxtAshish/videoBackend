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
    
    if(!tweet) {
        throw new ApiError(400, "Something went wrong while creating tweet")
    }
 return res.status(200).json(new ApiResponse(200,tweet,"tweet is created successfully"));
})

const getUserTweets = asyncHandler(async (req, res) => {
    // TODO: get user tweets
    const {userId} = req.params;
    if(!isValidObjectId(userId)) {
        throw new ApiError(400, "Invalid userId")
    }
    const user =User.findById(userId)
    if(!user) {
        throw new ApiError(400, "No user exists")
    }

    const userTweets = await Tweet.aggregate([
        {
            $match: {
                owner: new mongoose.Types.ObjectId(userId)
            }
        }
    ])

   

    if(userTweets.length === 0) {
        throw new ApiError(400, "No tweets uploaded by user")
    }

    return res.status(200).json(new ApiResponse(200,userTweets,"get user tweets"))

})

const updateTweet = asyncHandler(async (req, res) => {
    //TODO: update tweet
    const {tweetId} =req.params;
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
    const { tweetId } = req.params

    if(!isValidObjectId(tweetId)) {
        throw new ApiError(400, "tweet id is invalid")
    }

    const tweet = await Tweet.findById(tweetId)

    if(!tweet) {
        throw new ApiError(400, "No tweet exists")
    }

    // validation
    if(tweet?.owner.toString() !== req.user?._id.toString()) {
        throw new ApiError(400, "Unauthorised access")
    }

    const response = await Tweet.findByIdAndDelete(tweetId)

    if(!response) {
        throw new ApiError(400, "Something went wrong while deleting tweet")
    }

    return res
    .status(200)
    .json(new ApiResponse(200, response, "Tweet deleted successfully"))
    
})

export {
    createTweet,
    getUserTweets,
    updateTweet,
    deleteTweet
}
