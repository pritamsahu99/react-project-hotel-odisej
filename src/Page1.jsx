import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Page1 = () => {
 
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const page1Overlay = () => {
      gsap.to('.page1 .overlay',{
        backgroundColor: "#f7f7eed3",
        scrollTrigger:{
          scroller: "body",
          trigger: ".page1 .overlay",
          scrub: 1,
          // markers: true,
          start: "bottom 60%",
        }
      });
    } 
    page1Overlay();

  }, []);

  return (
    <div
      data-scroll
      data-scroll-speed={-0.32}
      className="page1 h-screen w-full relative">
        <img className='filter contrast-100 blur-[2px] w-full h-full object-cover object-center scale-50 rounded-3xl' loading="lazy" src="https://hotelodisej.com/wp-content/uploads/bf-advanced-images/209/ALH_Odisej_exterior_aerial_07-scaled-1920x0.jpg"/>
        <div data-scroll className="overlay w-full h-screen absolute top-0"></div>
    </div>
  )
}

export default Page1