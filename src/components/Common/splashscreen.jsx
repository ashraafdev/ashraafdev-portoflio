import anime from "animejs/lib/anime.es.js";
import { useContext, useEffect, useState } from "react";
import "animate.css";
import { AppContext } from "../../App";

export default function SplashScreen() {
  const [loadFinished, setLoadFinished] = useState(false);
  const { setAppIsLaunched } = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => {
      setLoadFinished(true);

      anime({
        targets: "#topBox",
        top: ["-50%", "-100%"],
        duration: 2500,
        delay: 250,
        easing: 'linear'
      });

      anime({
        targets: "#bottomBox",
        top: ["50%", "100%"],
        duration: 2500,
        delay: 250,
        easing: 'linear'
      });
    }, 3000);
  }, []);

  useEffect(() => {
    if (loadFinished) {
      setTimeout(() => {
        setAppIsLaunched(true);
      }, 3000);
    }
  }, [loadFinished])

  return (
    <div className="flex absolute h-screen w-full overflow-y-hidden">
      <div className="relative flex-1">
        {!loadFinished && (
          <div
            className={`z-[1000] text-[40px] text-dark-100 absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] animate__animated animate__infinite animate__flash`}
          >
            Loading...
          </div>
        )}
        <div
          id="topBox"
          className="absolute bg-[#3a3a3a] h-full w-full top-[-50%] left-0"
        ></div>
        <div
          id="bottomBox"
          className="absolute bg-[#3a3a3a] h-full w-full top-[50%] left-0"
        ></div>
      </div>
    </div>
  );
}
