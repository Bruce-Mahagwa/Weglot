// components
import ImaginePieScene1 from "./ImaginePieScene1";
import DummyComponent from "./DummyComponent";
import ImaginePieText from "./ImaginePieText";
// hooks
import {useState, useEffect } from "react";
const ImaginePie = () => {
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
    const root = document.querySelector(".dummy_screens_container_2")
    return (
        <div className = "relative bg-gradient-to-r from-fuchsia-400 to-purple-500" style = {{height: "500vh"}}>
            <div className = "w-full h-screen overflow-hidden relative">
                <ImaginePieScene1 countScrollPosition={countScrollPosition} scrollDistance = {scrollDistance} />
                <ImaginePieText countScrollPosition={countScrollPosition} scrollDistance = {scrollDistance} />
            </div>
            <div style = {{height: "400vh"}} className = "dummy_screens_container_2">
                <DummyComponent root = {root} value = {-1} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />
                <DummyComponent root = {root} value = {1} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />
                <DummyComponent root = {root} value = {2} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />
                <DummyComponent root = {root} value = {3} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />
            </div>
        </div>
    )
}
export default ImaginePie;