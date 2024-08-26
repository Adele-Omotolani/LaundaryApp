import React, { useState } from 'react'

import { NavBox , NavHeader, SecondNavHeader, SecondNavBox} from './Nav'
import { MdArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

const NavigationBar = () => {

    const [ShowNav, setShowNav] = useState(true)

    const Display = ()=>{
        setShowNav(false)
    }
  return (
    <>
    {
        ShowNav?
        <NavBox>
        <NavHeader>
            <p>Where Next?</p><MdArrowBackIos cursor="pointer" onClick={Display} size={30}/>
        </NavHeader>
    </NavBox>:
        <SecondNavBox>
            <SecondNavHeader>
            <MdOutlineArrowForwardIos cursor="pointer" onClick={()=> setShowNav(true)} size={30}/>
            </SecondNavHeader>
        </SecondNavBox>
        
    }
    </>
    
  )
}

export default NavigationBar