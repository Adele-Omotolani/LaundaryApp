import React, { useState, useEffect } from "react";
import {
  SignUpHolder,
  AlreadyHolder,
  SignUpInputHold,
  SignUpText,
  Input,
  InputPasswordDiv,
  AlreadyHave,
  Button,
  PassInfo,
} from "./AuthStyle";
import AquaCleanReal from "../../assets/AquaCleanReal.jpg";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import Load from "../AfterLogin/Load";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken, setUserdata } from "../../features";

const Login = () => {
  const Nav = useNavigate();
  const [passWord, setPassword] = useState();
  const [seePasswword, setSeePassword] = useState(true);
  const [toggle, setToggle] = useState(true);
  //   const [userName, setUserName] = useState()
  const [email, setEmail] = useState();
  const [emailerror, setEmailError] = useState();
  const [emailerrorshow, setEmailErrorShow] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [passwordErrorlow, setPasswordErrorLow] = useState("");
  const [passwordErrorUpper, setPasswordErrorUpper] = useState();
  const [passwordErrorNumber, setPasswordErrorNumber] = useState();
  const [passwordErrorSymbol, setPasswordErrorSymbol] = useState();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

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

  //   const handleUserName = (e) => {
  //     const newData  = e.target.value
  //     setUserName(newData)
  //   }

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

  const userLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!email || !passWord) {
      toast.error("User Data Required");
      setLoading(false)
    } else {
      const ApiData = { email, password: passWord };
      const url = "https://laundry-api-habd.onrender.com/api/v1/user/login";
      axios
        .post(url, ApiData)
        .then((res) => {
          setLoading(false);

          console.log(res?.data);
          // console.log(res?.data)
          // toast.success("login successful");
          toast.success(res?.data?.message)
          setLoading(false);
          localStorage.setItem('user', JSON.stringify(res.data.data));
          dispatch(setUserdata(res.data.data));
          dispatch(setToken(res.data.token));
          localStorage.setItem("isAdmin", res?.data?.data?.isAdmin)
          localStorage.setItem("userToken", res?.data?.token)

       setTimeout(() => {
        if (res?.data?.data?.isAdmin == true) {
          Nav("/mainAdminDashBoard");
        } else {
          Nav("/afterlogin");
        }
       }, 2000);

          // Nav(`afterlogin/${res?.data?.data?._id}`)
        })
        .catch((Error) => {
          console.log(Error);
          // toast.error("Login failed");
          toast.error(Error?.data?.message)
          setLoading(false);
        });
    }
  };

  return (
    <>
      {toggle ? (
        <Load />
      ) : (
        <SignUpHolder>
          {/* <SignHolderLogo> */}
          {/* <img src={AquaCleanReal} alt="Wash" /> */}
          {/* </SignHolderLogo> */}

          <SignUpInputHold>
            <SignUpText>
              <h2> Login </h2>
            </SignUpText>

            {/* <Input placeholder="Enter Your username" wd hg /> */}
            <Input
              placeholder="Enter Your Email"
              wd
              hg
              onChange={handleEmailChange}
            />
            {emailerrorshow ? (
              <p
                style={{
                  color: "red",
                  margin: "0px",
                  padding: "0px",
                }}
              >
                {emailerror}
              </p>
            ) : null}
            <InputPasswordDiv>
              <Input
                type={seePasswword ? "password" : "text"}
                placeholder="Enter Your password"
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

            <Button onClick={userLogin}>
              {loading ? "Loading..." : "Login"}
            </Button>

            <AlreadyHolder>
            <AlreadyHave>
              <span onClick={() => Nav("/forgot")}> Forgot Password? </span>
            </AlreadyHave>
            <AlreadyHave>
            Don't have an account?{" "}
            <span onClick={() => Nav("/signup")}> Sign Up </span>
          </AlreadyHave>
            </AlreadyHolder>
          </SignUpInputHold>
        </SignUpHolder>
      )}
      <Toaster />
    </>
  );
};

export default Login;
