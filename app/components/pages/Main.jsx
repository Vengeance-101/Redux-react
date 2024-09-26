import React from "react";
import Product from "../Product";
const Main = () => {
  return (
    <div className="h-full w-full bg-black pt-28 ">
      <div className="container h-auto px-12 mx-auto">
        <h2 className="heading text-5xl text-center text-white  py-10">
          {" "}
          Welcome to redux toolkit store
        </h2>
        <section className="w-full h-hull ">
          <h3 className="text-center text-white">Products</h3>
          <Product></Product>
        </section>
      </div>
    </div>
  );
};

export default Main;
