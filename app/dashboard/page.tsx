"use client";

import { useContext, useEffect, useState } from "react";
import Link from "next/link";
// import { Products } from "../components/dummyProducts";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { NameContext } from "../AuthContext/NameContext";
import AnimateOnScroll from "../components/AnimateOnScroll";
import { ProductContext } from "../AuthContext/ProductContext";

export default function page() {
  const [name, setName] = useState("");
  const router = useRouter();

  // const [products, setProducts] = useState([]);
  const { products, setProducts } = useContext(ProductContext);

  const [error, setError] = useState("");
  const serverUrl = "http://localhost:5001";

  useEffect(() => {
    fetch(`${serverUrl}/product`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          const AddSlug = data.map((product: any) => ({
            ...product,
            slug: product.name.toLowerCase().replace(/\s+/g, "-").replace(/-+/g, "-"),
          }));
          setProducts(AddSlug);
        }
      });
  }, []);

  console.log("products length:", products.length);
  console.log("products:", products);
  return (
    <div className="min-h-[calc(100vh-7vh)] pt-2">
      <div className="container mx-auto px-8">
        <div className="mt-32 p-4 rounded mx-auto">
          <h2 className="text-center font-bold py-4">Hey {name}</h2>
          <p className="text-center font-bold py-4">Available Products in Store</p>
          {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.map((product) => (
              <div key={product.id} className="p-5 mb-10 border border-[#e17800]">
                <div>
                  <Image src={product.image.front} alt={product.name} className="rounded h-48" />
                  <img src={`${serverUrl}/images/${product.frontImage}`} alt={product.image} className="rounded h-48" />
                </div>
                <div>
                  <h2 className="text-lg uppercase font-bold py-3">{product.name}</h2>
                  <p className="text-sm" id="description">
                    {"An apple mobile which is nothing like app Up for a Grab".slice(0, 30)}....
                  </p>
                  <p className="text-sm font-bold text-[#7f6c6c]">₦ {product.price}</p>
                  <p className="text-sm font-bold text-[#7f6c6c]">₦ {product.slug}</p>
                </div>
                <button className="cart-btn">Add Cart</button>
              </div>
            ))}
          </div> */}

          {/* new card */}
          {/* <div className="p-4 bg-red-500"> */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.map((product) => (
              <AnimateOnScroll>
                <div onClick={() => router.push(`/product-detail/${product.slug}`)} className="group cursor-pointer">
                  <div key={product.id} className="p-5 bg-gray-200">
                    <div className="relative bg-white rounded-md">
                      <div className="ratings absolute flex w-full top-0 left-0 p-4 justify-between z-10">
                        <div className="uppercase bg-blue-900 flex items-center justify-center w-[40px] h-[25px] rounded text-xs text-white">
                          New
                        </div>
                        <div>
                          <Image src="/assets/images/love.svg" alt="fav icon" width={20} height={25} />
                        </div>
                      </div>
                      <Image
                        src={`${serverUrl}/images/${product.backImage}`}
                        alt={product.backImage}
                        className="rounded-2xl opacity-100 transition-opacity duration-300 delay-200  group-hover:opacity-0 group-hover:delay-75 group-hover:invisible visible "
                        width={300}
                        height={800}
                      />
                      <Image
                        src={`${serverUrl}/images/${product.frontImage}`}
                        alt={product.frontImage}
                        className="rounded-2xl invisible group-hover:visible absolute inset-0 z-0"
                        width={300}
                        height={800}
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
          {/* </div> */}
        </div>
        <div className="text-center mt-9 flex justify-evenly">
          <Link href="/products" className="cursor-pointer hover:bg-[#e17800] bg-[#e16800] p-4">
            Add More Products
          </Link>
        </div>
      </div>
    </div>
  );
}
