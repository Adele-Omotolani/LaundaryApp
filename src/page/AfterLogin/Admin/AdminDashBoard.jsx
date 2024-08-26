import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
// import { LuScrollText } from "react-icons/lu";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
import axios from "axios";
const AdminDashBoard = () => {
  const userToken = localStorage.getItem("userToken");
  console.log(userToken);

  const [users, setUsers] = useState([]);
  const list = [
    {
      id: 1,
      service: "Washing",
    },
    {
      id: 2,
      service: "Ironing",
    },
    // {
    //     id: 3,
    //     service: "Dry Cleaning"
    // },
  ];
  const adminApi = () => {
    // e.preventDefault
    const url =
      "https://laundry-api-habd.onrender.com/api/v1/user/all-customers-info";
    axios
      .get(url, {
        headers: {
          application: "application/json",
          Authorization: `Bearer: ${userToken}`,
        },
      })
      .then((res) => {
        console.log(res);
        setUsers(res?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    adminApi();
  }, []);
  const totalCustomer = users?.filter((e) => {
    return e.isAdmin !== true;
  })?.length;
  console.log(totalCustomer);



  const totalCustomerName = users?.filter((e) => {
    return e.isAdmin !== true;
  });
  console.log(totalCustomer);
  return (
    <TheDashB>
      <TheHeader>
        <HoldTitleHead>
          <p>DashBoard</p>{" "}
        </HoldTitleHead>
        <HoldTitlePicture>
          <YourProfile>
            <FaUserShield size={32} color="white" />
          </YourProfile>
        </HoldTitlePicture>
      </TheHeader>
      <ThenLast>
        <CustomersInfo>
          {/* <ThoseCusBoxes>
                    <DollarBox>$</DollarBox>
                    <TotalBox>
                        <p>Total Profit</p>
                        <h2>$2500.00</h2>
                    </TotalBox>
                </ThoseCusBoxes> */}
          <HoldCust>
            <ThoseCusBoxes>
              <GreenBox>
                <MdOutlineLibraryBooks color="white" size={32} />
              </GreenBox>
              <GreenTotal>
                <p>Total Orders</p>
                <h2>8</h2>
              </GreenTotal>
            </ThoseCusBoxes>
            <ThoseCusBoxes>
              <OrangeBox>
                <MdPeople color="white" size={35} />
              </OrangeBox>
              <OrangeTotal>
                <p>Total Customers</p>
                <h2>{totalCustomer }</h2>
              </OrangeTotal>
            </ThoseCusBoxes>
          </HoldCust>
          <TheBody>
            <Ratings>
              <Top>Reviews</Top>
              <Box123>
                <Round>
                  <p>4.0</p>
                </Round>
                <ReviewHere>
                  <Starr>
                    <FaStar color="#f1f112" />
                    <FaStar color="#f1f112" />
                    <FaStar color="#f1f112" />
                    <FaStar color="#f1f112" />
                    <FaStarHalf color="#f1f112" />
                  </Starr>

                  <h2>4.0/5.0</h2>
                  <p>Over 1000+ customers</p>
                </ReviewHere>
              </Box123>
            </Ratings>
          </TheBody>
        </CustomersInfo>
        <OrderBox>
          <HeadThis>
            <Customer>
              {" "}
              <strong>Customer</strong>{" "}
            </Customer>
            <Amount>
              {" "}
              <strong>Amount</strong>{" "}
            </Amount>
            <Status>
              {" "}
              <strong>Status</strong>{" "}
            </Status>
          </HeadThis>
          {totalCustomerName.map((e) => (
            <HoldThese>
              <Customer>{e.fullname}</Customer>
              <Amount>11/02/2023, 11:45</Amount>
              <Status>Confirmed</Status>
            </HoldThese>
          ))}
        </OrderBox>
      </ThenLast>
      <ServiceBoxArea>
        <ServicesTop>
          <p>Services</p>
        </ServicesTop>
        <ServicesBodyy>
          <ServiceLeft>
            <ol>
              {list.map((e) => (
                <li>{e.service}</li>
              ))}
            </ol>
          </ServiceLeft>
          <ServiceRight>
            {/* <button>Create</button> */}
          </ServiceRight>
        </ServicesBodyy>
      </ServiceBoxArea>
    </TheDashB>
  );
};

export default AdminDashBoard;

// const ServiceRight = styled.div`

// `
const ServiceRight = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 10px;
  button {
    height: 40px;
    width: 100px;
    background-color: #2c7aee;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

    &:hover {
      background-color: #2365c8;
      cursor: pointer;
    }
  }
`;
const ServiceLeft = styled.div`
  height: 100%;
  width: 40%;
  padding-inline: 50px;

  ol {
    display: flex;
    gap: 5px;
    flex-direction: column;
  }
  li {
    height: 30px;
    width: 80%;
    /* background-color: red; */
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 17px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  /* background: black; */
  /* overflow-y: scroll; */
`;
const ServicesBodyy = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ServicesTop = styled.div`
  height: 35px;
  width: 100%;
  background-color: #dfd4df;
  padding-left: 16px;

  p {
    font-size: 22px;
    font-weight: 500;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`;
const ServiceBoxArea = styled.div`
  height: 30%;
  width: 100%;
  /* background-color: #3f3f08; */
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;
const HoldCust = styled.div`
  height: 90px;
  width: 100%;
  display: flex;
  gap: 10px;
`;
const Starr = styled.div`
  display: flex;
  flex-direction: row;
`;
const GreenTotal = styled.div`
  height: 60px;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;

  p {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 17px;
    color: #5f5e5e;
  }
`;
const GreenBox = styled.div`
  height: 58px;
  width: 60px;
  border-radius: 50%;
  background: green;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const OrangeTotal = styled.div`
  height: 60px;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;

  p {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 17px;
    color: #5f5e5e;
  }
`;
const OrangeBox = styled.div`
  height: 58px;
  width: 60px;
  border-radius: 50%;
  background: orange;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TotalBox = styled.div`
  height: 60px;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;

  p {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 17px;
    color: #5f5e5e;
  }
`;
const DollarBox = styled.div`
  height: 58px;
  width: 60px;
  border-radius: 50%;
  background: Blue;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 30px;
  font-weight: 600;
`;
const HeadThis = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: sticky;
  top: 0;
  bottom: 0;
  z-index: 99999;
  height: 40px;
  width: 100%;
  padding-right: 5px;
  padding-left: 5px;
  background-color: #00a6ff;

  strong {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 20px;
  }
`;
const Status = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
const Amount = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
const Customer = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
const HoldThese = styled.div`
  height: 35px;
  min-height: 35px;
  width: 100%;
  /* background: magenta; */
  display: flex;
  padding-left: 5px;
  border-top: 1px solid black;
  align-items: center;
  padding-right: 5px;
  justify-content: space-between;
`;

const OrderBox = styled.div`
  height: 100%;
  width: 49%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow-y: scroll;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;
const ThenLast = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const ReviewHere = styled.div`
  height: 80%;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 15px;

  p {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 17px;
  }
`;
const Round = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-left: 8px solid #3498db;
  border-bottom: 8px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 30px;
    font-weight: 600;
  }
`;
const Box123 = styled.div`
  height: 80%;
  width: 100%;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  gap: 20px;
`;
const Top = styled.div`
  height: 18%;
  width: 100%;
  padding-left: 9px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  font-weight: 500;
`;
const ThoseCusBoxes = styled.div`
  height: 90px;
  width: 220px;
  background-color: white;
  border: 1px solid black;
  display: flex;
  align-items: center;
  padding: 6px;
  gap: 7px;
`;
const Ratings = styled.div`
  height: 100%;
  width: 100;
`;
const TheBody = styled.div`
  height: 210px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const CustomersInfo = styled.div`
  height: 100%;
  width: 49%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;
const YourProfile = styled.div`
  height: 55px;
  width: 55px;
  border-radius: 50%;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HoldTitlePicture = styled.div`
  height: 70px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const HoldTitleHead = styled.div`
  height: 55px;
  width: 300px;
  display: flex;
  align-items: center;

  p {
    font-size: 26px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`;
const TheHeader = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  display: flex;
  border-radius: 3px;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;
const TheDashB = styled.div`
  height: 100%;
  width: 100%;
  /* background: #000; */
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
