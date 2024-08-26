import React, { useEffect, useState } from "react";
import {
  HoldtheBody,
  TheTitle,
  OrderPrice,
  OrderBody,
  HoldOrder,
  HoldInstructions,
  ClothesHolder,
  PriceHolder,
  WashHolder,
  ClothsAndPrice,
  TextHolderArea,
  SubTotal,
  Delivery,
  Horizontal,
  Total,
  TotalClothesHolder,
  TotalPriceHolder,
  PaymentBody,
  PaymentOrderBody,
  PickAndDeliver,
  Delivered,
  WillBePickedUp,
  Textarea,
  SmallerInput,
  ForDrop,
  HoldInput,
  PaymentWrapper,
  Location,
  PickupDate,
  Date,
  PaymentMethod,
  Method,
  PaymentCard,
  PayBtnSec,
  PayBtn,
  Pay,
  BackArrow,
  BackArrowHolder,
  PayBtnB4,
} from "./AfterLandingPage";
import visa from "../../assets/visa.png";
import master from "../../assets/UseMaster.png";
import verve from "../../assets/verve.png";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Load from "./Load";
import styled from "styled-components";

const ShowSha = () => {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [toggle, setToggle] = useState(true);
  const [showaddress, setShowAddress] = useState(false);

  const Inputaddress = () => {
    setShowAddress(true);
  };

  const notShow = () => {
    setShowAddress(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setToggle(false);
    }, 2000);
  });
  const removeAddress=()=>{
    setShowAddress(false)
  }

  const [filteredDataArray, setFilteredDataArray] = useState([]);

  useEffect(() => {
    const jsonString = localStorage.getItem("filteredData");
    if (jsonString) {
      const data = JSON.parse(jsonString);
      setFilteredDataArray(data);
    }
  }, []);

  // Extract quantities and prices
  const quantities = filteredDataArray.map((item) => {
    const key = Object.keys(item)[0];
    console.log("this", key);
    return `${key.charAt(0).toUpperCase() + key.slice(1)} x ${
      item[key].quantity
    }`;
  });

  const prices = filteredDataArray.map((item) => {
    const key = Object.keys(item)[0];
    return `$${item[key].quantity * item[key].price}`;
  });

  console.log(quantities);
  console.log(prices);
  const totalPrice = filteredDataArray.reduce((acc, item) => {
    const key = Object.keys(item)[0];
    return acc + item[key].quantity * item[key].price;
  }, 0);
  // const calculateTotalPrice = (item) => {
  //   const key = Object.keys(item)[0];
  //   return item[key].quantity * item[key].price;
  // };
  const Nav = useNavigate();
  return (
    <>
      {toggle ? (
        <Load />
      ) : (
        <HoldtheBody>
          <TheTitle>
            <BackArrowHolder>
              <BackArrow
                size={45}
                onClick={() => Nav("/afterlogin")}
                // style={{display: "flex", position:"absolute", left: "20px", cursor: "pointer"}}
              />
              <p> Back </p>
            </BackArrowHolder>
            <h1 style={{ fontWeight: "Bold" }}>Order Details</h1>
          </TheTitle>
          <OrderBody>
            <OrderPrice>
              <HoldOrder>
                <WashHolder>
                  <h5>YOUR TOTAL COST</h5>
                </WashHolder>
                <ClothsAndPrice>
                  <ClothesHolder>
                    {quantities?.map((quantity, index) => (
                      <p key={index}>{quantity}</p>
                    ))}
                    <div>
                      <SubTotal> Subtotal</SubTotal>
                      <Delivery>Delivery</Delivery>
                    </div>
                  </ClothesHolder>
                  <PriceHolder>
                    {prices?.map((price, index) => (
                      <p key={index}>{price}</p>
                    ))}
                    <div>
                      <SubTotal>₦{totalPrice}</SubTotal>
                      <Delivery>₦80</Delivery>
                    </div>
                  </PriceHolder>
                </ClothsAndPrice>
                <Horizontal />
                <Total>
                  <TotalClothesHolder>
                    <h6>Total</h6>
                  </TotalClothesHolder>
                  <TotalPriceHolder>
                    <h6>₦{totalPrice + 80}</h6>
                  </TotalPriceHolder>
                </Total>
              </HoldOrder>
              <HoldInstructions>
                <WashHolder>
                  <h5>My Instructions</h5>
                </WashHolder>
                <TextHolderArea>
                  <h5>I want my clothes to be:</h5>
                  <Textarea></Textarea>
                </TextHolderArea>
              </HoldInstructions>
            </OrderPrice>
          </OrderBody>
          <TheTitle>
            <h1 style={{ fontWeight: "Bold" }}>Payment</h1>
          </TheTitle>

          <PaymentBody>
            <PaymentOrderBody>
              <PickAndDeliver>
                <WillBePickedUp>
                  <WashHolder>
                    <h5 style={{ color: "white" }}>Pick Up:</h5>
                  </WashHolder>
                  <p style={{ color: "white" }}>
                    Dear Esteemed Customer, your clothes will be picked from
                    your residence, 1 hour after payment has been made, If you
                    wish to drop it off yourself, please select yes below.
                  </p>
                  <ForDrop>
                    <h6 style={{ color: "white" }}>Drop it off?</h6>
                    <HoldInput>
                      <YesOrNo>
                        <div onClick={notShow}>
                          <SmallerInput type="radio" name="type" />
                          Yes
                        </div>
                        <div onClick={Inputaddress}>
                          <SmallerInput type="radio" name="type" />
                          No
                        </div>
                      </YesOrNo>
                      {showaddress ? (
                        <UserAddress>
                          <p>Input Your Address</p>
                          <input type="text" placeholder="Address" />
                          <button onClick={removeAddress}>Submit</button>
                        </UserAddress>
                      ) : null}
                    </HoldInput>
                  </ForDrop>
                </WillBePickedUp>
                <Delivered>
                  <WashHolder>
                    <h5 style={{ color: "white" }}>Delivery:</h5>
                  </WashHolder>
                  <ForDrop>
                    <p style={{ color: "white" }}>
                      Dear Valued Customers, <br />
                      your clothes will be delivered:
                    </p>
                    <HoldInput>
                      <em style={{ color: "white" }}>In 5 days</em>
                    </HoldInput>
                  </ForDrop>
                </Delivered>
              </PickAndDeliver>
              <PaymentWrapper>
                <WashHolder>
                  <h5 style={{ color: "black" }}>Location for Pickup:</h5>
                </WashHolder>
                <Location>
                  <FaLocationDot color="#2196f3" size={20} />
                  <p>123 Muyibi street, off Ojo road, Ajegunle Apapa.</p>
                </Location>
                <hr />
                <PickupDate>
                  <h4>Set Pickup Date & Time:</h4>
                  <Date>
                    <input
                      type="date"
                      onChange={(e) => setDate(e.target.value)}
                      name=""
                      id=""
                      style={{ padding: "3px" }}
                    />
                    <input
                      type="time"
                      onChange={(e) => setTime(e.target.value)}
                      name=""
                      id=""
                      style={{ padding: "3px" }}
                    />
                  </Date>
                  <span>
                    Expected day for pickup:{" "}
                    <strong>
                      {date}, {time}
                    </strong>
                  </span>
                </PickupDate>
                <hr />
                <Pay>
                  <h3>Payment:</h3>
                  <PaymentMethod>
                    <Method>
                      <input type="radio" name="pay" id="" />
                      <span style={{ width: "35px", height: "22px" }}>
                        <img src={verve} alt="" />
                      </span>
                    </Method>

                    <Method>
                      <input type="radio" name="pay" id="" />
                      <span style={{ width: "39px", height: "40px" }}>
                        <img src={master} alt="" />
                      </span>
                    </Method>

                    <Method>
                      <input type="radio" name="pay" id="" />
                      <span style={{ width: "35px", height: "15px" }}>
                        <img src={visa} alt="" />
                      </span>
                    </Method>

                    <PaymentCard></PaymentCard>

                    <PayBtnSec>
                      <PayBtnB4 onClick={() => Nav("/afterlogin")}>
                        {" "}
                        Cancel{" "}
                      </PayBtnB4>
                      <PayBtn onClick={() => Nav("/success")}> Pay </PayBtn>
                    </PayBtnSec>
                  </PaymentMethod>
                </Pay>
              </PaymentWrapper>
            </PaymentOrderBody>
          </PaymentBody>
        </HoldtheBody>
      )}
    </>
  );
};

export default ShowSha;

const YesOrNo = styled.div`
  height: 100%;
  width: 20%;
  /* background-color: blueviolet; */
  display: flex;
  gap: 5px;
  font-size: 16px;
  font-weight: 600;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  div {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 16px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`;

const UserAddress = styled.div`
  width: 80%;
  /* background-color: green; */
  height: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
  p {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    color: black;
    font-weight: 600;
  }
  input {
    height: 80%;
    width: 500px;
    padding-left: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
    color: black;
    font-weight: 600;
  }
  button {
    height: 80%;
    width: 250px;
    border: none;
    cursor: pointer;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    color: black;
    font-weight: 600;
    border-radius: 5px;
    transition: all 350ms ease-in-out;

    &:hover {
      transform: scale(1.05);
      transition: all 350ms ease-in-out;
    }

    /* background-color: #2196F3; */
  }
`;
