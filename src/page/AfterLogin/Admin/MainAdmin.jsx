import React from 'react'
import styled from 'styled-components'
import TheAdminPage from './TheAdminPage'
import TheSideBar from './TheSideBar'

const MainAdmin = () => {
  return (
    <MainAdminHolder>
        <TheSideBar/>
        <TheAdminPage/>
    </MainAdminHolder>
  )
}

export default MainAdmin


const MainAdminHolder = styled.div`
    height: 100vh;
    width: 100%;
    /* background-color: #b4b4ae; */
    background-color: white;
    display: flex;

`