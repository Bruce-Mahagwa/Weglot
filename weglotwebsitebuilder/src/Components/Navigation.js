// components
import { Button } from "flowbite-react";
// dependencies
import {motion} from "motion/react";
const Navigation = () => {
    return (
        <motion.nav className = "flex justify-between px-2 py-4 md:px-4 lg:px-8 lg:py-8 z-50"
        initial = {{opacity: 0}} animate = {{opacity: 1}} 
        transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
        >
            <div>
                <h2 className = "font-bold text-blue-700 md:text-lg lg:text-2xl xl:text-4xl hover:text-orange-500 cursor-pointer">WEGLOT</h2>
                <h5 className = "font-bold md:text-base lg:text-lg xl:text-2xl">for <i>webflow</i></h5>
            </div>
            <div className = "flex gap-4">
                {/* small screens */}
                <Button pill color = "blue" className = "block sm:hidden md:hidden lg:hidden outline hover:outline-4 hover:outline-orange-500" size = "sm">EN</Button>
                <Button pill color = "blue" className = "block sm:hidden md:hidden lg:hidden outline hover:outline-4 hover:outline-orange-500" size = "sm">Try Weglot <i>&nbsp;for free</i></Button>
                {/* sm screens */}
                <Button pill color = "blue" className = "hidden sm:block md:hidden lg:hidden outline hover:outline-4 hover:outline-orange-500" size = "md">EN</Button>
                <Button pill color = "blue" className = "hidden sm:block md:hidden lg:hidden outline hover:outline-4 hover:outline-orange-500" size = "md">Try Weglot <i>&nbsp;for free</i></Button>
                {/* medium screens */}
                <Button pill color = "blue" className = "hidden sm:hidden lg:hidden md:block outline hover:outline-4 hover:outline-orange-500" size = "lg">EN</Button>
                <Button pill color = "blue" className = "hidden sm:hidden lg:hidden md:block outline hover:outline-4 hover:outline-orange-500" size = "lg">Try Weglot <i>&nbsp;for free</i></Button>
                {/* large screens */}
                <Button pill color = "blue" className = "hidden sm:hidden md:hidden lg:block outline hover:outline-4 hover:outline-orange-500" size = "xl">EN</Button>
                <Button pill color = "blue" className = "hidden sm:hidden md:hidden lg:block outline hover:outline-4 hover:outline-orange-500" size = "xl">Try Weglot <i>&nbsp;for free</i></Button>
            </div>
        </motion.nav>
    )
}
export default Navigation;