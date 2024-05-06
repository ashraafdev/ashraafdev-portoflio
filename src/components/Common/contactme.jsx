import { Link } from "react-router-dom";

export default function ContactMe() {
    return (
        <Link to="/contact" className="bg-[#0075E1] px-[45px] py-[12.5px] rounded-full flex items-center justify-center md:text-[20px] lg:text-[25px] xl:text-[30px] font-bold shadow-md shadow-cyan-500/50 text-white">Contact Me</Link>
    )
}