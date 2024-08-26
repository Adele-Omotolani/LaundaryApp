import styled from 'styled-components'

export const SignUpHolder = styled.div`
    width: 100%;
    height: 100vh;
    background: #2196F3;
    background: white;
    background: linear-gradient(to bottom, rgba(13, 15, 20, 0.795), rgba(15, 12, 14, 0.808)), url("../../../src/assets/FoldedClothes.jpg");
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    background-position-x: right;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    /* margin: 0px;
    padding: 0px; */
`
export const AlreadyHolder = styled.div`
    display:flex;
    width: 100%;
    flex-direction: column;
    justify-content: flex-end;
    gap: 5px;
`

export const SignHolderLogo = styled.div`
    width: 100%;
    height: 25%;
    /* background: white; */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
    padding-top: 20px;
    /* gap: 10px; */


        img{
            width: 190px;
            height: 164px;
            background: transparent;

            
    @media screen and (max-width: 425px){
        width: 300px;
    }

    @media screen and (max-width: 320px){
        width: 250px;
    }
        }
`

export const SignUpInputHold = styled.div`
    width: 350px;
    height: 60%;
    background: #2196F3;
    /* background: teal; */
    padding: 5px;
    border-radius: 10px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    gap: 10px;


    h2{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        /* font-family: Arial, Helvetica, sans-serif; */
        font-size: 33px;
        font-weight: 500;
        color: white;
    }

    @media screen and (max-width: 425px){
        width: 300px;
    }

    @media screen and (max-width: 320px){
        width: 250px;
    }
`

export const SignUpText = styled.div`
    width: 95%;
    height: 12%;
    /* background: green; */
    display: flex;
    align-items: center;
`

export const Input = styled.input`
    width: ${({wd}) => (wd ? "95%" : "90%")};
    height: ${({hg}) => (hg ? "12%" : "100%")};
    background: white;
    border: none;
    outline: none;
    padding-left: 10px;
    font-size: 13px;
    border-radius: 5px;
`
export const InputPasswordDiv = styled.div`
    width: 95%;
    height: 12%;
    background: white;
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
`

export const AlreadyHave = styled.div`
    width: 100%;
    height: 20px;
    /* background: hotpink; */
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    /* align-items: center; */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    gap: 4px;
    font-weight: bold;
    font-size: 14px;


    span{
        color: navy;
        cursor: pointer;

        &:hover{
        text-decoration: underline;
        }
    }
`

export const Button = styled.div`
    width: 95%;
    height: 48px;
    background: navy;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    transition: all 350ms ease-in-out;
    color: white;

    &:hover{
    background: navy;
    color: white;
    /* transform: scale(1.05); */
    }
`

export const PassInfo = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  margin-right: 20px;
  gap: 6px;
  

  span {
    /* color: rgba(224, 215, 215, 0.968); */
    color: red;
  }
 `