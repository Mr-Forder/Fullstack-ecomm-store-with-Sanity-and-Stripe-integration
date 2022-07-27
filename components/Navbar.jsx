import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";
import Image from "next/image";
import cartIconMin from "../assets/cartIconmin.svg";
import { motion } from "framer-motion";
const Navbar = () => {
  //grab cart logic from our context and destructure what we need
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo"></p>
      <motion.button
        type="button"
        className="cart-icon"
        onClick={() => {
          setShowCart(!showCart);
        }}
      >
        <Image src={cartIconMin} className="cart-icon" />
        <span className="cart-item-qty">{totalQuantities}</span>
      </motion.button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
