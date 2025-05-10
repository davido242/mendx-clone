import type { Metadata } from "next";
import Image from "next/image";
import ProductList from "./components/ProductList";

export const metadata: Metadata = {
  title: "Test Looks",
  description: "Developed by OnlineMD",
};

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white pt-[5.5rem]">
        <div className="container mx-auto pb-32">
          <h2 className="text-5xl text-center pt-8">New Arrivals</h2>
          <div className="flex font-bold uppercase text-sm gap-16 justify-center py-8">
            <p>Men</p>
            <p className="text-slate-500">Women</p>
            <p className="text-slate-500">Kids</p>
          </div>
          <ProductList />
        </div>
        <div>
          <form name="contact" data-netlify="true">
            <p>
              <label>Name <input type="text" name="name" /></label>
            </p>
            <p>
              <label>Email <input type="email" name="email" /></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
        {/* <div className="relative w-full bg-[url('/assets/images/MOB-KIDS.webp')] md:bg-[url('/assets/images/WEB-KIDS.webp')] min-h-[35rem] bg-cover bg-center">
          <div className="absolute bottom-12 flex w-full gap-8 justify-center">
            <button className="rounded-full px-12 py-4 uppercase text-[12px] font-medium bg-white cursor-pointer hover:bg-slate-300">
              Shop now
            </button>
          </div>
        </div> */}
      </main>
    </>
  );
}
