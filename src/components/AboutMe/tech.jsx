import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../App";

export default function UsedTech({ techs }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [tech, setTech] = useState([]);

  useEffect(() => {
    setTech([]);
    if (techs) {
      techs.forEach((tech) => {
        if (selectedCategory == tech.category || selectedCategory == null)
          setTech((usedTech) => [...usedTech, ...tech.tech]);
      });
    }
  }, [techs, selectedCategory]);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3">
        <div className="w-[45%] lg:flex-1">
          <input
            id="tech0"
            className="peer hidden"
            type="radio"
            name="tech"
            checked={selectedCategory == null}
            onClick={() => setSelectedCategory(null)}
          />
          <label
            for="tech0"
            className={`peer-checked:bg-[#0075E1] peer-checked:shadow-cyan-500/50 peer-checked:border-0 border-4 border-[#969393] cursor-pointer flex-1  px-[30px] md:px-[45px] py-[12.5px] rounded-full flex items-center justify-center text-[15px] md:text-[20px] lg:text-[25px] xl:text-[30px] font-bold shadow-md `}
          >
            All
          </label>
        </div>
        {techs &&
          techs.map((tech, key) => {
            return (
              <div className="w-[45%] lg:flex-1">
                <input
                  id={`tech${key + 1}`}
                  className="peer hidden"
                  type="radio"
                  name="tech"
                  checked={selectedCategory == tech.category}
                  value={tech.category}
                  onClick={() => setSelectedCategory(tech.category)}
                />
                <label
                  for={`tech${key + 1}`}
                  className={`peer-checked:bg-[#0075E1] peer-checked:shadow-cyan-500/50 peer-checked:border-0 border-4 border-[#969393] cursor-pointer flex-1 px-[30px] lg:px-[45px] py-[12.5px] rounded-full flex items-center justify-center text-[15px] md:text-[20px] lg:text-[25px] xl:text-[30px] font-bold shadow-md `}
                >
                  {tech.category}
                </label>
              </div>
            );
          })}
      </div>
      <div className="flex flex-wrap gap-[5%] px-[20px] lg:px-[40px]">
        {tech &&
          tech.map((tech, key) => {
            return (
              <div
                className={`w-[45%] lg:w-[30%] flex justify-center my-2 w-[${tech.width}px]`}
              >
                <img width="200" src={tech.img} />
              </div>
            );
          })}
      </div>
    </>
  );
}
