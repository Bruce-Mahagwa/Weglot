// hooks
import { useMoveImagineLogoText } from "../hooks/useMoveImagineLogoText";
// components
import MapComponent from "./MapComponent";
// dependencies
import {motion} from "motion/react";

const ImagineLogo = ({countScrollPosition}) => {    
    // x and y coordinates for the transform property
    let [x, y] = useMoveImagineLogoText();
    x *= 100
    y *= 100
    const styles = {
        transform: `translate(${x}%, ${y}%)`
    }
    // end of x and y coordinates for the tranform property that moves the imagine logo headers

    return (          
        <>
        {countScrollPosition <= 11 && <div className = "fixed slate w-full">
            {countScrollPosition <=1 && <motion.div className="relative flex flex-col gap-20 text-center w-full overflow-hidden"
            initial = {{scale: 0, opacity: 0.5}}
            animate = {{scale: 1, opacity: 1}}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }} 
            >
                <h1 className = "z-50 font-bold tracking-widest text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                    <span className = "text-orange-400">IM</span>
                    <span className = "text-fuchsia-400">AG</span>
                    <span className = "text-purple-500">INE</span>
                </h1>
                <h1 style = {styles} className = "z-20 w-full absolute header_1 text-white opacity-50 font-bold tracking-widest text-5xl sm:text-6xl md:text-7xl lg:text-8xl">IMAGINE</h1>
                <h1 style = {styles} className = "z-20 w-full absolute header_2 text-white opacity-40 font-bold tracking-widest text-6xl sm:text-7xl md:text-8xl lg:text-9xl">IMAGINE</h1>        
                <motion.p 
                    initial = {{scale: 0, opacity: 0.5}} animate = {{scale: 1, opacity: 1}} 
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeIn" }} 
                className = "font-bold z-50">a multilingual webflow site, without <br/>coding</motion.p>
            </motion.div>}
            <MapComponent countScrollPosition = {countScrollPosition} />
        </div>}
        </>
    )
}
export default ImagineLogo;