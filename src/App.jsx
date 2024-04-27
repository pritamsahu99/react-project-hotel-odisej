import React, {useEffect,useRef} from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();
import "./index.css"
import NavBar from './NavBar';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import Footer from './Footer';

const App = () => {
  const scrollRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: true,
      horizontal: true, 

    });
    const showProjectComponents = () => { 
      gsap.set("body", { overflow: "auto" });
      gsap.set(".project-component", { opacity: 1 });
    };
    gsap.set("body", { overflow: "hidden" });
    gsap.set(".project-component", { opacity: 0 });
    const loaderAnimation = () => {
      let tl = gsap.timeline();
      tl.to(
        ".page1 img",{
        filter: "blur(0)",
        transform: "scale(1)",
        borderRadius: "0",
        duration: 1.5,
        delay: 1.15,
        ease: "power3.out",
        onComplete: showProjectComponents
      }, "pageanime")
      .to("nav svg", {
        y: '38%',
        opacity: 1,
        delay: 1,
        duration: 0.75,
        ease: "power1.out",
      }, "pageanime")
      .to(
        ".navbarMenu",{
        opacity: 1,
        transform: "translateY(4px)",
        stagger: 0.2,
        delay: .8,
        duration: .3,
      })
      .to(
        "button",{
        opacity: 1,
        y: 4,
        delay: -.7,
        stagger: 0.1,
        duration: .25,
      })
      
      
    };
    loaderAnimation();

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      <div id='main' className='bg-[#F7F7EE] overflow-hidden relative z-[20]'>
        <NavBar/>
        <Page1/>
        <Page2/>
        <Page3/>
        <Page4/>
        <Page5/>       
        <Page6/>       
        <Page7/>  
        <Footer/>     
      </div>
    </div>
  )
}

export default App
