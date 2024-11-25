// dependencies
import {motion} from "motion/react";
const SideLandingText = ({countScrollPosition}) => {       
    return (
        <>
        {countScrollPosition >= 10 && countScrollPosition <= 11 && <motion.div className = "fixed h-screen pl-12 pt-20 md:pt-24 lg:pt-28 pb-8 w-1/2 bg-indigo-950 left-full text-white"
            animate = {countScrollPosition === 10 ? {left: "50%"} : {left: "100%"}}
            transition = {{duration: 0.5}}
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