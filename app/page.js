"use client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/pages/Cart";
import Main from "./components/pages/Main";
import Navbar from "./components/navbar/Navbar";
import { Provider } from "react-redux";
import store from "./store/Store";
export default function Home() {
  return (
    <div className="bg-black">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
