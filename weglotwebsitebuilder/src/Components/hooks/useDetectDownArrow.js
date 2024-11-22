// dependencies
import {useState, useEffect} from "react";

export const useDetectDownArrow = (refs=null) => {
    // counts how many times a user has clicked the down arrow or page down arrow or how many times a user has clicked the up arrow or the page up key
    const [countDownArrowClicked, setCountDownArrowClicked] = useState(0);
    const [scrollDistance, setScrollDistance] = useState(0); // detects how far a user has scrolled
    const step = window.innerHeight / 10; // maximum number of clicks a user has when on the landing page

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowUp" || e.key === "PageUp") {
                setCountDownArrowClicked((prev) => prev - 1);
                // scroll by distance
                if (countDownArrowClicked < 1) {
                    setCountDownArrowClicked(0);
                }
                if (e.key === "ArrowUp") {
                    window.scrollBy(0, -100)
                }                
                console.log(countDownArrowClicked, window.innerHeight, -countDownArrowClicked * step)
            }
            else if (e.key === "ArrowDown" || e.key === "PageDown") {
                setCountDownArrowClicked((prev) => prev + 1);
                if (countDownArrowClicked >= 12) {
                    setCountDownArrowClicked(11)
                }
                if (e.key === "ArrowDown") {
                    window.scrollBy(0, 100)
                }
                console.log(countDownArrowClicked, window.innerHeight, window.scrollHeight,  step)
            }            
        }

        const handleScroll = () => {
            const scrollTop = window.scrollY || (document.documentElement || document.body.parentNode || document.body).scrollTop
            setScrollDistance(scrollTop)
        }
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("scroll", handleScroll);
        }
    }, [countDownArrowClicked, scrollDistance])
    return countDownArrowClicked;
}