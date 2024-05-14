import { useEffect, useContext } from "react";
import UsedTech from "../../components/AboutMe/tech";
import Navbar from "../../components/Home/navbar";
import { useTechs } from "../../hooks/about";
import { AppContext } from "../../App";
import Footer from "../../components/Home/footer";

export default function AboutMe() {
  const { database, techs, setTechs, setLoading, setError } = useContext(AppContext);
  const [isLoading, error, tech, retreive] = useTechs(database);

  useEffect(() => {
    if (!techs.length) retreive();
  }, []);

  useEffect(() => {
    if (isLoading) setLoading(true);
    else setLoading(false);
  }, [isLoading]);

  useEffect(() => {
    if (tech) setTechs(tech);
  }, [tech]);

  useEffect(() => {
    if (error) setError(error);
  }, [error]);

  return (
    <div className="h-full w-full flex flex-col gap-10 px-[25px] lg:px-[50px] pt-[20px] text-[30px]">
      <Navbar />
      <div className="text-center font-semibold text-[50px] lg:text-[70px] xl:text-[85px] font-serif">
        About <span className="text-[#9D8E8E]">Me</span>
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-5 lg:gap-0 lg:flex-wrap md:px-10 lg:px-20">
        <div className="flex-1 flex flex-col gap-10 items-center">
          <div className="flex-1 flex items-center text-[30px] lg:text-[40px] xl:text-[45px]">
            <div>
              <span className="text-[#9D8E8E]">I'm</span> a Full Stack
              web/mobile developer <span className="text-[#9D8E8E]">Who</span>{" "}
              makes <span className="text-[#9D8E8E]">open-source</span> projects
              and writes about{" "}
              <span className="text-[#9D8E8E]">code, design</span>. Welcome to
              my <span className="text-[#9D8E8E]">open space</span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img className="rounded-full shadow-md shadow-gray-500/50" width={500} src="me.jpeg" />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="text-center font-semibold text-[50px] lg:text-[70px] xl:text-[85px] font-serif">
          Used <span className="text-[#9D8E8E]">Tech</span>
        </div>
        <UsedTech techs={techs} />
      </div>
    </div>
  );
}
