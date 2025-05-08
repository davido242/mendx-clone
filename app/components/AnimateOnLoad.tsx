"use client";

import { useEffect, useRef } from "react";


export default function AnimateOnLoad({ children }: any) {
  const elementsToFadeIn = useRef([]);
  
  useEffect(() => {
    // Apply initial opacity styles to all elements when the component mounts
    elementsToFadeIn.current.forEach((element) => {
      element.style.opacity = 1;
    });
  }, [elementsToFadeIn]);

  return (
    <div ref={(element) => elementsToFadeIn.current.push(element)}
    className="opacity-0 transition-opacity duration-[700ms] ease-in">
      {children}
    </div>
  );
};