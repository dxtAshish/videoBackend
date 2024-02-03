import {v2 as cloudinary} from 'cloudinary';
import fs from "fs"          
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
});

const uploadOnCloudinary =async (localFilePath)=>{
    try {
        if(!localFilePath)return null; 
     const response= cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        })
        fs.unlink(localFilePath)
        return response
    } catch (error) {
        fs.unlink(localFilePath)
        return null;
    }
}
const deleteByCloudinary =async (cloudinaryUrl)=>{
    try {
        if(!cloudinaryUrl) return null;

         const response=cloudinary.uploader.destroy(cloudinaryUrl)
        
    } catch (error) {
        
    }
}
export {uploadOnCloudinary,deleteByCloudinary}