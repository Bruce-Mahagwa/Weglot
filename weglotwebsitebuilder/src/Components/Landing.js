// components
import Navigation from "./Navigation";
import ImagineLogo from "./ImagineLogo";
import LandingText from "./LandingText";
import SideLandingText from "./SideLandingText";
import ScrollBtn from "./ScrollBtn";
// hooks
import { useEffect} from "react";
const Landing = ({setLeaveFirstPage}) => {    
    // ensure that onload we reset the page to the topmost position
    useEffect(() => {
        const handleOnLoad = () => {
            window.scrollTo(0, 0);
        }
        window.addEventListener("beforeunload", handleOnLoad);
        return () => window.removeEventListener("onbeforeunload", handleOnLoad);
    }, [])

    return (
        <div className = "relative bg-violet-200" style = {{height: "1000vh"}}>
            <div className = "w-full h-screen flex flex-col justify-between overflow-hidden relative" id = "landing">
                <Navigation />
                <ImagineLogo />
                <LandingText />
                <SideLandingText setLeaveFirstPage = {setLeaveFirstPage} />
                <ScrollBtn />
            </div>
        </div>
    )
}
export default Landing;


        // <div className = "w-full h-screen bg-violet-200 flex flex-col justify-between overflow-hidden relative">
        //         <Navigation />
        //         <ImagineLogo />
        //         <LandingText />
        //         <SideLandingText setLeaveFirstPage = {setLeaveFirstPage} />
        //         <ScrollBtn />
        // </div>