// hooks
import { useDetectDownArrow } from "./hooks/useDetectDownArrow";
// dependencies
import {motion} from "motion/react";
// css
import "./ImagineLogo.css";
const LandingText = () => {
    // check value from useDetectDownArrow
    const res = useDetectDownArrow();
    // check value from useDetectDownArrow
    return (
        <>
            {/* {res >= 3 && <motion.div className = "flex flex-col gap-2 sm:gap-4 absolute bottom-0 w-1/3 px-2 md:px-4 lg:px-8 h-1/3"
                initial = {res <= 7 ? {opacity: 0, bottom: 0} : {}}
                animate = {res <= 7 ? {opacity: 1, bottom: `${res*6}%`} : {}}
                transition = {{duration: 0.5}}
            >
                <h2 className = "font-bold text-sm sm:text-base md:text-lg lg:text-xl">Webflow broke the<br/>code barrier<br/>on a global scale</h2>
                {res >= 7 && <motion.div
                   initial = {{opacity: 0, scale: 0}}
                    animate = {{opacity: 1, scale: 1}}
                    transition = {{duration: 0.5}}
                    className = "text-xs sm:text-base md:text-lg lg:text-xl"
                >
                    {res === 7 && <motion.p
                        initial = {{opacity: 0, scale: 0}}
                        animate = {{opacity: 1, scale: 1}}
                        transition = {{duration: 0.5}}>
                        Webflow sites in Germany have increased by 450% in the last 2 years.</motion.p>}
                    {res === 8 && <motion.p
                        initial = {{opacity: 0, scale: 0}}
                        animate = {{opacity: 1, scale: 1}}
                        transition = {{duration: 0.5}}
                    >The amount of Webflow-based Russian sites increased x4.</motion.p>}
                    {res >= 9 && <motion.p
                        initial = {{opacity: 0, scale: 0}}
                        animate = {{opacity: 1, scale: 1}}
                        transition = {{duration: 0.5}}
                    >Brazil and Norway saw a huge 600% in local sites.</motion.p>}
                </motion.div>}
            </motion.div>} */}

        {res >= 3 && <motion.div className = "flex flex-col gap-2 sm:gap-4 fixed bottom-0 w-1/3 px-2 md:px-4 lg:px-8 h-1/3"
                initial = {res <= 7 ? {opacity: 0, bottom: 0} : {}}
                animate = {res <= 7 ? {opacity: 1, bottom: `${res*6}%`} : {}}
                transition = {{duration: 0.5}}
            >
                <h2 className = "font-bold text-sm sm:text-base md:text-lg lg:text-xl">Webflow broke the<br/>code barrier<br/>on a global scale</h2>
                {res >= 7 && <motion.div
                   initial = {{opacity: 0, scale: 0}}
                    animate = {{opacity: 1, scale: 1}}
                    transition = {{duration: 0.5}}
                    className = "text-xs sm:text-base md:text-lg lg:text-xl"
                >
                    {res === 7 && <motion.p
                        initial = {{opacity: 0, scale: 0}}
                        animate = {{opacity: 1, scale: 1}}
                        transition = {{duration: 0.5}}>
                        Webflow sites in Germany have increased by 450% in the last 2 years.</motion.p>}
                    {res === 8 && <motion.p
                        initial = {{opacity: 0, scale: 0}}
                        animate = {{opacity: 1, scale: 1}}
                        transition = {{duration: 0.5}}
                    >The amount of Webflow-based Russian sites increased x4.</motion.p>}
                    {res >= 9 && <motion.p
                        initial = {{opacity: 0, scale: 0}}
                        animate = {{opacity: 1, scale: 1}}
                        transition = {{duration: 0.5}}
                    >Brazil and Norway saw a huge 600% in local sites.</motion.p>}
                </motion.div>}
            </motion.div>}
        </>
    )
}
export default LandingText;