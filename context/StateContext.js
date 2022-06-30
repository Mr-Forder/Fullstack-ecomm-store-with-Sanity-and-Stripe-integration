import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]); //items in cart - default is empty array, to be filled with products
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);
  //variables for hadnling cart item changes - not state variables for once!
  let foundProduct;
  let index;

  //ADD A PRODUCT TO CART////////////////////////////////////////////////////////////////////////////////////////////////////
  const onAdd = (product, quantity) => {
    //check to see if product is already in cart
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );
    //set total price to prev total price state plus price of product, times quantity of products in cart
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    //then set total quantities to prev totalquantities state plus quantity
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    //IF ITEM IS ALEADY IN CART
    if (checkProductInCart) {
      //create updated cart items - by mapping over cartItems
      const updatedCartItems = cartItems.map((cartProduct) => {
        //if cartproduct in cartItems array matches id with id of product being added, then return...
        if (cartProduct._id === product._id)
          return {
            ...cartProduct, //...a new object that spreads the product's (inside cartItems array) quantity and adds the quantity value specified by the user to it.
            quantity: cartProduct.quantity + quantity,
          };
      });
      //finally, set cartItems to our updatedCartItems array
      setCartItems(updatedCartItems);
    } else {
      //AND IF ITEM ISN'T ALREADY IN CART
      product.quantity = quantity; //product quantity becomes equal to quantity set by user
      setCartItems([...cartItems, { ...product }]); //set cartItems to an empty array that spreads the current cart items and adds the new product to it.
    }
    //then get react hot toast to tell user what's happened
    toast.success(`${qty > 1 ? qty : ""} ${product.name} added to cart.`);
  };

  //REMOVE ITEM FROM CART////////////////////////////////////////////////////////////////////////////////////////////////////
  const removeCartItem = (product) => {
    //find and target item user is updating, and find it's index. to do this, we...
    foundProduct = cartItems.find((item) => item._id === product._id); //..search cart items array for item matching product id of item in question
    const newCartItems = cartItems.filter((item) => item._id !== product._id); //filter cart items to keep all cart items except the item with an index that is the same as our foundItem
    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    ); //set total price to prev total price - pice of selected product * number of those products in cart
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity //then set total quantities to prev quantitiy - quantity of targeted product
    );
    setCartItems(newCartItems); //finaly, set cart items equal to newcart items
  };
  //CHANGE ITEM QUANTITY INSIDE CART COMPONENT////////////////////////////////////////////////////////////////////////////////////////////////////
  const modifyCartItemQuantity = (id, value) => {
    //find and target item user is updating, and find it's index. to do this, we...
    foundProduct = cartItems.find((item) => item._id === id); //..search cart items array for item matching product id of item in question
    index = cartItems.findIndex((product) => product._id === id); //find index of item in question in cart items array
    const newCartItems = cartItems.filter((item) => item._id !== id); //filter cart items to keep all cart items except the item with an index that is the same as our foundItem
    if (value === "inc") {
      setCartItems([
        ...newCartItems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ]); //update cart items array by spreading, adding 1 to the quantity of the product being targeted (foundProduct, found in the saerch we just did)
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price); //then take total price and add product price to it
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === "dec") {
      //value - one of this function's 2 parameters, passed in when func is called, will look like: modifyCartItemQuantity(item._id, "dec")
      if (foundProduct.quantity > 1) {
        setCartItems([
          ...newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ]); //update cart items array by spreading, adding 1 to the quantity of the product being targeted (foundProduct, found in the saerch we just did)
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price); //then take total price and add product price to it
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
  };

  //HANDLER TO INCREASE ITEM QUANITIY IN CART////////////////////////////////////////////////////////////////////////////////////////////////////
  const increaseQuantity = () => {
    setQty((prevQty) => prevQty + 1); //set quantity state - takes in prevState of qty (which is prevQty) and adds 1
  };
  //HANDLER TO DECREASE ITEM QUANTITY IN CART////////////////////////////////////////////////////////////////////////////////////////////////////
  const decreaseQuantity = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1; //check if prevQty is less than 1 - if so, return 1
      return prevQty - 1; //else return prevQty - 1. Note this shorthand method of writing if statements.
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        totalQuantities,
        setTotalQuantities,
        qty,
        increaseQuantity,
        decreaseQuantity,
        onAdd,
        modifyCartItemQuantity,
        removeCartItem,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
