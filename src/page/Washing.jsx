import React from 'react'
import { RiArrowDownWideFill } from "react-icons/ri";
import { WashingContainer,WashingDropDown,WashingFold,WashCart } from './WashingStyle'
import WashingCards from './WashingCards';
const Washing = () => {
  return (
    <WashingContainer>
        <WashingDropDown>
            <WashingFold>
            <p>Wash and Fold</p>
            <RiArrowDownWideFill size={35}/>
            </WashingFold>
        </WashingDropDown>
        < WashCart>
        <WashingCards/>
        </WashCart>
    </WashingContainer>
  )
}

export default Washing