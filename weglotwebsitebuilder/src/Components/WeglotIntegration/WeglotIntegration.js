// components
import IntegrationSVG from "../Svgs/IntegrationSVG"
import WeglotIntegrationText from "./WeglotIntegrationText";
import DummyComponent from "../DummyComponent";
// hooks
import { useEffect, useState, useRef } from "react";
import { useInView } from "motion/react";

const WeglotIntegration = () => { 
    // handle scroll event
    const [scrollDistance, setScrollDistance] = useState(0); // detects how far a user has scrolled
    useEffect(() => {
         const handleScroll = () => {
             const scrollTop = window.scrollY || (document.documentElement || document.body.parentNode || document.body).scrollTop
             setScrollDistance(scrollTop)
         }
         window.addEventListener("scroll", handleScroll)
         return () => {
             window.removeEventListener("scroll", handleScroll);
         }
    }, [scrollDistance]);

    // handle carousel 
    const [currentIndex, setCurrentIndex] = useState(0);    

    // handle dummy component
    const [countScrollPosition,setCountScrollPosition] = useState(-2);
    console.log(countScrollPosition)
    return ( 
        <div className = "w-full">
            <DummyComponent value = {-1} height={"600px"} setCountScrollPosition = {setCountScrollPosition} scrollDistance={scrollDistance} />            
            {countScrollPosition > -1 && countScrollPosition <= 4 && <div className = "flex h-screen fixed top-40">        
                <WeglotIntegrationText currentIndex = {currentIndex}/>  
                <IntegrationSVG scrollDistance={scrollDistance} setCurrentIndex = {setCurrentIndex} countScrollPosition = {countScrollPosition} />              
            </div>}
            <DummyComponent value = {0} height = {"390px"} setCountScrollPosition = {setCountScrollPosition} scrollDistance={scrollDistance}/>
            <DummyComponent value = {1} amount = "all" height = {"390px"} setCountScrollPosition = {setCountScrollPosition} scrollDistance={scrollDistance}/>
            <DummyComponent value = {2} amount = "all" height = {"390px"} setCountScrollPosition = {setCountScrollPosition} scrollDistance={scrollDistance}/>
            <DummyComponent value = {3} amount = "all" height = {"390px"} setCountScrollPosition = {setCountScrollPosition} scrollDistance={scrollDistance}/>
            <DummyComponent value = {4} amount = "all" height = {"390px"} setCountScrollPosition = {setCountScrollPosition} scrollDistance={scrollDistance}/>
            <DummyComponent value = {5} amount = "all" height = {"10px"} setCountScrollPosition = {setCountScrollPosition} scrollDistance={scrollDistance}/>
        </div>
    )
}
export default WeglotIntegration;

