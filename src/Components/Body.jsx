import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux';

const Body = () => {

 
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



  return (
    <div>
        <RouterProvider router={routes}/>
    </div>
  )
}

export default Body