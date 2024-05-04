import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Page3 = () => {
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl1 = gsap.timeline({
      scrollTrigger: {
        scroller: "body",
        trigger: ".page3 .pageContents ",
        start: "top 80%",
        end: "top 10%",
        scrub: 1,
        // markers: true
      }
    });
    tl1.from(".img2", {
      opacity: 0,
      y:40,
      duration:5,
      ease: "power1.in",
    },'a').from(".leftSideTexts", {
      opacity: 0,
      y:30,
      duration:5,
      ease: "power1.in",
    },'a').from(".exploreBtn",{
      opacity: 0,
      y:40,
      duration:5,
      ease: "power1.in",
    }).from(".img1",{
      opacity: 0,
      y:40,
      duration:5,
      ease: "power1.in",
    }).from(".img3",{
      opacity: 0,
      y:40,
      duration:5,
      ease: "power1.in",
    })

    const textAnimation2 = () => {
      let allh1 = document.querySelectorAll(".page3 h1");
      allh1.forEach(function (elem) {
        var clutter = "";
        let Texts = elem.textContent;
        let splittedText = Texts.split("");
        splittedText.forEach(function (e) {
          clutter += `<span>${e}</span>`;
        });
        elem.innerHTML = clutter;
      });

      gsap.to(".page3 h1 span", {
        stagger: 0.3,
        color: "#434B34",
        scrollTrigger: {
          scroller: "body",
          trigger: ".page3 h1 span",
          scrub: 0.8,
          // markers: true,
          start: "top 65%",
          end: "top -60%",
        },
      });
    };
    textAnimation2();
  }, []);

  return (
    <div className="page3 project-component min-h-screen w-full bg-[#F7F7EE]">
      <div className="h-[180vh] py-24">
        <div className="-tracking-[1px] mb-20 font-PP-Woodland max-md:text-[8vw] md:text-[5.5vw] leading-[1.2] md:leading-[6.2vw] font-medium text-[#E3E3C4] z-10 text-center">
          <h1>Sweeping view of the</h1>
          <h1>Adriatic in your Room</h1>
        </div>
        <div className="pageContents flex flex-col md:flex-row gap-6 font-DM-Sans h-screen w-[82vw] m-auto">
          <div className="leftSide relative leading-5 text-[#3D4132] h-full w-full md:w-[35vw] flex flex-col justify-between">
            <div className="leftSideTextPart h-[25vh] w-full relative flex flex-col justify-between">
              <h1 className="leftSideTexts w-[92%] h-full left-10">
                Many rooms have balconies that beckon you to breathe in the pure
                Mediterranean air of the island. All roomsare air conditioned
                and feature an elegant ensuite bathroomwith shower.
              </h1>
              <div className="exploreBtn relative w-max group h-max">
                <h2 className="text-[#545C46] relative flex items-center gap-4 cursor-pointer opacity-95 group-hover:opacity-100 transition-all duration-200 text-2xl">
                  Explore Rooms
                  <span className="bg-[#566043]  group-hover:bg-[#434b34] py-[13px] px-6 rounded-full font-PP-Woodland relative flex items-center justify-center">
                    <i className="ri-arrow-right-line text-[#f7f7ee] text-base absolute  group-hover:duration-200 
                    group-hover:delay-150
                    group-hover:ease-linear font-medium opacity-0 group-hover:opacity-100 
                    translate-x-3 
                    group-hover:translate-x-[0] "></i>
                    <i
                      className="ri-arrow-right-line text-base text-[#f7f7ee] absolute font-medium group-hover:opacity-0 group-hover:translate-x-3
                      group-hover:duration-200 group-hover:ease-linear "
                    ></i>
                  </span>
                </h2>
              </div>
            </div>
            <div className="img1 absolute max-md:-bottom-28 md:bottom-12 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in ">
              <img
                src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/211/ALH_Odisej_Rosemary_suite_05-scaled-800x0.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="rightSide relative h-full w-[45vw] flex flex-col">
            <div
              className="img2 absolute max-md:bottom-14 md:top-0 w-[40vw] md:h-[56%]
              rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in overflow-hidden"
            >
              <img
                src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/213/ALH_Odisej_deluxe_seaview_balcony_double_01-scaled-800x0.jpg"
                alt=""
              />
            </div>
            <div className="img3 bg-red-500 absolute md:h-64 w-[40vw] md:w-72 rounded-2xl overflow-hidden max-md:bottom-14 md:-bottom-4 max-md:left-[10rem] md:left-0 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in ">
              <img className="object-cover h-full w-full" src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/215/ALH_Odisej_deluxe_seaview_balcony_double_02-scaled-800x0.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
