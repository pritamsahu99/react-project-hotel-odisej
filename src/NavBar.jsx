import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleActive = () => {
    setIsActive(!isActive);
  };
  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 374px)');
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("nav svg", {
      top: "-47vh",
      scale: 0.15,
      duration: 3,
      scrollTrigger: {
        scroller: "body",
        trigger: "nav svg",
        scrub: 0.3,
        // markers: true,
        start: "bottom 27%",
        end: "bottom 3.5%",
        onToggle: ({ isActive }) => {
          if (isActive) {
            gsap.to("nav", {
              // top: "-100vh",
              // filter: "blur(0)",
              backgroundColor: "#F7F7EE",
              borderWidth: "0.5px", 
              borderBottomColor: "#d4d4b9ca", 
              ease: "power2.inOut",
              scrollTrigger: {
                scroller: "body",
                trigger: "nav",
                scrub: true,
                // markers: true,
                start: "bottom 2",
              },
            });
          }
        },
      },
    })
    // .to(".inner-overlay", {
    //   visibility: "hidden"
    // });
    function mobileAnimation() {
      gsap.to("nav svg", {
        top: "-10vh",
        scale: 0.3,
        duration: 3,
        scrollTrigger: {
          scroller: "body",
          trigger: "nav svg",
          scrub: 0.3,
          // markers: true,
          start: "bottom 20%",
        }
      })
    }
    if (mobile.matches) {
      mobileAnimation();
    }
        
  }, []);

  return (
    <nav>
      {/* <div className="inner-overlay opacity-0 h-[50px] w-[93%] bg-red-300 absolute z-50"></div> */}
      <div
        className={`navbarMenu ${isActive ? "active" : ""}`}
        onClick={toggleActive}
      >
        <span className="menuLine1"></span>
        <span className="menuLine2"></span>
        <span className="menuLine3"></span>
      </div>
      <div className="logo">
        <svg
          viewBox="0 0 312 91"
          xmlns="http://www.w3.org/2000/svg"
          className="transform translate-x-0 translate-y-full scale-200"
        >
          <path
            className="u-icon__main"
            d="M40.8 12.6V11.4H29.4V12.6C31.92 12.6 32.4 14.28 32.4 17.16V27.96H10.8V17.16C10.8 14.28 11.28 12.6 13.8 12.6V11.4H2.4V12.6C4.92 12.6 5.4 14.28 5.4 17.16V45.24C5.4 48.12 4.92 49.8 2.4 49.8V51H13.8V49.8C11.28 49.8 10.8 48.12 10.8 45.24V30.36H32.4V45.24C32.4 48.12 31.92 49.8 29.4 49.8V51H40.8V49.8C38.28 49.8 37.8 48.12 37.8 45.24V17.16C37.8 14.28 38.28 12.6 40.8 12.6ZM42.5672 36C42.5672 44.1 47.6672 51.6 57.5672 51.6C67.4672 51.6 72.5672 44.1 72.5672 36C72.5672 27.9 67.4672 20.4 57.5672 20.4C47.6672 20.4 42.5672 27.9 42.5672 36ZM48.0272 37.2C47.1272 29.88 49.1072 23.76 55.9472 22.92C62.7872 22.08 66.2072 27.6 67.1072 34.8C68.0072 42.12 66.0272 48.24 59.1872 49.08C52.3472 49.92 48.9272 44.4 48.0272 37.2ZM88.4555 47.1C88.3355 48.42 87.7955 49.2 86.4155 49.2C83.8955 49.2 83.3555 46.62 83.3555 40.8V23.4H88.8155C90.6155 23.4 90.6155 22.2 90.6155 21H83.3555V11.4H80.9555C80.9555 19.08 78.2555 20.4 74.3555 21V23.4H77.9555V42.24C77.9555 50.22 82.2155 51.6 85.8755 51.6C88.3955 51.6 90.8555 51 92.0555 48.3L88.4555 47.1ZM114.521 41.28C115.121 46.86 112.121 49.2 107.141 49.2C101.801 49.2 97.4813 45.12 97.4813 37.2V36.24C105.401 38.76 120.281 38.52 120.281 29.22C120.281 23.94 115.721 20.4 108.281 20.4C98.9213 20.4 92.0813 26.58 92.0813 36.78C92.0813 45.18 96.4613 51.6 107.741 51.6C116.381 51.6 120.521 45.48 119.921 40.08L114.521 41.28ZM108.281 22.8C112.721 22.8 114.881 25.26 114.881 28.56C114.881 34.14 109.541 36.72 97.7213 33.72C98.6213 27.48 101.981 22.8 108.281 22.8ZM129.867 11.4C129.867 8.1 127.347 7.8 125.067 7.8H121.467V9C123.987 9 124.467 10.68 124.467 13.56V45.24C124.467 48.12 123.987 49.8 121.467 49.8V51H132.867V49.8C130.347 49.8 129.867 48.12 129.867 45.24V11.4ZM149.067 31.2C149.067 42.9 156.267 51.6 167.967 51.6C179.667 51.6 186.867 42.9 186.867 31.2C186.867 19.5 179.667 10.8 167.967 10.8C156.267 10.8 149.067 19.5 149.067 31.2ZM154.587 32.82C153.207 22.02 157.167 14.4 165.147 13.44C174.387 12.3 180.027 18.72 181.347 29.58C182.727 40.38 178.767 48 170.787 48.96C161.547 50.1 155.907 43.68 154.587 32.82ZM190.465 36C190.465 45.84 196.525 51.6 204.565 51.6C209.425 51.6 213.445 48.78 215.065 44.64H215.665V47.4C215.665 50.64 218.605 50.94 220.465 51H224.065V49.8C221.545 49.8 221.065 48.12 221.065 45.24V11.4C221.065 8.1 218.545 7.8 216.265 7.8H212.665V9C215.185 9 215.665 10.68 215.665 13.56V27.36H215.065C213.445 23.22 209.425 20.4 204.565 20.4C196.525 20.4 190.465 26.16 190.465 36ZM196.465 36C196.465 28.86 199.225 22.8 205.765 22.8C212.305 22.8 215.065 28.86 215.065 36C215.065 43.14 212.305 49.2 205.765 49.2C199.225 49.2 196.465 43.14 196.465 36ZM231.752 17.04C233.372 17.04 234.872 15.66 234.872 13.86C234.872 12.24 233.372 10.8 231.752 10.8C230.072 10.8 228.632 12.24 228.632 13.86C228.632 15.66 230.072 17.04 231.752 17.04ZM234.872 24.42C234.872 21.24 232.772 21 230.072 21H226.472V22.2C228.992 22.2 229.472 23.88 229.472 26.76V45.24C229.472 48.12 228.992 49.8 226.472 49.8V51H237.872V49.8C235.352 49.8 234.872 48.12 234.872 45.24V24.42ZM240.858 28.74C240.858 34.68 245.838 35.82 253.818 37.92C258.378 39.36 261.198 39.9 261.198 43.92C261.198 46.98 258.738 49.2 254.298 49.2C249.378 49.2 243.678 47.82 246.078 40.02L240.678 38.82C238.278 48.96 246.258 51.6 254.238 51.6C260.718 51.6 266.598 49.26 266.598 42.66C266.598 36.12 261.138 34.62 253.818 32.7C248.598 31.14 246.258 30.9 246.258 27.18C246.258 25.02 248.118 22.8 253.158 22.8C256.878 22.8 261.978 24.18 259.578 29.58L264.978 30.78C267.378 23.04 259.998 20.4 253.218 20.4C246.138 20.4 240.858 22.74 240.858 28.74ZM291.453 41.28C292.053 46.86 289.053 49.2 284.073 49.2C278.733 49.2 274.413 45.12 274.413 37.2V36.24C282.333 38.76 297.213 38.52 297.213 29.22C297.213 23.94 292.653 20.4 285.213 20.4C275.853 20.4 269.013 26.58 269.013 36.78C269.013 45.18 273.393 51.6 284.673 51.6C293.313 51.6 297.453 45.48 296.853 40.08L291.453 41.28ZM285.213 22.8C289.653 22.8 291.813 25.26 291.813 28.56C291.813 34.14 286.473 36.72 274.653 33.72C275.553 27.48 278.913 22.8 285.213 22.8ZM304.19 17.04C305.81 17.04 307.31 15.66 307.31 13.86C307.31 12.24 305.81 10.8 304.19 10.8C302.51 10.8 301.07 12.24 301.07 13.86C301.07 15.66 302.51 17.04 304.19 17.04ZM302.51 21H298.91V22.2C301.43 22.2 301.91 23.88 301.91 26.76V51C301.91 55.56 301.31 60.6 297.83 61.8L298.43 64.2C303.71 63 307.31 59.22 307.31 51V24.42C307.31 21.3 304.79 21 302.51 21Z"
          ></path>
          <path
            className="u-icon__secondary"
            d="M137.84 73.18V72.78L136.64 72.8C136.02 72.82 135 73.04 134.18 74.8L129.48 85.08L124.6 74.8C123.7 72.92 123.24 72.8 122 72.8H120.8V73.2C121.64 73.2 121.8 73.76 121.8 74.72V84.08C121.8 85.04 121.64 85.6 120.8 85.6V86H123.6V85.6C122.76 85.6 122.6 85.04 122.6 84.08V74.8L127.94 86H129.94L135.04 74.8V84.08C135.04 85.04 134.88 85.6 134.04 85.6V86H137.84V85.6C137 85.6 136.84 85.04 136.84 84.08V74.72C136.84 73.76 137 73.2 137.84 73.18ZM150.302 83.16C150.082 84.84 149.482 85.2 148.522 85.2H143.842V74.72C143.842 73.76 144.002 73.2 144.842 73.2V72.8H141.042V73.2C141.882 73.2 142.042 73.76 142.042 74.72V84.08C142.042 85.04 141.882 85.6 141.042 85.6V86H150.342L150.402 85.6L150.682 83.22L150.302 83.16ZM157.442 72.8H153.642V73.2C154.482 73.2 154.642 73.76 154.642 74.72V86C154.642 87.52 154.442 89.2 153.282 89.6L153.482 90.4C155.242 90 156.442 88.74 156.442 86V74.72C156.442 73.76 156.602 73.2 157.442 73.2V72.8ZM169.908 83.16C169.688 84.84 169.088 85.2 168.128 85.2H163.448V79.7H166.208C167.168 79.7 167.728 79.86 167.728 80.7H168.128V77.9H167.728C167.728 78.74 167.168 78.9 166.208 78.9H163.448V73.6H167.928C168.888 73.6 169.488 73.96 169.708 75.64L170.088 75.58L169.808 73.2L169.748 72.8H160.648V73.2C161.488 73.2 161.648 73.76 161.648 74.72V84.08C161.648 85.04 161.488 85.6 160.648 85.6V86H169.948L170.008 85.6L170.288 83.22L169.908 83.16ZM184.488 73.2L184.428 72.8H173.628L173.568 73.2L173.288 75.58L173.668 75.64C173.888 73.96 174.488 73.6 175.448 73.6H178.128V84.08C178.128 85.04 177.967 85.6 177.128 85.6V86H180.928V85.6C180.088 85.6 179.928 85.04 179.928 84.08V73.6H182.608C183.568 73.6 184.168 73.96 184.388 75.64L184.768 75.58L184.488 73.2Z"
          ></path>
        </svg>
      </div>
      <div className="navbarButtons w-fit flex h-10 gap-3">
      <div className='cursor-pointer group relative text-[#566043] rounded-full border-[1.5px] border-[#d4d4b9] duration-300 hover:bg-[#e3e3c4] px-6 py-2 overflow-hidden'>
        <h1 className='group-hover:-translate-y-2 group-hover:opacity-0 group-hover:duration-300'>Online Check-In</h1>
        <h1 className='absolute top-2 text-[#566043] px-6 py-2 whitespace-nowrap group-hover:opacity-100 opacity-0 group-hover:rounded-none rounded-full group-hover:duration-200 group-hover:delay-300 group-hover:top-0 left-0'>Online Check-In</h1>
    </div>
        <div className='cursor-pointer group relative text-[#FCF8F3] rounded-full border-[.5px] duration-500 hover:bg-[#434b34] overflow-hidden border-[#434b345d] bg-[#566043] px-6 py-2'>
        <h1 className='group-hover:-translate-y-2 group-hover:opacity-0 group-hover:duration-300 relative'>Book Now</h1>
        <h1 className='absolute top-2 text-[#FCF8F3]  group-hover:opacity-100 opacity-0 group-hover:duration-200 group-hover:delay-300 group-hover:top-0 left-0 px-6 py-2 '>Book Now</h1>
        </div> 
      </div>
    </nav>
  );
};

export default NavBar;
