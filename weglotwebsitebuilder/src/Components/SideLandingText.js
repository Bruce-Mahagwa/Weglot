// hooks
import { useDetectDownArrow } from "./hooks/useDetectDownArrow";
// dependencies
import {motion} from "motion/react";
const SideLandingText = () => {
    // detect how many clicks 
    const res = useDetectDownArrow();    
    return (
        <>
        {res >= 10 && res < 11 && <motion.div className = "absolute h-screen pl-12 pt-20 md:pt-24 lg:pt-28 pb-8 w-1/2 bg-indigo-950 left-full text-white"
            animate = {{left: "50%"}}
            transition = {{duration: 1}}
        >
            <div className = "h-full w-full flex flex-col justify-between">       
                    <p className = "text-base sm:text-lg md:text-xl">But we don't speak the same language</p>
                    <p className = "text-base sm:text-lg md:text-xl">There is still a challenge</p>
                    <h1 className = "font-bold text-base sm:text-2xl md:text-4xl">the language barrier</h1>
                    <h3 className= "font-bold sm:text-lg md:text-xl">Make your webflow site multilingual, without coding</h3>
            </div>
        </motion.div>}
        </>
    )
}
export default SideLandingText;