import React, { useContext } from "react";
import { CartContext } from "./Features/ContextProvider";

const CartProduct = ({ cartItems }) => {
  const {dispatch} = useContext(CartContext)
  
  const {
    id,
    title,
    description,
    price,
    rating,
    stock,
    brand,
    discountPercentage,
    category,
    images,
    thumbnail,
    quantity 
  } = cartItems;

  const IncreaseCart = (item) => {
    dispatch({
        type:"Increase_Cart",
        payload:item
    })
}
const DecreaseCart = (item) => {
    dispatch({
        type:"Decrease_Cart",
        payload:item
    })
}

 // Function to remove item from cart
 const removeFromCart = (item) => {
  dispatch({ type: 'Remove_From_Cart', payload: item });
};


  return (
    <div className="w-full h-full py-8 px-6">
      <div>
        <div>
          <img src={images} alt="" className="w-32 h-28" />
          <div>
            <p>{brand}</p>
            <p>{title}</p>
            <p>{price}</p>
          </div>
          <div className="flex gap-2">
            <button
              className="bg-[green] rounded-md px-2"
              onClick={() => DecreaseCart(cartItems)}
            >
              -
            </button>
            <button>{quantity}</button>
            <button onClick={() => IncreaseCart(cartItems)}>+</button>
          </div>
          <button
            className="rounded-md bg-[#8f2828] text-white p-2"
            onClick={() => removeFromCart(cartItems)}
          >
            Remove
          </button>
        </div>
      </div>
      {/* <table className="text-center">
        <tr>
          <th className="w-[200px]">Image</th>
          <th className="w-[100px]">Brand</th>
          <th className="w-[100px]">Price</th>
          <th className="w-[100px]">Title</th>
        </tr>
        <tr>
          <td>
            <img src={product.images} alt="" className="w-32 h-28" />
          </td>
          <td>{product.brand}</td>
          <td>
            {" "}
            <p>${product.price}</p>
          </td>
          <td>
            {" "}
            <p>{product.title}</p>
          </td>
          <td className="flex gap-2">
            <button>-</button>
            <button>0</button>
            <button>+</button>
          </td>
          <td>
            <button
              className="rounded-md bg-[#8f2828] text-white p-2"
              onClick={() => dispatch({ type: "Remove", id: product.id })}
            >
              Remove
            </button>
          </td>
        </tr>
      </table> */}
    </div>
  );
};

export default CartProduct;
