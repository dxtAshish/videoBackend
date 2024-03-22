import {v2 as cloudinary} from 'cloudinary';
import fs from "fs"          
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
});

const uploadOnCloudinary =async (localFilePath)=>{
    try {
        console.log("here 11")
        if(!localFilePath)return null; 
        const response= cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        }, (error, result) => {
            if (error) {
                console.error("Error uploading file:", error);
                // Handle error appropriately, e.g., return null or throw an error
            } else {
                console.log("Upload successful:", result);
                // Do something with the result, such as storing it in a database
            }
        })
        console.log("heer 16",response)
        // fs.unlink(localFilePath)
        return response
    } catch (error) {
        fs.unlink(localFilePath)
        return null;
    }
}
const destroyOnCloudinary = async (url, resourceType = "image") => {

    try {
        if(!url) {
            throw new ApiError(400, "Url is empty")
        }

        const publicId = extractPublicId(url)

        // console.log("Url - ", url)
        // console.log("Public Id - ", publicId);
     
        await cloudinary.uploader
        .destroy(publicId, {resource_type: resourceType})
        .then((result) => {
            console.log(result);
        });
        return;

    } catch (error) {
        console.log("There is some problem in deleting data from cloudinary");
        throw new ApiError(400, error)
    }
}
export {uploadOnCloudinary,destroyOnCloudinary}