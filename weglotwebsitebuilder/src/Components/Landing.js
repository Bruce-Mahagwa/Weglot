// components
import Navigation from "./Navigation";
import ImagineLogo from "./ImagineLogo";
import LandingText from "./LandingText";
import SideLandingText from "./SideLandingText";
import ScrollBtn from "./ScrollBtn";
import DummyComponent from "./DummyComponent";
// hooks
import {useState, useEffect } from "react";

const Landing = ({setLeaveFirstPage}) => {    
    // ensure that onload we reset the page to the topmost position
    useEffect(() => {
        const handleOnLoad = () => {
            window.scrollTo(0, 0);
        }
        window.addEventListener("beforeunload", handleOnLoad);
        return () => window.removeEventListener("onbeforeunload", handleOnLoad);
    }, [])

   const root = document.querySelector(".dummy_screens_container")

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
        <div className = "relative bg-violet-200" style = {{height: "1300vh"}}>
            <div className = "w-full h-screen flex flex-col justify-between overflow-hidden relative" id = "landing">
                <Navigation />
                <ImagineLogo countScrollPosition = {countScrollPosition} />
                <LandingText countScrollPosition = {countScrollPosition}/>
                <SideLandingText 
                    setLeaveFirstPage = {setLeaveFirstPage} 
                    countScrollPosition = {countScrollPosition} />
                <ScrollBtn />
            </div>
            {/* elements for the intersection observer */}
            <div className = "dummy_screens_container" style = {{height: "1200vh"}}>
                <DummyComponent root = {root} value = {0} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />
                <DummyComponent root = {root} value = {1} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />
                <DummyComponent root = {root} value = {2} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />
                <DummyComponent root = {root} value = {3} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />
                <DummyComponent root = {root} value = {4} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />
                <DummyComponent root = {root} value = {5} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />
                <DummyComponent root = {root} value = {6} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />
                <DummyComponent root = {root} value = {7} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />
                <DummyComponent root = {root} value = {8} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />
                <DummyComponent root = {root} value = {9} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />                                
                <DummyComponent root = {root} value = {10} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />                                
                <DummyComponent root = {root} value = {11} scrollDistance = {scrollDistance} setCountScrollPosition = {setCountScrollPosition} />                                
            </div>
        </div>
    )
}
export default Landing;
