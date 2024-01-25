import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/Cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
const genrateAccessTokenAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.genrateAccessToken();
    const refreshToken = user.genrateRefreshToken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "something went wrong while genrateing access and refresh token"
    );
  }
};

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, username, email, password } = req.body;
  if (
    [fullName, username, email, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "all fields are required");
  }
  const existedUser = await User.findOne({ $or: [{ username }, { email }] });
  if (existedUser) {
    throw new ApiError(409, "user with username or eamil already exist");
  }
  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;
  if (!avatarLocalPath) {
    throw new ApiError(400, "avatar file is required");
  }
  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!avatar) {
    throw new ApiError(400, "avatar file is required");
  }
  const user = await User.create({
    fullName,
    username: username.toLowerCase(),
    email,
    password,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
  });
  const createdUser = await User.findOne(user._id).select(
    "-password -refreshToken"
  );
  if (!createdUser) {
    throw new ApiError(500, "something went wrong while rsgistering user");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "user register successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, username, password } = req.body;
  if (!username && !email) {
    throw new ApiError(400, "email or username is required");
  }
  const user = await User.findOne({ $or: [{ username }, { email }] });
  if (!user) {
    throw new ApiError(404, "user does not found");
  }
  const isValidPassword = await user.isPasswordCorrect(password);
  if (!isValidPassword) {
    throw new ApiError(401, "password incorrect");
  }
  const { accessToken, refreshToken } = await genrateAccessTokenAndRefreshToken(
    user._id
  );
  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  const options = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "user Logged in succesFully"
      )
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    {
      new: true,
    }
  );
  const options = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "user Loggedout"));
});
///refresh token
const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken =
    req.body.refreshToken || req.cookies.refreshToken;
  if (!incomingRefreshToken) {
    throw new ApiError(401, "unauthrized request in refreshing");
  }
  const decodedToken = jwt.verify(
    incomingRefreshToken,
    process.env.REFRESH_TOKEN_SECRET
  );
  const user = User.findById(decodedToken?._id);
  if (!user) {
    throw new ApiError(401, "invalid refresh user");
  }
  if (incomingRefreshToken !== user?.refreshToken) {
    throw new ApiError(401, "refresh Token is used or expire");
  }
  const options = {
    httpOnly: true,
    secure: true,
  };
  const { accessToken, newRefreshToken } =
    await genrateAccessTokenAndRefreshToken(user._id);
  res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refrehToken", newRefreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          accessToken,
          refreshToken: newRefreshToken,
        },
        "accestoken refreshed"
      )
    );
});
const changeCurrentPassword = asyncHandler(async(req,res) =>{

  const {oldPassword,newPassword}=req.body
 const user = await User.findById(req.user._id)

 const isPasswordCorrect= await oldPassword.isPasswordCorrect(oldPassword);
 if(!isPasswordCorrect)
 {
 throw new ApiError(400,"invalid Password")
 }
 user.password=newPassword;
 await user.save({validateBeforSave:false})
 return res.status(200).json(new ApiResponse(200,{},"password Changed successfully"))
});
const getCurrentUser = asyncHandler(async(req,res)=>{
  return res.status(200).json(new ApiResponse(200,req.user,"current user fetched"))
})
const updateAccountDetails = asyncHandler(async(req,res)=>{
  const {fullName,email} = req.body
  if(!fullName || !email)
  {
    throw new ApiError(400,"all fields are required")
  }
  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $set:{
        fullName,
        email,
      }
    },
    {
     new:true
    }).select("-password")
    return res.status(200).json(new ApiResponse(200,user,"account updated"))
});
 const updateUserAvatar = asyncHandler(async(req,res)=>{
  const avatarLocalPath = req.file?.path
  if(!avatarLocalPath)
  {
    throw new ApiError(400, "avatar file path is not availble")
  }
  const avatar = await uploadOnCloudinary(avatarLocalPath)
  
  if(!avatar.url){
    throw new ApiError(400, "avatar file url is not availble")
  }
 const user= await findByIdAndUpdate(req.user?._id,{
  $set:{
    avatar:avatar.url
  }
 },{new:true}).select("-password")
 return res.status(200).json(new ApiResponse(200,user,"avatar image update successfully"))

 })
 const updateUserCoverImage = asyncHandler(async(req,res)=>{
  const coverImageLocalPath = req.file?.path
  if(!coverImageLocalPath)
  {
    throw new ApiError(400, "cover Image path is not availble")
  }
  const coverImage = await uploadOnCloudinary(coverImageLocalPath)
  
  if(!coverImage.url){
    throw new ApiError(400, "cover Image file url is not availble")
  }
 const user= await findByIdAndUpdate(req.user?._id,{
  $set:{
    coverImage:coverImage.url
  }
 },{new:true}).select("-password")
 return res.status(200).json(new ApiResponse(200,user,"cover image update successfully"))
 })
  const getUserChannelProfile = asyncHandler(async(req,res)=>{
    const {username} =req.params
    if(!username?.trim())
    {
      throw new ApiError(400,"username is missing")
    }
  const channel= await User.aggregate([
      {
        $match:{
          username:username.toLowerCase()
        }
      },
      {
        $lookup:{
          from:"subscriptions",
          localField:"_id",
          foreignField:"channel",
          as:"subscribers"
        }
      },
      {
        $lookup:{
          from:"subscriptions",
          localField:"_id",
          foreignField:"subscriber",
          as:"subscribedTo"
        }
      },
      {
        $addFields:{
          subscribersCount:{
            $size:"$subscribers"
          },
          channelSubscribedToCount:{
            $size:"$subscribedTo"
          },
          isSubscribed:{
            $cond:{
              if:{$in:[req.user?._id,"$subscribers.subscriber"]},
              then : true,
              else: false

            }
          }
        }
      },
      {
        $project:{
          username:1,
          fullName:1,
          avatar:1,
          coverImage:1,
          subscribersCount:1,
          channelSubscribedToCount:1,
          isSubscribed:1,
          email:1
        }
      }

    ])
    if(!channel?.length)
    {
      throw new ApiError(404,"channel does not exist")
    }
    return res.status(200).json(new ApiResponse(200,channel[0],"user channel fetched successfully"))
  })
const getWatchHistory= asyncHandler(async(req,res)=>{
  const user = User.aggregate([
    {
      $match:{
        _id:new mongoose.Types.ObjectId(req.user._id)
      }
    },
    {
      $lookup:{
        from:"videos",
        localField:"watchHistory",
        foreignField:"_id",
        as:"watchHistory",
        pipeline:[
          {
            $lookup:{
              from:"users",
              localField:"owner",
              foreignField:"_id",
              as:"owner",
              pipeline:[
                {
                  $project:{
                    fullName:1,
                    username:1,
                    avatar:1
                  }
                }
              ]
            }
          },
          {
            $addFields:{
              owner:{
                $first:"$owner"
              }
            }
          }
        ]
      }
    }
  ])
  return res.status(200).json(new ApiResponse(200,user[0].watchHistory,"get watch history succefully"))
})

export { registerUser, loginUser, logoutUser, refreshAccessToken,
   changeCurrentPassword, getCurrentUser,updateAccountDetails, 
   updateUserAvatar,updateUserCoverImage, getUserChannelProfile,getWatchHistory  };
