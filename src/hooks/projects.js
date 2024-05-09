import { useState } from "react";
import { getLatestProjects, getProjectData } from "../database/projects";

export function useProjects(database) {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const [projects, setProjects] = useState(null);

  const processing = async () => {
    try {
      setIsLoading(true);
      let data = await getLatestProjects(database);
      data = data.map(project => project.data());
      setProjects(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [isLoading, error, projects, processing];
}

export function useSingleProject(database) {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const [projectData, setProjectData] = useState({
    youtubeLink: null,
    websiteLink: null,
    description: null,
    screenshoots: null,
    tech: [],
    status: 'private',
    githubLink: null
  });

  const processing = async (slug) => {
    try {
      setIsLoading(true);
      let projectData = await getProjectData(database, slug)
      setProjectData(projectData);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return [isLoading, error, projectData, processing];
}