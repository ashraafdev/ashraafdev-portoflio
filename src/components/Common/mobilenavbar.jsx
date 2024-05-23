import { useContext, useRef } from "react";
import { AppContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function MobileNavbar() {
  const { setShowDropDown } = useContext(AppContext);

  const navigateTo = useNavigate();

  const navigate = (url) => {
    navigateTo(url);
    setShowDropDown(false);
  };

  const logoRef = useRef(null);

  useGSAP(() => {
    gsap.to(logoRef.current, {
      scale: 1.1,
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <>
      <div
        onClick={() => setShowDropDown(false)}
        className="w-screen h-screen absolute"
      ></div>
      <div className="absolute w-[75%] h-[700px] top-[400px] left-[50%] -translate-y-[50%] -translate-x-[50%] rounded-md bg-white border border-gray-400 dark:bg-[#393939] z-[1000]">
        <div className="w-full h-full flex flex-col text-[35px] py-4 gap-6">
          <div className="flex-1 flex flex-col font-bold items-center justify-center">
            <div
              ref={logoRef}
              className="h-[100px] w-[100px] bg-logo-white dark:bg-logo-dark bg-[length:100px_100px] shadow-amber-500/50"
            ></div>
          </div>
          <div className="flex-1 flex flex-col gap-6 font-bold items-center justify-center">
            <button
              onClick={() => navigate("/")}
              className="underline underline-offset-4"
            >
              Home
            </button>
            <button
              onClick={() => navigate("/about")}
              className="underline underline-offset-4"
            >
              About
            </button>
            <button
              onClick={() => navigate("/projects")}
              className="underline underline-offset-4"
            >
              Projects
            </button>
            <button
              onClick={() => navigate("/blog")}
              className="underline underline-offset-4"
            >
              Blog
            </button>
          </div>
          <div className="flex-1 flex items-end justify-center">
            <button
              onClick={() => navigate("/contact")}
              className="underline underline-offset-4"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
