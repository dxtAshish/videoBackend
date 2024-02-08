import mongoose, {isValidObjectId} from "mongoose"
import {PlayList, Playlist} from "../models/playlist.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"


const createPlaylist = asyncHandler(async (req, res) => {
    const {name, description} = req.body
    if(!name.trim() || !description.trim())
    {
        throw new ApiError(400,"name and description are required");
    }
    let playlist = await Playlist.create({
        name: name.trim(),
        description: description.trim(),
        owner: req.user?._id
    })
    if(!playlist) {
        throw new ApiError(400, "Something went wrong while creating playlist")
    }
    return res
    .status(201)
    .json(new ApiResponse(201, playlist, "Playlist created successfully"))
    //TODO: create playlist
})

const getUserPlaylists = asyncHandler(async (req, res) => {
    const {userId} = req.params
    if(!isValidObjectId(userId))
    {
        throw new ApiError(400,"user id is not valid")
    }

const playlist = await PlayList.aggregate([
    {
    $match : {
        owner: new mongoose.Types.ObjectId(userId)
    },
},
{
    $lookup:{
        from:"users",
        localField:"owner",
        foreignField:"_if",
        as:"owner",
        pipeline:[
            {
                $project:{
                    _id:0,
                    username:1,
                    fullName:1,
                    avatar:1
                }
            }
        ]
    }
},
{
    $addFields: {
        owner: {
            $arrayElemAt: ["$owner", 0]
        }
    }
}
])
if(!playlist) {
    throw new ApiError(400, "Something went wrong while fetching playlists")
}

const message = (playlist.length === 0)?"User has no playlists":"Playlists fetched successfully"

return res
.status(200)
.json(new ApiResponse(200, playlist, message))
    //TODO: get user playlists
})

const getPlaylistById = asyncHandler(async (req, res) => {
    const {playlistId} = req.params
    if(!isValidObjectId(playlistId))
    {
        throw new ApiError(400,"playList id is not found")
    }
    const playlist = await PlayList.aggregate([{
        $match:{
            _id: new mongoose.Types.ObjectId(playlistId)
        }
    },
{
    $lookup:{
        from:"users",
        localField:"owner",
        foreignField:"_id",
        as:"owner",

        pipeline:[{
            $project:{
                _id:0,
                username:1,
                fullName:1,
                avatar:1
            }
        }]
    },
   
},
{
    $addFields:{
        playlistOwner: {
            $arrayElemAt: ["$owner", 0]
        }
    }
}])
    //TODO: get playlist by id
})

const addVideoToPlaylist = asyncHandler(async (req, res) => {
    const {playlistId, videoId} = req.params
    if(!isValidObjectId(playlistId))
    {
          throw new ApiError(400,"playlist is not present")
    }
    if(!isValidObjectId(userId))
    {
          throw new ApiError(400,"user is not present")
    }
})

const removeVideoFromPlaylist = asyncHandler(async (req, res) => {
    const {playlistId, videoId} = req.params
    if(isValidObjectId(playlistId))
    {
        throw new ApiError(400,"playlistId not Found in removing video")
    }
   
    // TODO: remove video from playlist

})

const deletePlaylist = asyncHandler(async (req, res) => {
    const {playlistId} = req.params
    if(!isValidObjectId(playlistId))
    {
          throw new ApiError(400,"playlist is not present")
    }
    const playlist= PlayList.findById(playlistId)

    if(playlist?.owner.toString() !== req.user?._id.toString()) {
        throw new ApiError(400, "Unauthorised access")
    }
      
    const response = await Tweet.findByIdAndDelete(playlistId)

    if(!response) {
        throw new ApiError(400, "Something went wrong while deleting playlist")
    }

    return res
    .status(200)
    .json(new ApiResponse(200, response, "playlist deleted successfully"))
    // TODO: delete playlist
})

const updatePlaylist = asyncHandler(async (req, res) => {
    const {playlistId} = req.params
    const {name, description} = req.body
    if(!isValidObjectId(playlistId))
    {
          throw new ApiError(400,"playlist is not present")
    }
    //TODO: update playlist
    if(!name || !description)
    {
        throw new ApiError(400,"something went wrong while updting a playlist")
    }
    const newPlayList = await PlayList.findByIdAndUpdate(playlistId,{
        $set:{
        name:name,
        description:description
    }
    },{
        new:true
    })

})

export {
    createPlaylist,
    getUserPlaylists,
    getPlaylistById,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
    deletePlaylist,
    updatePlaylist
}
