// components
import DummyComponent from "./DummyComponent";
import SpinningOrbit from "./SpinningOrbit";
// hooks
import { useState, useEffect } from "react";
// variables
const p_content = [
    <p className = "text-white font-bold sm:text-base md:text-lg">the web today is <br/><span className = "text-base sm:text-lg lg:text-xl">Global</span></p>,
    <p className = "text-white font-bold sm:text-base md:text-lg">the web today is <br/><span className = "text-base sm:text-lg lg:text-xl">Connected</span></p>,
    <p className = "text-white font-bold sm:text-base md:text-lg">the web today is <br/><span className = "text-base sm:text-lg lg:text-xl">Complex</span></p>,
    <p className = "text-white font-bold sm:text-base md:text-lg">but it doesn't have to be <br/><span className = "text-base sm:text-lg lg:text-xl">Complicated</span></p>
]
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
                {countScrollPosition >= 1 && <SpinningOrbit countScrollPosition = {countScrollPosition} scrollDistance = {scrollDistance} />}
            </div>
            <div className = "dummy_screens_container4" style = {{height: "600vh"}}>
                <DummyComponent root = {root} value = {-3} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />
                <DummyComponent root = {root} content = {true} elements = {p_content[0]} value = {1} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />
                <DummyComponent root = {root} content = {true} elements = {p_content[1]} value = {2} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />
                <DummyComponent root = {root} content = {true} elements = {p_content[2]} value = {3} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />
                <DummyComponent root = {root} content = {true} elements = {p_content[3]} value = {4} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />
                <DummyComponent root = {root} value = {5} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />                
            </div>
        </div>
    )
}
export default CircuitComponent;