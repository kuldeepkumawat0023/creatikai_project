"use client";
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // optional icon (npm i lucide-react)

function BackToTop() {
     const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 100); // show after 500px scroll
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
  return (
    <>
      <button
                onClick={scrollToTop}
                className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded
            bg-green-500 text-white shadow-lg transition-all duration-300 hover:bg-green-600 
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"}`}
            >
                <ArrowUp className="w-6 h-6" />
            </button>
    </>
  )
}

export default BackToTop;