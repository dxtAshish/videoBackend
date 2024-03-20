import React, { useState } from 'react';

export const LoginComponent = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter your username' name='username' onChange={handleChange} value={formData.username} />
            <input type="text" placeholder='Enter your email' name='email' onChange={handleChange} value={formData.email} />

            <input type="password" placeholder='Enter your password' name='password' onChange={handleChange} value={formData.password} />
            <button type="submit">Submit</button>
        </form>
    );
};
