import styled from "styled-components";


// export const HoldIcon = styled.div`
// `
export const HoldText = styled.div`
        height: 80%;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
`
export const Zero = styled.div`

max-width: 30px;
max-height: 30px;
border-radius: 50%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
   
`
export const DownIcon = styled.div`
  height: 35% !important;
width: 65% !important;
display: flex !important;
justify-content: space-between;
/* justify-content: ; */
flex-direction: row !important;
align-items: center;
gap: 5px !important;
/* padding: 4px;     */
/* background: #000; */
`
export const Box = styled.div`
height: 100%;
width: 23%;
/* background-color: red; */
display: flex;
flex-direction: column;
justify-content: space-between;

    & h3{
            font-size: 20px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

            &:hover{
                cursor: default;
            }
        }

    div{
        height: 80%;
        width: 100%;
        /* background: white; */
        display: flex;
        flex-direction: column;
        gap: 5px;

       

        & p{
            font-size: 15px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            &:hover{
                cursor: pointer;
                text-decoration: underline;
            }
        }
    }

`
export const Deets = styled.div`
    height: 80%;
    width: 100%;
    /* background: navy; */
    display: flex;
    justify-content: space-around;
`
export const Copyright = styled.div`
    height: 15%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    p{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
`
export const FooterMiddle = styled.div`
    height:83%;
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 7px;
    /* background-color: orange; */
   
`

export const FooterStyling = styled.div`
    height:42.8%;
    width: 100%;
    /* margin-left: 29px; */
    background: #2196F3;
    display: flex;
    justify-content: center;
    /* border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px; */
    align-items: center;
    color: white;
`
export const Map = styled.div`
    height: 100%;
    width: 40%;
    /* background: white; */
    border-radius: 7px;
    /* background: #000; */
    display: flex;
    align-items: flex-end;

    img{
        height: 95%;
        width: 93%;
        border-radius: 7px;
        border: 1px solid #2196F3;
        margin-left: 35px;
    }
`
export const HoldTheVisitAndMap = styled.div`
    height: 75%;
    width: 90%;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    align-items: flex-end;
    /* background: rebeccapurple; */

`
export const VisitUsText = styled.div`
    height: 94%;
    width: 65%;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
    /* background: brown; */

    gap: 10px;
    margin-top: 5px;


    h1{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 35px;
    }
    div{
        height: 85%;
        width:100%;
        /* background: pink; */
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding-left: 3px;

        & p{
            font-size: 18px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        & span{
            color: cornflowerblue;
            font-weight: 600;
        }
    }

`
export const BeforeFooterBody = styled.div`
    height: 60%;
    width: 100%;
    /* background: #f1f1fb; */
    background: #E6EFEE;
    /* background-color: green; */
    /* border-top-right-radius: 70px;
    border-top-left-radius: 70px; */
    display: flex;
    align-items: center;
    justify-content: center;
    /* margin-left: 29px; */
    @media screen and (max-width: 425px) {
       height: max-content;
       display: flex;
       flex-direction:column;
       /* margin-bottom:80px; */
        
    }

`
export const Holder = styled.div`
    height: 96vh;
    width: 100%;
    background-color: yellow;


`
