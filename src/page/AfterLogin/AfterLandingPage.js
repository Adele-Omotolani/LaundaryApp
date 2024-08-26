import styled from "styled-components";
import {IoIosArrowRoundBack} from "react-icons/io";

// export const HoldCheckBox = styled.div`

// `
export const HoldCheckBox = styled.div`
    height: 60%;
    width: 100%;
    /* background: #000; */
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;

`
export const CheckBox = styled.div`
  height: 40px;
  width: 200px;
  background-color: white;
  padding-left: 6px;
  display: flex;
  font-size: 18px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  /* justify-content: center; */
  align-items: center;
  gap: 5px;
  border-radius: 10px;
`
export const PaymentWrapper = styled.div`
  background-color: white;
  height: max-content;
  width: 38%;
  border-radius: 15px;
  padding: 10px;
  /* padding-top: 40px; */

  h4 {
    /* color: white; */
    font-size: 19px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
  
  }
`;

export const Location = styled.div`
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
export const Date = styled.div`
  display: flex;
  gap: 9px;
`
export const Method = styled.div`
padding: 5px;
padding-left: 7px;
display: flex;
flex-direction: row;
gap: 5px;

  img{
    width: 100%;
    height: 100%;
  }


`
export const Pay = styled.div`

  h3{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`
export const PayBtn = styled.button`
    height: 40px;
    width: 100px;
    /* width: 200px; */
    border: none;
    border-radius: 5px;
    background-color: #2196F3;
    font-size: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transform: scale(1);
    transition: all 350ms ease;
    font-weight: bold;

    &:hover{
        cursor: pointer;
        transform: scale(1.03);
        transition: all 350ms ease;
    }
`
export const PaymentCard = styled.div`
`
export const PaymentMethod = styled.div`
`
export const PayBtnSec = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 30px;
`

export const PickupDate = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5px;
  padding-bottom: 3px;
  gap: 5px;

span {
  font-size: 16px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  /* color: gray; */
}

  input {
    height: 40px;
    border-radius: 10px;
    border: 1px solid #2196f3;
    outline: none;
    font-size: 20px;
  }
`

export const Button = styled.button`
    height: 50px;
    width: 75%;
    background: #2196F3;
    border: none;
    color: black;
    border-radius: 30px;
    font-size: 23px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    cursor: pointer;
    transform: scale(1);
    transition: all 350ms ease-in;

    &:hover{
        transform: scale(1.03);
        transition: all 350ms ease-in;
    }
`
export const ButtonHolder = styled.div`
    height: 32%;
    width:100%;
    /* background: red; */
    display: flex;
    align-items: flex-end;
    justify-content: center;

`
export const InputAndText = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    gap: 5px;

    div{
        height: 30px;
        width: 100px;

    & img{
            height: 100%;
            width: 100%;
        }
    }
    span{
        height: 50px;
        width: 70px;

    & img{
            height: 100%;
            width: 100%;
        }
    }
    article{
        height: 40px;
        width: 80px;

    & img{
            height: 100%;
            width: 100%;
        }
    }

`
export const InputHolder = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;

`
export const HoldInput = styled.div`
    height: 70%;
    width:100%;
    /* background-color: red; */
    /* padding: 6px; */
    display: flex;
    /* flex-direction: row; */
    align-items: center;
    /* justify-content: space-between; */
    gap: 10px;
    em {
      font-size: 16px;
    font-weight:600;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
 
`
export const ForDrop = styled.div`
    height: 35%;
    width: 100%;

    h6{
        font-size: 19px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
`
export const SmallerInput = styled.input`
    height: 20px;
    width: 20px;
    accent-color:#000;
`
export const PaymentOrderBody = styled.div`
    height: 380px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    padding-left: 90px;
    padding-right: 90px;
    gap: 10px;

`
export const PayBy = styled.div`
    height: 100%;
    width: 500px;
    background: white;
    border-radius: 10px;
    padding-left: 4px;

`
export const PickAndDeliver = styled.div`
    height: 100%;
    width: 550px;
    /* background: purple; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`
export const Delivered = styled.div`
    height: 40%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;

    p{
        font-size: 20px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
`
export const WillBePickedUp = styled.div`
    height: 55%;
    width: 100%;
    gap: 5px;
    


    p{  
        height: 50%;
        width: 100%;
        color: gray;
        display: flex;
        align-items: center;
        font-size: 18px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

`
export const Input = styled.input`
    height: 30px;
    width: 30px;
    accent-color:green;


`
export const TotalPriceHolder= styled.div`
    height: 100%;
    width: 180px;
    display: flex;
    flex-direction: column;
    gap: 7px;
    color: white;
    padding-top: 7px;
    

    h6{
        font-size: 25px;
        font-weight: 600;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
`
export const TotalClothesHolder= styled.div`
    height: 100%;
    width: 260px;
    display: flex;
    flex-direction: column;
    gap: 7px;
    color: white;
    padding-top: 7px;

    h6{
        font-size: 25px;
        font-weight: 600;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
`
export const Total = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
`
export const Horizontal = styled.hr`
        height: 4px;
        width: 76%;
        border: none;
        background: black;

`
export const Delivery = styled.div`
    height: 30px;
    width: 100%;
    display: flex;
    align-items: flex-end;
    font-size: 18px;
    font-weight: 500;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

`
export const SubTotal = styled.div`
    height: 30px;
    width: 100%;
    display: flex;
    align-items: flex-end;
    font-size: 18px;
    font-weight:500;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serify;

`
export const Textarea = styled.textarea`
    height: 100%;
    width: 100%;
    border: none;
    border-radius: 8px;
    padding: 8px;
    font-size: 18px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    outline: none;

`
export const TextHolderArea = styled.div`
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* background: white; */
    /* justify-content: center; */

h5{
    font-size: 22px;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

`
export const WashHolder = styled.div`
        height: 15%;
        width:100%;
        display: flex;
        align-items: center;
        color: white;
        /* justify-content: center; */
        /* background-color: green; */

        & h5{
            font-size: 30px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
`

export const ClothsAndPrice = styled.div`
        height: 60%;
        width: 100%;
        display: flex;
        gap: 5px;
        
    
`

export const PriceHolder= styled.div`
    height: 100%;
    width: 180px;
    display: flex;
    flex-direction: column;
    gap: 7px;
    color: white;

    p{
        font-size: 16px;
        color: white;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    h6{
        font-size: 25px;
        color: white;
        font-weight: 600;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    div{
        height: 30%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
        gap: 4px;
    }
`
export const ClothesHolder= styled.div`
    height: 100%;
    width: 260px;
    display: flex;
    color: white;
    flex-direction: column;
    gap: 7px;

    div{
        height: 30%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
        gap: 4px;
    }

    p{
        font-size: 16px;
        color: white;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    h6{
        font-size: 25px;
        font-weight: 600;
        color: white;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
`
export const HoldInstructions= styled.div`

    height: 100%;
    width: 49%; 
`
export const HoldOrder= styled.div`
    height: 100%;
    width: 47%;
    display: flex;
    flex-direction: column;
    

`
export const OrderPrice= styled.div`
    height: 350px;
    width: 70%;
    display: flex;
    justify-content: space-between;
`
export const OrderBody= styled.div`
    height: 380px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    /* padding-left: 70px; */
    
`
export const PaymentBody = styled.div`
    height:420px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
`

export const TheTitle= styled.div`
    height: 70px;
    width: 100%;
    background: white;
    /* background: rebeccapurple; */
    display:flex;
    /* align-items: flex-end; */
    justify-content: center;
    align-items: center;
    padding: 10px;

    h1{
        font-size: 40px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 500;
    }
`
export const HoldtheBody= styled.div`
    height: max-content;
    width: 100%;
    background: #2196F3;
    
`
export const BackArrowHolder = styled.div`
    width: 150px;
    height: 30px;
    /* background: green; */
    display: flex;
    align-items: center;
    position: absolute;
    left: 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 22px;
    cursor: pointer;
    transition: all 350ms ease-in-out;
    font-weight: bold;

        /* background: red; */
        &:hover{
        transform: scale(1.05);
        transition: all 350ms ease-in-out;

        /* background: #000; */
    }
 `

export const BackArrow = styled(IoIosArrowRoundBack)`
    transition: all 350ms ease-in-out;
    /* background: red; */
    &:hover{
        transform: scale(1.05);
        /* background: #000; */
    }
`

export const PayBtnB4 = styled.button`
     height: 40px;
    width: 100px;
    border: none;
    border-radius: 5px;
    background-color: #2196F3;
    font-size: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transform: scale(1);
    transition: all 350ms ease;
    font-weight: bold;

    &:hover{
        cursor: pointer;
        transform: scale(1.03);
        transition: all 350ms ease;
    }
`