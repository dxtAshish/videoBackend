import mongoose from "mongoose"
import {Comment} from "../models/comment.model.js"
import { Video } from "../models/video.model.js";
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const getVideoComments = asyncHandler(async (req, res) => {
    //TODO: get all comments for a video
    const {videoId} = req.params
    const {page = 1, limit = 10} = req.query
    const video =Video.findById(videoId)
    if(!isValidObjectId(videoId) || !video) {
        throw new ApiError(400, "Either video id is invalid or No video exists")
    }
    const allComments = await Video.aggregate([
        {
            $match: {
                _id: new mongoose.Types.ObjectId(videoId)
            }
        },

        {
            $lookup: {
                from: "comments",
                localField: "_id",
                foreignField: "video",
                as: "allVideoComments",
                pipeline: [
                    {
                        $project: {
                            _id: 1,
                            content: 1,
                            owner: 1
                        }
                    }
                ]
            }
        },
        {
            $project: {
                allVideoComments: 1,
                _id: 0
            }
        }
    ])
    if(!allComments) {
        throw new ApiError(400, "Something went wrong while getting all comments of video")
    }

    return res
    .status(200)
    .json(new ApiResponse(200, allComments, "All comments fetched succesfully"))
})

const addComment = asyncHandler(async (req, res) => {
    // TODO: add a comment to a video
    const {comment} =req.body;
    const {videoId} = req.params
    if(!comment)
    {
        throw new ApiError(400,"comment does not found")
    }
    const newComment=await Comment.create({
        comment,
        video:new mongoose.Types.ObjectId(videoId),
        owner:new mongoose.Types.ObjectId(req.user?._id)

    })
    return res.status(200).json(new ApiResponse(200,newComment,"comment added successfully"))
})

const updateComment = asyncHandler(async (req, res) => {
    const {comment} =req.body;
    const {commentId} = req.params
    if(!commentId)
    {
        throw new ApiError(400,"not found comment id");
    }
    const owner=Comment.owner
    
    if(!owner)
    {
        throw new ApiError(400,"not found comment owner");
    }
    if(req.user._id.toString()!==owner.toString())
    {
        throw new ApiError(400,"unauthrized access")
    }
    const updateComment = Comment.findByIdAndUpdate(commenttId,{
        $set:{comment:comment},
    },
    {
        new: true,
      }
      )
    return res.status(200).json(new ApiResponse(200,updateComment,"comment updated successfully"))

    // TODO: update a comment
})

const deleteComment = asyncHandler(async (req, res) => {
    // TODO: delete a comment
    const {commentId}=req.params
    const comment =Comment.owner;
    if(req.user._id.toString()!==owner.toString())
    {
        throw new ApiError(400,"unauthrized access")
    }
    const deleteComment=await comment.findByIdAndDelete(commentId)
    return res.status(200).json(new ApiResponse(200,"comment deleted successfully"))
})

export {
    getVideoComments, 
    addComment, 
    updateComment,
     deleteComment
    }

