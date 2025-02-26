// dependencies
import {motion} from "motion/react";
// css
const LandingText = ({countScrollPosition}) => {    
    return (
        <>            
            {countScrollPosition >= 3 && <motion.div className = "flex flex-col gap-2 sm:gap-4 absolute bottom-0 w-1/3 px-2 md:px-4 lg:px-8 h-1/3"
                initial = {countScrollPosition <= 7 ? {opacity: 0, bottom: 0} : {}}
                animate = {countScrollPosition <= 7 ? {opacity: 1, bottom: `${countScrollPosition*6}%`} : {}}
                transition = {{duration: 0.5}}
            >
                <h2 className = "font-bold text-sm sm:text-base md:text-lg lg:text-xl">Webflow broke the<br/>code barrier<br/>on a global scale</h2>
                {countScrollPosition >= 7 && <motion.div
                   initial = {{opacity: 0, scale: 0}}
                    animate = {{opacity: 1, scale: 1}}
                    transition = {{duration: 0.5}}
                    className = "text-xs sm:text-base md:text-lg lg:text-xl"
                >
                    {countScrollPosition === 7 && <motion.p
                        initial = {{opacity: 0, scale: 0}}
                        animate = {{opacity: 1, scale: 1}}
                        transition = {{duration: 0.5}}>
                        Webflow sites in Germany have increased by 450% in the last 2 years.</motion.p>}
                    {countScrollPosition === 8 && <motion.p
                        initial = {{opacity: 0, scale: 0}}
                        animate = {{opacity: 1, scale: 1}}
                        transition = {{duration: 0.5}}
                    >The amount of Webflow-based Russian sites increased x4.</motion.p>}
                    {countScrollPosition >= 9 && <motion.p
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


// {countScrollPosition >= 3 && countScrollPosition <= 11 && <motion.div className = "flex flex-col gap-2 sm:gap-4 fixed bottom-0 w-1/3 px-2 md:px-4 lg:px-8 h-1/3"
//                 initial = {countScrollPosition <= 7 ? {opacity: 0, bottom: 0} : {}}
//                 animate = {countScrollPosition <= 7 ? {opacity: 1, bottom: `${countScrollPosition*6}%`} : {}}
//                 transition = {{duration: 0.5}}
//             >
//                 <h2 className = "font-bold text-sm sm:text-base md:text-lg lg:text-xl">Webflow broke the<br/>code barrier<br/>on a global scale</h2>
//                 {countScrollPosition >= 7 && <motion.div
//                    initial = {{opacity: 0, scale: 0}}
//                     animate = {{opacity: 1, scale: 1}}
//                     transition = {{duration: 0.5}}
//                     className = "text-xs sm:text-base md:text-lg lg:text-xl"
//                 >
//                     {countScrollPosition === 7 && <motion.p
//                         initial = {{opacity: 0, scale: 0}}
//                         animate = {{opacity: 1, scale: 1}}
//                         transition = {{duration: 0.5}}>
//                         Webflow sites in Germany have increased by 450% in the last 2 years.</motion.p>}
//                     {countScrollPosition === 8 && <motion.p
//                         initial = {{opacity: 0, scale: 0}}
//                         animate = {{opacity: 1, scale: 1}}
//                         transition = {{duration: 0.5}}
//                     >The amount of Webflow-based Russian sites increased x4.</motion.p>}
//                     {countScrollPosition >= 9 && <motion.p
//                         initial = {{opacity: 0, scale: 0}}
//                         animate = {{opacity: 1, scale: 1}}
//                         transition = {{duration: 0.5}}
//                     >Brazil and Norway saw a huge 600% in local sites.</motion.p>}
//                 </motion.div>}
//             </motion.div>}