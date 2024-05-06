import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";

export async function getLatestProjects(db) {
  // prepare collection
  let projectsCollection = collection(db, "projects");

  // prepare query
  const getThreeProjectsQuery = query(
    projectsCollection,
    orderBy("created_at", "desc"),
  );

  // retreive data
  const querySnapshot = await getDocs(getThreeProjectsQuery);

  // return projects
  return querySnapshot.docs; 
}
