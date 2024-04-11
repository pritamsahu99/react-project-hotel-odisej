import React, {useEffect,useRef} from 'react'
import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();
import NavBar from './NavBar';
import Page1 from './Page1';
import Page2 from './Page2';

const App = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: true,
    });
    
    return () => {
      scroll.destroy();
    };
  }, []);
  return (
    <div ref={scrollRef} data-scroll-container>
      <div id='main'>
        <NavBar/>
        <Page1/>
        <Page2/>
      </div>
    </div>
  )
}

export default App
