// dependencies
import {motion} from "motion/react";
// css
import "./ImagineLogo.css"
const WeglotIntegrationText = ({countScrollPosition}) => {
    console.log(countScrollPosition, "text")
    return (
        <>
            {countScrollPosition >= 1 && countScrollPosition <= 5 &&
             <div className = "w-1/2 left-0 h-3/4 fixed top-1/4 flex flex-col justify-between md:h-1/2 md:mb-8"> 
                <h1 className = "font-bold text-blue-700 text-4xl sm:text-7xl lg:text-8xl xl:text-9xl px-2 md:px-4 lg:px-8">WEGLOT</h1>
                {countScrollPosition === 1 && <motion.p className = "text-sm sm:text-base md:text-lg lg:text-xl px-2 md:px-4 lg:px-8 pb-12"
                    initial = {{scale: 0, opacity: 0}}
                    animate = {{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                >Weglot integrates seamlessly with Webflow so your multilingual website is up and running in minutes.
                </motion.p>}
                {countScrollPosition === 2 && <motion.div className = "text-sm sm:text-base md:text-lg lg:text-xl px-2 md:px-4 lg:px-8 pb-12"
                    initial = {{scale: 0, opacity: 0}}
                    animate = {{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                >
                    <p className = "mb-8">Everything on your website is detected and translated instantly.</p>
                    <p>Visually edit your translations through a live preview of your website.</p>
                </motion.div>}

                {countScrollPosition === 3 && <motion.p className = "text-sm sm:text-base md:text-lg lg:text-xl px-2 md:px-4 lg:px-8 pb-12"
                    initial = {{scale: 0, opacity: 0}}
                    animate = {{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                >Your translated pages are automatically indexed on Google, following multilingual SEO best practices.
                </motion.p>}

                {countScrollPosition === 4 && <motion.div className = "text-sm sm:text-base md:text-lg lg:text-xl px-2 md:px-4 lg:px-8 pb-12"
                    initial = {{scale: 0, opacity: 0}}
                    animate = {{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                >
                    <p className = "mb-8">Translate automatically — then review & approve your translations.</p>
                    <p>Invite team members or order human translators.</p>
                </motion.div>}

                {countScrollPosition === 5 && <motion.p className = "text-sm sm:text-base md:text-lg lg:text-xl px-2 md:px-4 lg:px-8 pb-12"
                    initial = {{scale: 0, opacity: 0}}
                    animate = {{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                >Style your buttons! We have a Weglot UI Kit for you.
                </motion.p>}
            </div>}
        </>
    )
}
export default WeglotIntegrationText;