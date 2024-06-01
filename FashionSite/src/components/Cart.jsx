import React, { useContext } from "react";
import { CartContext } from "./Features/ContextProvider";
import CartProduct from "./CartProduct";

export const Cart = () => {
  const { cartState } = useContext(CartContext);


  return (
    <div>
      <div>
        <div className="">
          {cartState.cart.map((p, index) => {
            return (
              <div>
                <CartProduct key={index} cartItems={p} />
              </div>
            );
          })}
          <div>
            <p>Total items:{cartState.totalQuantity}</p>
            <p>Total Price:{cartState.totalPrice.toLocaleString()}</p>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};
