// components
import IntegrationSVG from "../Svgs/IntegrationSVG"
import WeglotIntegrationText from "./WeglotIntegrationText";
import DummyComponent from "../DummyComponent";
// hooks
import { useEffect, useState } from "react";

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
    return ( 
        <div className = "w-full">
            <DummyComponent value = {-1} height={"700px"} setCountScrollPosition = {setCountScrollPosition} scrollDistance={scrollDistance} />            
            {countScrollPosition > -1 && countScrollPosition <= 4 && <div className = "flex h-screen w-full fixed top-1/4">        
                <WeglotIntegrationText currentIndex = {currentIndex}/>  
                <IntegrationSVG scrollDistance={scrollDistance} setCurrentIndex = {setCurrentIndex} countScrollPosition = {countScrollPosition} />              
            </div>}
            <DummyComponent value = {0} height = {"390px"} setCountScrollPosition = {setCountScrollPosition} scrollDistance={scrollDistance}/>
            <DummyComponent value = {1}  height = {"390px"} setCountScrollPosition = {setCountScrollPosition} scrollDistance={scrollDistance}/>
            <DummyComponent value = {2}  height = {"390px"} setCountScrollPosition = {setCountScrollPosition} scrollDistance={scrollDistance}/>
            <DummyComponent value = {3}  height = {"390px"} setCountScrollPosition = {setCountScrollPosition} scrollDistance={scrollDistance}/>
            <DummyComponent value = {4}  height = {"390px"} setCountScrollPosition = {setCountScrollPosition} scrollDistance={scrollDistance}/>
            <DummyComponent value = {5} amount = "all" height = {"100px"} setCountScrollPosition = {setCountScrollPosition} scrollDistance={scrollDistance}/>
        </div>
    )
}
export default WeglotIntegration;

