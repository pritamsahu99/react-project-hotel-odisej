import React, { useEffect } from 'react';
import WaveSection from './WaveSection';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Page2 = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const textAnimation = () => {

      let allh1 = document.querySelectorAll('.page2 h1');
      allh1.forEach(function (elem) {
        var clutter = ""
        let Texts = elem.textContent;
        let splittedText = Texts.split("")
        splittedText.forEach(function (e) {
          clutter += `<span>${e}</span>`
        })
        elem.innerHTML = clutter
      })

      gsap.to(".page2 h1 span", {
        stagger: .3,
        color: '#E3E3C4',
        scrollTrigger: {
          scroller: "body",
          trigger: ".page2 h1 span",
          scrub: 1,
          // markers: true,
          start: "top 65%",
          end: "top -60%",
        }
      })
    };
    textAnimation();

    const waveAnimation = () => {
      gsap.to(" #svg2, #svg3", {
        left: "-100vw",
        duration: 8,
        ease:"power2",
        scrollTrigger: {
          scroller: "body",
          trigger: "#svg2",
          scrub: 0.5,
          // markers: true,
          start: "top 90%",
        },
      });
    }
    waveAnimation();
    
  }, []);
  return (
    <>
      <div data-scroll-container>
        <div
          data-scroll
          data-scroll-speed={0}
          className="page2 project-component min-h-screen w-full bg-[#5b6647] py-[15vw] flex flex-col items-center justify-center relative">
          <svg
            className="h-full w-full absolute max-md:-top-[13rem] md:-top-[14rem] "
            viewBox="0 0 1397 716"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <linearGradient
              id="shape1"
              x1="4.00008"
              y1="341.5"
              x2="1137.36663"
              y2="273.628"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#667250"></stop>
              <stop offset="1" stopColor="#535D41"></stop>
            </linearGradient>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M843.62 403.193C837.933 360.187 817.505 296.154 699.368 318.557C649.448 328.024 608.465 369.617 564.245 414.495C503.818 475.821 437.347 543.282 333.764 543.282C313.715 543.282 293.819 537.875 274.307 533.916C233.289 525.172 186.156 515.125 153.449 527.101C134.2 534.15 116.867 564.085 96.8711 598.62C72.9566 641.135 45.1672 691.151 0 714.21L0 0H133.984C50.8607 102.09 203.423 242.51 306.5 134.5C330.967 108.862 353.28 65.4195 377.498 18.2695C380.599 12.2306 383.732 6.13089 386.905 0H1341.41C1346.87 24.2232 1349.75 49.4226 1349.75 75.2949C1349.75 114.571 1326.55 146.119 1303.67 177.249C1275.89 215.034 1248.57 252.203 1263.72 301.828C1273.89 335.145 1304.52 350.223 1333.85 364.663C1366.22 380.592 1397 395.745 1397 433.753C1397 506.617 1337.98 565.685 1265.18 565.685C1219.01 565.685 1206.74 576.887 1211.71 600.535C1213.88 610.865 1218.19 616.08 1222.36 621.119C1229.5 630.046 1232.85 638.676 1232.85 650.321C1232.85 686.066 1203.9 715.043 1168.19 715.043C1132.47 715.043 1103.52 686.066 1103.52 650.321C1103.52 624.84 1094.99 624.633 1076.09 624.174C1071.01 624.051 1065.17 623.909 1058.55 623.252C1027.1 620.13 1012.28 607.027 997.247 593.736C976.518 575.411 955.385 556.729 889.73 563.358C854.016 563.358 817.505 544.176 817.505 508.432C817.505 492.535 823.795 478.469 830.28 463.967C838.377 445.861 846.778 427.073 843.62 403.193Z"
              fill="url(#shape1)"
            ></path>
          </svg>
          <div className="-tracking-[1px] font-PP-Woodland max-md:text-[10vw] md:text-[5.5vw] leading-[1.2] md:leading-[6.2vw] font-medium text-[#434b34] z-10 text-center">
            <h1>Set within the</h1>
            <h1>verdant pine and</h1>
            <h1>oak tree forest of</h1>
            <h1>Mljet National Park,</h1>
            <h1>Hotel Odisej Mljet is</h1>
            <h1>just two hours by</h1>
            <h1>passenger or car</h1>
            <h1>ferry from</h1>
            <h1>Dubrovnik.</h1>
          </div>
        </div>
        <WaveSection/>
      </div>
    </>
  );
};

export default Page2;
