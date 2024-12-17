// components
import SpinningOrbitSVG from "../Svgs/SpinningOrbitSVG";

const SpinningOrbit = ({countScrollPosition, scrollDistance}) => {
    return ( 
        <div className = "rounded-full w-3/4 sm:w-1/2 md:w-[40%] xl:w-1/4">
            <SpinningOrbitSVG countScrollPosition={countScrollPosition}/>
        </div>
    )
}
export default SpinningOrbit;