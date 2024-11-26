// components
import CircleSVG from "./Svgs/CircleSVG"
import RectangleSVG from "./Svgs/RectangleSVG"
// css
import "./ImagineLogo.css";
const Purchases = () => {

    return (
        <div className = "min-h-screen w-full flex">
             <div className = "w-1/2 relative px-2 py-4 md:px-4 lg:px-8">
                <div className = "absolute bottom-20 md:bottom-40">
                    <p className = "sm:text-base md:text-lg mb-8">See the power of language</p>
                    <h1 className = "font-bold text-lg sm:text-xl lg:text-2xl">If you were shopping online,</h1>
                    <h1 className = "font-bold text-lg sm:text-xl lg:text-2xl">what would you buy?</h1>
                </div>
             </div> 

             <div className = "relative group bg-gradient-to-tr from-blue-600 via-violet-400 to-violet-500 w-1/2 px-2 pl-8 pb-8 pt-24 md:pt-32 md:px-4 lg:px-8 flex flex-col gap-4 md:flex-none md:grid md:grid-cols-2 md:grid-rows-3 special-cursor">
                <div className = "relative w-full h-12 mx-auto bg-white overflow-hidden p-1 cube-shadow group md:h-32 lg:h-40">
                    <RectangleSVG />
                    <CircleSVG />
                    <p className ="text-center mx-auto text-blue-800 w-max font-bold text-2xl absolute slate transition-all duration-300 group-hover:top-[-200%]">la Potre</p>
                    <p className ="text-center mx-auto text-blue-800 w-max font-bold text-2xl absolute invisible_p transition-all duration-300 group-hover:top-[50%]">la Potre</p>
                </div>
                
                <div className = "relative w-full h-12 mx-auto bg-white overflow-hidden p-1 cube-shadow group md:h-32 lg:h-40">
                    <RectangleSVG />
                    <CircleSVG />
                    <p className ="text-center mx-auto text-blue-800 w-max font-bold text-2xl absolute slate transition-all duration-300 group-hover:top-[-200%]">la Potre</p>
                    <p className ="text-center mx-auto text-blue-800 w-max font-bold text-2xl absolute invisible_p transition-all duration-300 group-hover:top-[50%]">la Potre</p>
                </div>

                <div className = "relative w-full h-12 mx-auto bg-white overflow-hidden p-1 cube-shadow group md:h-32 lg:h-40">
                    <RectangleSVG />
                    <CircleSVG />
                    <p className ="text-center mx-auto text-blue-800 w-max font-bold text-2xl absolute slate transition-all duration-300 group-hover:top-[-200%]">la Potre</p>
                    <p className ="text-center mx-auto text-blue-800 w-max font-bold text-2xl absolute invisible_p transition-all duration-300 group-hover:top-[50%]">la Potre</p>
                </div>

                <div className = "relative w-full h-12 mx-auto bg-white overflow-hidden p-1 cube-shadow group md:h-32 lg:h-40">
                    <RectangleSVG />
                    <CircleSVG />
                    <p className ="text-center mx-auto text-blue-800 w-max font-bold text-2xl absolute slate transition-all duration-300 group-hover:top-[-200%]">la Potre</p>
                    <p className ="text-center mx-auto text-blue-800 w-max font-bold text-2xl absolute invisible_p transition-all duration-300 group-hover:top-[50%]">la Potre</p>
                </div>

                <div className = "relative w-full h-12 mx-auto bg-white overflow-hidden p-1 cube-shadow group md:h-32 lg:h-40">
                    <RectangleSVG />
                    <CircleSVG />
                    <p className ="text-center mx-auto text-blue-800 w-max font-bold text-2xl absolute slate transition-all duration-300 group-hover:top-[-200%]">la Potre</p>
                    <p className ="text-center mx-auto text-blue-800 w-max font-bold text-2xl absolute invisible_p transition-all duration-300 group-hover:top-[50%]">la Potre</p>
                </div>

                <div className = "relative w-full h-12 mx-auto bg-white overflow-hidden p-1 cube-shadow group md:h-32 lg:h-40">
                    <RectangleSVG />
                    <CircleSVG />
                    <p className ="text-center mx-auto text-blue-800 w-max font-bold text-2xl absolute slate transition-all duration-300 group-hover:top-[-200%]">la Potre</p>
                    <p className ="text-center mx-auto text-blue-800 w-max font-bold text-2xl absolute invisible_p transition-all duration-300 group-hover:top-[50%]">la Potre</p>
                </div>
                
             </div>
        </div>
    )
}
export default Purchases;