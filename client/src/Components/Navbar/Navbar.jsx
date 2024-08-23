import React, { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const { TotalCartItem } = useContext(ShopContext);
  const [Menu, setMenu] = useState("shop");
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const handleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <section className="flex justify-between lg:justify-around p-3 items-center  shadow-[0px_1px_3px_-2px_black] overflow-hidden">
        <div className="flex items-center gap-3 sm-gap-5 md:gap-8 lg:gap-10">
          <img className="w-10 sm:w-12 md:w-14 lg:w-16" src={logo} alt="" />
          <p className=" max-[300px]:text-sm text-lg sm:text-xl md:text-3xl text-[#171717] font-bold">
            HOPIFY
          </p>
        </div>
        <div>
          <ul className="lg:flex items-center justify-center gap-10 text-[#626262] hidden  md:text-lg font-semibold">
            <li onClick={() => setMenu("shop")} className="cursor-pointer">
              <Link to="/">Shop</Link>
              {Menu === "shop" ? (
                <hr className="bg-[#ff4141] h-[3px] w-[80%] border-none rounded-sm" />
              ) : (
                <></>
              )}
            </li>
            <li onClick={() => setMenu("mens")} className="cursor-pointer">
              <Link to="/mens">Mens</Link>
              {Menu === "mens" ? (
                <hr className="bg-[#ff4141] h-[3px] w-[80%] border-none rounded-sm" />
              ) : (
                <></>
              )}
            </li>
            <li onClick={() => setMenu("Womens")} className="cursor-pointer">
              <Link to="womens">Womens</Link>
              {Menu === "Womens" ? (
                <hr className="bg-[#ff4141] h-[3px] w-[80%] border-none rounded-sm" />
              ) : (
                <></>
              )}
            </li>
            <li onClick={() => setMenu("kids")} className="cursor-pointer">
              <Link to="/kids">Kids</Link>
              {Menu === "kids" ? (
                <hr className="bg-[#ff4141] h-[3px] w-[80%] border-none rounded-sm" />
              ) : (
                <></>
              )}
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-3 sm:gap-5 lg:gap-8 xl:gap-10 ">
          {localStorage.getItem("token") ? (
            <button
              onClick={() => {
                localStorage.removeItem("token");
                window.location.replace("/");
              }}
              className="rounded-l-full rounded-r-full border border-[#7a7a7a] w-14 sm:w-24 md:w-28 h-6 text-xs sm:text-md md:text-lg sm:h-8 md:h-10 text-[#515151] cursor-pointer bg-white font-semibold"
            >
              Log out
            </button>
          ) : (
            <Link to="/login">
              <button className="rounded-l-full rounded-r-full border border-[#7a7a7a] w-14 sm:w-24 md:w-28 h-6 text-xs sm:text-md md:text-lg sm:h-8 md:h-10 text-[#515151] cursor-pointer bg-white font-semibold">
                Log in
              </button>
            </Link>
          )}
          <div className="flex items-center justify-center ">
            <Link to="/cart">
              <img
                className="w-5 sm:w-6 md:w-8 lg:w-9 xl:w-8"
                src={cart_icon}
                alt=""
              />
            </Link>
            <div className="flex justify-center items-center relative text-[0.55rem] md:text-xs right-2 bottom-2 md:bottom-3  text-white bg-red-600 w-3 h-3 md:w-4 md:h-4 rounded-full font-bold">
              {TotalCartItem()}
            </div>
            <div
              className="lg:hidden relative top-1 sm:mr-2"
              onClick={handleMenu}
            >
              {isMenuOpen ? (
                <button className="text-2xl sm:text-3xl">
                  <ImCross />
                </button>
              ) : (
                <button className="text-2xl sm:text-3xl">
                  <GiHamburgerMenu />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
      {isMenuOpen && (
        <div className="lg:hidden text-[#626262]">
          <ul className="flex flex-col gap-6 py-5 animate-pulse px-3 text-lg sm:text-xl md:text-2xl  font-semibold">
            <li onClick={() => setMenu("shop")} className="cursor-pointer">
              <Link to="/">Shop</Link>
              {Menu === "shop" ? (
                <hr className="bg-[#ff4141] h-[3px] w-[30%] border-none rounded-sm" />
              ) : (
                <></>
              )}
            </li>
            <li onClick={() => setMenu("mens")} className="cursor-pointer">
              <Link to="/mens">Mens</Link>
              {Menu === "mens" ? (
                <hr className="bg-[#ff4141] h-[3px] w-[30%] border-none rounded-sm" />
              ) : (
                <></>
              )}
            </li>
            <li onClick={() => setMenu("Womens")} className="cursor-pointer">
              <Link to="womens">Womens</Link>
              {Menu === "Womens" ? (
                <hr className="bg-[#ff4141] h-[3px] w-[30%] border-none rounded-sm" />
              ) : (
                <></>
              )}
            </li>
            <li onClick={() => setMenu("kids")} className="cursor-pointer">
              <Link to="/kids">Kids</Link>
              {Menu === "kids" ? (
                <hr className="bg-[#ff4141] h-[3px] w-[30%] border-none rounded-sm" />
              ) : (
                <></>
              )}
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
