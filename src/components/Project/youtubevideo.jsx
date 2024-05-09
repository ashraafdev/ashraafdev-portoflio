export default function YoutubeVideo({link}) {
    return (
        <iframe
            className="w-full h-[250px] lg:h-[400px] xl:w-[700px] xl:h-[400px]"
            src={link ? link : "https://youtube.com/embed/null"}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
        ></iframe>
    )
}