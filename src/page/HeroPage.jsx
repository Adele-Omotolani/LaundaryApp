import React from "react";
import womansmell from "../assets/womansmell.webp"
import ironing from "../assets/ironing.jpg"
import more from "../assets/more.jpg";
import washingMachine from "../assets/washingMachine.jpeg";
// import 'animate.css';

import Aos from 'aos';
import "aos/dist/aos.css"
import {
  HeroPageContainer,
  HeropPageUp,
  HeroPageDown,
  HeroPageText,
  HeroPageImage,
  TextUp,
  TextDown,
  HeroPageDownImage,
  HeroPageDownText,
  HeroPageImageLeft,
  HeroPageImageRight,
  HeropageRightUp,
  HeropageRightDown,
} from "./HeroStyle";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const HeroPage = () => {
  const Nav = useNavigate();
  useEffect(()=>{
    Aos.init();
},[])
  return (
    <HeroPageContainer>
      <HeropPageUp id="hero">
        <HeroPageText id="about">
          <TextUp>
            <h2> Your Laundry, Done for You.</h2>
          
            <p>
            No More Laundry problems or difficulties!.
            Say goodbye to laundry day stress and hello to fresh,clean clothes.
            </p>
            <p> Want the laundry service?</p>
            <button onClick={() => Nav("/signup")}>Get Started</button>
          </TextUp>
          <TextDown></TextDown>
        </HeroPageText>
        {/* <HeroPageImage>
                <img src={ThisImage} alt="" />
            </HeroPageImage> */}
      </HeropPageUp>
      <HeroPageDown 
     >
        <HeroPageDownImage >
      
          <HeroPageImageLeft   data-aos="fade-right"    data-aos-duration="1000">
            <img src={washingMachine} alt="" />
          </HeroPageImageLeft>
          <HeroPageImageRight>
            <HeropageRightUp   data-aos="fade-right"    data-aos-duration="1000">
              <img src={womansmell} alt="" />
            </HeropageRightUp>
            <HeropageRightDown   data-aos="fade-right"    data-aos-duration="1000">
              <img src={ironing} alt="" />
            </HeropageRightDown>
          </HeroPageImageRight>
        </HeroPageDownImage>
        <HeroPageDownText data-aos="fade-left"    data-aos-duration="1000">
        
          <h4>About Us</h4>
          <h1>Welcome to Aqua Clean laundry services</h1>
          <p>
          
            We're dedicated to making laundry
           day stress-free with top-notch, convenient, and eco-friendly solutions. 
           Our mission is to save you time and provide peace of mind. Our journey started with
            the simple idea of removing the hassle from laundry, understanding how busy life can get. 
           Our team is passionate
           about delivering exceptional service so you never have to worry about laundry again.
          </p>
        </HeroPageDownText>
      </HeroPageDown>
    </HeroPageContainer>
  );
};

export default HeroPage;
