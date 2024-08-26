import styled from "styled-components";

export const HeaderContainer = styled.div`
height: 12vh;
width: 100%;
background-color: white;
/* background-color: red; */
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
    z-index:99999;
    top: 0px;
    bottom: 0px;
   
    /* box-shadow: 0px 0px 1px 1px black; */


    @media screen and (max-width: 768px) {
        height: 12vh;
        width: 100%;
   
        /* background-color: red; */
      
        
    }
`
export const HeaderLeft = styled.div`
height: 100%;
width:1118px;
/* background-color:green; */
display: flex;
justify-content: space-between;
gap: 40px;

@media screen and (max-width: 768px) {
    display: flex;
        gap: 0px;
        /* width: 800px; */
        /* background-color: red; */
      
        
    }
    ul{
        display: flex;
        gap: 20px;
        /* background: rebeccapurple; */
        justify-content: space-between;
 
        
        li{
            display: flex;
            gap: 20px;
            transition: all 350ms ease-in-out;

                    
        &:hover{
            transform: scale(1.05);
            transition: all 350ms ease-in-out;
            color:#1d84d8;
}
        }

    }


`

export const Logo = styled.div`
height: 100%;
width: 200px;
/* background-color: red; */

    img{
        height: 100%;
        width: 78%;
        
    }
    @media screen and (max-width: 768px) {
        height: 100%;
        width: 180px;
        
    }
`

export const HeaderRight = styled.div`
height: 100%;
width: 160px;
/* background-color: yellow; */
display: flex;
align-items: center;
justify-content: center;


@media screen and (max-width: 768px) {
    height: 100%;
width: 250px;
/* background-color: yellow; */
display: flex;
align-items: center;
justify-content: flex-end;
    }

    button{
        height: 45px;
        width: 95px;
        border: none;
        border-radius:7px;
        font-size: 25px;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight:bold;
        background-color:#2196F3;
        cursor: pointer;
        color: white;
        transition: all 350ms ease-in-out;

                    
&:hover{
    transform: scale(1.05);
    transition: all 350ms ease-in-out;
}

        

        @media screen and (max-width: 425px) {
        /* height: 40px;
        width: 150px;
        font-size: 18px;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight:600;
        background-color:#2196F3;
        cursor: pointer; */
        display: none;
    }
    }
    @media screen and (max-width: 425px) {
        display: none;
        
    }
`
