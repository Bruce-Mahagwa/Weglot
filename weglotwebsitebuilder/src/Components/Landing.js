// components
import Navigation from "./Navigation";
import ImagineLogo from "./ImagineLogo";
import LandingText from "./LandingText";
import ScrollBtn from "./ScrollBtn";
const Landing = () => {
    return (
        <div className = "w-full h-screen bg-violet-200 flex flex-col justify-between overflow-hidden relative">
            <Navigation />
            <ImagineLogo />
            <LandingText />
            <ScrollBtn />
        </div>
    )
}
export default Landing;