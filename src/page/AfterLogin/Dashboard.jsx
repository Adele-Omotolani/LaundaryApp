import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Load from './Load'
import Logo from '../../assets/Logos.jpg'
import { useNavigate } from 'react-router-dom'

const DashBoard = () => {
    const Nav = useNavigate()
    const [toggle, setToggle] = useState(true)
    useEffect(()=>{
        setTimeout(() => {
            setToggle(false)
        }, 3000);
    })
  return (
    <>
    {
        toggle? <Load/>:
        <DashBoardHolder>
            <DashHeader>
                <LogoBox>
                    <img src={Logo} alt="" />
                </LogoBox>
                <UserBox>
                    <button onClick={()=>Nav("/afterlogin")}>Back to Home</button>
                </UserBox>
               
            </DashHeader>
            <DashBody>
                
            <ActiveHolder>
                    <h3>Active Orders</h3>
                </ActiveHolder>
                <HoldHisProfile>
                    <HoldNumber>
                        <h6>S/N</h6>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                    </HoldNumber>
                   
                    < UserOrder>
                    <h6>Order</h6>
                        <p>shirt</p>
                        <p>jean</p>
                        <p>bedsheet</p>
                        <p>white</p>
                    </ UserOrder>
                    <Quantity>
                    <h6>Quantity</h6>
                        <p>4</p>
                        <p>5</p>
                        <p>8</p>
                        <p>10</p>
                    </ Quantity>
                    < Amount>
                    <h6>Amount</h6>
                        <p>200</p>
                        <p>400</p>
                        <p>1000</p>
                        <p>1500</p>
                    </ Amount>
                    <DateInfo>
                        <h6>Date</h6>
                        <p>11/07/2024</p>
                        <p>26/06/2024</p>
                        <p>10/06/2024</p>
                        <p>09/04/2024</p>
                    </DateInfo>
                    <TimeInfo>
                        <h6>Time</h6>
                        <p>11:50am</p>
                        <p>13:32pm</p>
                        <p>17:14pm</p>
                        <p>08:28am</p>
                    </TimeInfo>
                    <CurrentStatus>
                        <h6>Order Status</h6>
                        <p>Pending</p>
                        <p>Confirmed</p>
                        <p>Confirmed</p>
                        <p>Confirmed</p>
                    </CurrentStatus>
                </HoldHisProfile>
            </DashBody>
        </DashBoardHolder>
    }
    </>
  )
}

export default DashBoard

const UserOrder = styled.div`
 height: 100%;
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    h6{
        font-size: 30px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    p{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 20px;
    }
`
const Amount= styled.div`
 height: 100%;
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    h6{
        font-size: 30px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    p{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 20px;
    }
`
const Quantity= styled.div`
 height: 100%;
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    h6{
        font-size: 30px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    p{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 20px;
    }
`
const HoldNumber= styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    h6{
        font-size: 30px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    p{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 20px;
    }
`
const DateInfo= styled.div`
    height: 100%;
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    h6{
        font-size: 30px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    p{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 20px;
    }

`
const TimeInfo= styled.div`
    height: 100%;
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    h6{
        font-size: 30px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    p{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 20px;
    }


`
const CurrentStatus= styled.div`
    height: 100%;
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    h6{
        font-size: 30px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    p{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 20px;
    }
    
`
const HoldHisProfile= styled.div`
    height: 40vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const DashBody= styled.div`
    height: 87vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`
const ActiveHolder= styled.div`
    height: 10vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    h3{
        font-size: 45px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
`
const UserBox= styled.div`
    height: 100%;
    width: 370px;
    display: flex;
    justify-content: center;
    align-items: center;

    button{
        height: 50px;
        width: 200px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 20px;
        color: white;
        border: none;
        background-color: #2196f3;
        border-radius: 6px;
        cursor: pointer;

    }
`
const LogoBox= styled.div`
    height: 100%;
    width: 150px;

    img{
        height: 100px;
        width: 120px;
    }
`
const DashHeader= styled.div`
    height: 15vh;
    width: 100%;
    background: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const DashBoardHolder = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #000;
`
