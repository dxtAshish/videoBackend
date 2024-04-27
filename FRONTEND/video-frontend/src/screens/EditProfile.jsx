import React, { useState } from 'react';

function EditProfile() {
  const [avatar, setAvatar] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const handleAvatarUpdate = async (newAvatar) => {
    // Make API call to update avatar
    // Example: await updateAvatarApi(newAvatar);
    setAvatar(newAvatar);
  };

  const handleCoverImageUpdate = async (newCoverImage) => {
    // Make API call to update cover image
    // Example: await updateCoverImageApi(newCoverImage);
    setCoverImage(newCoverImage);
  };

  const handleFullNameUpdate = async (newFullName) => {
    // Make API call to update full name
    // Example: await updateFullNameApi(newFullName);
    setFullName(newFullName);
  };

  const handleEmailUpdate = async (newEmail) => {
    // Make API call to update email
    // Example: await updateEmailApi(newEmail);
    setEmail(newEmail);
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="mb-4">
        <input type='file' alt="Avatar" className="rounded-full w-20 h-20 object-cover" />
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md" onClick={() => handleAvatarUpdate(newAvatar)}>Change Avatar</button>
      </div>
      <div className="mb-4">
        <img src={coverImage} alt="Cover Image" className="w-full h-40 object-cover" />
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md" onClick={() => handleCoverImageUpdate(newCoverImage)}>Change Cover Image</button>
      </div>
      <div className="mb-4">
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="border border-gray-300 px-4 py-2 rounded-md w-full" />
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md" onClick={() => handleFullNameUpdate(fullName)}>Update Full Name</button>
      </div>
      <div className="mb-4">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-300 px-4 py-2 rounded-md w-full" />
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md" onClick={() => handleEmailUpdate(email)}>Update Email</button>
      </div>
    </div>
  );
}

export default EditProfile;
