"use client";

import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { NameContext } from "../AuthContext/NameContext";
import { CartContext } from "../AuthContext/CartContext";
import { Products } from "./dummyProducts";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Product() {
  const router = useRouter();

  return (
    <div className="pt-2">
      <div className="p-4 rounded mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {Products.map((product) => (
            <AnimateOnScroll>
            <div onClick={() => router.push(`/product-detail/${product.slug}`)} className="group cursor-pointer">
              <div key={product.id} className="p-5">
                <div className="relative bg-gray-200 rounded-md">
                  <div className="ratings absolute flex w-full top-0 left-0 p-4 justify-between z-10">
                    <div className="uppercase bg-blue-900 flex items-center justify-center w-[40px] h-[25px] rounded text-xs text-white">
                      New
                    </div>
                    <div>
                      <Image src="/assets/images/love.svg" alt="fav icon" width={20} height={25} className="" />
                    </div>
                  </div>
                  <Image
                      src={product.image.back}
                      alt={product.name}
                      className="rounded-2xl h-auto opacity-100 transition-opacity duration-300 delay-200  group-hover:opacity-0 group-hover:delay-75 group-hover:invisible visible "
                    />
                    <Image
                      src={product.image.front}
                      alt={product.name}
                      className="rounded-2xl h-auto invisible group-hover:visible absolute inset-0 z-0"
                    />
                  <div className="hidden absolute group-hover:block duration-300 bottom-2 left-0 p-2 w-full rounded-lg">
                    <Link href="#" className="bg-white text-center w-full inline-block py-4 rounded-full">
                      Quick View
                    </Link>
                  </div>
                </div>
                <div className="text-center">
                  <h2 className="text-sm uppercase font-bold py-3">{product.name}</h2>
                  <p className="text-sm" id="description">
                    {"An apple mobile which is nothing like app Up for a Grab".slice(0, 30)}....
                  </p>
                  <p className="text-sm font-bold text-[#7f6c6c]">₦ {product.price}</p>
                </div>
              </div>
            </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
