// hooks
import { useEffect } from "react";
// dependencies
import { useInView } from "react-intersection-observer";

const DummyComponent = ({value, setCountScrollPosition, scrollDistance}) => {  
    const { ref, inView } = useInView({
        threshold: 0.15,
    });

    useEffect(() => {   
        if (inView) {
            setCountScrollPosition(value);
        }
    }, [inView, value, setCountScrollPosition, scrollDistance])    
    
    return (
        <div className = "w-full" style = {value===12||value=== -1 || value=== -2 ? {height: "10vh"}: {height: "100vh"}} ref = {ref}></div>
    )
}
export default DummyComponent;