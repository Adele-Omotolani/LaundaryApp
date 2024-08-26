import React from 'react'
import styled from 'styled-components'
import Loading from '../../assets/Loadplease.gif'

const Load = () => {
  return (
    <LoadingBody>
        <HoldTheLoadingImage>
            <img src={Loading} alt="" />
        </HoldTheLoadingImage>
    </LoadingBody>
  )
}

export default Load

const HoldTheLoadingImage = styled.div`
    height: 270px;
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img{
        height: 100%;
        width: 100%;
    }
`

const LoadingBody = styled.div`
    height: 100vh;
    width: 100%;
    background: #00B7F1;
    display: flex;
    justify-content: center;
    align-items: center;
`
