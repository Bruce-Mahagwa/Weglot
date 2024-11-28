// hooks
import { useEffect } from "react";
// dependencies
import { useInView } from "react-intersection-observer";

const DummyComponent = ({value, setCountScrollPosition, scrollDistance, content, elements}) => {  
    const { ref, inView } = useInView({
        threshold: 0.15,
    });

    useEffect(() => {   
        if (inView) {
            setCountScrollPosition(value);
        }
    }, [inView, value, setCountScrollPosition, scrollDistance])    
    
    return (
        <div className = "w-full text-center" style = {value===12 || value=== -1 || value=== -2 || value === -3? {height: "10vh"}: {height: "100vh"}} ref = {ref}>
            {content && elements}            
        </div>
    )
}
export default DummyComponent;