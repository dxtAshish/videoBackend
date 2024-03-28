import React from 'react'
import Button from './Button'

import { useLogoutUser } from '../feature/AuthApi'
const LogoutComponent = () => {
    const handelLogout=(e)=>{
e.preventDefault();
     const response=useLogoutUser();
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
