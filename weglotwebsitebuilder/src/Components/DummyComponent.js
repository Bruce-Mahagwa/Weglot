// hooks
import { useEffect } from "react";
// dependencies
import { useInView } from "react-intersection-observer";

const DummyComponent = ({value, setCountScrollPosition}) => {  
    const { ref, inView } = useInView({
        threshold: 0.25,
    });

    useEffect(() => {   
        if (inView) {
            setCountScrollPosition(value);
        }
    }, [inView, value, setCountScrollPosition])    
    return (
        <div className = "w-full h-screen" ref = {ref}></div>
    )
}
export default DummyComponent;