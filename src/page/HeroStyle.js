import styled from "styled-components";

export const HeroPageContainer = styled.div`
height: 176vh;
width:100%;
/* background-color: green; */
display: flex;
flex-direction:column;
align-items: center;
/* border-radius: 50px; */
margin-top:100px;
@media screen and (max-width: 768px) {
    height: 200vh;
    width: 100%;
    /* background-color: green; */
    }
    @media screen and (max-width: 425px) {
        margin-top:60px;
        height: 245vh;
           
    }
`
export const HeropPageUp = styled.div`
height: 88vh;
width:100%;
background: linear-gradient(to bottom, rgb(27, 27, 27,0.68), rgb(32, 28, 28,0.78)), url("../../src/assets/womansmell.webp");
background-repeat: no-repeat;
background-size: cover;
background-position: center;
/* border-top-right-radius:30px;
border-top-left-radius:30px; */
display: flex;
/* gap: 30px; */
justify-content: center;
align-items: center;

@media screen and (max-width: 768px) {
    height: 100vh;
width: 100%;
/* background-color: red; */
/* border-top-right-radius:50px;
border-top-left-radius:50px; */
display: flex;
gap: 10px;
flex-direction:column;

align-items: center; 
        
    }
    @media screen and (max-width: 425px) {
           height: 80vh;
           
    }
`
export const HeroPageText = styled.div`
height: 70%;
width: 750px;
/* background-color: yellow; */
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
@media screen and (max-width: 768px) {
    height: max-content;
    width: 100%;
    }
   
`
export const TextUp = styled.div`
height:max-content;
width: 990px;
/* background-color: brown; */
display: flex;
flex-direction: column;
text-align: center;
/* justify-content: center; */
align-items: center;
gap: 50px;

@media screen and (max-width: 768px) {
    height: max-content;
    width: 100%;
    gap: 0px;
    }

h2{
    font-size: 60px;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight:700;
        color: white;
        @media screen and (max-width: 768px) {
            font-size:22px;
            padding-left:20px;
    }
    @media screen and (max-width: 425px) {
            font-size: 22px;
    }
    
    /* span{

        font-size: 40px;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight:700;
        color: white;
        @media screen and (max-width: 768px) {
            font-size: 30px;
    }
} */

    }
    p{
        font-size: 31px;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight:600;
        color: white;
        @media screen and (max-width: 768px) {
            font-size: 20px;
    }
    @media screen and (max-width: 425px) {
            font-size: 16px;
    }
    }
   
    button{
        height: 63px;
        width: 170px;
        border: none;
        /* background: #000; */
        border-radius:10px;
        font-size: 25px;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight:bold;
        background-color:whitesmoke;
        cursor: pointer;
        transition: all 350ms ease-in-out;

        &:hover{
            transform: scale(1.05);
            transition: all 350ms ease-in-out;
            /* background: ; */

        }


        @media screen and (max-width: 768px) {
            font-size:20px;
            height: 50px;
            width: 120px;
    }
}
    
`
export const TextDown= styled.div`
height: max-content;
width: 650px;
/* background-color: teal; */
border-radius:10px;
display: flex;
flex-direction:column;
justify-content: center; 
align-items: center;
gap: 20px;

@media screen and (max-width: 768px) {
    height: max-content;
    width: 300px;
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
   
    }
p{
        font-size: 23px;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight:600;
        color: white;
        @media screen and (max-width: 768px) {
            font-size:18px;
    }
    }

`
export const HeroPageImage = styled.div`
height: 100%;
width: 850px;
/* background-color: purple; */
@media screen and (max-width: 768px) {
    height: 80%;
    width: 100%;
    }
    img{
        height: 100%;
        width: 100%;
       
    /* border-top-right-radius:50px; */
        /* object-fit: cover; */
    }
 `
export const HeroPageDown = styled.div`
height: 89vh;
width: 100%;
background-color: #E6EFEE;
/* background: red; */
/* border-bottom-right-radius:50px;
border-bottom-left-radius:50px; */
display: flex;
justify-content: space-around;
align-items: center;
/* padding: 30px; */


@media screen and (max-width: 768px) {
    /* height: 70vh;
    width: 100%; */
    height: 100vh;
    width: 100%;
    /* background-color: red; */
    /* border-top-right-radius:50px;
    border-top-left-radius:50px; */
    display: flex;
    flex-direction:column;

    }
    @media screen and (max-width: 425px) {
        height: 160vh;
        width: 100%;
        display: flex;
    justify-content: space-around;
    align-items: flex-start;
    /* background-color: red; */
        /* margin-bottom: 90px; */
            
    }
`
export const HeroPageDownImage = styled.div`
height: 90%;
width:720px;
margin-left: 20px;
/* background-color:red; */
display: flex;
align-items: center;
justify-content: center;
/* gap: 20px; */
/* padding-left: 20px; */


@media screen and (max-width: 768px) {
    height: max-content;
    width:100%;
    display: flex;
    flex-direction:column;
    margin-left: 0px;
    }
    @media screen and (max-width: 425px) {
        height:65%;
        /* background-color: green; */
        display: flex;
        flex-direction:column;
        justify-content:center;
       align-items: center;
        /* padding-top:10px */
    }
`
export const HeroPageImageLeft = styled.div`
height:65%;
width:320px;
/* background-color: black; */
img{
        height: 95%;
        width: 98%;
        border:5px solid white;
        border-radius:15px;
    /* border-bottom-right-radius:50px; */
        /* object-fit: cover; */
        @media screen and (max-width: 425px) {
        height:100%;
        width: 70%;
       
    }
    }
    @media screen and (max-width: 425px) {
        height: 43%;
        width: 100%;
        display: flex;
        justify-content: center;
        
    }
`
export const HeroPageImageRight = styled.div`
height:100%;
width:500px;
/* background-color: orange; */
display: flex;
flex-direction:column;
@media screen and (max-width: 425px) {
    height:58%;
        width: 100%;
        display: flex;
        justify-content: center;
    flex-direction:column;
    gap: 15px;
    align-items: center;
    /* background-color: orange; */
   

    }
/* gap: 10px; */

`
export const  HeropageRightUp = styled.div`
height: 50%;
width: 90%;
padding-top: 10px;

/* object-fit: 200px; */
/* object-position: top; */


/* background-color: green; */
img{
        height: 90%;
        width: 90%;
        border:5px solid white;
    border-radius:15px;
        /* object-fit: cover; */
        @media screen and (max-width: 425px) {
        height:100%;
        width: 100%;
        display: flex;
        justify-content: center;
    }
    }
`
export const HeropageRightDown = styled.div`
height: 45%;
width: 75%;
/* background-color:peru; */
img{
        height: 90%;
        width: 90%;
        border:5px solid white;
        border-radius:15px;
        @media screen and (max-width: 425px) {
        height:100%;
        width: 100%;
        display: flex;
        justify-content: center;
        /* background-color: orange; */
    }
    /* border-bottom-right-radius:50px; */
        /* object-fit: cover; */
    }
`
export const HeroPageDownText = styled.div`
height:max-content;
width: 700px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
gap: 10px;
margin-right: 15px;
/* background-color: yellow; */

@media screen and (max-width: 768px) {
    height:max-content;
    width: 100%;   
    }
    @media screen and (max-width: 425px) {
       
           padding-left: 10px;
        
    }

h4{
        font-size: 30px;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: bold;
        text-decoration: underline;

        @media screen and (max-width: 768px) {
            font-size:15px;
        
    }
    @media screen and (max-width: 425px) {
            font-size:20px;
        
    }
}
h1{
    font-size: 30px;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight:700;
        @media screen and (max-width: 768px) {
            font-size:35px;
        
    }
    @media screen and (max-width: 425px) {
            font-size:20px;
        
    }
}

    p{
        font-size: 20px;
        text-align: center;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        /* font-weight:700; */
        /* font-weight: bold; */
        @media screen and (max-width: 425px) {
            font-size:20px;
        
    }
    }
`


