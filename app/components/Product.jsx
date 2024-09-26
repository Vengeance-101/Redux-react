"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { add } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
const Product = () => {
  const dispatch = useDispatch();

  const { data: products, status } = useSelector((state) => state.product);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  useEffect(() => {
    dispatch(fetchProducts());

    // const fetchProducts = async () => {
    //   try {
    //     const res = await axios.get("https://fakestoreapi.com/products");
    //     setProducts(res.data); // Directly set the data
    //   } catch (error) {
    //     console.error("Error fetching products:", error);
    //     setError("Failed to load products. Please try again later.");
    //   }
    // };
    // fetchProducts();
  }, []);

  return (
    <div className="product-container h-full w-full  mx-auto grid grid-cols-4 px-10  gap-10  py-14  ">
      {products.map((product) => (
        <div
          className="card border-2 h-[400px] w-[300px]  overflow-hidden rounded-xl bg-white    py-5 "
          key={product.id}
          id={product.id}
        >
          <div className="h-[50%] px-5  overflow-hidden  flex  justify-center ">
            <Image
              src={product.image} // Image URL from the API
              alt={product.title}
              width={600} // Set desired width
              height={500} // Set desired height
              className="w-[100%] h-auto object-contain "
            />
          </div>
          <div className="h-auto mb-5 px-5 py-3   w-full">
            <h1 className="text-center text-black text-sm ">{product.title}</h1>

            <h1 className="py-1 text-center  text-black font-extrabold ">
              ${product.price}
            </h1>
          </div>
          <div className="w-full flex justify-center">
            <button
              className="bg-black transition-all duration-300 ease-in-out text-white hover:bg-white hover:text-black border-2 border-[black] rounded-lg px-4 py-2 "
              onClick={() => handleAdd(product)}
            >
              {" "}
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
