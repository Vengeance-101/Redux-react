import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div className=" fixed  w-full bg-white   text-black    ">
      <div className="container px-20 mx-auto  py-3  flex items-center justify-between  shadow-2xl ">
        <span className="text-5xl  font-extrabold ">Redux</span>
        <div className="flex items-center gap-10">
          <Link
            className="navLink  border-2 border-black px-4 py-1  hover:text-white hover:bg-black transition-all duration-200 ease-in-out  rounded-md"
            to="/"
          >
            Home
          </Link>
          <Link
            className="navLink   border-2 border-black px-4 py-1   hover:text-white hover:bg-black transition-all duration-200 ease-in-out rounded-md relative"
            to="/cart"
          >
            Cart
            <span
              className={`cartCount   ${
                items.length !== 0 ? "scale-100 " : "scale-0"
              }  h-2 w-2 p-3 rounded-full flex items-center  transition-all duration-300 ease-in-out justify-center text-sm bg-black text-white  -top-3 -right-4  absolute  font-bold`}
            >
              {items.length}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
