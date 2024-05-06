import { Link } from "react-router-dom";

export default function SingleBlog({key, className, blogName, blogLink, blogCategory}) {
  return (
    <div key={key} className={className}>
      <div className="h-auto flex w-full">
        <div className="flex-1 font-semibold">{blogName}</div>
        <div className="flex-1 flex justify-end">
          <Link
            className="flex-1 flex justify-end underline underline-offset-4"
            to={blogLink}
          >
            View
          </Link>
        </div>
      </div>
      <div className="h-auto md:text-[15.5px] lg:text-[17.5px] xl:text-[20px] ">
        <span className="font-bold">Category: </span>
        {blogCategory.join(", ")}
      </div>
    </div>
  );
}
