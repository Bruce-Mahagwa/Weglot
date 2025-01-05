//dependencies
import StarHalfIcon from '@mui/icons-material/StarHalf';
// variables
import svgs from "./Data";

const IntegrationSVG = () => {
  return (
    <div className = "w-1/2">
      {svgs.map((item, index) => {
        const { svg, highlight, info1, info2, style } = item;
        const top = ((index + 1) * 12) + 160;
        const left = ((index + 1) * 9) 
        return (
          <div className="w-full h-96 md:px-4 lg:px-8 md:mr-4 lg:mr-8 sticky top-40 pb-16"
            key={highlight}
            style = {{top: `${top}px`, paddingLeft: `${left}px`}}
          >
            <div
              style={{ background: style }}
              className="w-full h-full flex flex-col gap-16 pt-4 px-2 md:px-4 lg:px-8 md:flex-row justify-between md:items-center justify-center md:mb-8 md:mr-4 lg:mr-8"
            >
              {svg}
              <div className="pb-12 text-white">
                <h2 className="font-bold text-base md:text-lg lg:text-xl mb-8">{highlight}</h2>
                <p className="mb-4"><StarHalfIcon />{info1}</p>
                {info2 && <p><StarHalfIcon />{info2}</p>}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default IntegrationSVG;

