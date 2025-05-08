import React from "react";

export default function footer() {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-8 py-12">
        <div className="md:flex flex-wrap gap-5 justify-between">
          <div className="footerHeader relative">
            <p>Address</p>
            <p>Abuja</p>
            <p>Nigeria</p>
          </div>
          <div className="footerHeader">
            <p>Help</p>
            <a href="#">Contact Us</a>
            <a href="#">Returns</a>
            <a href="#">Make a Return</a>
            <a href="#">Delivery</a>
            <a href="#">FAQ</a>
            <a href="#">Size Guides</a>
          </div>
          <div className="footerHeader">
            <p>Other</p>
            <a href="#">Terms and Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </div>
          <div className="footerHeader">
            <p>Pages</p>
            <a href="#">Affiliates</a>
            <a href="#">Blue Light Card</a>
            <a href="#">Student & Graduate Discounts</a>
          </div>
          <div className="footerHeader">
            <p>Follow us</p>
            <div className="flex gap-2">
            <p className="footerIcons">f</p>
            <p className="footerIcons">In</p>
            <p className="footerIcons">t</p>
            </div>
          </div>
        </div>
        <div className="md:flex justify-between">
          <span className="text-[2rem] uppercase">Mendex<span className="text-[1rem]">Looks.</span></span>
          <div className="flex gap-2">
            <p className="footerIconVisa">VISA</p>
            <p className="footerIconVisa">VISA</p>
            <p className="footerIconVisa">VISA</p>
            <p className="footerIconVisa">VISA</p>
            <p className="footerIconVisa">VISA</p>
            <p className="footerIconVisa">VISA</p>
            <p className="footerIconVisa">VISA</p>
            </div>
        </div>
      </div>
    </div>
  );
}
