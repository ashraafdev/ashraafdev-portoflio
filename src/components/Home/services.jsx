export default function Services() {
  return (
    <div className="flex-1 flex flex-wrap md:text-[20px] lg:text-[25px] xl:text-[30px] px-[25px] lg:px-[50px] gap-6 justify-center">
      <div className="xl:w-[32%] rounded-2xl w-full border-4 border-[#969393] p-4 flex flex-col gap-7 shadow-md shadow-gray-500/50">
        <div className="h-[70%] text-[20px] lg:text-[25px] xl:text-[30px]">
          <img
            width="200"
            height="200"
            src="https://img.icons8.com/3d-fluency/200/domain.png"
            alt="domain"
          />
        </div>
        <div className="h-auto text-[15.5px] lg:text-[17.5px] xl:text-[20px]">
          <span className="font-bold">Full Stack Dev: </span>
        </div>
      </div>
      <div className="xl:w-[32%] rounded-2xl w-full bg-[#0055D3] p-4 flex flex-col gap-7 shadow-md shadow-cyan-500/50 text-white">
        <div className="h-[70%] text-[20px] lg:text-[25px] xl:text-[30px]">
          <img
            width="200"
            height="200"
            src="https://img.icons8.com/3d-fluency/200/kindle.png"
            alt="kindle"
          />
        </div>
        <div className="h-auto text-[15.5px] lg:text-[17.5px] xl:text-[20px]">
          <span className="font-bold">Mobile Dev: </span>
        </div>
      </div>
      <div className="xl:w-[32%] rounded-2xl w-full border-4 border-[#969393] p-4 flex flex-col gap-7 shadow-md shadow-gray-500/50">
        <div className="h-[70%] text-[20px] lg:text-[25px] xl:text-[30px]">
          <img
            width="200"
            height="200"
            src="https://img.icons8.com/3d-fluency/200/design.png"
            alt="design"
          />
        </div>
        <div className="h-auto text-[15.5px] lg:text-[17.5px] xl:text-[20px]">
          <span className="font-bold">UI/UX Design: </span>
        </div>
      </div>
    </div>
  );
}
