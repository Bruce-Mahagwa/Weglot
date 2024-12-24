// components
import DummyComponent from "../DummyComponent";
import SpinningOrbitSVG from "../Svgs/SpinningOrbitSVG";
import Orb from "./Orb";
// hooks
import { useState, useEffect } from "react";

const CircuitComponent = () => {

    const root = document.querySelector(".dummy_screens_container4")
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
        <div className = "bg-gradient-to-r from-purple-500 to-blue-800 relative" style = {{height: "800vh"}}>
            <div className = "w-full h-screen overflow-hidden relative">
                {countScrollPosition >= 1 && <SpinningOrbitSVG countScrollPosition = {countScrollPosition} scrollDistance = {scrollDistance} />}
            </div>
            <div className = "dummy_screens_container4" style = {{height: "600vh"}}>
                <DummyComponent value = {-3} height = {"10vh"} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />
                <DummyComponent value = {1} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition}>
                    <p className = "text-white font-bold sm:text-base md:text-lg">the web today is <br/><span className = "text-base sm:text-lg lg:text-xl">Global</span></p>
                </DummyComponent>
                <DummyComponent value = {2} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition}>
                    <p className = "text-white font-bold sm:text-base md:text-lg">the web today is <br/><span className = "text-base sm:text-lg lg:text-xl">Connected</span></p>
                </DummyComponent>
                <DummyComponent value = {3} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition}>
                    <p className = "text-white font-bold sm:text-base md:text-lg">the web today is <br/><span className = "text-base sm:text-lg lg:text-xl">Complex</span></p>
                </DummyComponent>
                <DummyComponent value = {4} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition}>
                    <p className = "text-white font-bold sm:text-base md:text-lg">but it doesn't have to be <br/><span className = "text-base sm:text-lg lg:text-xl">Complicated</span></p>
                </DummyComponent>
                <DummyComponent value = {5} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />                
            </div>
            <Orb /> 
        </div> 
    )
}
export default CircuitComponent;