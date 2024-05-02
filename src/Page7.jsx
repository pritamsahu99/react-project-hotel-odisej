import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Page7 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".page7",
        scroller: "body",
        // markers: true,
        start: "top 85%",
        end: "top 5%",
        scrub: 0.3,
      },
    });
    tl1
      .to(
        ".leftSide",
        {
          transform: "translateX(-50%)",
          duration: 100,
          ease: "power1.in",
        },
        "scroll-horizontal"
      )
      .to(
        ".rightSide",
        {
          transform: "translateX(50%)",
          duration: 100,
          ease: "power1.in",
        },
        "scroll-horizontal"
      )
      .from(".center", {
        y: 10,
        opacity: 0,
        duration: 20,
        delay: 2,
        ease: "power1.in",
      })
      .from(".exploreWellnessBtn", {
        opacity: 0,
        y: 40,
        duration: 20,
        ease: "power1.in",
      });
  }, []);

  return (
    <div className="page7 project-component h-screen w-full bg-[#F7F7EE] relative overflow-hidden py-10">
      <div className="h-full w-full flex items-center justify-between">
        <div className="leftSide max-md:h-[80%] md:h-[100%] max-md:w-[30%] md:w-[46%] overflow-hidden rounded-r-3xl">
          <img
            loading="lazy"
            className="h-full w-full object-cover object-center"
            src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/230/ALH_Odisej_outsidepool_01-scaled-600x0.jpg"
            alt=""
          />
        </div>
        <div className="center absolute top-0 max-md:left-[20%] md:left-[35%] h-full max-md:w-[60%] md:w-[30%] flex flex-col items-center justify-center gap-12">
          <h1 className="font-PP-Woodland max-md:text-4xl md:text-7xl text-center text-[#434b34]">
            Relaxing treatments
          </h1>
          <p className="font-DM-Sans text-[#5b6647] w-full text-center leading-5 ">
            Massage, sauna sessions, beauty treatments such as pedicures and
            manicures, a fitness room, an outdoor children's pool filled with
            sea water or a sun terrace to relax on.
          </p>
          <div className="exploreWellnessBtn relative w-max group h-max">
            <h2 className="text-[#545C46] relative flex items-center gap-4 cursor-pointer opacity-95 group-hover:opacity-100 transition-all duration-200 text-2xl">
              Explore Wellness
              <span className="bg-[#566043]  group-hover:bg-[#434b34] py-[13px] px-6 rounded-full font-PP-Woodland relative flex items-center justify-center">
                <i
                  className="ri-arrow-right-line text-[#f7f7ee] text-base absolute  group-hover:duration-200 
                    group-hover:delay-150
                    group-hover:ease-linear font-medium opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-[0] "
                ></i>
                <i
                  className="ri-arrow-right-line text-base text-[#f7f7ee] absolute font-medium group-hover:opacity-0 group-hover:translate-x-3
                      group-hover:duration-200 group-hover:ease-linear "
                ></i>
              </span>
            </h2>
          </div>
        </div>
        <div className="rightSide max-md:h-[80%] md:h-[100%] max-md:w-[30%] md:w-[46%] overflow-hidden rounded-l-3xl">
          <img
            loading="lazy"
            className="h-full w-full object-cover object-center"
            src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/388/alh-img-2-600x0.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Page7;
