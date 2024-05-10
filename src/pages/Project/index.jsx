import { useContext, useEffect, useRef, useState } from "react";
import Navbar from "../../components/Home/navbar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import YoutubeVideo from "../../components/Project/youtubevideo";
import {
  FacebookShare,
  GitHubCode,
  WebsiteLink,
  WhatsappShare,
} from "../../components/Project/share";
import { useSingleProject } from "../../hooks/projects";
import { useParams } from "react-router-dom";
import { AppContext } from "../../App";
import { listAll, ref, getDownloadURL } from "firebase/storage";

export default function Project() {
  const { database, storage, setLoading, setError } = useContext(AppContext);

  const [isLoading, error, projectData, processing] =
    useSingleProject(database);

  const { slug } = useParams();

  const [images, setImages] = useState([]);

  useEffect(() => {
    if (slug) processing(slug);
  }, [slug]);

  useEffect(() => {
    if (error) setError(error);
  }, [error]);

  useEffect(() => {
    if (isLoading) setLoading(true);
  }, [error]);

  useEffect(() => {
    if (projectData) {
      const listRef = ref(storage, projectData.slug);

      listAll(listRef)
        .then((res) => {
          getDownloadableLinks(res.items);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [projectData]);

  const getDownloadableLinks = async (items) => {
    let links = [];

    items.forEach(async (item) => {
      const link = await getDownloadURL(item);
      setImages((links) => [...links, link]);
    });
  };

  return (
    <div className="h-full w-full flex flex-col gap-10 px-[25px] lg:px-[50px] py-[20px] text-[30px]">
      <Navbar />
      <div className="flex flex-col xl:flex-row mx-[5%] lg:gap-5 my-5">
        <div className="flex-1">
          <YoutubeVideo link={projectData.youtubeLink} />
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="text-[50px] font-bold">{projectData.name}</h1>
          <h2 className="text-[25px] ">
            <span className="font-bold">Used Tech: </span>
            {projectData.tech.join(", ")}
          </h2>
          <h2 className="text-[25px] ">
            <span className="font-bold">Description: </span>
            {projectData.description}
          </h2>
          <div className="flex-1 lg:flex grid grid-cols-2 gap-2">
            {projectData.websiteLink && (
              <WebsiteLink link={projectData.websiteLink} />
            )}
            {projectData.status == "public" && (
              <GitHubCode link={projectData.githubLink} />
            )}
            <WhatsappShare link={window.location.href} />
            <FacebookShare link={window.location.href} />
          </div>
        </div>
      </div>
      <div className="text-center font-semibold text-[50px] lg:text-[70px] xl:text-[85px] font-serif">
        <span className="text-[#9D8E8E]">Screen</span>Shoots
      </div>
      <Carousel>
        {images.length > 0 ? (
          images.map((image) => {
            return (
              <div>
                <img src={`${image}`} />
              </div>
            );
          })
        ) : (
          <div>
            <img src="https://static.vecteezy.com/system/resources/previews/004/639/366/original/error-404-not-found-text-design-vector.jpg" />
          </div>
        )}
      </Carousel>
    </div>
  );
}
