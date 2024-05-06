import { useState } from "react";
import { getUsedTech } from "../database/about";

export function useTechs(database) {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const [tech, setTech] = useState(null);

  const retreive = async () => {
    try {
      setIsLoading(true);
      let techs = await getUsedTech(database);
      techs = techs.map((tech) => tech.data());
      setTech(techs);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [isLoading, error, tech, retreive];
}
