import { collection, getDocs } from "firebase/firestore";

export async function getUsedTech(database) {
  let techCollection = collection(database, "tech");

  // retreive data
  const querySnapshot = await getDocs(techCollection);

  // return projects
  return querySnapshot.docs;
}
