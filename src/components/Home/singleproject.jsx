import { Link } from "react-router-dom";

export default function Project({
  k,
  className,
  projectLink,
  projectName,
  projectDescription,
  projectStatus,
  usedTech,
}) {
  return (
    <div key={k} className={className}>
      <div className="h-auto flex w-full">
        <div className="flex-1 font-semibold">{projectName}</div>
        <div className="flex-1 flex justify-end">
          {projectStatus == "public" && (
            <Link
              className="flex-1 flex justify-end underline underline-offset-4"
              to={projectLink}
            >
              View
            </Link>
          )}
        </div>
      </div>
      <div className="h-[70%]">{projectDescription}</div>
      <div className="h-auto md:text-[15.5px] lg:text-[17.5px] xl:text-[20px] ">
        <span className="font-bold">Used Tech: </span>
        {usedTech.join(", ")}
      </div>
    </div>
  );
}
