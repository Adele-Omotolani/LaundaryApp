import React from "react";
import { FaStar } from "react-icons/fa";
import cloth from "../assets/cloth.png";
import collect from "../assets/collect.jpg"
import ironing from "../assets/ironing.jpg"
import washing from "../assets/washing.jpg";
import profile from "../assets/profile.png";
import delivery from "../assets/delivery.webp"
import { Link } from "react-scroll";
// import Header from "./Header";
import {
  MainPageBody,
  LandingPageBody,
  Service,
  Services2,
  CardsBox,
  Card,
  Btn,
  ReviewsBox,
  ReviewTxt,
  ReviewCardHolder,
  ReviewCard,
  ImgPic,
  ImgName,
  ReviewTxtP,
  ReviewImg,
  ReviewIcon,
  CardTxtHeader,
  ReviewCardM,
  CardImgSec,
  CardTxtSec,
  CardImg,
  CardTxt,
} from "../page/LandindgStyle"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import Aos from 'aos';
import "aos/dist/aos.css"
const LandingPage = () => {
  // const Nav = useNavigate()
  useEffect(()=>{
    Aos.init();
},[])
  return (
    <div>
      {/* <Header /> */}
      <MainPageBody>
        <LandingPageBody>
          <Services2 id="service">Our Various Services</Services2>

          <CardsBox>
          <Card data-aos="fade-right"  data-aos-duration="1000">
              <CardImgSec>
                <CardImg>
                  <img src={collect} alt="" />
                </CardImg>
              </CardImgSec>
              <CardTxtSec>
                <CardTxtHeader>We Collect</CardTxtHeader>
                <CardTxt>
                Schedule a pick-up or drop off
              You can schedule a pick-up from your home / office or drop off at our offices.
              Pick a time that fits your schedule.
                </CardTxt>
              </CardTxtSec>
            </Card>
            <Card data-aos="fade-right"  data-aos-duration="1000">
              <CardImgSec>
                <CardImg>
                  <img src={washing} alt="" />
                </CardImg>
              </CardImgSec>
              <CardTxtSec>
                <CardTxtHeader>We Wash</CardTxtHeader>
                <CardTxt>
                We wash your clothes with the latest technology and top stain removers.
                 We handle everything carefully and in an eco-friendly way, using safe,
                 suitable detergents.
                </CardTxt>
              </CardTxtSec>
            </Card>

            <Card data-aos="fade-right"  data-aos-duration="1000">
              <CardImgSec>
                <CardImg>
                  <img src={ironing} alt="" />
                </CardImg>
              </CardImgSec>
              <CardTxtSec>
                <CardTxtHeader>We Press</CardTxtHeader>
                <CardTxt>
                We use top-quality irons and techniques to press your clothes perfectly.
                We handle all fabrics with care, ensuring they are ironed at the right temperature.
                </CardTxt>
              </CardTxtSec>
            </Card>

            <Card data-aos="fade-right"  data-aos-duration="1000">
              <CardImgSec>
                <CardImg>
                  <img src={delivery} alt="" />
                </CardImg>
              </CardImgSec>
              <CardTxtSec>
                <CardTxtHeader>We Deliver</CardTxtHeader>
                <CardTxt>
                Speedily,
                We deliver to your home or your nearest store.
                Count on us to deliver your clothes on time.
                You can also pickup your cloth.
                </CardTxt>
              </CardTxtSec>
            </Card>
          </CardsBox>
          <Link to="Contact" offset={-30} smooth={true} duration={500}>
          <Btn>Contact us</Btn>
          </Link>
          <ReviewsBox id="Review">
            <ReviewTxt>Reviews</ReviewTxt>

            <ReviewCardHolder>
              <ReviewCard data-aos="fade-right"  data-aos-duration="1000">
                <ReviewTxtP>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis, nam!
                  </span>
                </ReviewTxtP>
                <ReviewImg>
                  <ImgPic>
                    <img src={profile} alt="" />
                  </ImgPic>
                  <ImgName>John Napel</ImgName>
                </ReviewImg>
                <ReviewIcon>
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                </ReviewIcon>
              </ReviewCard>

              <ReviewCardM data-aos="fade-right"  data-aos-duration="1000">
      
                <ReviewTxtP>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis, nam!
                  </span>
                </ReviewTxtP>
                <ReviewImg>
                  <ImgPic>
                    <img src={profile} alt="" />
                  </ImgPic>
                  <ImgName>John Napel</ImgName>
                </ReviewImg>
                <ReviewIcon>
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                </ReviewIcon>
              </ReviewCardM>

              <ReviewCard data-aos="fade-right"  data-aos-duration="1000">
                <ReviewTxtP>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis, nam!
                  </span>
                </ReviewTxtP>
                <ReviewImg>
                  <ImgPic>
                    <img src={profile} alt="" />
                  </ImgPic>
                  <ImgName>John Napel</ImgName>
                </ReviewImg>
                <ReviewIcon>
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                </ReviewIcon>
              </ReviewCard>
            </ReviewCardHolder>
          </ReviewsBox>
        </LandingPageBody>
      </MainPageBody>
    </div>
  );
};

export default LandingPage;
