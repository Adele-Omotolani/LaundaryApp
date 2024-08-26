import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const TheSideBar = () => {

    const Nav = useNavigate()
  return (
    <SideBarHolder>
        <SideHeader>
            <h1>
            Laundry Activities
            </h1>
        </SideHeader>
        <SideNav>
            <NavItself> <p>Admin Dashboard</p> </NavItself>
            {/* <NavItself> <p>Profile</p> </NavItself>
            <NavItself> <p>Settings</p> </NavItself> */}
            <NavItself onClick={()=>{Nav('/login')}}> <p>Logout</p> </NavItself>
        </SideNav>
    </SideBarHolder>
  )
}

export default TheSideBar
// const NavItself = styled.div`
// `
const NavItself = styled.div`
    height: 50px;
    width: 100%;
    color: white;
    border-radius: 6px;
    /* background: #43439d; */
    display: flex;
    justify-content: flex-start;
    padding: 20px;
    align-items: center;
    transition: all 350ms ease-in-out;

    &:hover{
        background-color: #43439d;
        transition: all 350ms ease-in-out;
        cursor: pointer;
    }

    p{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 17px;
    }
`
const SideNav = styled.div`
    height: 300px;
    width: 82%;
    /* background-color: black; */
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const SideHeader = styled.div`
    height: 47px;
    width: 100%;
    /* background: #000; */
    display: flex;
    align-items: flex-start;
    justify-content: center;
    
    h1{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: white;
        font-weight: 600;
    }
`
const SideBarHolder = styled.div`
    height: 100%;
    width: 22%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #25a9dd;
`