import React from "react";
import styled from "styled-components";
import MainHolder from "./page/MainHolder";
import Login from "./page/auth/Login";
import Forgot from "./page/auth/Forgot";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AfterLogInPage from "./page/AfterLogInPage";
import ShowSha from "./page/AfterLogin/ShowSha";
import SignUp from "../src/page/auth/SignUp";
import Paid from "../src/page/AfterLogin/Paid";
import ResetPassword from "../src/page/auth/ResetPassword";
import DashBoard from "./page/AfterLogin/Dashboard";
import UserPrivate from "./UserPrivate";
import MainAdmin from "./page/AfterLogin/Admin/MainAdmin";
import AdminPrivateroute from "./page/AfterLogin/Admin/AdminPrivateroute";
import UserBase from "./page/AfterLogin/UserBase";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainHolder />,
    },
    {
      path: "/mainAdminDashBoard",
      element: <MainAdmin />,
    },
    {
      path: "/forgot",
      element: <Forgot />,
    },
    {
      path: "/dash-board",
      element: <DashBoard />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/reset",
      element: <ResetPassword />,
    },

    {
      element: (
        <UserPrivate>
          <UserBase />
        </UserPrivate>
      ),
      children: [
        {
          path: "/afterlogin",
          element: <AfterLogInPage />,
        },

        

        {
          path: "/order-payment",
          element: <ShowSha />,
        },

        {
          path: "/success",
          element: <Paid />,
        },
      ],
    },
   
    {
      element: <AdminPrivateroute />,
      children: [],
    },
  ]);

  return (
    <AppHolder>
      <div>
        <RouterProvider router={router} />
      </div>
      {/* <SignUp/> */}
    </AppHolder>
  );
};

export default App;

const AppHolder = styled.div`
  width: 100%;
  height: max-content;
  /* background: red; */
  /* padding: 10px; */
  overflow-x: hidden;
`;
