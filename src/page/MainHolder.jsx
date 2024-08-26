import React from 'react'
import { MainHolderBox } from './WashFoldStyle'
import Header from './Header'
import HeroPage from '../page/HeroPage'
import LandingPage from "../page/LandingPage"
import Hold from '../page/Hold'
// import { useDispatch } from "react-redux";
// import { setToken, setUserdata } from "../features";
// import axios from 'axios'
// import { useNavigate } from "react-router-dom";

const MainHolder = () => {
  // const Nav = useNavigate();
  // const dispatch = useDispatch();
  // const userLogin = (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   if (!email || !passWord) {
  //     toast.error("User Data Required");
  //   } else {
  //     const ApiData = { email, password: passWord };
  //     const url = "https://laundry-api-habd.onrender.com/api/v1/user/login";
  //     axios
  //       .post(url, ApiData)
  //       .then((res) => {
  //         console.log(res?.data);
  //         // console.log(res?.data)
  //         toast.success("login successful");
  //         setLoading(false);
  //         dispatch(setUserdata(res.data.data));
  //         dispatch(setToken(res.data.token));
       
  //           Nav("/Login");
      
  //         // Nav(`afterlogin/${res?.data?.data?._id}`)
  //       })
  //       .catch((Error) => {
  //         console.log(Error);
  //         toast.error("Login failed");
  //         setLoading(false);
  //       });
  //   }
  // };

  return (
    <MainHolderBox>
        <Header/>
        <HeroPage />
        <LandingPage />
        <Hold />
    </MainHolderBox>
  )
}

export default MainHolder