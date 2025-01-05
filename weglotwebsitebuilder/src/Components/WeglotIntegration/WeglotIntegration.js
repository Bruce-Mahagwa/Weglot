// components
import IntegrationSVG from "../Svgs/IntegrationSVG"
import WeglotIntegrationText from "./WeglotIntegrationText";
// hooks
import { useEffect, useState, useRef } from "react";
import { useScroll } from "motion/react";

const WeglotIntegration = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref
    });
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [scrollDistance, setScrollDistance] = useState(0); // detects how far a user has scrolled
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || (document.documentElement || document.body.parentNode || document.body).scrollTop
            setScrollDistance(scrollTop)
        }
        window.addEventListener("scroll", handleScroll)
        setScrollPercentage(scrollYProgress.current.toFixed(2))

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [scrollDistance])
    
    console.log(scrollPercentage)
    return (
        <div className="w-full">
            <div className="flex w-full pt-40 pb-40 relative"
                ref={ref}
            >
                <WeglotIntegrationText scrollPercentage={scrollPercentage} />
                <IntegrationSVG />
            </div>
        </div>
    )
}
export default WeglotIntegration;

{/* <div className = "w-full">
<div className = "flex h-screen w-full pt-12 sticky top-1/4">        
    <WeglotIntegrationText currentIndex = {currentIndex}/>  
    <IntegrationSVG scrollDistance={scrollDistance} setCurrentIndex = {setCurrentIndex} countScrollPosition = {countScrollPosition} />              
</div>
<DummyComponent value = {0} height = {"390px"} setCountScrollPosition = {setCountScrollPosition} scrollDistance={scrollDistance}/>
<DummyComponent value = {1}  height = {"390px"} setCountScrollPosition = {setCountScrollPosition} scrollDistance={scrollDistance}/>
<DummyComponent value = {2}  height = {"390px"} setCountScrollPosition = {setCountScrollPosition} scrollDistance={scrollDistance}/>
<DummyComponent value = {3}  height = {"390px"} setCountScrollPosition = {setCountScrollPosition} scrollDistance={scrollDistance}/>
<DummyComponent value = {4}  height = {"390px"} setCountScrollPosition = {setCountScrollPosition} scrollDistance={scrollDistance}/>
</div> */}
