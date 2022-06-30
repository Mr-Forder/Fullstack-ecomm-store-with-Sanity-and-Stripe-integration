import { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { useStateContext } from "../context/StateContext";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear(); //clear local storage
    setCartItems([]); //set cart items back to empty
    setTotalPrice(0); //reset total price to zero
    setTotalQuantities(0); //reset total quantitites
  }, []);
  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Order Complete.</h2>
        <h3>Thanks!</h3>
        <p className="email-msg">We will email you a confirmation shortly.</p>
        <p className="description">
          Any questions or problems, get in touch at
        </p>
        <a href="mailto:orders@blank.com" className="email">
          orders@blank.com
        </a>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
        .
      </div>
    </div>
  );
};

export default Success;
