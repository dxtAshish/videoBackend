import React, { useEffect } from 'react';
import axios from 'axios';

export const useRegisterUser = (data) => {
    useEffect(() => {
        const registerUser = async () => {
            try {
                const response = await axios.post("/users/register", data, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                    withCredentials: true,
                });
               
                console.log(response.data);
            } catch (error) {
             
                console.error("Error occurred while registering user:", error);
            }
        };

        registerUser();

        // Cleanup function if needed
        return () => {
            // cleanup code here
        };
    }, [data]); // Only re-run the effect if `data` changes
};
