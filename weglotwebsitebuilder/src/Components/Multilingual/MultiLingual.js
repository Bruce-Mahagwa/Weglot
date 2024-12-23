// components
import { Button } from "flowbite-react";
import EyeSVG from "../Svgs/EyeSVG";
// hooks
import { useState, useEffect, useRef } from "react";
import {animate } from "motion/react";

const MultiLingual = () => {
    const [language, setLanguage] = useState("");
    const [shortFormLang, setShortFormLang] = useState("");
    function setLanguageText(e) {
        const lang_text = {
            "EN": {statistic: 46.6},
            "ZH": {statistic: 21.4},
            "FR": {statistic: 49.9},
            "ES": {statistic: 57.8}
        }
        const short_form_language = {
            "Chinese": "ZH",
            "French": "FR",
            "Spanish": "ES",
            "English": "EN"
        } 
        const value = e.currentTarget.textContent;
        const short_form = short_form_language[value];
        setShortFormLang(short_form);
        setLanguage(lang_text[short_form].statistic);
        e.currentTarget.setAttribute("disabled", "true");
    }

    const counterRef = useRef("");
    const count = language - 1;
    useEffect(() => {
        if (language) {
            const controls = animate(count, language, {
                duration: 2,
                ease: "linear",
                onUpdate(value) {
                    counterRef.current.textContent = value.toFixed(2) + "%";
                }
            })
            return () => controls.stop();
        }
    }, [language, shortFormLang, count])
    return ( 
        <div className = "w-full min-h-screen flex">
            <div className = "min-h-screen w-1/2 flex flex-col justify-center gap-8 lg:gap-4 bg-gradient-to-b from-orange-400 via-orange-300 to-orange-200 px-2 py-4 md:px-4 lg:px-8">
                <EyeSVG shortFormLang = {shortFormLang} />
                <div>
                    <h1 ref = {counterRef} className = "font-bold text-xl md:text-5xl lg:text-8xl">2.1%</h1>
                    <p className = "text-base md:text-lg lg:text-xl">of internet users can read it</p>
                </div>
            </div>
            <div className = "min-h-screen w-1/2 flex flex-col justify-center px-2 py-4 md:px-4 lg:px-8">
                <p className = "text-lg md:text-xl lg:text-2xl mb-4">See the power of language?</p>
                <p className = "font-bold text-sm md:text-base mb-8">Want to reach a wider audience? Go multiLingual!</p>
                <p className = "text-lg md:text-xl lg:text-2xl mb-8">Let's say you website was in German. Add languages</p>
                <div className = "flex flex-col gap-4 sm:flex sm:flex-row sm:flex-wrap">
                    <Button pill outline size = "lg" className="md:w-1/4 focus:ring-0 disabled:border disabled:border-gray-500 disabled:opacity-50" onClick={setLanguageText}>French</Button>
                    <Button pill outline size = "lg" className="md:w-1/4 focus:ring-0 disabled:border disabled:border-gray-500 disabled:opacity-50" onClick={setLanguageText}>English</Button>
                    <Button pill outline size = "lg" className="md:w-1/4 focus:ring-0 disabled:border disabled:border-gray-500 disabled:opacity-50" onClick={setLanguageText}>Spanish</Button>
                    <Button pill outline size = "lg" className="md:w-1/4 focus:ring-0 disabled:border disabled:border-gray-500 disabled:opacity-50" onClick={setLanguageText}>Chinese</Button>
                </div>
            </div> 
        </div>
    )
}
export default MultiLingual;