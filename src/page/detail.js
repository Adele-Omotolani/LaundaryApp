import styled from "styled-components"
import iron from '../assets/ironing2.png'
// color code #2196f3


// export const HolderOfImage = styled.button`

// `
// export const HolderOfImage = styled.button`
//   height: 80px;
//   width: 0px;
//   /* background: white; */
//   border: none;

//   img{
//     height: 100%;
//     width: 100%;
//     /* background: transparent; */
//   }
// `

// export const Left = styled.button`
//   height: 100%;
//   width: 40%;
//   background: pink;
//   display: flex;
//   flex-direction: row;

  
// `
// export const Right = styled.button`
//   height: 100%;
//   width: 20%;
//   background: pink;
// `

// export const AdBtn = styled.button`

// `
export const Button = styled.div`
height: 100px;
width: 100%;
background-color: #fff;
border-radius: 10px;
display: flex;
align-items: center;
padding-left:20px
`
export const PlaceOrderSeal = styled.div`
  display: flex;
  gap: 10px;
  /* background-color: red; */
  width: 205px;
  height: 80px;
`

export const PlaceOrderCount = styled.div`
  width: 120px;
  display: flex;
  align-items: center;
  /* background-color: yellow; */
  justify-content: space-between;
`

export const POTxt = styled.div`
  color: gray;
`

export const POHeader = styled.h3`
  font-size: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  
  span {
    color: gray;
    font-size: 20px;
  }
`

export const PlaceOrderIcon = styled.div`
  height: 70px;
  width: 100px;
  /* background-color: aqua; */
  border: 1px solid #2196f3;
  /* border-radius: 5px; */

  img{
    width: 100%;
    height: 100%;

  }
`


export const ButonBox = styled.div`
  /* background-color: ; */
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Btn = styled.button`
  color: #2196f3;  
  /* background-color: green; */
  /* color: white; */
  border: none;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 15px;
  padding: 15px;
  /* width: 120px; */
  max-width: 150px;
  padding-left: 5px;
  padding-right: 5px;
  height: 58px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 25px;

  transition: all 350ms ease-in-out;

                    
&:hover{
    transform: scale(1.05);
    transition: all 350ms ease-in-out;
}

  /* &:hover {
    color: #1a81d6;
    background-color: white;
    border: 1px solid #1a81d6;
  } */
`



export const OrderBody = styled.div`
  height: 100px;
  width: 100%;
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-top: 30px;
  border-radius: 10px;
`

export const PlaceOrder = styled.div`
  width:100%;
  height: 100px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25%;
  padding: 10px;
  padding-right: 20px;
`

export const PlaceOrderContainer = styled.div`
  height: max-content;
  background-color:#2196f3;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* padding-top: 60px; */
  /* border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px; */

 
`
export const PlaceOrderup =styled.div`
height: 100%;
width: 100%;
/* background-color:green; */
display: flex;
flex-direction:column;
gap: 20px;
P {
    font-size: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`
export const OurservicePrice = styled.div`
display: flex;
height: 100%;
width: 100%;
 /* background-color: red;  */
justify-content: space-between;
/* padding: 10px; */
gap: 20px;


`
export const Washing= styled.div`
height: 90%;
width:1400px;
/* background-color: blue; */
align-items: center;
justify-content: center;
display: flex;
flex-direction: column;
gap: 10px;
P {
  display: flex;
  justify-content: center;
    font-size: 25px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight:600
  }

  @media screen and (max-width:827px) {
    width: 100%;
  }
` 
export const Ironing= styled.div`
height: 90%;
width: 700px;
/* background-color: blue; */
display: flex;
flex-direction: column;
gap: 10px;

P {
  display: flex;
  justify-content: center;
    font-size: 25px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight:600
  }
`
export const Total = styled.div`
height: 90%;
width: 150px;
/* background-color: blue; */
display: flex;
flex-direction: column;
gap: 10px;

P {
  display: flex;
  justify-content: center;
    font-size: 25px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight:600
  }

`

export const PlaceOrderTxt = styled.h3`
  font-size: 30px;
  /* background: red; */
  /* font-family: 'Times New Roman', Times, serif; */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding-left: 15px;
`

export const PlaceOrderWrapper = styled.div`
  /* background-color: red; */
  height: max-content;
  width: 100%;
  margin-top:20px
`

export const PlaceOrderBody = styled.div`
  height: max-content;
  /* background-color: green; */
  width: 100%;
  /* padding: 10px; */
`

 export const ActiveOrderCard = styled.div`
   height: 50px;
  width: 100%;

   border-radius: 10px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 5px;
   span{
     display: flex;
     flex-direction: row;
     align-items: center;
 }

   p{
     font-size: 20px;
     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
     display: flex;
     flex-direction: row;
     cursor: pointer;
     align-items: center;
   }
`
 export const ActiveOrderCardSec = styled.div`
//   height: max-content;
//   width: 100%;

//   padding: 10px;

//   display: flex;
//   gap: 20px;
 `

export const ActiveOrderSec = styled.div`


//   h3 {
//     font-size: 30px;
//   }
 `

 export const ActiveOrderBody = styled.div`
  background-color: white;
   padding: 10px;
   height: max-content;

 `

export const ServiceCard = styled.div`
  height: 250px;
  width: 430px;
  background-color:#2196f3 ;
  border-radius: 10px;
  display: flex;
 
  align-items: end;
 
  img{
    height: 100%;
    border-radius: 10px;
    width: 100%;
  }
  span {
    font-size: 30px;
    padding: 10px;
    
    /* font-family: 'Times New Roman', Times, serif; */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    position: absolute;
    color: white;
    font-weight: bold;
  }
  
`

export const ServiceCardHolder = styled.div`
  /* background-color: red; */
  height: max-content;
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  /* flex-direction: column; */
`

export const ServicesCardSec = styled.div`
  height: 50px;
  /* color: red; */
  /* background-color: aqua; */
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  padding-left: 10px;

  h3 {
    font-size: 25px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  span {
    font-size: 20px;
    color: #2196f3;
  }
`

export const DetailsMain = styled.div`
  height: max-content;
  background-color: #E6EFEE;
  /* border-top-right-radius: 20px;
  border-top-left-radius: 20px; */
  padding: 20px;
`

export const Name = styled.h3`
  font-size: 30px;
  font-weight: 700;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

`

export const Welcome = styled.p`
  font-size: 35px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 100;
`

export const WelcomeGreet = styled.div`
  color: white;
  /* background-color: red; */
  width: 100%;
  height: max-content;
  padding: 25px;
  display: flex;
  /* gap: 10px; */
  justify-content: space-between;


`

export const DetailsWrapper = styled.div`
  background-color: #2196f3;
  /* background-color: yellow; */
  /* border-radius: 50px; */
  width: 100%;

  /* margin-top: 15px; */
  
`

export const DetailsBody = styled.div`
  height: max-content;
  align-items: center;
  /* padding: 10px; */
  background-color: whitesmoke;
  display: flex;
  width: 100%;
  flex-direction:column;
  margin-top: 80px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  /* padding: 10px; */
`
