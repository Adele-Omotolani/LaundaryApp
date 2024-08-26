import React, { useState, useRef,useEffect } from "react";
import Logos from "../assets/Logos.jpg";
import styled from "styled-components";
import { RiMenuFold3Fill } from "react-icons/ri";
import { RiMenuFold4Fill } from "react-icons/ri";
import { HeaderContainer, HeaderLeft, HeaderRight, Logo } from "./HeaderStyle";
import { useNavigate } from "react-router-dom";
// import LandingPage from "./LandingPage";
import { Link } from "react-scroll";
import Aos from 'aos';
import "aos/dist/aos.css"

const Header = ({ userLogin}) => {
  // const first = () => {
  //   scroll.ScrollToTop();
  // };

  // const scrollAm = () => {
  //   scroller.scrollTo('aboutScroll', {
  //       containerId: containerId,
  //       smooth: true,
  //       offset: 50,
  //       duration: 1400
  //   })
  // };

  // const scrollMore = () => {
  //   scroll.scrollMore(400);
  // };

  // const scrollToBottom = () => {
  //   scroll.scrollToBottom();
  // };

  // const options = () => {
  //   duration: 500;
  //   smooth: true;
  // };

  // animateScroll.scrollToBottom(options);

  // const { scrollX, scrollY, scrollTo, scrollToEnd } = useScroll()

  //     const aboutUsRef = useState(null)
  //     const serviceRef = useRef(null);
  //     const reviewRef = useRef(null)
  //     const contactUsRef = useRef(null)

  // //   const handleAboutUsClick = () => {
  // //     aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
  // //   };

  //     const handleAboutUsClick = () => {
  //         aboutUsRef.current.scrollIntoView({ behaviour: "smooth"})
  //     }

  //     const handleServiceClick = () => {
  //         serviceRef.current.scrollIntoView({ behaviour: ""})
  //     }

  //     const handleReviewClick = () => {
  //         reviewRef.current.scrollIntoView({ behavior: "smooth" });
  //       };

  //       const handleContactUsClick = () => {
  //         contactUsRef.current.scrollIntoView({ behavior: "smooth" });
  //       };
  useEffect(()=>{
    Aos.init();
},[])
  const [showMenuItems, setshowMenuItems] = useState(false);
  const [showIcons,setShowIcons]=useState(false)
  console.log(showMenuItems);
  console.log(showIcons)
  const showFirst= ()=>{
    setshowMenuItems(true)
    setShowIcons(true)
  }
  const showSecond = ()=>{
    setshowMenuItems(false)
    setShowIcons(false)
  }
 const Nav = useNavigate()
  return (
    <HeaderContainer>
      <HeaderLeft>
        <Logo>
          <img src={Logos} alt="" />
        </Logo>
        <List>
          <ul>
            <Link to="hero" offset={-500} smooth={true} duration={500}>
              <li>Home</li>
            </Link>
            <Link to="about" offset={470} smooth={true} duration={500}>
              <li >
                About Us
              </li>
            </Link>
            <Link to="service" offset={-100} smooth={true} duration={500}>
            <li>
              Service
            </li>
            </Link>
           <Link to="Review" offset={-100} smooth={true} duration={500}>
           <li>
              Review
            </li>
           </Link>
            <Link to="Contact" offset={-30} smooth={true} duration={500}>
            <li >
              Contact Us
            </li>
            </Link>
            
          </ul>
          {
            showIcons ?  <Menu size={30} onClick={showSecond} />:
            <MenuIcon size={30} onClick={showFirst}/>
          }
          
        
          {showMenuItems ? (
            <ShowLi data-aos="fade-left" style={{ position: "absolute", top: "100%" }}>
             <Link to="hero" offset={-500} smooth={true} duration={500}>
              <li>Home</li>
            </Link>
              <Link to="about" offset={470} smooth={true} duration={500}>
              <li>
                About Us
              </li>
            </Link>
              <Link to="service" offset={-100} smooth={true} duration={500}>
            <li >
              Service
            </li>
            </Link>
              <Link to="Review" offset={-100} smooth={true} duration={500}>
           <li >
              Review
            </li>
           </Link>
              <Link to="Contact" offset={-30} smooth={true} duration={500}>
            <li>
              Contact Us
            </li>
            </Link>
            <p onClick={()=>Nav("/login")}>Login</p>
            
            </ShowLi>
          ) : null}
        </List>
      </HeaderLeft>
      <HeaderRight>
        <button onClick={()=>Nav("/login")}>Login</button>
      </HeaderRight>


    </HeaderContainer>
  );
};

export default Header;

const Menu = styled(RiMenuFold3Fill)`
  display: none;

  @media screen and (max-width: 425px) {
    display: block;
  }
`;
const MenuIcon = styled(RiMenuFold4Fill )`
  display: none;

  @media screen and (max-width: 425px) {
    display: block;
  }
`;
const List = styled.div`
  height: 100%;
  width: 60%;
  /* background-color: purple; */
  display: flex;
  align-items: center;
  position: relative;
  @media screen and (max-width: 768px) {
      width:100%;
      /* gap:20px */
    }

  @media screen and (max-width: 425px) {
    display: flex;
    height: 100%;
    width: 55%;
    /* background-color: green; */
    justify-content: flex-end;
  }

  ul {
    height: 100%;
    width: 100%;
    /* background-color: blue; */
    display: flex;
    gap: 30px;
    align-items: center;
    @media screen and (max-width: 768px) {
      width:100%;
      gap:20px
    }

    & li {
      font-size: 22px;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      list-style-type: none;
      font-weight: 600;
      cursor: pointer;

      @media screen and (max-width: 768px) {
      font-size:18px;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      list-style-type: none;
      font-weight:500;
      cursor: pointer;
    }
    }

    @media screen and (max-width: 425px) {
      display: none;
    }
  
  }
`;
const ShowLi = styled.div`
  height: max-content;
  width:100%;
  background-color: #2196f3;
  z-index: 9999;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  gap: 10px;
  /* align-items: center; */
  /* position: fixed;
    top: 0; */

  li {
    list-style-type: none;
    font-size: 18px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  
    font-weight: 600;
    cursor: pointer;
    /* text-align: right; */
    /* color: white; */
   
  }
  p{
   
    font-size: 18px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
   
    font-weight: 600;
    cursor: pointer;
  }
`;

// import React, { useState, useRef } from "react";
// import Logos from "../assets/Logos.jpg";
// import styled from "styled-components";
// import { FiMenu } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";

// const Header = () => {
//   const [showMenuItems, setShowMenuItems] = useState(false);
//   const navigate = useNavigate();
//   const aboutUsRef = useRef(null);
//   const serviceRef = useRef(null);
//   const reviewRef = useRef(null);
//   const contactUsRef = useRef(null);

//   const handleAboutUsClick = () => {
//     aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
//   };

//   const handleServiceClick = () => {
//     serviceRef.current.scrollIntoView({ behavior: "smooth" });
//   };

//   const handleReviewClick = () => {
//     reviewRef.current.scrollIntoView({ behavior: "smooth" });
//   };

//   const handleContactUsClick = () => {
//     contactUsRef.current.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <HeaderContainer>
//       <HeaderLeft>
//         <Logo>
//           <img src={Logos} alt="Logo" />
//         </Logo>
//         <NavMenu>
//           <ul>
//             <li onClick={handleAboutUsClick}>About Us</li>
//             <li onClick={handleServiceClick}>Service</li>
//             <li onClick={handleReviewClick}>Review</li>
//             <li onClick={handleContactUsClick}>Contact Us</li>
//           </ul>
//           <MenuIcon size={35} onClick={() => setShowMenuItems(!showMenuItems)} />
//           {showMenuItems && (
//             <MobileMenu>
//               <li onClick={handleAboutUsClick}>About Us</li>
//               <li onClick={handleServiceClick}>Service</li>
//               <li onClick={handleReviewClick}>Review</li>
//               <li onClick={handleContactUsClick}>Contact Us</li>
//               <li>Login</li>
//             </MobileMenu>
//           )}
//         </NavMenu>
//       </HeaderLeft>
//       <HeaderRight>
//         <button onClick={() => navigate("/login")}>Login</button>
//       </HeaderRight>

//       {/* Add the components to scroll to */}
//       <AboutUs ref={aboutUsRef}>About Us content</AboutUs>
//       <Service ref={serviceRef}>Service content</Service>
//       <Review ref={reviewRef}>Review content</Review>
//       <ContactUs ref={contactUsRef}>Contact Us content</ContactUs>
//     </HeaderContainer>
//   );
// };

// const HeaderContainer = styled.div`
//   /* Add styles for the header container */
// `;

// const HeaderLeft = styled.div`
//   /* Add styles for the header left section */
// `;

// const Logo = styled.div`
//   /* Add styles for the logo */
// `;

// const NavMenu = styled.div`
//   /* Add styles for the navigation menu */
// `;

// const MenuIcon = styled(FiMenu)`
//   display: none;

//   @media screen and (max-width: 768px) {
//     display: block;
//   }
// `;

// const MobileMenu = styled.div`
//   /* Add styles for the mobile menu */
// `;

// const HeaderRight = styled.div`
//   /* Add styles for the header right section */
// `;

// const AboutUs = styled.div`
//   /* Add styles for the About Us section */
// `;

// const Service = styled.div`
//   /* Add styles for the Service section */
// `;

// const Review = styled.div`
//   /* Add styles for the Review section */
// `;

// const ContactUs = styled.div`
//   /* Add styles for the Contact Us section */
// `;

// export default Header;
