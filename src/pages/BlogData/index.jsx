import { AppContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import { useSingleBlog } from "../../hooks/blog";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Home/navbar";
import { PublishedAt, PublishedBy } from "../../components/Blog/blogimages";
import Editor from "../../components/Blog/editor";
import Footer from "../../components/Home/footer";

export default function BlogData() {
  const { blogSlug } = useParams();
  const { database, setLoading, setError } = useContext(AppContext);
  const [isLoading, error, blog, retreive] = useSingleBlog(database, blogSlug);

  useEffect(() => {
    retreive();
  }, []);

  useEffect(() => {
    if (isLoading) setLoading(true);
    else setLoading(false);
  }, [isLoading]);

  useEffect(() => {
    if (error) setError(error);
  }, [error]);


  return (
    <div className="h-full w-full flex flex-col gap-10 px-[25px] lg:px-[50px] pt-[20px] text-[30px]">
      <Navbar />
      <div className="text-center font-semibold text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-serif">
        {blog.title}
      </div>
      <div className="flex w-full font-semibold text-[20px] lg:text-[25px] xl:text-[30px] font-serif flex-wrap gap-2">
        <div className="flex justify-center w-full">
          <PublishedAt /> {blog.created_at ? blog.created_at : null}
        </div>
        <div className="flex justify-center w-full">
          <PublishedBy /> {blog.author ? blog.author : null}
        </div>
      </div>
      <div className="text-left mx-[20px] md:mx-[7.5%] lg:mx-[20%] font-semibold text-[15px] md:text-[20px] lg:text-[25px] xl:text-[30px] font-serif">
        <Editor blogContent={blog.blog} />
      </div>
      <Footer />
    </div>
  );
}
