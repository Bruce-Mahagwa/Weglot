// hooks
import { useMoveImagineLogoText } from "./hooks/useMoveImagineLogoText";
import { useEffect, useState } from "react";
// css
import "./ImagineLogo.css";
// dependencies
import {motion} from "motion/react";
import { useInView } from "react-intersection-observer";

// components
import FaceSVG from "./Svgs/FaceSVG";

const ImaginePieScene1 = ({countScrollPosition, scrollDistance}) => {
    // x and y coordinates for the transform property
    let [x, y] = useMoveImagineLogoText();    
    x *= 100
    y *= 100
    const styles = {
        transform: `translate(${x}%, ${y}%)`
    }
    // end of x and y coordinates for the tranform property that moves the imagine logo headers
    // console.log(countScrollPosition)
    // state to toggle the face svg component
    const [showFace, setShowFace] = useState(true);
    // console.log(showFace)
    const { ref, inView } = useInView({
        threshold: 0.15,
    });
    useEffect(() => {
        if (inView) {
            const timeout = setTimeout(() => {
                setShowFace(false);
            }, [1000])
            return () => clearTimeout(timeout)
        }
    }, [showFace, inView, countScrollPosition, scrollDistance])    
    console.log("view", inView)
    return (
        <>
        {countScrollPosition >= 1 && countScrollPosition <= 4 && <div className = "fixed slate w-full border border-2 border-black">
            {countScrollPosition >=1 && countScrollPosition <= 4 && <motion.div className="relative flex flex-col text-center w-full"
                initial = {{scale: 0, opacity: 0.5}}
                animate = {{scale: 1, opacity: 1}}
                transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }} 
            >
                <h1 className = "z-50 font-bold tracking-widest text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                    <span className = "text-amber-50">IM</span>
                    <span className = "text-amber-50">AG</span>
                    <span className = "text-purple-500">INE</span>
                </h1>
                <h1 style = {styles} className = "z-20 w-full absolute header_1 text-purple-500 opacity-50 font-bold tracking-widest text-5xl sm:text-6xl md:text-7xl lg:text-8xl">IMAGINE</h1>
                <h1 style = {styles} className = "z-20 w-full absolute header_2 text-purple-500 opacity-40 font-bold tracking-widest text-6xl sm:text-7xl md:text-8xl lg:text-9xl">IMAGINE</h1>                
                {showFace && <motion.div className = "slate absolute"                
                    // animate = {{scale: 0, opacity: 0}}
                    // transition={{ duration: 0.2, delay: 0.6, ease: "easeOut" }} 
                    ref={ref}
                >
                    <FaceSVG />
                </motion.div>}
            </motion.div>}
            </div>}
        </>
    )
}
export default ImaginePieScene1;