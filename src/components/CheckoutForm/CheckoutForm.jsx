import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useState } from "react";
import { useContext } from "react";
import { ContextProvider } from "../Context";
import {AiFillCloseCircle} from "react-icons/ai"

export default function CheckoutForm() {
  const { totalPrice } = useContext(ContextProvider);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber ] = useState("");
  const [email, setEmail] = useState("");
  // const [formOpen, setFormOpen] = useState(true)

  function fullNameHandler(e) {
    setFullName(e.target.value);
  }
  function phoneHandler(e) {
    setPhoneNumber(e.target.value);
  }
  function emailHandler(e) {
    setEmail(e.target.value);
  }

  const config = {
    public_key: "FLWPUBK_TEST-3346d2e4c934df8ec16c7a60f075a98e-X",
    tx_ref: Date.now(),
    amount: totalPrice,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phone_number: phoneNumber,
      name: fullName,
    },
    customizations: {
      title: "my Payment Title",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div>
      <form className="flex flex-col gap-5 w-[90%] lg:w-[40%] p-[5%] drop-shadow-2xl bg-[#000000dd] mx-auto mt-[50%] lg:mt-[10%] h-[]">
      <div
          className="absolute left-[325px] bottom-[97%] text-3xl text-[#f3f3f4] md:left-[98%]"
          // onClick={() => {
          //   setFormOpen(false);
          // }}
        >
          <AiFillCloseCircle />
        </div>
        <div className="text-2xl text-white font-extrabold">FILL IN</div>
        <input
          className="h-[40px] rounded-md p-2"
          type="text"
        //   name="fullName"
          value={fullName}
          placeholder="Full Name"
          onChange={fullNameHandler}
        />
        <input
          className="h-[40px] rounded-md p-2"
          type="text"
          value={phoneNumber}
          placeholder="Phone Number"
          onChange={phoneHandler}
        />
        <input
          className="h-[40px] rounded-md p-2"
          type="email"
          value={email}
          placeholder="example@gmail.com"
          onChange={emailHandler}
        />
      </form>
      <div className="flex justify-center"><button
        className="text-white bg-[#4e66c3] lg:w-[20%] p-2 "
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              closePaymentModal(); // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        Proceed to payment
      </button></div>
    </div>
  );
}
