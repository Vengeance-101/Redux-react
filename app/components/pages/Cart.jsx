import { remove } from "@/app/store/cartSlice";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="w-full h-auto bg-black">
      <div className="pt-28 container h-auto px-11 py-10 mx-auto">
        <h2 className="text-white font-bold text-4xl text-center">Cart</h2>

        <div className="my-6">
          {products.length === 0 ? ( // Check if cart is empty
            <div className="w-full font-bold text-3xl text-center text-white">
              No Items in the Cart!
            </div>
          ) : (
            products.map((product) => (
              <div
                key={product.id}
                className="flex justify-between rounded-lg items-center my-3 w-full py-2 px-14 bg-white h-[8rem]"
              >
                <div className="flex h-full justify-between gap-10 items-center w-[80%]">
                  <div className="w-[30%] h-full rounded-lg py-2 overflow-hidden border-2 border-black">
                    <Image
                      src={product.image}
                      width={500}
                      height={600}
                      className="w-[100%] h-full object-contain"
                      alt={product.title}
                    />
                  </div>
                  <p className="text-center">{product.title}</p>
                  <h1>${product.price}</h1>
                </div>
                <button
                  className="bg-black h-[3rem] transition-all duration-300 ease-in-out text-white hover:bg-white hover:text-black border-2 border-[black] rounded-lg px-4 py-2"
                  onClick={() => handleDelete(product.id)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
