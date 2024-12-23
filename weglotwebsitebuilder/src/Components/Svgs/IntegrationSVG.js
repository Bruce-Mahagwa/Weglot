//dependencies
import StarHalfIcon from '@mui/icons-material/StarHalf';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// variables
import svgs from "./Data"; 

const IntegrationSVG = ({countScrollPosition, setCurrentIndex}) => {    
  console.log(countScrollPosition)    
    return (
      <Carousel
        className = "w-1/2"        
        axis = "vertical"
        onChange = {(index) => setCurrentIndex(index)}
        showThumbs = {false}
        autoFocus={true}
        swipeScrollTolerance={180}
        selectedItem={countScrollPosition}
      >
         <div className = "w-full pl-2 h-96 md:px-4 lg:px-8 md:mr-4 lg:mr-8">                
            <div 
              style = {{background: `linear-gradient(#fdba74, #f97316)`}}
              className= "w-full h-full flex flex-col gap-16 pt-4 px-2 md:px-4 lg:px-8 md:flex-row justify-between md:items-center justify-center md:mb-8 md:mr-4 lg:mr-8"
            >         
              {svgs[0]}
              <div className = "pb-12 text-white">
                <h2 className = "font-bold text-base md:text-lg lg:text-xl mb-8">Simple to integrate</h2>
                <p className = "mb-4"><StarHalfIcon /> No coding required</p>
                <p><StarHalfIcon /> Up and working in minutes</p>
              </div>
          </div>
        </div>

        <div className = "w-full h-96 px-2 md:px-4 lg:px-8 md:mr-4 lg:mr-8">               
          <div 
            style = {{background: `linear-gradient(#9333ea, #ec4899)`}}
            className= "w-full h-full flex flex-col gap-16 pt-4 px-2 md:px-4 lg:px-8 md:flex-row justify-between md:items-center justify-center md:mb-8 md:mr-4 lg:mr-8">         
              {svgs[1]}
            <div className = "pb-12 text-white">
              <h2 className = "font-bold text-base md:text-lg lg:text-xl mb-8">Easy to use</h2>
              <p className = "mb-4"><StarHalfIcon /> Never miss a word</p>
              <p><StarHalfIcon /> Click and edit</p>
            </div>
          </div>
        </div>

        <div className = "w-full h-96 px-2 md:px-4 lg:px-8 md:mr-4 lg:mr-8">     
          <div 
            style = {{background: `linear-gradient(#60a5fa, #d8b4fe)`}}
            className= "w-full h-full flex flex-col gap-16 pt-4 px-2 md:px-4 lg:px-8 md:flex-row justify-between md:items-center justify-center md:mb-8 md:mr-4 lg:mr-8">         
              {svgs[2]}
              <div className = "pb-12 text-white">
                <h2 className = "font-bold text-base md:text-lg lg:text-xl mb-8">Good for SEO</h2>
                <p className = "mb-4"><StarHalfIcon /> You'll be searchable in your new markets</p>
              </div>
          </div>
        </div>


        <div className = "w-full h-96 px-2 md:px-4 lg:px-8 md:mr-4 lg:mr-8">     
          <div 
            style = {{background: `linear-gradient(to bottom right, #60a5fa, #ec4899)`}}
            className= "w-full h-full flex flex-col gap-16 pt-4 px-2 md:px-4 lg:px-8 md:flex-row justify-between md:items-center justify-center md:mb-8 md:mr-4 lg:mr-8">         
              {svgs[3]}
              <div className = "pb-12 text-white">
                <h2 className = "font-bold text-base md:text-lg lg:text-xl mb-8">Multiple translation options</h2>
                <p className = "mb-4"><StarHalfIcon />Automated</p>
                <p><StarHalfIcon />Human</p>
              </div>
          </div>
        </div>


        <div className = "w-full h-96 px-2 md:px-4 lg:px-8 md:mr-4 lg:mr-8">     
          <div 
            style = {{background: `linear-gradient(to right, #3b82f6, #0284c7)`}}
            className= "w-full h-full flex flex-col gap-16 pt-4 px-2 md:px-4 lg:px-8 md:flex-row justify-between md:items-center justify-center md:mb-8 md:mr-4 lg:mr-8">         
              {svgs[4]}
              <div className = "pb-12 text-white">
                <h2 className = "font-bold text-base md:text-lg lg:text-xl mb-8">Integrated with your design</h2>
                <p className = "mb-4"><StarHalfIcon /> All components are easily editable with CSS</p>
              </div>
          </div>
        </div>
      </Carousel>
    )
}
export default IntegrationSVG;
