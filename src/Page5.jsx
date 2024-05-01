import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "./styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Page5 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl1 = gsap.timeline({
      scrollTrigger: {
        scroller: "body",
        trigger: ".swiper-wrapper",
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
        // markers: true
      }
    });
    tl1.from(".swiperwrapper .swiper-buttons",{
      opacity: 0,
      top: 40,
      ease: "power1",
    })
    .from(".swiperwrapper .swiper-slide",{
      opacity: 0,
      transform: "translateY(8%)",
      ease: "power1",
    })

  }, []);
  return (
    <div className="swiperwrapper project-component h-screen w-full bg-[#F7F7EE] font-DM-Sans relative ">
      <Swiper
        className="w-full h-[85%]"
        modules={[Pagination, Navigation]}
        pagination={{
          type: "fraction",
          el: ".swiper-pagination",
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
      >
        <div className="slide-container relative">
          {[
            <SwiperSlide key={0}>
              <img
                src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/213/ALH_Odisej_deluxe_seaview_balcony_double_01-scaled-2880x0.jpg"
                alt=""
              />
            </SwiperSlide>,
            <SwiperSlide key={1}>
              <img
                src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/211/ALH_Odisej_Rosemary_suite_05-scaled-2880x0.jpg"
                alt=""
              />
            </SwiperSlide>,
            <SwiperSlide key={2}>
              <img
                src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/209/ALH_Odisej_exterior_aerial_07-scaled-2880x0.jpg"
                alt=""
              />
            </SwiperSlide>,
            <div className="swiper-slide" key={3}></div>,
          ].map((slide, index) => (
            <div className="swiper-slide" key={index}>
              {slide}
            </div>
          ))}
          <div className="swiper-slide"></div>
        </div>
        <div className="swiper-buttons h-[5vh] w-[10vw] absolute top-8 md:top-4 right-16 ">
          <div className="swiper-pagination text-sm "></div>
        
          <div className="swiper-button-next group z-[99] bg-[#5b6647] rounded-full translate-x-12 md:translate-x-2 -translate-y-2 md:-translate-y-2 hover:bg-[#434b34] py-6 rotate-90">
            <i className="ri-arrow-right-line text-[#f7f7ee] text-base absolute group-hover:duration-200 group-hover:ease-linear font-medium opacity-0 group-hover:opacity-100 -translate-y-3 group-hover:translate-y-[0]
            group-hover:delay-150 -rotate-90"></i>
            <i
              className="ri-arrow-right-line text-base text-[#f7f7ee] absolute font-medium group-hover:opacity-0 group-hover:-translate-y-3
                      group-hover:transition-all group-hover:duration-200 group-hover:ease-linear -rotate-90"
            ></i>
          </div>
          <div className="swiper-button-prev group z-[99] bg-[#5b6647] rounded-full -translate-x-12 md:-translate-x-2 -translate-y-2 hover:bg-[#434b34] py-6 rotate-90">
            <i className="ri-arrow-left-line text-[#f7f7ee] text-base absolute  group-hover:duration-200 group-hover:ease-linear font-medium opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-[0] 
            group-hover:delay-150
            -rotate-90"></i>
            <i
              className="ri-arrow-left-line text-base text-[#f7f7ee] absolute font-medium group-hover:opacity-0 group-hover:translate-y-3
                      group-hover:transition-all group-hover:duration-200 group-hover:ease-linear -rotate-90"
            ></i>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Page5;
