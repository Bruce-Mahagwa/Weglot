// files
import scroll_img from "../../assets/Animation - 1732277575644.gif"
const ScrollBtn = () => {
    return (
        <>
             <div className = "absolute scroll_btn">
                <img src = {scroll_img} alt = "scroll down gif" className="w-8 md:w-12" />
            </div>
        </>
    )
}
export default ScrollBtn;
