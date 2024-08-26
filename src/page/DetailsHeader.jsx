import React from "react";
import styled from "styled-components";
import AquaCleanReal from "../../src/assets/AquaCleanReal.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { clearToken } from "../features";

// import Button from "../page/Button"

const DetailsHeader = () => {
  const Nav = useNavigate();

  

  const dispatch = useDispatch();

  const HandleLogout = () => {
    dispatch(clearToken());
    localStorage.setItem("isAdmin", "")
    Nav('/')
  };

  // const logoutbtn = async () => {
  //   // try {
  //   //   const data = await axios.post(`${url}/api/v1/user/logout`);
  //   //   console.log("this is the user");
  //   // } catch (error) {}

  //   axios
  //     .post(`https://laundry-api-habd.onrender.com/api/v1/user/logout`)
  //     .then((res) => {
  //       console.log(res);
  //       Nav("/");
  //     })
  //     .catch((Error) => {
  //       console.log(Error);
  //     });
  // };

  return (
    <DetailsHeaderContainer>
      <DetailLogo>
        <img
          src={AquaCleanReal}
          // src="../../src/assets/AquaCleanReal.jpg"
          // {AquaCleanReal}
          alt="wieufwuefu"
        />
      </DetailLogo>

      {/* <Button/> */}
      <LogoutButton>
        <button onClick={HandleLogout}>Logout</button>
      </LogoutButton>
    </DetailsHeaderContainer>
  );
};

export default DetailsHeader;

const DetailsHeaderContainer = styled.div`
  height: 12vh;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 99999;
  top: 0;
  bottom: 0;
  /* padding-left: 20px;
    padding-right: 20px; */
  /* border-bottom:1px solid #2196F3; */
`;
const DetailLogo = styled.div`
  height: 100%;
  width: 200px;
  /* background-color: red; */

  img {
    height: 100%;
    width: 78%;
  }
`;
const LogoutButton = styled.div`
  height: 100%;
  width: 160px;
  /* background-color: yellow; */
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    height: 45px;
    width: 95px;
    border: none;
    border-radius: 7px;
    font-size: 20px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
    background-color: #2196f3;
    cursor: pointer;
    color: white;

    transition: all 350ms ease-in-out;

    &:hover {
      transform: scale(1.05);
      transition: all 350ms ease-in-out;
    }
  }
`;
