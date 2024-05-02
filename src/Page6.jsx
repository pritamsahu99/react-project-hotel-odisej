import React, {useEffect} from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
const Page6 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const textAnimation = () => {
      let allh1 = document.querySelectorAll(".page6 h1");
      allh1.forEach(function (elem) {
        var clutter = "";
        let Texts = elem.textContent;
        let splittedText = Texts.split("");
        splittedText.forEach(function (e) {
          clutter += `<span>${e}</span>`;
        });
        elem.innerHTML = clutter;
      });

      gsap.to(".page6 h1 span", {
        stagger: 0.3,
        color: "#434b34",
        scrollTrigger: {
          scroller: "body",
          trigger: ".page6 h1 span",
          scrub: 1,
          // markers: true,
          start: "top 65%",
          end: "top -60%",
        },
      });
    };
    textAnimation();
  }, []);

  return (
    <div className="page6 project-component bg-[#F7F7EE] min-h-screen w-full ">
      <div className="-tracking-[1px] font-PP-Woodland max-md:text-[9vw] md:text-[5.5vw] leading-[1.2] md:leading-[6.2vw] font-medium text-[#E3E3C4] z-10 text-center py-[12vw]">
        <h1>Surrender yourself</h1>
        <h1>to the silent solitude</h1>
        <h1>of the wild, or set off</h1>
        <h1>on an adventure</h1>
        <h1>through the lush</h1>
        <h1>forest of the National</h1>
        <h1>Park.</h1>
      </div>
    </div>
  );
};

export default Page6;
