import React, { useEffect, useState } from "react";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import iron from "../assets/ironing2.png";
import ironing from "../assets/ironinghere.jpg";
import wash from "../assets/washingMachine.jpeg";
import dry from "../assets/dryCleaning.jpg";
import jeans from "../../src/assets/jeans.jpg";
import sweatshirt from "../../src/assets/sweatshirt.webp";
import short from "../../src/assets/shorts.webp";
import shirt from "../../src/assets/shirts.webp";
import white from "../../src/assets/whiteClothes.jpeg";
import Aqua from "../assets/AquaCleanGanGan.png";
// import Header from '../page/Header'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import DetailsHeader from "./DetailsHeader";
import Logo from "../../src/assets/Logos.jpg";
// import { useDispatch } from "react-redux";
import {
  PlaceOrderSeal,
  PlaceOrderCount,
  POTxt,
  POHeader,
  PlaceOrderIcon,
  ButonBox,
  Btn,
  Button,
  PlaceOrder,
  PlaceOrderContainer,
  PlaceOrderTxt,
  PlaceOrderWrapper,
  PlaceOrderBody,
  ActiveOrderCard,
  ActiveOrderCardSec,
  ActiveOrderSec,
  ActiveOrderBody,
  ServiceCard,
  ServiceCardHolder,
  DetailsBody,
  DetailsWrapper,
  WelcomeGreet,
  ServicesCardSec,
  Welcome,
  DetailsMain,
  PlaceOrderup,
  // Total,
  OurservicePrice,
  Washing,
  Ironing,
} from "../page/detail";
import { FcNext, FcPrevious } from "react-icons/fc";
import { useNavigate, useParams } from "react-router-dom";
import { BiAddToQueue, BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import { CgAddR } from "react-icons/cg";
import styled from "styled-components";
import Load from "./AfterLogin/Load";
import axios from "axios";
import { useSelector } from "react-redux";

const Details = () => {
  // const ServiceCard = styled.div`
  //   /* your styles here */
  // `;

  const user = useSelector((state) => state.userDatas.userdata);

  const userName = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const [toggle, setToggle] = useState(true);
  // const [username, setUserName] = useState();

  const ImageWrapper = styled.div`
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
  `;

  const GradientOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(13, 15, 20, 0.795),
      rgba(15, 12, 14, 0.808)
    );
    opacity: 0.5;
    border-radius: 10px;
  `;

  const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  `;

  // const Service = () => {
  //   return (

  //   );
  // };
  useEffect(() => {
    setTimeout(() => {
      setToggle(false);
    }, 2000);
  });
  const Nav = useNavigate();
  const [Proceed, setProceed] = useState(false)

  const [items, setItems] = useState([
    {
      id: 1,
      name: "Shorts",
      price: 500,
      quantity: 0,
      img: "../../src/assets/shorts.webp",
    },
    {
      id: 2,
      name: "Jeans",
      price: 700,
      quantity: 0,
      img: "../../src/assets/jeans.jpg",
    },
    {
      id: 3,
      name: "Shirts",
      price: 500,
      quantity: 0,
      img: "../../src/assets/shirts.webp",
    },

    {
      id: 4,
      name: "White",
      price: 1000,
      quantity: 0,
      img: "../../src/assets/whiteClothes.jpeg",
    },
    {
      id: 5,
      name: "SweatShirt",
      price: 900,
      quantity: 0,
      img: "../../src/assets/black.jpg",
    },
    {
      id: 6,
      name: "BedSheet",
      price: 200,
      quantity: 0,
      img: "../../src/assets/bedsheet.png",
    },
    {
      id: 7,
      name: "Curtains",
      price: 1500,
      quantity: 0,
      img: "../../src/assets/curtains.jpeg",
    },
  ]);

  const [secondItem, setSecondItem] = useState([
    {
      id: 1,
      name: "Shorts",
      price: 300,
      quantity: 0,
      img: "../../src/assets/shorts.webp",
    },
    {
      id: 2,
      name: "Jeans",
      price: 500,
      quantity: 0,
      img: "../../src/assets/jeans.jpg",
    },
    {
      id: 3,
      name: "Shirts",
      price: 300,
      quantity: 0,
      img: "../../src/assets/shirts.webp",
    },

    {
      id: 4,
      name: "White",
      price: 500,
      quantity: 0,
      img: "../../src/assets/whiteClothes.jpeg",
    },
    {
      id: 5,
      name: "SweatShirt",
      price: 600,
      quantity: 0,
      img: "../../src/assets/black.jpg",
    },
    {
      id: 6,
      name: "BedSheet",
      price: 1000,
      quantity: 0,
      img: "../../src/assets/bedsheet.png",
    },
    {
      id: 7,
      name: "Curtains",
      price: 1000,
      quantity: 0,
      img: "../../src/assets/curtains.jpeg",
    },
  ]);
  const add = (id) => {
    setItems(
      items.map((e) => {
        if (e.id == id) {
          e.quantity += 1;
          return e;
        } else {
          return e;
        }
      })
    );
  };

  const deg = (id) => {
    setItems(
      items.map((e) => {
        if (e.id == id) {
          if (e.quantity > 0) {
            e.quantity -= 1;
            return e;
          } else {
            e.quantity = 0;
            return e;
          }
        } else {
          return e;
        }
      })
    );
  };
  const inc = (id) => {
    setSecondItem(
      secondItem.map((e) => {
        if (e.id == id) {
          e.quantity += 1;
          return e;
        } else {
          return e;
        }
      })
    );
  };

  const dec = (id) => {
    setSecondItem(
      secondItem.map((e) => {
        if (e.id == id) {
          if (e.quantity > 0) {
            e.quantity -= 1;
            return e;
          } else {
            e.quantity = 0;
            return e;
          }
        } else {
          return e;
        }
      })
    );
  };

  const calculateTotal = () => {
    const totalWashing = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const totalIroning = secondItem.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return totalWashing + totalIroning;
  };

  const data = {
    short: {
      quantity: items[0].quantity,
      price: items[0].price,
    },
    jeans: {
      quantity: items[1].quantity,
      price: items[1].price,
    },
    shirts: {
      quantity: items[2].quantity,
      price: items[2].price,
    },
    white: {
      quantity: items[3].quantity,
      price: items[3].price,
    },
    sweatshirt: {
      quantity: items[4].quantity,
      price: items[4].price,
    },

    bedsheet: {
      quantity: items[5].quantity,
      price: items[5].price,
    },
    curtain: {
      quantity: items[6].quantity,
      price: items[6].price,
    },
  };

  const filterData = (data) => {
    return Object.entries(data)
      .filter(([key, value]) => value.quantity !== 0)
      .map(([key, value]) => ({ [key]: value }));
  };

  console.log(data);
  useEffect(() => {
    const filteredDataArray = filterData(data);
    const jsonString = JSON.stringify(filteredDataArray);
    localStorage.setItem("filteredData", jsonString);
  }, [data]);

  const placeOrder = () => {
    setProceed(true)
    const url = "https://laundry-api-habd.onrender.com/api/v1/user/place-order";
    const url2 = "https://laundry-api-habd.onrender.com/api/v1/user/iron";

    axios
      .post(url, data)
      .then((res) => {
        console.log(res);
        // setProceed(true)
        // console.log("order data", data);
        setTimeout(() => {
          Nav("/order-payment");
        }, 2000);
      })
      .catch((Error) => {
        setProceed(false)
        console.log(Error);
      });
    const datas = {
      short: {
        quantity: secondItem[0].quantity,
        price: secondItem[0].price,
      },
      jeans: {
        quantity: secondItem[1].quantity,
        price: secondItem[1].price,
      },
      shirts: {
        quantity: secondItem[2].quantity,
        price: secondItem[2].price,
      },
      white: {
        quantity: secondItem[3].quantity,
        price: secondItem[3].price,
      },
      sweatshirt: {
        quantity: secondItem[4].quantity,
        price: secondItem[4].price,
      },

      bedsheet: {
        quantity: secondItem[5].quantity,
        price: secondItem[5].price,
      },
      curtain: {
        quantity: secondItem[6].quantity,
        price: secondItem[6].price,
      },
    };
    console.log(datas);
    axios
      .post(url2, datas)
      .then((res) => {
        console.log(res);
        console.log("data", datas);
        // setTimeout(() => {
        //   Nav("/order-payment");
        // }, 2000);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };
  // const ironingOrder = () => {
  //   const url = "https://laundry-api-habd.onrender.com/api/v1/user/iron";
  //   const data = {
  //     short: {
  //       quantity: items[0].quantity,
  //       price:items[0].price
  //     },
  //     jeans: {
  //       quantity: items[1].quantity,
  //       price:items[1].price
  //     },
  //     shirts: {
  //       quantity: items[2].quantity,
  //       price:items[2].price
  //     },
  //     white: {
  //       quantity: items[3].quantity,
  //       price:items[3].price
  //     },
  //     sweatshirt: {
  //       quantity: items[4].quantity,
  //       price:items[4].price
  //     },

  //     bedsheet: {
  //       quantity: items[5].quantity,
  //       price:items[5].price
  //     },
  //     curtain: {
  //       quantity: items[6].quantity,
  //       price:items[6].price
  //     },
  //   };
  //   console.log(data);
  //   axios
  //     .post(url, data)
  //     .then((res) => {
  //       console.log(res);
  //       console.log("data", data);
  //       setTimeout(() => {
  //         Nav("/order-payment");
  //       }, 2000);
  //     })
  //     .catch((Error) => {
  //       console.log(Error);
  //     });
  // };

  // useEffect(() => {
  //   placeOrder()
  // }, [])

  // const { id } = useParams();
  // console.log(id);
  // const getUser=()=>{
  //   const url=`https://laundry-api-habd.onrender.com/api/v1/user/customer-info/${id}`
  //   console.log(url)
  //   axios.get(url)
  //   .then(res=>{
  //     console.log(res)
  //     // toast.success("login successful")
  //     // setLoading(false)

  //    setUserName(res?.data.data.fullname)
  //   console.log(res?.data.data.fullname)

  //   })   .catch(Error=>{
  //     console.log(Error)
  //     // toast.error("Login failed")
  //     // setLoading(false)
  //   })
  // }

  // useEffect(()=>{
  //   getUser()
  // },[])

  return (
    <>
      {toggle ? (
        <Load />
      ) : (
        <DetailsBody>
          <DetailsHeader />
          <DetailsWrapper>
            <WelcomeGreet>
              <Welcome>
                Welcome,
                <br />
                <strong>
                  {user.length == 0 ? (
                    <>{userName.fullname}</>
                  ) : (
                    <>{user.fullname}</>
                  )}
                </strong>
              </Welcome>
            </WelcomeGreet>

            <DetailsMain>
              <ServicesCardSec>
                <h3>Services</h3>
              </ServicesCardSec>

              <ServiceCardHolder>
                <ServiceCard>
                  <ImageWrapper>
                    <GradientOverlay />
                    <StyledImage src={wash} alt="" />
                  </ImageWrapper>
                  <span>Washing</span>
                </ServiceCard>

                <ServiceCard>
                  <ImageWrapper>
                    <GradientOverlay />
                    <StyledImage src={ironing} alt="" />
                  </ImageWrapper>
                  <span>Ironing</span>
                </ServiceCard>
                <ServiceCard>
                  <ImageWrapper>
                    <GradientOverlay />
                    <StyledImage src={dry} alt="" />
                  </ImageWrapper>
                  <span>DryCleaning</span>
                </ServiceCard>
              </ServiceCardHolder>
            </DetailsMain>

            <ActiveOrderBody>
              <ActiveOrderSec>
                <h3>Active orders</h3>
              </ActiveOrderSec>

              <ActiveOrderCardSec>
                <ActiveOrderCard>
                  <p onClick={() => Nav("/dash-board")}>
                    Click to view active orders{" "}
                    <span>
                      <MdOutlineArrowForwardIos
                        cursor="pointer"
                        style={{ display: "flex" }}
                        size={22}
                      />
                    </span>{" "}
                  </p>
                </ActiveOrderCard>
              </ActiveOrderCardSec>
            </ActiveOrderBody>

            <PlaceOrderBody>
              <PlaceOrderWrapper>
                <PlaceOrderTxt>Place a wash</PlaceOrderTxt>
                <PlaceOrderContainer>
                  <PlaceOrderup>
                    <p>
                      Check out our pricing list and add what you would like to
                      wash
                    </p>
                    <OurservicePrice>
                      <Washing>
                        {/* <p>Place Order</p> */}
                        {items.map((it) => (
                          <PlaceOrder>
                            <PlaceOrderSeal>
                              <PlaceOrderIcon>
                                <img src={it?.img} alt="" />
                              </PlaceOrderIcon>

                              <POHeader>
                                {it.name} <span>₦{it.price}/item</span>
                                <POTxt>₦{it.price * it.quantity}</POTxt>
                              </POHeader>
                            </PlaceOrderSeal>

                            <PlaceOrderCount>
                              <BiMinusCircle
                                onClick={() => deg(it.id)}
                                size={35}
                                color="#2196f3"
                                style={{ cursor: "pointer" }}
                              />
                              <p>{it.quantity}</p>

                              <BiPlusCircle
                                onClick={() => add(it.id)}
                                size={35}
                                color="#2196f3"
                                style={{ cursor: "pointer" }}
                              />
                            </PlaceOrderCount>
                          </PlaceOrder>
                        ))}
                      </Washing>
                      {/* <Ironing>
                        <p>Ironing</p>
                        {secondItem.map((its) => (
                          <PlaceOrder>
                            <PlaceOrderSeal>
                              <PlaceOrderIcon>
                                <img src={its?.img} alt="" />
                              </PlaceOrderIcon>
                              <POHeader>
                                {its.name} <span>{its.price}/item</span>
                                <POTxt>${its.price * its.quantity}</POTxt>
                              </POHeader>
                            </PlaceOrderSeal>

                            <PlaceOrderCount>
                              <BiMinusCircle
                                onClick={() => dec(its.id)}
                                size={35}
                                color="#2196f3"
                                style={{ cursor: "pointer" }}
                              />
                              <p>{its.quantity}</p>
                              <BiPlusCircle
                                onClick={() => inc(its.id)}
                                size={35}
                                color="#2196f3"
                                style={{ cursor: "pointer" }}
                              />
                            </PlaceOrderCount>
                          </PlaceOrder>
                        ))}
                      </Ironing> */}
                      {/* <Total>
                        <p>Total Price</p>
                        {secondItem.map(() => (
                          <PlaceOrder></PlaceOrder>
                        ))}
                      </Total> */}
                    </OurservicePrice>
                  </PlaceOrderup>
                  <Button>
                    <h1>
                      Total Price: <span>₦{calculateTotal()}</span>
                    </h1>
                  </Button>
                  {/* <button onClick={Login}>GET</button> */}
                  <ButonBox>
                    <Btn onClick={placeOrder}> {
                        Proceed? "Processing" : "Proceed"
                      } </Btn>
                  </ButonBox>
                </PlaceOrderContainer>
              </PlaceOrderWrapper>
            </PlaceOrderBody>
          </DetailsWrapper>
        </DetailsBody>
      )}
    </>
  );
};

export default Details;




