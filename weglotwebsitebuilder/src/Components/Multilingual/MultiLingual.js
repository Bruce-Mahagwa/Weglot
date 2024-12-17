// components
import { Button } from "flowbite-react";
import EyeSVG from "../Svgs/EyeSVG";

const MultiLingual = () => {
    return (
        <div className = "w-full min-h-screen flex">
            <div className = "min-h-screen w-1/2 flex flex-col justify-center gap-8 bg-gradient-to-b from-orange-400 via-orange-300 to-orange-200 px-2 py-4 md:px-4 lg:px-8">
                <EyeSVG />
                <div>
                    <h1 className = "font-bold text-xl md:text-3xl lg:text-4xl">2.1%</h1>
                    <p className = "text-base md:text-lg lg:text-xl">of internet users can read it</p>
                </div>
            </div>
            <div className = "min-h-screen w-1/2 flex flex-col justify-center px-2 py-4 md:px-4 lg:px-8">
                <p className = "text-lg md:text-xl lg:text-2xl mb-4">See the power of language?</p>
                <p className = "font-bold text-sm md:text-base mb-8">Want to reach a wider audience? Go multiLingual!</p>
                <p className = "text-lg md:text-xl lg:text-2xl mb-8">Let's say you website was in German. Add languages</p>
                <div className = "flex flex-col gap-4 sm:flex sm:flex-row sm:flex-wrap">
                    <Button pill outline size = "lg" className="md:w-1/4">French</Button>
                    <Button pill outline size = "lg" className="md:w-1/4">English</Button>
                    <Button pill outline size = "lg" className="md:w-1/4">Spanish</Button>
                    <Button pill outline size = "lg" className="md:w-1/4">Italian</Button>
                </div>
            </div>
        </div>
    )
}
export default MultiLingual;