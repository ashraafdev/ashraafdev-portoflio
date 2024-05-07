import Header from "../../components/Home/header";
import Navbar from "../../components/Home/navbar";

export default function Project() {
  return (
    <div className="h-full w-full flex flex-col gap-10 px-[25px] lg:px-[50px] py-[20px] text-[30px]">
      <Navbar />
      <div className="flex mx-[5%] my-5">
        <div className="flex-1">
          <iframe
            className="w-[700px] h-[400px]"
            src="https://www.youtube.com/embed/JWhzTuXJXYM?si=ZwcWYW0rLVu86AoD"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="text-[50px] font-bold">Test Project</h1>
          <h2 className="text-[25px] ">
            <span className="font-bold">Used Tech: </span>
            Laravel, Symfony
          </h2>
          <h2 className="text-[25px] ">
            <span className="font-bold">Description: </span>I coded this project
            to help others to build whatever stuff they need!
          </h2>
          <div className="flex-1 flex">
            <button
              class="flex self-end select-none items-center gap-3 rounded-lg bg-[#cccccc] py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase shadow-md shadow-blue-gray-500/10 transition-all hover:shadow-lg hover:shadow-blue-gray-500/20 active:opacity-[0.75] active:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-dark="true"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
                alt="metamask"
                class="h-6 w-6"
              />
              View Code
            </button>
          </div>
        </div>
      </div>
          <div className="text-center font-semibold text-[50px] lg:text-[70px] xl:text-[85px] font-serif">
            <span className="text-[#9D8E8E]">Screen</span>Shoots
          </div>
    </div>
  );
}
