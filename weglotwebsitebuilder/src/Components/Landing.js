// components
import Navigation from "./Navigation";
import ImagineLogo from "./ImagineLogo";
import LandingText from "./LandingText";
import SideLandingText from "./SideLandingText";
import ScrollBtn from "./ScrollBtn";
const Landing = ({setLeaveFirstPage}) => {
    return (
        <div className = "relative bg-violet-200" style = {{height: "1100vh"}}>
            <div className = "w-full h-screen flex flex-col justify-between overflow-hidden relative">
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