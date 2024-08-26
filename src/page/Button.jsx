import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const Nav = useNavigate();

  return (
    <ButtonHolder>
      <button onClick={() => Nav("/login")}>Login</button>
    </ButtonHolder>
  );
};

export default Button;

const ButtonHolder = styled.div`
  button {
    /* width: 100%;
    height: 100%; */
    background-color: #2196f3;
    color: white;
    height: 45px;
    width: 95px;
    border: none;
    border-radius: 7px;
    font-size: 25px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    cursor: pointer;
    transition: all 350ms ease-in-out;

    /* &:hover {
      transform: scale(1.05);
      transition: all 350ms ease-in-out;
    } */
  }
`;
