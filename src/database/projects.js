import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";

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


export async function getProjectData(db, slug) {
  // prepare collection
  let projectsCollection = collection(db, "projects");

  //prepare
  const queryProjectData = query(
    projectsCollection,
    where('slug', '==', slug),
    limit(1)
  );

  // retreive data
  const querySnapshot = await getDocs(queryProjectData);

  return querySnapshot.docs[0].data();
}