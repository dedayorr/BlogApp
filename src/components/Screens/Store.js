import React, { useState, useContext, useEffect } from "react";

import { BsCart4 } from "react-icons/bs";
import { BsFillTagsFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Cart } from "../Cart/Cart";
import { ContextProvider } from "../Context";
import ScrollToTop from "react-scroll-to-top";

export const Store = () => {
  // const {addToCart, cartBooks, getBooks} = useContext(ContextProvider)
  // console.log(cartBooks)
  const [newArrival, setnewArrival] = useState(null);
  const [shipping, setShipping] = useState(false);
  const [openCart, setopenCart] = useState(false);
  
  useEffect(()=>{
    // getBooks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])

  const Books = [
    {
      id: 1,
      title: "Cartoon History Of Usa",
      img: require("../BookImages/cartoonHistoryOfUsa.jpg"),
      price: 6000,
      category: "NewArrivals",
    },
    {
      id: 2,
      title: "SAVED",
      img: require("../BookImages/newarrival1.jpg"),
      price: 6000,
      category: "NewArrivals",
    },
    {
      id: 3,
      title: "YOUNG FOREVER",
      img: require("../BookImages/newarrival2.jpg"),
      price: 6000,
      category: "NewArrivals",
    },
    {
      id: 4,
      title: "Things We Hide From The Light",
      img: require("../BookImages/newarrival3.jpg"),
      price: 6000,
      category: "NewArrivals",
    },
    {
      id: 5,
      title: "NEVER NEVER",
      img: require("../BookImages/newarrival4.jpg"),
      price: 6000,
      category: "NewArrivals",
    },
    {
      id: 6,
      title: "Fresh Water",
      img: require("../BookImages/freshwater.jpeg"),
      price: 6000,
      category: "Popular",
    },
    {
      id: 7,
      title: "AMERICANAH",
      img: require("../BookImages/Americanah.jpeg"),
      price: 6000,
      category: "Popular",
    },
    {
      id: 8,
      title: "Purple Hibiscus",
      img: require("../BookImages/purplehibiscus.jpeg"),
      price: 6000,
      category: "Popular",
    },
    {
      id: 9,
      title: "The Secret Lives Of Babaseyi's Wives",
      img: require("../BookImages/TheSecretLivesofbabaseyi'swives.jpeg"),
      price: 6000,
      category: "Popular",
    },
    {
      id: 10,
      title: "Things Fall Apart",
      img: require("../BookImages/thingsfallapart.jpeg"),
      price: 6000,
      category: "Popular",
    },
    {
      id: 11,
      title: "SHE",
      img: require("../BookImages/SHE.jpg"),
      price: 6000,
      category: "bestsellers",
    },
    {
      id: 12,
      title: "SPARE",
      img: require("../BookImages/spare.jpeg"),
      price: 6000,
      category: "bestsellers",
    },
    {
      id: 13,
      title: "The Secret Lives Of BabaSeyi's Wives",
      img: require("../BookImages/TheSecretLivesofbabaseyi'swives.jpeg"),
      price: 6000,
      category: "bestsellers",
    },
    {
      id: 14,
      title: "Things Fall Apart",
      img: require("../BookImages/thingsfallapart.jpeg"),
      price: 6000,
      category: "bestsellers",
    },
    {
      id: 15,
      title: "Pineapple Street",
      img: require("../BookImages/pineapplestreet.jpeg"),
      price: 6000,
      category: "bestsellers",
    },
  ];

  function arrivalHandler() {
    const filteredbooks = Books.filter(
      (items) => items.category === "NewArrivals"
    );
    setnewArrival(filteredbooks);
  }
  function popularHandler() {
    const filteredbooks = Books.filter((items) => items.category === "Popular");
    setnewArrival(filteredbooks);
  }
  function bestSellerHandler() {
    const filteredbooks = Books.filter(
      (items) => items.category === "bestsellers"
    );
    setnewArrival(filteredbooks);
  }

  // function addBookHandler(){
  //   const productExist = cartItems.find((item)=> item.id === Books.id)
  //   if(productExist){
  //     setCartItems(cartItems.map((items)=> items.id === Books.id))
  //   } 
  // }

  // function addHandle(

  // )

  return (
    <div>
       hello
    </div>

  );
};

