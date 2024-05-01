import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const RoomCard = ({ values }) => {
  const { imgurl, title, description, keyIndex } = values;
  const cardRef = useRef(null);
  // console.log(keyIndex);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const card = cardRef.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        scroller: "body",
        trigger: card,
        start: "bottom 100%",
        end: "top 80%",
        scrub: 1,
        // markers: true,
      },
    });

    tl.to(
      card,
      {
        opacity: 1,
        y: -15,
        duration: 0.2,
        ease:"none"
      },
    );

  }, [keyIndex]);

  return (
    <div
      ref={cardRef}
      className={`h-36 md:h-40 opacity-0 w-full flex border relative group border-[#d4d4b9] overflow-hidden transform transition-all duration-200 ease-in cursor-pointer hover:bg-[#5C6748] ${
        keyIndex === "01"
          ? "rounded-t-[20px]"
          : keyIndex === "05"
          ? "rounded-b-[20px]"
          : "rounded-none"
      }`}
    >
      <div className="img h-full w-96 ">
        <img
          className="object-cover object-center h-full w-full group-hover:-translate-x-0 transition-all ease-[cubic-bezier(.19,1,.22,1)] duration-1000 md:-translate-x-72 -translate-x-24"
          src={imgurl}
        />
      </div>
      <div className="h-full w-full flex justify-between items-center px-8 md:px-16">
        <div className="h-[70%] md:h-[60%] w-[45vw] flex flex-col justify-between leading-2 md:leading-[4rem] group-hover:-translate-x-0 md:-translate-x-72 -translate-x-24 transition-all ease-[cubic-bezier(.19,1,.22,1)] duration-1000">
          <h1 className="font-PP-Woodland text-3xl md:text-4xl text-[#434B34] group-hover:text-[#E3E3C4]">
            {title}
          </h1>
          <p className="font-DM-Sans text-[#2e3323e1] group-hover:text-[#f7f7ee]">
            {description}
          </p>
        </div>
        <div className="font-DM-Sans h-[50%] flex items-end">
          <div className="text-[#f7f7ee] bg-[#5C6748] group-hover:bg-[#f7f7ee] group-hover:text-[#434B34] rounded-full px-[18px] py-[1.5px] transition-all duration-200">
            <h5 className="group-hover:hidden">{keyIndex}</h5>
            <span className="hidden group-hover:block">
              <i className="ri-arrow-right-line"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
