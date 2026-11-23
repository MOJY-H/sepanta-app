'use client'
import Image from "next/image";
import arrowUp from "../../public/pic/icons/arrowUp.svg"
import { LiquidGlass } from "./ui/liquid-glass";
import { useEffect, useState } from "react";

function ScrollToTopBtn() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  function handleScroll() {
    setShowScrollBtn(window.scrollY > 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={showScrollBtn ? "flex fixed z-100 right-15 bottom-10" : "hidden"} >
        <LiquidGlass>
            <button
            onClick={() => scrollToTop()}
            className="bg-[#D9D9D933] p-3 rounded-full cursor-pointer"
            >
            <Image src={arrowUp} alt="arrowUp" width={14} height={14}></Image>
            </button>
        </LiquidGlass>
    </section>
  ) ;
}

export default ScrollToTopBtn;