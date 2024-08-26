import React, { useEffect, useState } from "react";
import {
  SignUpHolder,
  SignHolderLogo,
  SignUpInputHold,
  SignUpText,
  Input,
  InputPasswordDiv,
  AlreadyHave,
  Button,
  PassInfo
} from "./AuthStyle";
import AquaCleanReal from "../../assets/AquaCleanReal.jpg";
import {toast, Toaster} from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import Load from "../AfterLogin/Load";
import axios from "axios";
// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";


const Forgot = () => {

  const Nav = useNavigate()

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState()
  const [emailerror, setEmailError] = useState()
  const [toggle, setToggle] = useState(true);
  const [emailerrorshow, setEmailErrorShow] = useState(false)
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);



  const handleSubmit = (event) => {
    setLoading(true)
    event.preventDefault();
    const urlForgot = 'https://laundry-api-habd.onrender.com/api/v1/user/forgot-password'
    axios.post(urlForgot, { email })
      .then((response) => {
        setLoading(false)
        setSuccess("Reset Password Email successfully sent!")
        console.log(response)
       
        
        setTimeout(()=>{
          Nav("/reset")
        }, 3000)
      })
      .catch((error) => {
        setLoading(false)
        setError('Error sending password Reset Password Email!')
        console.log(error)
        
      });
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
    if(newEmail.trim() === '') {
        toast.error('Email is required');
      setEmailErrorShow(false)
    }else if (!validateEmail(newEmail)) {
      setEmailErrorShow(true)
      setEmailError('Invalid email format');
    } else {
      setEmailError("")
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
  toggle? <Load/>:
  <SignUpHolder>
  {/* <SignHolderLogo>
    <img src={AquaCleanReal} alt="Wash" />
  </SignHolderLogo> */}

  <SignUpInputHold>
    <SignUpText>
      <h2> Forgot Password </h2>
    </SignUpText>

    {/* <Input placeholder="Enter Your username" wd hg /> */}
    <Input placeholder="Enter Your Email" wd hg
           onChange={handleEmailChange}
    />
    {
              emailerrorshow ? <p
              style={{
                color: "red",
                margin: "0px",
                padding: "0px"
              }}
            >{emailerror}</p> : null
    }

    <Button onClick={handleSubmit}> 
        {
          loading ? "Submitting..." : "Submit"
        }
        </Button>
    {error && <p style={{ color: 'red', fontFamily:"sans-serif",fontSize:"12px",fontWeight:"bold" }}>{error}</p>}
    {success && <p style={{ color: 'green', fontFamily:"sans-serif",fontSize:"12px",fontWeight:"bold" }}>{success}</p>}
    <AlreadyHave>
        Already have an account?{" "}
        <span onClick={() => Nav("/login")}> Login </span>
      </AlreadyHave>

  </SignUpInputHold>
</SignUpHolder>
}
    <Toaster/>
    </>
  );
};

export default Forgot;
