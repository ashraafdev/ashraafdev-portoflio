import SingleBlog from "./singleblog";

export default function Blogs({ blog }) {
  const coloredProjectClassName =
    "rounded-2xl w-full bg-[#0055D3] p-4 flex flex-col gap-7 shadow-md shadow-cyan-500/50 text-white";
  const nonColoredProjectClassName =
    "rounded-2xl w-full border-4 border-[#969393] p-4 flex flex-col gap-7 shadow-md shadow-gray-500/50";

  return (
    <div className="flex-1 flex flex-col w-full gap-5 md:text-[20px] lg:text-[25px] xl:text-[30px]">
      {blog &&
        blog.map((singleblog, key) => {
          return key % 2 == 1 ? (
            <SingleBlog
              key={key}
              className={coloredProjectClassName}
              blogLink={singleblog.slug}
              blogName={singleblog.title}
              blogCategory={singleblog.category}
            />
          ) : (
            <SingleBlog
              key={key}
              className={nonColoredProjectClassName}
              blogLink={singleblog.slug}
              blogName={singleblog.title}
              blogCategory={singleblog.category}
            />
          );
        })}
    </div>
  );
}
