import { useContext } from "react";
import { AppContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";

export default function MobileNavbar() {
  const { setShowDropDown } = useContext(AppContext);

  const navigateTo = useNavigate();

  const navigate = (url) => {
    navigateTo(url);
    setShowDropDown(false);
  }

  return (
    <>
      <div
        onClick={() => setShowDropDown(false)}
        className="w-screen h-screen absolute"
      ></div>
      <div className="absolute w-[75%] h-[700px] top-[400px] left-[50%] -translate-y-[50%] -translate-x-[50%] rounded-md bg-white border border-gray-400 dark:bg-[#393939] z-[1000]">
        <div className="w-full h-full flex flex-col text-[40px] py-4 gap-6">
          <div className="flex-1 flex flex-col text-[40px] font-bold items-center justify-center">
            <div className="h-[70px] w-[70px] rounded-full bg-profile bg-center bg-cover shadow-lg shadow-amber-500/50"></div>
          </div>
          <div className="flex-1 flex flex-col gap-6 text-[40px] font-bold items-center justify-center">
            <button onClick={() => navigate('/')} className="underline underline-offset-4">
              Home
            </button>
            <button onClick={() => navigate('/about')} className="underline underline-offset-4">
              About
            </button>
            <button onClick={() => navigate('/projects')} className="underline underline-offset-4">
              Projects
            </button>
            <button onClick={() => navigate('/blog')} className="underline underline-offset-4">
              Blog
            </button>
          </div>
          <div className="flex-1 flex items-end justify-center">
            <button onClick={() => navigate('/contact')} className="underline underline-offset-4">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
