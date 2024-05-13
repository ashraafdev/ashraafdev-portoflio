import { useContext, useEffect } from "react";
import { AppContext } from "../../App";
import Header from "../../components/Home/header";
import Navbar from "../../components/Home/navbar";
import Projects from "../../components/Home/projects";
import { Link } from "react-router-dom";
import { useProjects } from "../../hooks/projects";

export default function Home() {
  const {
    database,
    project,
    setProject,
    lastThreeProjects,
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
      <Header />
      <div className="flex w-full">
        <div className="flex-1 font-bold text-[25px] lg:text-[27.5px] xl:text-[35px]">
          My Last Projects
        </div>
        <Link
          className="flex-1 flex justify-end underline underline-offset-4 text-[25px] lg:text-[25px] xl:text-[30px]"
          to="/projects"
        >
          View All
        </Link>
      </div>
      <Projects projects={lastThreeProjects} />
    </div>
  );
}
