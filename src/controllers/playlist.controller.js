import mongoose, {isValidObjectId} from "mongoose"
import {PlayList, Playlist} from "../models/playlist.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"


const createPlaylist = asyncHandler(async (req, res) => {
    const {name, description} = req.body
    if(!name || !description)
    {
        throw new ApiError(400,"name and description are required");
    }
   
    //TODO: create playlist
})

const getUserPlaylists = asyncHandler(async (req, res) => {
    const {userId} = req.params
    //TODO: get user playlists
})

const getPlaylistById = asyncHandler(async (req, res) => {
    const {playlistId} = req.params
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
