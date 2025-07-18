import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import gsap from "gsap";
import AnimatedTitle from "./AnimatedTitle";

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });
  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          {" "}
          Enter the Summoner's Rift{" "}
        </h2>
        <AnimatedTitle
          title="Disc<b>o</b>ver the world's <br /> most competitive <b>g</b>ame"
          containerClass="mt-5 !text-black text-center"
        />
        <div className="about-subtext">
          <p>
            The ultimate MOBA experience begins—your legend, now an epic journey
          </p>
          <p className="text-gray-500">
            League of Legends unites millions of players from around the world,
            both casual and competitive, into a unified gaming universe
          </p>
        </div>
      </div>
      <div className="h-dvh w-screen " id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.jpg"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
