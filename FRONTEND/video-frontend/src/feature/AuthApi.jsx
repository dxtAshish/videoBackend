import React, { useEffect } from 'react';
import axios from 'axios';


export const useRegisterUser = async (data) => {
            try {
                const response = await axios.post(`${import.meta.VITE_BACKEND_URL}users/register`, data, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                    withCredentials: true,
                });
               
                console.log(response.data);
                return response.data
            } catch (error) {
             
                console.error("Error occurred while registering user:", error);
            }
};
export const useLoginUser=async(data)=>{
    try {
        const response = await axios.post(`${import.meta.VITE_BACKEND_URL}users/login`, data, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });
       
        console.log(response.data);
        return response.data
    } catch (error) {
     
        console.error("Error occurred while registering user:", error);
    }
}
export const useLogoutUser=async()=>{
    try {
        const response = await axios.post(`${import.meta.VITE_BACKEND_URL}users/logout`, data, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });
       
        console.log(response.data);
        return response;
    } catch (error) {
     
        console.error("Error occurred while registering user:", error);
    }
}
export const useGetCurrentUser=async()=>{
  try {
    const response=await axios.get(`${import.meta.env.VITE_BACKEND_URL}users/current-user`,{
        withCredentials:true
    })
    console.log(response);
    return response.data
  } catch (error) {
    console.log("some error occured on fetching current user",error)
  }
}
export const useGetUserChannelProfile = async (username) => {
    try {
        const response=await axios.get(`${import.meta.env.VITE_BACKEND_URL}users/c/${username}`,{
            withCredentials:true
        })
        console.log(response);
        return response.data;
      } catch (error) {
        console.log("some error occured on fetching current user",error)
      }
    }
  