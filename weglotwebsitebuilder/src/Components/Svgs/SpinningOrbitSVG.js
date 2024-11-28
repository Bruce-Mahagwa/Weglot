// css
import "../ImagineLogo.css"
const SpinningOrbitSVG = ({countScrollPosition}) => {
    return (  
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 593.5 593.5" className = "fixed slate w-3/4 sm:w-1/2 md:w-[40%] xl:w-1/4">
                <defs>
                    <linearGradient id="a" x2="593.5" y1="296.75" y2="296.75" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#ff77fc"/>
                    <stop offset=".49" stopColor="#ff9ba8"/>
                    <stop offset="1" stopColor="#ffc053"/>
                    </linearGradient>
                </defs>
                <circle cx="296.75" cy="296.75" r="294.75" fill="none" stroke="url(#a)" stroke-miterlimit="10" stroke-width="4"/>
            </svg>            
    )
}
export default SpinningOrbitSVG