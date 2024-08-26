import React, { useState, useEffect } from "react";
import {
  SignUpHolder,
  SignHolderLogo,
  SignUpInputHold,
  SignUpText,
  Input,
  InputPasswordDiv,
  AlreadyHave,
  Button,
  PassInfo,
} from "./AuthStyle";
import AquaCleanGanGan from "../../../src/assets/AquaCleanReal-removebg-preview.png";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import Load from "../AfterLogin/Load";
// import ResetPassword from "../../../src/page/auth/ResetPassword"

const ResetPassword = () => {
  const Nav = useNavigate();

  const [passWord, setPassword] = useState();
  const [seePasswword, setSeePassword] = useState(true);

  const [toggle, setToggle] = useState(true);
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [emailerror, setEmailError] = useState();
  const [emailerrorshow, setEmailErrorShow] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [passwordErrorlow, setPasswordErrorLow] = useState("");
  const [passwordErrorUpper, setPasswordErrorUpper] = useState();
  const [passwordErrorNumber, setPasswordErrorNumber] = useState();
  const [passwordErrorSymbol, setPasswordErrorSymbol] = useState();

  const lookPassword = () => {
    setSeePassword(false);
  };

  const containsLowercase = (input) => {
    // Check if the input string contains at least one lowercase character
    return /[a-z]/.test(input);
  };

  const containsUpperrcase = (input) => {
    // Check if the input string contains at least one lowercase character
    return /[A-Z]/.test(input);
  };

  const containsNumber = (input) => {
    // Check if the input string contains at least one number
    return /\d/.test(input);
  };

  const containsSymbol = (input) => {
    // Check if the input string contains at least one symbol (special character)
    return /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(input);
  };

  const validateEmail = (input) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Validate the email
    if (newEmail.trim() === "") {
      toast.error("Email is required");
      setEmailErrorShow(false);
    } else if (!validateEmail(newEmail)) {
      setEmailErrorShow(true);
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const handleUserName = (e) => {
    const newData = e.target.value;
    setUserName(newData);
  };

  const handlePassword = (e) => {
    const newData = e.target.value;
    setPassword(newData);
    if (newData.trim() === "") {
      toast.error("Password is required");
      setPasswordCheck(false);
    }
    if (newData.length > 0) {
      setPasswordCheck(true);
    }
    if (!containsLowercase(newData)) {
      setPasswordErrorLow(true);
    } else {
      setPasswordErrorLow(false);
    }
    if (!containsUpperrcase(newData)) {
      setPasswordErrorUpper(true);
    } else {
      setPasswordErrorUpper(false);
    }
    if (!containsNumber(newData)) {
      setPasswordErrorNumber(true);
    } else {
      setPasswordErrorNumber(false);
    }
    if (!containsSymbol(newData)) {
      setPasswordErrorSymbol(true);
    } else {
      setPasswordErrorSymbol(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setToggle(false);
    }, 2000);
  });

  return (
    <>
{
  toggle? <Load/>
  :
  <SignUpHolder>
  {/* <SignHolderLogo>
    <img src={AquaCleanGanGan} alt="Wash" />
  </SignHolderLogo> */}

  <SignUpInputHold>
    <SignUpText>
      <h2> Reset Password </h2>
    </SignUpText>

    {/* <Input
      type="text"
      placeholder="New Password"
      wd
      hg
      onChange={handleUserName}
    />
    <Input
      type="email"
      placeholder="confirm Password"
      wd
      hg
      onChange={handleEmailChange}
    />
    {emailerrorshow ? (
      <p
        style={{
          color: "white",
          margin: "0px",
          padding: "0px",
        }}
      >
        {emailerror}
      </p>
    ) : null} */}

    <InputPasswordDiv>
      <Input
        type={seePasswword ? "password" : "text"}
        placeholder="New Password"
        onChange={handlePassword}
      />
      {seePasswword ? (
        <FaRegEye
          // cursor={pointer}
          onClick={lookPassword}
        />
      ) : (
        <FaRegEyeSlash onClick={() => setSeePassword(true)} />
      )}
    </InputPasswordDiv>

    <InputPasswordDiv>
      <Input
        type={seePasswword ? "password" : "text"}
        placeholder="Confirm Password"
        onChange={handlePassword}
      />
      {seePasswword ? (
        <FaRegEye
          // cursor={pointer}
          onClick={lookPassword}
        />
      ) : (
        <FaRegEyeSlash onClick={() => setSeePassword(true)} />
      )}
    </InputPasswordDiv>

    {passwordCheck ? (
      <PassInfo>
        {passwordErrorlow ? <span>Lowercase</span> : null}
        {passwordErrorUpper ? <span>Capital</span> : null}
        {passwordErrorNumber ? <span>Number</span> : null}
        {passwordErrorSymbol ? <span>Symbol</span> : null}
      </PassInfo>
    ) : null}

    <Button 
    onClick={() => Nav("/login")}
      > Reset Password </Button>
{/* 
    <AlreadyHave>
      Already have an account?{" "}
      <span onClick={() => Nav("/login")}> Login </span>
    </AlreadyHave> */}
  </SignUpInputHold>
</SignUpHolder>
}
      <Toaster />
    </>
  );
};

export default ResetPassword;
