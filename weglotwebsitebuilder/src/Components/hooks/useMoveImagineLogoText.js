// hooks
import { useEffect, useState } from "react"

export const useMoveImagineLogoText = () => {  
    // randomly moves the imagine logo text
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMouseX(e.clientX)
            setMouseY(e.clientY)
        }
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize)
        }
    }, [mouseX, mouseY, width, height])
    // calibrate coordinates for a small radius of 20% using mousex and mousey positions
    let new_position_x = mouseX / width;
    let new_position_y = mouseY / height;  
    new_position_x = (1 - new_position_x) > new_position_x ? new_position_x : 1 - new_position_x  
    return [new_position_x/8, new_position_y/3]    
}
