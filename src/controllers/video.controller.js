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

       // Build the filter object based on query parameters
       const filter = {};
       if (query) {
           // You may customize the fields you want to search for in the 'Video' model
           filter.$or = [
               { title: { $regex: query, $options: "i" } },
               { description: { $regex: query, $options: "i" } },
           ];
       }
       if (userId) {
           filter.user = userId;
       }
   
       // Build the sort object based on sortBy and sortType parameters
       const sort = {};
       if (sortBy && sortType) {
           sort[sortBy] = sortType === "desc" ? -1 : 1;
       }
   
       // Paginate the results using the skip and limit parameters
       const skip = (page - 1) * limit;
   
       // Execute the Mongoose query to fetch videos
       const videos = await Video.find(filter)
           .sort(sort)
           .skip(skip)
           .limit(parseInt(limit))
           .populate("user", "username"); // Populate the 'user' field with the 'username' property
   
       // Check if videos are found
       if (!videos || videos.length === 0) {
           throw new ApiError(404, "No videos found");
       }
   
       // Return the videos in the response
       res.status(200).json(new ApiResponse(200, "Videos fetched successfully", { videos, page, limit }));
   
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
    const videoFile = await uploadOnCloudinary(videoLocalPath);
    const thumbnail= await uploadOnCloudinary(thumbnailLocalPath)
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
    //TODO: get video by id
})

const updateVideo = asyncHandler(async (req, res) => {
    const { videoId } = req.params
    //TODO: update video details like title, description, thumbnail

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
