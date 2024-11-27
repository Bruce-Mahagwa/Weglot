// dependencies
import {motion} from "motion/react";
// components
import ImaginePieSVG from "./Svgs/ImaginePieSVG";
const ImaginePieText = ({countScrollPosition}) => {
    return (
         <>
            {countScrollPosition > 1 && countScrollPosition <= 4 && <motion.div
                className = "fixed bottom-0 opacity-0"
                animate={{opacity: 1, bottom: "40%"}}
                transition={{duration: 0.5}}
            >
                <div className = "px-2 md:px-4 lg:px-8 text-white">
                    <p className = "text-sm sm:text-base md:text-lg lg:text-xl">If creating a multilingual webflow website system</p>                    
                    <p className = "text-sm sm:text-base md:text-lg lg:text-xl">was as easy as</p>
                </div>    
                <ImaginePieSVG />
            </motion.div>}
         </>       
    )
}
export default ImaginePieText