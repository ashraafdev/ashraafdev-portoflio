import { Link } from "react-router-dom";
import ContactMe from "../Common/contactme";
import { AppContext } from "../../App";
import { useContext } from "react";

export default function Navbar() {
  const { setShowDropDown } = useContext(AppContext);

  return (
    <>
      <div className="flex w-full flex-wrap">
        <div className="flex-1 w-full justify-center lg:justify-normal flex gap-8">
          <div className="h-[70px] w-[70px] rounded-full bg-profile bg-center bg-cover shadow-lg shadow-amber-500/50"></div>
          <div className="flex lg:text-[20px] items-center lg:text-[25px] xl:text-[30px]">
            AshraafDev
          </div>
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
