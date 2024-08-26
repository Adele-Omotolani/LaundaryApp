import React from 'react'
import styled from 'styled-components'
import sucess from '../../assets/sucess.png'
import here from '../../assets/QRCODE.png'
import { RiCloseLargeFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const PayPlace = () => {
    const Nav = useNavigate()

  return (
    <PayPlaceBody>
        <ThisPayHeader>
            <RiCloseLargeFill size={35} cursor="pointer" onClick={() => Nav("/afterlogin")}/>
        </ThisPayHeader>
        <TransactionBox>
            <UpPart>
            <HoldImag>
                <img src={sucess} alt="" />
            </HoldImag>
            <h1>Payment Successful</h1>
            </UpPart>
            <DownPage>
                <h3>Thank You for Choosing us</h3>
                <p>Please leave us a review</p>
                <QrBox>
                    <img src={here} alt="" />
                    {/* <textarea ></textarea> */}
                </QrBox>
            </DownPage>
        </TransactionBox>
    </PayPlaceBody>
  )
}

export default PayPlace

// const ThisPayHeader = styled.div`
    
// `
const ThisPayHeader = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    padding-right: 30px;
    padding-top: 10px;
    justify-content: flex-end;
`
const QrBox = styled.div`
    height: 300px;
    width:100%;
    background: #000;

    img{
        height: 100%;
        width: 100%;
    }
    /* textarea{
        height: 100%;
        width: 100%;
        outline: 0px;
    } */
`
const DownPage = styled.div`
    height: 58%;
    width: 100%;
    /* background: pink; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    
    h3{
        font-size: 28px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    }
    p{
        font-size: 16px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
`
const UpPart = styled.div`
height: 40%;
width: 100%;
/* background: yellow; */
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
    h1{
        font-size: 40px;
        color: #2196f3;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    
`
const HoldImag = styled.div`
height: 100px;
width: 100px;
/* background: #000; */

img{
    height: 100%;
    width: 100%;
}
    
`
const TransactionBox = styled.div`
    height: 80%;
    width: 40%;
    /* background: #2196F3; */
    background: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const PayPlaceBody = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #dcdceb;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
`
