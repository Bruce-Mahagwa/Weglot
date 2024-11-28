// components
import DummyComponent from "./DummyComponent";
import IntegrationSVG from "./Svgs/IntegrationSVG"
import WeglotIntegrationText from "./WeglotIntegrationText";
// hooks
import { useEffect, useState } from "react";
   
const WeglotIntegration = () => {
    const root = document.querySelector(".dummy_screens_container_3")
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
    }, [scrollDistance]) 
     //handle page update and animation
    const [countScrollPosition, setCountScrollPosition] = useState(0); 
    return ( 
        <div className = "w-full" style = {{height: "700vh"}}>                                        
            <div className = "w-full h-screen flex relative">                
                <WeglotIntegrationText countScrollPosition={ countScrollPosition} />                
                {countScrollPosition >=1 && <IntegrationSVG countScrollPosition = {countScrollPosition} />}
            </div>            

        <div className = "dummy_screens_container_3" style = {{height: "600vh"}}>
            <DummyComponent root = {root} value = {-2} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />
            <DummyComponent root = {root} value = {1} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />
            <DummyComponent root = {root} value = {2} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />
            <DummyComponent root = {root} value = {3} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />
            <DummyComponent root = {root} value = {4} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />
            <DummyComponent root = {root} value = {5} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />            
            <DummyComponent root = {root} value = {-2} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />            

        </div>
   
    </div>
    )
}
export default WeglotIntegration;