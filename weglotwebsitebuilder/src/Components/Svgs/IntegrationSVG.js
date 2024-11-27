//dependencies
import {motion} from "motion/react";
import StarHalfIcon from '@mui/icons-material/StarHalf';
// hooks
import { useEffect, useState } from "react";
// css
import "../ImagineLogo.css"
// variables
import svgs from "./Data";
const IntegrationSVG = ({countScrollPosition}) => {
    const [bg, setBg] = useState("");
    function assignBackground(countScrollPosition) {
      switch(countScrollPosition) {
        case 1:
          return "#fdba74, #f97316";
        case 2:
          return "#9333ea, #ec4899";
        case 3:
          return "#60a5fa, #d8b4fe";
        case 4:
          return "to bottom right, #60a5fa, #ec4899";
        case 5:
          return "to right, #3b82f6, #0284c7"
        default:
          return "#fdba74, #f97316";
      }
    }
    useEffect(() => {
        setBg(assignBackground(countScrollPosition));
    }, [countScrollPosition])

    return (
      <>
      {countScrollPosition === 1 && <motion.div className = "w-1/2 h-3/4 fixed top-1/4 flex flex-col gap-16 right-0 pt-4 px-2 md:px-4 lg:px-8 md:flex-row justify-between md:items-center justify-center md:h-1/2 md:mb-8 md:mr-4 lg:mr-8"
        style = {{background: `linear-gradient(${bg})`}}
      >        
            {svgs[0]}
            <div className = "pb-12 text-white">
              <h2 className = "font-bold text-base md:text-lg lg:text-xl mb-8">Simple to integrate</h2>
              <p className = "mb-4"><StarHalfIcon /> No coding required</p>
              <p><StarHalfIcon /> Up and working in minutes</p>
            </div>
        </motion.div>}

        {countScrollPosition === 2 && <motion.div className = "w-1/2 h-3/4 fixed top-1/4 flex flex-col gap-16 right-0 pt-4 px-2 md:px-4 lg:px-8 md:flex-row justify-between md:items-center justify-center md:h-1/2 md:mb-8 md:mr-4 lg:mr-8"
        style = {{background: `linear-gradient(${bg})`}}
      >        
            {svgs[1]}
            <div className = "pb-12 text-white">
              <h2 className = "font-bold text-base md:text-lg lg:text-xl mb-8">Easy to use</h2>
              <p className = "mb-4"><StarHalfIcon /> Never miss a word</p>
              <p><StarHalfIcon /> Click and edit</p>
            </div>
        </motion.div>}

        {countScrollPosition === 3 && <motion.div className = "w-1/2 h-3/4 fixed top-1/4 flex flex-col gap-16 right-0 pt-4 px-2 md:px-4 lg:px-8 md:flex-row justify-between md:items-center justify-center md:h-1/2 md:mb-8 md:mr-4 lg:mr-8"
        style = {{background: `linear-gradient(${bg})`}}
      >        
            {svgs[2]}
            <div className = "pb-12 text-white">
              <h2 className = "font-bold text-base md:text-lg lg:text-xl mb-8">Good for SEO</h2>
              <p className = "mb-4"><StarHalfIcon /> You'll be searchable in your new markets</p>
            </div>
        </motion.div>}

        {countScrollPosition === 4 && <motion.div className = "w-1/2 h-3/4 fixed top-1/4 flex flex-col gap-16 right-0 pt-4 px-2 md:px-4 lg:px-8 md:flex-row justify-between md:items-center justify-center md:h-1/2 md:mb-8 md:mr-4 lg:mr-8"
        style = {{background: `linear-gradient(${bg})`}}
      >        
            {svgs[3]}
            <div className = "pb-12 text-white">
              <h2 className = "font-bold text-base md:text-lg lg:text-xl mb-8">Multiple translation options</h2>
              <p className = "mb-4"><StarHalfIcon /> Automated</p>
              <p><StarHalfIcon /> Human</p>
            </div>
        </motion.div>}

        {countScrollPosition === 5 && <motion.div className = "w-1/2 h-3/4 fixed top-1/4 flex flex-col gap-16 right-0 pt-4 px-2 md:px-4 lg:px-8 md:flex-row justify-between md:items-center justify-center md:h-1/2 md:mb-8 md:mr-4 lg:mr-8"
        style = {{background: `linear-gradient(${bg})`}}
      >        
            {svgs[4]}
            <div className = "pb-12 text-white">
              <h2 className = "font-bold text-base md:text-lg lg:text-xl mb-8">Integrated with your design</h2>
              <p className = "mb-4"><StarHalfIcon /> All components are easily editable with CSS</p>
            </div>
        </motion.div>}
        </>
    )
}
export default IntegrationSVG;