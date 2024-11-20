// components
import Navigation from "./Navigation";
import ImagineLogo from "./ImagineLogo";
import ScrollBtn from "./ScrollBtn";
const Landing = () => {
    return (
        <div className = "w-full h-screen bg-violet-200 flex flex-col justify-between">
            <Navigation />
            <ImagineLogo />
            <ScrollBtn />
        </div>
    )
}
export default Landing;