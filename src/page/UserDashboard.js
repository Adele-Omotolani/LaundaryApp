import styled from "styled-components"


export const UserDashBoardHolder = styled.div`
    width: 100%;
    height: max-content;
    background: #000;
    display: flex;
    justify-content: center;
`

export const UserBoardHouse = styled.div`
    width: 96%;
    height: auto;
    background: crimson;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 15px
`

export const UserHeader = styled.div`
    width:  100%;
    height: 10vh;
    background: teal;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const UserHeaderLeft = styled.div`
    width: 8%;
    height: 100%;
    background: orangered;

    img{
        width: 100%;
        height: 100%;
    }
`

export const UserHeaderRight = styled.div`
    width: 20%;
    height: 100%;
    background: hotpink;
`

export const UserHeaderRightBtn = styled.button`
     /* width: 100%;
    height: 100%; */
    background-color: #2196f3;
    color: white;
    height: 45px;
    width: 95px;
    border: none;
    border-radius: 7px;
    font-size: 25px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    cursor: pointer;
    transition: all 350ms ease-in-out;
    outline: none;
`

export const UserNameHoldUp = styled.div`
    width: 100%;
    height: 25vh;
    background: rebeccapurple;
    border-radius: 6px 6px 0px 0px;
`