import React from "react"
import Logo from "../../src/assets/Logos.jpg"
import { UserDashBoardHolder,
    UserBoardHouse,
    UserHeader,
    UserHeaderLeft,
    UserHeaderRight,
    UserHeaderRightBtn,
    UserNameHoldUp
 } from '../page/UserDashboard'

const UserBoard = () =>{

    return (
        <UserDashBoardHolder>
            <UserBoardHouse>
                <UserHeader>
                    <UserHeaderLeft>
                        <img src={Logo} alt="" />
                    </UserHeaderLeft>

                    <UserHeaderRightBtn>
                        Logout
                    </UserHeaderRightBtn>
                </UserHeader>

                <UserNameHoldUp>

                </UserNameHoldUp>
            </UserBoardHouse>
        </UserDashBoardHolder>
    )
} 

export default UserBoard 


