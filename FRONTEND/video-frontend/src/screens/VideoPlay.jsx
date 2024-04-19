import React from "react";

import VideoCard from "../component/VideoCard"
import ReactPlayer from "react-player";
export const VideoPlay = () => {
  const videos = [
    {
      title: "this is video",
    },
    {
      title: "this is second video",
    },
    {
      title: "this is  third video",
    },
    {
      title: "this is fourth video",
    },
    {
      title: "this is fifth video",
    },
    {
      title: "this is video",
    },
    {
      title: "this is second video",
    },
    {
      title: "this is  third video",
    },
    {
      title: "this is fourth video",
    },
    {
      title: "this is fifth video",
    },
  ];

  return (
    <div className="flex flex-col mt-4 ">
      <div className="p-4 ">
        <ReactPlayer
          controls={true}
          url="https://res.cloudinary.com/demo/video/upload/fl_splice,l_video:ski_jump/e_reverse/fl_layer_apply/fl_splice,l_video:ski_jump/e_accelerate:-50/fl_layer_apply/c_scale,w_400/r_max/ski_jump.mp4"
          width="640px"
          height="360px"
        />
      </div>
      <div className="flex flex-row flex-wrap justify-between ">
        {videos.map((item, index) => (
          <VideoCard key={index} title={item.title} />
        ))}
      </div>
    </div>
  );
};
