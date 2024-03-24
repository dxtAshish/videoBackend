import React from 'react'
import Button from './Button'
import axios from 'axios'
const LogoutComponent = () => {
    const handelLogout=(e)=>{
e.preventDefault();
     const response=axios.post("http://localhost:8000/api/v1/users/logout")
     console.log(response);
    }
  return (
    <div>
      <Button
        bgColor="bg-dark-1"
        textColor="text-light-1"
        className="w-full"
        onClick={handelLogout}
        >
        Logout
      </Button>
    
    </div>
  )
}

export default LogoutComponent
