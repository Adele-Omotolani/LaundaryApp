import React from 'react'
import { Displaypage } from './Nav';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Layout from './Layout';
import ShowSha from './ShowSha';
  const router =
  createBrowserRouter([
    // {
    //   path: "/",
    //   element:(<Layout/>),
    //   children:[
        {
        path:"/",
        element:<ShowSha/>
        }
    // ]
    // }
])
  
const Display = () => {
  return (
    <Displaypage>
        
      <RouterProvider router={router}/>
    </Displaypage>
  )
}

export default Display