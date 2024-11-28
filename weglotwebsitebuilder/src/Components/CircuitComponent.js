// components
import DummyComponent from "./DummyComponent";
import SpinningOrbit from "./SpinningOrbit";
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
     console.log(countScrollPosition)
    return (
        <div className = "bg-gradient-to-r from-purple-500 to-blue-800 relative" style = {{height: "700vh"}}>
            <div className = "w-full h-screen overflow-hidden relative">
                {countScrollPosition >= 1 && <SpinningOrbit countScrollPosition = {countScrollPosition} />}
            </div>
            <div className = "dummy_screens_container4" style = {{height: "600vh"}}>
                <DummyComponent root = {root} value = {-3} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />
                <DummyComponent root = {root} value = {1} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />
                <DummyComponent root = {root} value = {2} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />
                <DummyComponent root = {root} value = {3} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />
                <DummyComponent root = {root} value = {4} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />
                <DummyComponent root = {root} value = {5} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />                
            </div>
        </div>
    )
}
export default CircuitComponent;