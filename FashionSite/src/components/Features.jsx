import React, { useEffect, useState } from "react";

import axios from "axios";
import { Loader } from "./Loader";
import { Products } from "./Products";

export const Features = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setLoading(false);
      setProducts(response.data.products);
      // console.log(response.data.products);
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error.message);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    <div>Error:{error}</div>;
  }
  return (
    <div className="w-full h-full p-4 md:p-3 lg:p-10 ">
      <div className="text-center flex flex-col items-center center pb-4 w-full">
        <h1 className="text-[38px] font-bold">Features</h1>
        <p className="text-xl">Summer collection New modern products</p>
      </div>
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 items-center justify-center gap-4">
        {products.length ? (
          products.map((product, index) => {
            return (
              <div className="w-full h-full flex items-center justify-center">
                <Products key={index} product={product} />
                {/* props product= */}
              </div>
            );
          })
        ) : (
          <p>loading....</p>
        )}
      </div>
    </div>
  );
};
