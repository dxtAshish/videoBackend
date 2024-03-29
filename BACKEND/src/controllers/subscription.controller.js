import mongoose, {isValidObjectId} from "mongoose"
import {User} from "../models/user.model.js"
import { Subscription } from "../models/subscription.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"


const toggleSubscription = asyncHandler(async (req, res) => {
    const {channelId} = req.params
    if(!isValidObjectId(channelId) || !channelId.trim()) {
        throw new ApiError(200, "Channel Id is invalid")
    }
    
    const channel = await User.findById(channelId)

    if(!channel) {
        throw new ApiError(400, "Channel does not exists")
    }

    // Check channel is subscribed by user or not
    const isSubscribed = await Subscription.findOne({
        subscriber: req.user?._id,
        channel: channelId.trim()
    })

    let isSubscribedOrNot;

    try {
        if(isSubscribed) {
            // Unsubscribe
            await Subscription.deleteOne({
                subscriber: req.user?._id,
                channel: channelId.trim()
            })
    
            isSubscribedOrNot = false;
    
        } else {
            // subscribe
            await Subscription.create({
                subscriber: req.user?._id,
                channel: channelId.trim()
            })
    
            isSubscribedOrNot = true;
        }
    } catch (error) {
        throw new ApiError(400, "Something went wrong while subscribing or unsubscribing || error")
    }

    let message = isSubscribedOrNot? "Channel subscribed successfully" : "Channel unsubscribed successfully"

    const channelDetails = await User.aggregate([
        {
            $match: {
                _id: new mongoose.Types.ObjectId(channelId)
            }
        },
        {
            $project: {
                username: 1,
                fullname: 1
            }
        }
    ])

    return res
    .status(200)
    .json(new ApiResponse(200, channelDetails, message))
    // TODO: toggle subscription
})

// controller to return subscriber list of a channel
const getUserChannelSubscribers = asyncHandler(async (req, res) => {
    const { userId } = req.params
    if(!isValidObjectId(userId) || !userId.trim()) {
        throw new ApiError(400, "userId is invalid")
    }

    const user = await User.findById(userId)

    if(!user) {
        throw new ApiError(400, "user does not exists")
    }

    const subscribers = await Subscription.aggregate([
        {
            $match: {
                channel: new mongoose.Types.ObjectId(userId)
            }
        },
        {
            $lookup: {
                from: "users",
                localField: "subscriber",
                foreignField: "_id",
                as: "subscriberDetails",
                pipeline: [
                    {
                        $project: {
                            username: 1
                        }
                    }
                ]
            }
        },
        {
            $addFields: {
                subscribers: {
                    $first: "$subscriberDetails"
                }
            }
        },
        {
            $project: {
                subscribers: 1,
                _id: 0
            }
        },
        {
            $replaceRoot: {
                newRoot: "$subscribers"
            }
        }
    ])

    if(!subscribers) {
        throw new ApiError(400, "Some went wrong while fetching subscribed channel")
    }

    return res
    .status(200)
    .json(new ApiResponse(200, subscribers, "User subscribers fetched successfully"))
})

// controller to return channel list to which user has subscribed
const getSubscribedChannels = asyncHandler(async (req, res) => {
    const { userId } = req.params
    if(!isValidObjectId(userId) || !userId.trim()) {
        throw new ApiError(400, "userId is invalid")
    }

    const user = await User.findById(userId)

    if(!user) {
        throw new ApiError(400, "User not exists")
    }

    const channelsSubscribed = await Subscription.aggregate([
        {
            $match: {
                subscriber: new mongoose.Types.ObjectId(userId)
            }
        },
        {
            $lookup: {
                from: "users",
                localField: "channel",
                foreignField: "_id",
                as: "channelDetails",
                pipeline: [
                    {
                        $project: {
                            username: 1,
                            fullName: 1
                        }
                    }
                ]
            }
        },
        {
            $addFields: {
                channels: {
                    $first: "$channelDetails"
                }
            }
        },
        {
            $project: {
                channels: 1,
                _id: 0
            }
        }
    ])

    if(!channelsSubscribed) {
        throw new ApiError(400, "Some went wrong while fetching subscribed channel")
    }

    return res
    .status(200)
    .json(new ApiResponse(200, channelsSubscribed, "User channel subscribed list fetched successfully"))
})

export {
    toggleSubscription,
    getUserChannelSubscribers,
    getSubscribedChannels
}
