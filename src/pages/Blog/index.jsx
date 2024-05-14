import Blogs from "../../components/Blog/blogs";
import Navbar from "../../components/Home/navbar";
import { AppContext } from "../../App";
import { useContext, useEffect } from "react";
import { useBlogs } from "../../hooks/blog";
import Footer from "../../components/Home/footer";

export default function Blog() {
  const { database, blog, setBlog, setLoading, setError } = useContext(AppContext);
  const [isLoading, error, blogs, grab] = useBlogs(database);

  useEffect(() => {
    if (!blog.length) grab();
  }, []);

  useEffect(() => {
    if (isLoading) setLoading(true);
    else setLoading(false);
  }, [isLoading]);

  useEffect(() => {
    if (blogs) setBlog(blogs);
    console.log(blogs);
  }, [blogs]);

  useEffect(() => {
    if (error) setError(error);
  }, [error]);

  return (
    <div className="h-full w-full flex flex-col gap-10 px-[25px] lg:px-[50px] py-[20px] text-[30px]">
      <Navbar />
      <div className="text-center font-semibold text-[50px] lg:text-[70px] xl:text-[85px] font-serif">
        <span className="text-[#9D8E8E]">My</span> Blog
      </div>
      <div className="text-center font-semibold text-[30px] lg:text-[50px] xl:text-[60px] font-serif">
        Here where, <span className="text-[#9D8E8E]">I</span> write about what{" "}
        <span className="text-[#9D8E8E]">I</span> have learned{" "}
        <span className="text-[#9D8E8E]">recently</span>
      </div>
      <Blogs blog={blog} />
      <Footer />
    </div>
  );
}
