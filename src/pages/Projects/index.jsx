import Navbar from "../../components/Home/navbar";
import { AppContext } from "../../App";
import { useContext, useEffect } from "react";
import ProjectComponent from "../../components/Home/projects";
import { useProjects } from "../../hooks/projects";

export default function Projects() {
  const {
    database,
    project,
    setProject,
    setLastThreeProjects,
    setLoading,
    setError,
  } = useContext(AppContext);
  
  const [isLoading, error, projects, processing] = useProjects(database);

  useEffect(() => {
    if (!project.length) processing();
  }, []);

  useEffect(() => {
    if (isLoading) setLoading(true);
    else setLoading(false);
  }, [isLoading]);

  useEffect(() => {
    if (projects) {
      setLastThreeProjects(projects.slice(0, 3));
      setProject(projects);
    }
  }, [projects]);

  useEffect(() => {
    if (error) setError(error);
  }, [error]);

  return (
    <div className="h-full w-full flex flex-col gap-10 px-[25px] lg:px-[50px] py-[20px] text-[30px]">
      <Navbar />
      <div className="text-center font-semibold text-[50px] lg:text-[70px] xl:text-[85px] font-serif">
        <span className="text-[#9D8E8E]">My</span> Projects
      </div>
      <ProjectComponent projects={project} />
    </div>
  );
}
