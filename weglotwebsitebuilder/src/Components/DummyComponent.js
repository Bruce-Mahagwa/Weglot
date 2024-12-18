// hooks
import { useEffect, useRef } from "react";
import { useInView } from "motion/react"
const DummyComponent = ({value, setCountScrollPosition, scrollDistance, content, elements}) => {  
    const ref = useRef();
    const isInView = useInView(ref);
    useEffect(() => {
        if (isInView) {
            setCountScrollPosition(value);
        }
    }, [isInView, setCountScrollPosition, value])
    
    return (
        <div ref = {ref} className = "w-full text-center" style = {value===12 || value=== -1 || value=== -2 || value === -3? {height: "10vh"}: {height: "100vh"}}>
            {content && elements}            
        </div>
    )
}
export default DummyComponent;