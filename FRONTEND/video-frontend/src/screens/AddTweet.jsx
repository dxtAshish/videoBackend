import React, { useState } from 'react';

const AddTweet = () => {
    const [content, setContent] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(content)
        setContent(''); // Clear the content after submission
    };
    

    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-semibold mb-4 text-center">Compose Tweet</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                    <textarea 
                        value={content} 
                        onChange={(e) => setContent(e.target.value)} 
                        rows="5" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        placeholder="What's happening?" 
                        required 
                    />
                </div>

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Tweet</button>
            </form>
        </div>
    );
};

export default AddTweet;
