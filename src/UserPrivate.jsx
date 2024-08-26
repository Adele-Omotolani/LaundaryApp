import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import AfterLogInPage from "./page/AfterLogInPage";

const UserPrivate = ({ element, children }) => {
  // const Token = useSelector((state)=>state.userDatas.token);
  const admin = JSON.parse(localStorage.getItem("isAdmin"));
  // console.log(Token)
  return (
    <>
      {admin === false ? (
        children ? (
          <>{children}</>
        ) : (
          <>{element}</>
        )
      ) : (
        <Navigate to="/login" replace/>
      )}
    </>
  );
};

export default UserPrivate;
