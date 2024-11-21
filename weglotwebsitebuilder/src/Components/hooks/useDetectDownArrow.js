// dependencies
import {useState, useEffect} from "react";

export const useDetectDownArrow = () => {
    // counts how many times a user has clicked the down arrow or page down arrow or how many times a user has clicked the up arrow or the page up key
    const [countDownArrowClicked, setCountDownArrowClicked] = useState(0);
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowUp" || e.key === "PageUp") {
                setCountDownArrowClicked((prev) => prev - 1);
                if (countDownArrowClicked < 1) {
                    setCountDownArrowClicked(0);
                }                
            }
            else if (e.key === "ArrowDown" || e.key === "PageDown") {
                setCountDownArrowClicked((prev) => prev + 1);
                if (countDownArrowClicked > 23) {
                    setCountDownArrowClicked(24)
                }
            }            
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [countDownArrowClicked])
    return countDownArrowClicked;
}