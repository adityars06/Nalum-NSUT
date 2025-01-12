import {createContext, React, useContext, useState} from 'react'

const DefaultUserContext = {
  name: '',
  title:'',
  aboutMe: '',
  socialLinks: {
    linkedin: '',
    insta: '',
    facebook: '',
    youtube: '',
    twitter: '',
  },
  tags: [],
  experience: [],
};

const UserContext=createContext(DefaultUserContext);

const UserProvider=({children})=>{
  const [user,setUser]=useState(DefaultUserContext)
  return(
    <UserContext.Provider value={{user,setUser}}>
    {children}
    </UserContext.Provider>
  )
  
}

export const useInfo=()=>{
  return useContext(UserContext)
}

export default UserProvider