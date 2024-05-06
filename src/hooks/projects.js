import { useState } from "react";
import { getLatestProjects } from "../database/projects";

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