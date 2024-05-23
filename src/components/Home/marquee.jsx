import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const MarqueeElement = () => {
  return (
    <div className="element flex gap-2 lg:gap-5 justify-center items-center pointer-events-none">
      <img
        width="48"
        height="48"
        src="https://img.icons8.com/pulsar-gradient/48/nui2.png"
        alt="nui2"
      />
      <p className="text-white text-2xl pointer-events-none	">My Resume</p>
    </div>
  );
};

const Marquee = () => {
  const marqueeRef = useRef(null);

  useGSAP(
    () => {
      const marqueeElement = marqueeRef.current;
      const marqueeWidth = marqueeElement.scrollWidth / 2;

      // Create the GSAP animation
      gsap.fromTo(
        ".element",
        { x: "100%" },
        {
          x: `50%`,
          duration: 2,
          ease: "linear",
          yoyo: true,
          repeat: -1,
        }
      );
    },
    { scope: marqueeRef }
  );

  return (
    <div className="h-[200px] w-full overflow-x-hidden">
      <div className="relative flex items-center h-full">
        <a
          ref={marqueeRef}
          href="/cv.pdf"
          className="cursor-pointer absolute top-[30%] md:top-[25%] rotate-[-5deg] md:rotate-[-3.75deg] lg:rotate-[-2.5deg] left-[-10%] w-[120%] bg-gray-800 dark:bg-gray-700 h-20 flex gap-[100px] justify-center items-center"
        >
          <MarqueeElement />
          <MarqueeElement />
          <MarqueeElement />
          <MarqueeElement />
          <MarqueeElement />
          <MarqueeElement />
          <MarqueeElement />
          <MarqueeElement />
          <MarqueeElement />
          <MarqueeElement />
        </a>
        <div className="w-full bg-gradient-to-r from-[#C6FFDD] via-[#FBD786] to-[#f7797d] h-24"></div>
      </div>
    </div>
  );
};

export default Marquee;
