import { useEffect } from "react";
import Project from "./singleproject";

export default function Projects({ projects }) {
  const coloredProjectClassName =
    "lg:w-[32%] my-2 lg:mx-[2%] rounded-2xl w-full bg-[#0055D3] p-4 flex flex-col gap-7 shadow-md shadow-cyan-500/50 text-white";
  const nonColoredProjectClassName =
    "lg:w-[32%] my-2 rounded-2xl w-full border-4 border-[#969393] p-4 flex flex-col gap-7 shadow-md shadow-gray-500/50";

  return (
    <div className="flex-1 flex flex-wrap md:text-[20px] lg:text-[25px] xl:text-[30px]">
      {projects &&
        projects.map((project, key) => {
          return key % 3 == 1 ? (
            <Project
              k={key}
              className={coloredProjectClassName}
              projectLink={project.link}
              projectName={project.name}
              projectDescription={project.description}
              projectStatus={project.status}
              usedTech={project.tech}
            />
          ) : (
            <Project
              k={key}
              className={nonColoredProjectClassName}
              projectLink={project.link}
              projectName={project.name}
              projectDescription={project.description}
              projectStatus={project.status}
              usedTech={project.tech}
            />
          );
        })}
    </div>
  );
}
