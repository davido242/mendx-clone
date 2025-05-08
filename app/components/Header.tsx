"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, MouseEvent } from "react";
import { NameContext } from "../AuthContext/NameContext";
import { CartContext } from "../AuthContext/CartContext";
import Image from "next/image"
import HamburgerButton from '../components/hamburger';

export default function header() {
  const { name, setName }: any = useContext(NameContext);
  const { cartItems } = useContext(CartContext);
  const router = useRouter();

  const handleLogout = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setName("");
    router.push("/login");
  };

  const goToCart = () => {
    router.push("/cart");
  };

  const handleHomePage = () => {
    if (name == "") {
      router.push("/");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <header className="bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] fixed w-full z-[11]">
      <div>
        <div className="container mx-auto px-8 py-2 flex justify-between items-center">          
          <HamburgerButton />          
          <div className="cursor-pointer" onClick={handleHomePage}>
            <Image src="/assets/images/mendexLogo.jpg" alt="Mendex logo" width="45" height="45" />
          </div>
          <div>
            {name == "" ? (
              <ul className="flex gap-3">
                <li>
                  <Link href="/login">Login</Link>
                </li>
              </ul>
            ) : (
              <div className="flex gap-3 items-center">
                <button onClick={handleLogout} className="cursor-pointer hover:bg-[#e17800] bg-[#e16800] p-2 md:p-4">
                  Logout
                </button>
                <div className="hidden md:block">{`Hi ${name?.charAt(0) || ""}`}</div>
                <button onClick={goToCart} className="relative cursor-pointer pt-1">
                  <Image src="/assets/images/cart.svg" alt="cart icon" width="30" height="30" />
                  {cartItems.length === 0 ? (
                    ""
                  ) : (
                    <span className="absolute -top-1 -right-2 bg-[#e16800] h-4 w-4 p-3 flex justify-center rounded-full items-center text-[12px] font-bold">
                      {cartItems.length}
                    </span>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
