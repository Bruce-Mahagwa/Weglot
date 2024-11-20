// css
import "./ImagineLogo.css";
// functions
import { useMoveImagineLogoText } from "./hooks/useMoveImagineLogoText";
const ImagineLogo = () => {    
    let [x, y] = useMoveImagineLogoText();
    x *= 100
    y *= 100
    const styles = {
        transform: `translate(${x}%, ${y}%)`
    }
    return (
        <div className="relative flex flex-col gap-16 text-center w-full overflow-hidden">
            <h1 className = "z-50 font-bold tracking-widest text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                <span className = "text-orange-400">IM</span>
                <span className = "text-fuchsia-400">AG</span>
                <span className = "text-purple-500">INE</span>
            </h1>
            <h1 style = {styles} className = "w-full absolute header_1 text-white opacity-50 font-bold tracking-widest text-5xl sm:text-6xl md:text-7xl lg:text-8xl">IMAGINE</h1>
            <h1 style = {styles} className = "w-full absolute header_2 text-white opacity-40 font-bold tracking-widest text-6xl sm:text-7xl md:text-8xl lg:text-9xl">IMAGINE</h1>        
            <p className = "font-bold z-50">a multilingual webflow site, without <br/>coding</p>
        </div>
    )
}
export default ImagineLogo;