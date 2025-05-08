"use client";
import "@/app/styles/globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { NameContext } from "./AuthContext/NameContext";
import { StateProvider } from "./AuthContext/StateContext";
import { ProductContext } from "./AuthContext/ProductContext";
import { CartProvider } from "./AuthContext/CartContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [name, setName] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setloading(true);
    fetch("http://localhost:5001/api/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setloading(false);
        if (!localStorage.getItem("token")) {
          router.push("/login");
        } 
        else if (data.name == undefined) {
          alert("Session Expired, Please Login Layout.");          
          router.push("/login");
        } else {
          setName(data.name);
        }})
      .catch((error) => {
        setloading(false);
        console.log("🚀 ~ file: layout.tsx:44 ~ useEffect ~ error:", error);
      });
  }, []);
  console.log("products length:", products.length);
  console.log("products:", products);
  return (
    <html lang="en">
      <body>
        <NameContext.Provider value={{ name, setName }}>
          {loading ? (
            <Loading />
          ) : (
            <ProductContext.Provider value={{ products, setProducts }}>
              <CartProvider>
                <StateProvider>
                <Header />              
                {children}
                <Footer />
                </StateProvider>
              </CartProvider>
            </ProductContext.Provider>
          )}
        </NameContext.Provider>
      </body>
    </html>
  );
}
