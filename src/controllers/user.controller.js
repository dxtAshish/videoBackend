import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/Cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js"
 const registerUser = asyncHandler(async (req,res)=>{
 

    const {fullName,username,email,password}=req.body
    if([fullName,username,email,password].some((field)=>
      field?.trim()===""
    ))
    {
       throw new ApiError(400,"all fields are required")
    }
    const existedUser =await User.findOne({$or:[{username},{email}]})
    if(existedUser){
      throw new ApiError(409,"user with username or eamil already exist")
    }
   const avatarLocalPath= req.files?.avatar[0]?.path;
   const coverImageLocalPath= req.files?.coverImage[0]?.path;
   if(!avatarLocalPath)
   {
      throw new ApiError(400,"avatar file is required" )
   }
 const avatar=  await uploadOnCloudinary(avatarLocalPath)
 const coverImage=  await uploadOnCloudinary(coverImageLocalPath)

  if(!avatar)
   {
      throw new ApiError(400,"avatar file is required" )
   }
   const user = await User.create({
      fullName,
      username: username.toLowerCase(),
      email,
      password,
      avatar:avatar.url,
      coverImage:coverImage?.url || ""
   })
   const createdUser =await User.findOne(user._id).select("-password -refreshToken")
   if(!createdUser)
   {
      throw new ApiError(500, "something went wrong while rsgistering user")
   }
   return res.status(201).json(new ApiResponse(200,createdUser,"user register successfully"))
 })

 export default registerUser