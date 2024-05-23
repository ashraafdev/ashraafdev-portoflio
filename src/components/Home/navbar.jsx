import { Link } from "react-router-dom";
import ContactMe from "../Common/contactme";
import { AppContext } from "../../App";
import { useContext, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Navbar() {
  const { setShowDropDown } = useContext(AppContext);

  const logoRef = useRef(null);

  useGSAP(() => {
    gsap.to(logoRef.current, {
      scale: 1.3,
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <>
      <div className="flex w-full flex-wrap">
        <div className="flex-1 w-full justify-between lg:justify-normal flex gap-8">
          <div
            ref={logoRef}
            className="h-[100px] w-[100px] bg-logo-white dark:bg-logo-dark bg-[length:100px_100px] shadow-amber-500/50"
          ></div>
          <button
            onClick={() => setShowDropDown(true)}
            className="lg:hidden flex items-center"
          >
            <svg
              className="dark:fill-white"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 50 50"
            >
              <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex-1 lg:flex justify-center items-center gap-6 md:text-[20px] lg:text-[25px] xl:text-[30px] font-bold">
          <Link className="underline underline-offset-4" to="/">
            Home
          </Link>
          <Link className="underline underline-offset-4" to="/about">
            About
          </Link>
          <Link className="underline underline-offset-4" to="/projects">
            Projects
          </Link>
          <Link className="underline underline-offset-4" to="/blog">
            Blog
          </Link>
        </div>
        <div className="hidden lg:flex-1 lg:flex items-center justify-end">
          <ContactMe />
        </div>
      </div>
    </>
  );
}
