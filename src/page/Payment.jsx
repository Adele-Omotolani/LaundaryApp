import React, { useState,useEffect } from "react";
import { TotalTxt,TotalPrice,Total,Price,Item,EachDetail,WashingCart,WashingInfo,WashingBox,WashingGreet,PayBtnSec,PayBtn,PaymentCard,Method,PaymentMethod,Pay,Date,PickupDate,Location,PaymentContainer,PaymentBigTxt,WashingWrapper,PaymentBody, PaymentWrapper } from "../Auth/Payment";
import { FaLocationDot } from "react-icons/fa6";
import { BsBack, BsBackspaceFill } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Verve from "../../src/assets/verve.png"
import Visa from "../../src/assets/visa.png"
import MasterCard from "../../src/assets/masterCard.jpg"
// import { useContext } from "react";

const Payment = () => {

  const Nav = useNavigate()

  const [date, setDate] = useState()
  const [time, setTime] = useState()
  const [id, setId] = useState()


  console.log(date)
  console.log(time)

  console.log(id)
  
  useEffect(() => {
    setId(Math.floor(Math.random() * 99999))
  
    return () => {
      id
    }
  }, [])
  

  return (
    <PaymentBody>
      <PaymentBigTxt>
        <h3><BiArrowBack style={{cursor: 'pointer'}} onClick={()=>Nav('/details')}/> Wash and find a payment system</h3>
      </PaymentBigTxt>

      <PaymentContainer>
        <WashingWrapper>
          <WashingGreet>
            <h3>Order Details</h3>
            <h4>Order ID: #{id}</h4>
          </WashingGreet>

          <WashingBox>
            <WashingInfo>

            </WashingInfo>
            <WashingCart>
              <EachDetail>
                <Item><span>2 x shorts</span></Item>
                <Price>$100</Price>
              </EachDetail>
              <EachDetail>
                <Item><span>1 x jeans</span></Item>
                <Price>#200</Price>
              </EachDetail>
              <EachDetail>
                <Item><span>1 x cloth</span></Item>
                <Price>#200</Price>
              </EachDetail>
              <EachDetail>
                <Item><span>0 x white</span></Item>
                <Price>#0</Price>
              </EachDetail>
              <EachDetail>
                <Item><span>1 x others</span></Item>
                <Price>#200</Price>
              </EachDetail>
            </WashingCart>
            
            <Total>
              <TotalTxt><h3>Total:</h3></TotalTxt>
              <TotalPrice>$1500.00</TotalPrice>
            </Total>
          </WashingBox>
        </WashingWrapper>

        <PaymentWrapper>
          <h4>Location for Pickup:</h4>
          <Location>
            <FaLocationDot color="#2196f3" size={25}/>
            123 muyibi street, Off Ojo road, Ajegunle Apapa.
          </Location>
          <hr />
          <PickupDate>
            <h4> Set Pickup Date & Time: </h4>
            <Date>
              <input type="date" onChange={(e)=>setDate(e.target.value)} name="" id="" />
              <input type="time" onChange={(e)=>setTime(e.target.value)} name="" id="" />
            </Date>
            <span>Expected day for pickup: {date} , {time}</span>
          </PickupDate>
          <hr />
          <Pay>
            <h3>Payment:</h3>
            <PaymentMethod>
              <Method>
                <input type="radio" name="pay" id="" />
                <span> Verve </span>
                <img src={Verve} alt="" />
              </Method>

              <Method>
                <input type="radio" name="pay" id="" />
                <span>Master card</span>
                <img src={MasterCard} alt="" />

              </Method>

              <Method>
                <input type="radio" name="pay" id="" />
                <span>Visa</span>
                <img src={Visa} alt="" />

              </Method>

              <PaymentCard>

              </PaymentCard>


              <PayBtnSec>
                <PayBtn>Pay Now $1,500.00</PayBtn>
              </PayBtnSec>
              
            </PaymentMethod>
          </Pay>

        </PaymentWrapper>
      </PaymentContainer>
    </PaymentBody>
  );
};

export default Payment;
