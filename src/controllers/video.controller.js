import mongoose, {isValidObjectId} from "mongoose"
import {Video} from "../models/video.model.js"
import {User} from "../models/user.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"


const getAllVideos = asyncHandler(async (req, res) => {
    const { page = 1, limit = 10, query, sortBy, sortType, userId } = req.query
    //TODO: get all videos based on query, sort, pagination
    page = isNaN(page) ? 1 : Number(page);
    limit = isNaN(limit) ? 10 : Number(limit);

    if(page <= 0){
        page = 1;
    }
    if(limit <= 0){
        limit = 10;
    }

    let pipeline = []

    if(isValidObjectId(userId)) {
        pipeline.push({
            $match: {
                owner: new mongoose.Types.ObjectId(userId)
            }
        })
        console.log(pipeline);
    } else {
        pipeline.push({
            $match: {
                $or: [
                    {title: {$regex: query, $options: 'i'}},
                    {description: {$regex: query, $options: 'i'}}
                ]
            }
        })
    }

    pipeline.push(

        {
            $project: {
                title: 1,
                videoFile: 1,
                thumbnail: 1
            }
        },

        {
            $sort: {
                [sortBy]:  sortType === 'asc' ? 1 : -1
            }
        },

        { $skip: ( (page-1) * limit ) },

        { $limit: limit }
    )

    const videos = await Video.aggregate(pipeline)

    return res
        .status(200)
        .json(new ApiResponse(200, videos, "Videos fetched successfully"))

      
})

const publishAVideo = asyncHandler(async (req, res) => {
    const { title, description} = req.body
    // TODO: get video, upload to cloudinary, create video
    const videoLocalPath = req.files?.video[0].path;
    if(!videoLocalPath)
    {
        throw new ApiError(400,"does not find video path")
    }
    const thumbnailLocalPath= req.files?.thumbnail[0].path;

    if(!thumbnailLocalPath)
    {
        throw new ApiError(400,"does not find video path")
    }
    if(!title)
    {
        throw new ApiError(400,"title is missing")
    }
    if(!description)
    {
        throw new ApiError(400,"description is missing")
    }
    //fetching video and thumbnail 
    const videoFile = await uploadOnCloudinary(videoLocalPath);
    const thumbnail= await uploadOnCloudinary(thumbnailLocalPath);
    if(!videoFile)
    {
        throw new ApiError(400, "video not found")
    }
    if(!thumbnail)
    {
        throw new ApiError(400,"thumbanil not found")
    }
    const duration =
          typeof videoFile.duration === "string"
            ? parseFloat(videoFile.duration)
            : videoFile.duration;

    const newVideo = await Video.create({
        videoFile:videoFile.url,
        thumbnail:thumbnail.url,
        title,
        description,
        owner:new mongoose.Types.ObjectId(req.user?._id),
        duration,
        views,
        isPublished
    })

})

const getVideoById = asyncHandler(async (req, res) => {
    const { videoId } = req.params
    const video= Video.findById(videoId);
    if(!video)
    {
        throw new ApiError(400,"no video found by id");
    }
    res.status(200).json(new ApiResponse(200,video,"video fetched successfully "))
})

const updateVideo = asyncHandler(async (req, res) => {
    const { videoId } = req.params
    //TODO: update video details like title, description, thumbnail
    const {title,description}=req.body;
    const thumbnailLocalPath = req.file?.path
    if(!videoId?.trim())
    {
        throw new ApiError(400,"no video id found");
    }
    const video=Video.findById(videoId);
    if(!video) {
        throw new ApiError(400, "No videos exists")
    }
     
    if( !title || !description || !thumbnailLocalPath) {
        throw new ApiError(400, "Please give title or description or thumbnail to change")
    }
    const thumbmail = await uploadOnCloudinary(thumbnailLocalPath)
    if(!thumbmail) {
        throw new ApiError(500, "There is some problem in uploading thumbnail")
    }
  


    const updatedVideo = await Video.findByIdAndUpdate(
        videoId,
        {
            $set: {
                title,
                description,
                thumbnail: thumbmail.url
            }
        },
        {new: true}
    )

  

    return res
    .status(200)
    .json(
        new ApiResponse(200, updatedVideo, "Videos details updated")
    )

})

const deleteVideo = asyncHandler(async (req, res) => {
    const { videoId } = req.params
    //TODO: delete video
    
})

const togglePublishStatus = asyncHandler(async (req, res) => {
    const { videoId } = req.params
})

export {
    getAllVideos,
    publishAVideo,
    getVideoById,
    updateVideo,
    deleteVideo,
    togglePublishStatus
}
