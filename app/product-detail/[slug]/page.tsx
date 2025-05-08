"use client";

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import starRating from "../../../public/assets/images/star.svg";
import AnimateOnLoad from "@/app/components/AnimateOnLoad";
import { ProductContext } from "@/app/AuthContext/ProductContext";

const page = ({ params }: { params: { slug: string } }) => {
  const { products } = useContext(ProductContext);
  const product = products.find((item:any) => item.slug === params.slug);
  console.log(params.slug);
  console.log("products:", products.length);

  return (
    <>
      <section className="py-48">
        <div className="container mx-auto px-8">
          <div className="breadcrumb md:flex text-slate-400 text-xs hidden">
            <Link href="/" className="cursor-pointer">
              Home &nbsp;
            </Link>
            <p>
              {"/"} {product.name}
            </p>
          </div>
          <div className="md:grid grid-cols-2 gap-4 pt-8">
            <div className="sm:pl-2 md:pl-2 lg:pl-24">
              <AnimateOnLoad>
                <Image src={product.frontImage} alt={product.name} className="rounded-2xl" />
              </AnimateOnLoad>
            </div>
            <div className="product-info pt-4 pl-12 font-light">
              <p className="name text-3xl pb-8">{product.name}</p>
              <p className="text-xl">{product.price}</p>
              <div className="flex items-center border-b pt-2 pb-8">
                {[1,2,3,4,5].map((_, index) => (
                <Image src={starRating} alt="rating" />
                ))}
                <p className="pl-4 text-xs">1 rating</p>
              </div>
              <div className="flex gap-4 items-center py-4">
                <div className="border-4 border-[white] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                  <Image src={product.frontImage} alt={product.name} className="w-20 h-20 object-cover" />
                </div>
                <div className="border-4 border-[white] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                  <Image src={product.backImage} alt={product.name} className="w-20 h-20 object-cover" />
                </div>
              </div>
              <div>
                <button className="uppercase text-white bg-black rounded-full py-4 px-8 w-full hover:bg-slate-900 font-bold my-2">
                  Add to cart
                </button>
                <button className="text-white bg-[#5a31f4] rounded-full py-4 px-8 w-full hover:bg-[#7659df] font-bold">
                  Buy with Shop
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-8 md:px-32 md:pr-48">
          <p className="font-bold py-2">Description:</p>
          <p>{product.description}</p>
          <div className="text-gray-500 flex gap-8 text-xs pt-8">
            <Link href="#" className="underline">
              Free Returns
            </Link>
            <Link href="#" className="underline">
              Rapid Delivery
            </Link>
            <Link href="#" className="underline">
              Flexible Payment Options
            </Link>
          </div>
          <ul className="list-disc">
            <p className="font-bold py-4">Product Details:</p>
            {[1, 2, 3, 4, 5, 6].map(() => (
              <li className="py-2">Standard fit</li>
            ))}
          </ul>
          <ul className="list-disc">
            <p className="font-bold py-4">Style Info:</p>
            {[1, 2, 3, 4, 5, 6].map(() => (
              <li className="py-2">Colour Shown: Black</li>
            ))}
          </ul>
        </div>
      </section>
      {/* <section>
        <div className="container mx-auto pb-8">
            <h2 className="text-3xl text-center pt-8">You May Also Like</h2>
          <ProductList />
        </div>
      </section>
      <section>
        <div className="container mx-auto pb-8">
          <h2 className="text-3xl text-center pt-8">Recently Viewed</h2>
          <ProductList />
        </div>
      </section> */}
    </>
  );
};

export default page;
