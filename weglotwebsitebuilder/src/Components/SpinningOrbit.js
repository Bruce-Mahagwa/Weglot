// components
import SpinningOrbitSVG from "./Svgs/SpinningOrbitSVG";
import SpinningOrbitText from "./SpinningOrbitText";
const SpinningOrbit = ({countScrollPosition, scrollDistance}) => {
    return ( 
        <>
            <SpinningOrbitSVG countScrollPosition = {countScrollPosition} />
        </>
    )
}
export default SpinningOrbit;