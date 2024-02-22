import React, { useState } from "react";

const AddVideoForm = () => {
  const [videoTitle, setVideoTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // You can handle form submission here, for now, let's log the form data
    console.log({
      videoTitle,
      description,
      videoFile,
      thumbnail,
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">Add Video</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label
            htmlFor="videoTitle"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Video Title:
          </label>
          <input
            type="text"
            id="videoTitle"
            name="videoTitle"
            value={videoTitle}
            onChange={(e) => setVideoTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="videoFile"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Upload Video:
          </label>
          <input
            type="file"
            id="videoFile"
            name="videoFile"
            onChange={(e) => setVideoFile(e.target.files[0])}
            accept="video/*"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="thumbnail"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Upload Thumbnail:
          </label>
          <input
            type="file"
            id="thumbnail"
            name="thumbnail"
            onChange={(e) => setThumbnail(e.target.files[0])}
            accept="image/*"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddVideoForm;
