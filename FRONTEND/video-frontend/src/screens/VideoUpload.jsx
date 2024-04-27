import React, { useState } from "react";
import axios from "axios";

const VideoUpload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleVideoFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleThumbnailFileChange = (e) => {
    setThumbnailFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("video", videoFile);
      formData.append("thumbnail", thumbnailFile);

      const response = await axios.post("/api/videos", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Video published successfully:", response.data);
      // Reset form fields after successful upload
      setTitle("");
      setDescription("");
      setVideoFile(null);
      setThumbnailFile(null);
    } catch (error) {
      console.error("Error publishing video:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Publish Video</h1>
      <form onSubmit={handleSubmit}>
        
      <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="video">
            Video File
          </label>
          <input
            className="border border-gray-300 rounded-lg"
            type="file"
            id="video"
            accept="video/*"
            onChange={handleVideoFileChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="thumbnail">
            Thumbnail File
          </label>
          <input
            className="border border-gray-300 rounded-lg"
            type="file"
            id="thumbnail"
            accept="image/*"
            onChange={handleThumbnailFileChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
        
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export {VideoUpload};
