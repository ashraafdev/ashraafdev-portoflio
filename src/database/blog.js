import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";

export async function getBlogs(db) {
  // prepare collection
  let projectsCollection = collection(db, "blog");

  // prepare query
  const getThreeProjectsQuery = query(
    projectsCollection,
    where('status', '==', 'public'),
    orderBy("created_at", "desc")
  );

  // retreive data
  const querySnapshot = await getDocs(getThreeProjectsQuery);

  // return projects
  return querySnapshot.docs;
}

export async function getSingleBlog(db, blogSlug) {
  // prepare collection
  let projectsCollection = collection(db, "blog");

  // prepare query
  const getThreeProjectsQuery = query(
    projectsCollection,
    where('slug', '==', blogSlug),
    where('status', '==', 'public'),
    orderBy("created_at", "desc"),
    limit(1)
  );

  // retreive data
  const querySnapshot = await getDocs(getThreeProjectsQuery);

  // return projects
  return querySnapshot.docs;
}
