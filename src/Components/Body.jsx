import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../Utils/Firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
const Body = () => {
  const Dispatch=useDispatch();
 
  const routes=createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/browse",
      element: <Browse/>
    }
    
  ])

useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      Dispatch(addUser(uid))
      
      // ...
    } else {
    //  Dispatch(removeUser());
    }
  });
},[])

  return (
    <div>
        <RouterProvider router={routes}/>
    </div>
  )
}

export default Body