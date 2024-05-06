import { useState } from "react";
import { getBlogs, getSingleBlog } from "../database/blog";
import { collection } from "firebase/firestore";

export function useBlogs(database) {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const [blogs, setBlogs] = useState(null);

  const grab = async () => {
    try {
      setIsLoading(true);
      let data = await getBlogs(database);
      data = data.map((blog) => blog.data());
      setBlogs(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [isLoading, error, blogs, grab];
}


export function useSingleBlog(database, blogSlug) {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const [blog, setBlog] = useState({
    title: blogSlug.replace('-', ' '),
    created_at: null,
    body: null,
  });

  const retreive = async () => {
    try {
      setIsLoading(true);
      let data = await getSingleBlog(database, blogSlug);
      data = data.map((blog) => blog.data());

      if (!data.length) throw new Error('Blog Not Found!');
      
      data[0].created_at = data[0].created_at.toDate().toISOString().replace('T', ' at ').replace('Z', ' ').split('.')[0];

      setBlog(data[0]);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return [isLoading, error, blog, retreive];
}