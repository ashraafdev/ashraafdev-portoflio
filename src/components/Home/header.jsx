import { Link } from "react-router-dom";
import ContactMe from "../Common/contactme";
import Marquee from "./marquee";

export default function Header() {
  return (
    <div className="flex-1 flex flex-col w-full gap-6">
      <div className="flex-1 text-center font-semibold text-[40px] lg:text-[70px] xl:text-[85px] font-serif">
        Hi <span className="text-[#9D8E8E]">I am</span> AshraafDev
      </div>
      <div className="flex flex-col gap-4 md:gap-2">
        <div className="flex-1 text-center text-[25px] lg:text-[40px] xl:text-[45px]">
          Welcome to my website where i’ll showcase you my skills
        </div>
        <div className="flex-1 text-center text-[25px] lg:text-[40px] xl:text-[45px]">
          I’m a full stack web / mobile developer, searching for problems to fix
          them{" "}
        </div>
      </div>
     <Marquee />
    </div>
  );
}
