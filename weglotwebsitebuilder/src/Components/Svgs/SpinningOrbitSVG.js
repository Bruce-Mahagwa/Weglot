// dependencies
import {motion} from "motion/react";

const SpinningOrbitSVG = ({countScrollPosition, scrollDistance}) => {
    const firstNum = Number(String(scrollDistance).substring(0, 2));
    // const topDistance = firstNum
    return (   
        <>
            {countScrollPosition <= 2 && <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 593.5 593.5" className = "fixed slate w-3/4 sm:w-1/2 md:w-[40%] xl:w-1/4"
                initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition = {{duration: 0.2}}
            >
                <defs>
                    <linearGradient id="a" x2="593.5" y1="296.75" y2="296.75" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#ff77fc"/>
                    <stop offset=".49" stopColor="#ff9ba8"/>
                    <stop offset="1" stopColor="#ffc053"/>
                    </linearGradient>
                </defs>
                <circle cx="296.75" cy="296.75" r="294.75" fill="none" stroke="url(#a)" stroke-miterlimit="10" stroke-width="4"/>
            </motion.svg>} 

            {countScrollPosition >= 3 && countScrollPosition <= 5 && 
                <motion.div
                    // initial = {countScrollPosition === 3 ? {top: "10%"} : countScrollPosition === 4 ? {top: "20%"} : {}}
                    // animate = {countScrollPosition === 3 ? {top: "30%"} : countScrollPosition === 4 ? {top: "45%"} : {}}
                    initial = {{top: "10%"}}
                    animate = {{top: `${firstNum * 2}%`}}
                    transition = {{duration: 0.5}}
                    className = "fixed slate flex flex-col items-center justify-center w-1/2 h-1/4 border border-black border-2"
                >
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 593.5 593.5" className = "w-[30%] h-[30%]">
                        <defs>
                            <linearGradient id="a" x2="593.5" y1="296.75" y2="296.75" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#ff77fc"/>
                            <stop offset=".49" stopColor="#ff9ba8"/>
                            <stop offset="1" stopColor="#ffc053"/>
                            </linearGradient>
                        </defs>
                        <circle cx="296.75" cy="296.75" r="294.75" fill="none" stroke="url(#a)" stroke-miterlimit="10" stroke-width="4"/>
                    </svg>           
                    

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 92.4" className = "w-[30%] h-[30%]">
                    <defs>
                        <linearGradient id="a" x1="5.5" x2="5.5" y1="92.4" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#eceeff"/>
                        <stop offset=".09" stop-color="#efedfd" stop-opacity=".85"/>
                        <stop offset=".23" stop-color="#f3edf9" stop-opacity=".63"/>
                        <stop offset=".37" stop-color="#f7ecf6" stop-opacity=".44"/>
                        <stop offset=".5" stop-color="#faebf3" stop-opacity=".28"/>
                        <stop offset=".64" stop-color="#fcebf2" stop-opacity=".16"/>
                        <stop offset=".76" stop-color="#feeaf0" stop-opacity=".07"/>
                        <stop offset=".89" stop-color="#ffeaef" stop-opacity=".02"/>
                        <stop offset="1" stop-color="#ffeaef" stop-opacity="0"/>
                        </linearGradient>
                    </defs>
                    <path fill="none" stroke="url(#a)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="11" d="M5.5 86.9V5.5"/>
                    </svg>
                </motion.div>}
        </>
    )
}
export default SpinningOrbitSVG