import React, { useState } from "react";
import Button from "../component/Button";
import VideoModal from "../component/VideoModal";
export const VideoUpload = () => {
  const [videoUpload,setVideoUpload]=useState(false)
  const handleVideoModal =()=>{
    setVideoUpload(!videoUpload)
  }
  return (
    <div>
      {videoUpload?<VideoModal/>:<div>nothing</div>}
      <Button
       bgColor="bg-dark-1"
       textColor="text-light-1"
       type="submit"
       className="w-full"
       onClick={handleVideoModal}
      >
        upload Video
      </Button>
    </div>
  );
};
