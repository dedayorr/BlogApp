# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
import React, { useState, useContext, useEffect } from "react";

import { BsCart4 } from "react-icons/bs";
import { BsFillTagsFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Cart } from "../Cart/Cart";
import { ContextProvider } from "../Context";
import ScrollToTop from "react-scroll-to-top";

export const Store = () => {
  const {addToCart, cartBooks, getBooks} = useContext(ContextProvider)
  console.log(cartBooks)
  const [newArrival, setnewArrival] = useState(null);
  const [shipping, setShipping] = useState(false);
  const [openCart, setopenCart] = useState(false);
  
  useEffect(()=>{
    getBooks()
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
      <div className="absolute bg-[#0000008e] top-[100px] bottom-0 right-0 left-0 h-[68%] z-20 md:top-[105px] md:h-[69%]"></div>
      <p className="absolute top-[38%] right-[5%] left-[5%] font-extrabold text-4xl text-white z-40 md:text-6xl">
        “Books are a uniquely portable magic.”
      </p>
     
      <br></br>
      <br></br>
      <div className="flex md:justify-center gap-[50px]">
        <Player
          src="https://assets4.lottiefiles.com/packages/lf20_bwnHjUCsaL.json"
          background="transparent"
          speed="1"
          style={{ width: "350px", height: "400px" }}
          loop
          autoplay
        >
          <Controls visible={false} />
        </Player>
        <Player
          src="https://assets4.lottiefiles.com/packages/lf20_bwnHjUCsaL.json"
          background="transparent"
          speed="1"
          style={{ width: "350px", height: "400px" }}
          loop
          autoplay
          className="hidden md:block"
        >
          <Controls visible={false} />
        </Player>
        <Player
          src="https://assets4.lottiefiles.com/packages/lf20_bwnHjUCsaL.json"
          background="transparent"
          speed="1"
          style={{ width: "350px", height: "400px" }}
          loop
          autoplay
          className="hidden md:block"
        >
          <Controls visible={false} />
        </Player>
      </div>

      <div className="cursor-pointer flex gap-3 border w-[40%] p-[1%] ml-[5%] md:ml-[1%] md:mb-[-10px] md:w-[15%]" onClick={() => setShipping((prev) => !prev)}>
        <div>Ship to</div>
        <img src="./nigeria.jpg" width={40} alt="img" />{" "}
        <div
          className="text-2xl cursor-pointer"
          
        >
          <IoMdArrowDropdown />
        </div>
      </div>

      {shipping && (
        <div className="flex flex-col gap-[20px] mt-[1px] ml-[5%] border w-[90%] p-[1%] md:ml-[1%] md:w-[15%] md:mb-[-80px] md:mt-[10px]">
          <div className="flex gap-5 hover:bg-[#91a4f1c6]">
            <img src="./china.jpg" width={40} alt="img" />
            China
          </div>
          <div className="flex gap-5 hover:bg-[#91a4f1c6]">
            <img src="./england.jpg" width={40} alt="img" />
            United Kingdom
          </div>
          <div className="flex gap-5 hover:bg-[#91a4f1c6]">
            <img src="./australia.jpg" width={40} alt="img" />
            Australia
          </div>
          <div className="flex gap-5 hover:bg-[#91a4f1c6]">
            <img src="./unitedstates.png" width={40} alt="img" />
            United States
          </div>
        </div>
      )}

      <button onClick={()=>setopenCart((prev)=>!prev)} className="flex text-[#faf7f7] bg-[#4e66c3] p-[10px] mx-auto w-[90%] justify-center items-center text-2xl mt-[10px] mb-[10px] gap-[10px] md:w-[25%] md:text-4xl md:float-right md:mr-5 hover:bg-[#91a4f1c6]">
        <BsCart4 />
        <span className="ml-[-18px] mb-[15px] text-sm bg-black rounded-lg p-[3px]" >{cartBooks.length}</span>
        Cart
      </button>
      
      {openCart && <Cart/>}

      <div className="flex flex-col gap-[15px] md:flex md:flex-row md:mt-[100px] md:w-[60%] md:ml-[1%] md:text-xl  ">
        <button
          onClick={arrivalHandler}
          className="bg-black text-white w-[90%] h-[40px] mx-auto hover:bg-slate-300"
        >
          New Arrivals
        </button>
        <button
          onClick={popularHandler}
          className="bg-black text-white w-[90%] h-[40px] mx-auto  hover:bg-slate-300"
        >
          Popular
        </button>
        <button
          onClick={bestSellerHandler}
          className="bg-black text-white w-[90%] h-[40px] mx-auto  hover:bg-slate-300"
        >
          Best Sellers
        </button>
      </div>

      <div className="mt-[20px] md:flex md:gap-[10px] md:w-[98%] md:mx-auto">
        {newArrival &&
          newArrival.map((items) => {
            return (
              <div
                key={items.id}
                className="flex flex-col justify-center items-center border w-[90%] mx-auto gap-3 mb-[20px] p-[1%] hover:drop-shadow-2xl hover:cursor"
              >
                <div>
                  <div className="absolute right-[] left-[25px] text-4xl text-[#4e66c3] md:relative md:left-[-26px] md:top-[-15px]">
                    <BsFillTagsFill />
                  </div>
                  <img width={200} height={200} src={items.img} alt="img" />
                </div>
                <div>Title: {items.title}</div>
                <div>Price: ₦{items.price}</div>
                <div className="text-sm">Free delivery nation wide</div>
                <button className="text-[#faf7f7] bg-[#4e66c3] p-[1%] hover:bg-[#91a4f1c6]" onClick={()=>addToCart(items)}>
                  Add To Cart
                </button>

              </div>
            );
          })}
      </div>

      <div className="flex flex-col mb-[20px] md:flex md:flex-row w-[90%] mx-auto gap-10 hover:drop-shadow-2xl ">
        <img src="./whatwherehow.jpeg" width={400} height={400} alt="img" />
        <img src="./read.jpg" width={400} height={400} alt="img" />
        <img src="./bookgraphic.jpeg" width={400} height={400} alt="img" />
      </div>
      <ScrollToTop/>
    </div>

  );
};

// {require("../Addblog/dataanalysis.jpg")}
// {require("../BookImages/cartoonHistoryOfUsa.jpg")}
