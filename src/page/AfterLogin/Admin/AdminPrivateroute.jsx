import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AdminPrivateroute = () => {
  const admin = localStorage.getItem("isAdmin")
  return (
    <>
    {
        admin == "true" ?
        <Outlet/>
       : <Navigate to={"/login"} />
    }
    </>
  )
}

export default AdminPrivateroute