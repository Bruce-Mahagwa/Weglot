// components
import LeafTest from "./LeafText";
import MoreInfo from "./MoreInfo";
const Leaf = () => {
    return (
        <div className="bg-gradient-to-tr from-violet-400 to-violet-950 w-full relative overflow-hidden pt-16">
            <div className="brown_1 rounded-full flex justify-center items-center mx-auto">
                <div className="w-[85%] h-[85%] brown_2 rounded-full flex justify-center items-center">
                    <div className="w-[85%] h-[85%] brown_3 rounded-full relative">
                        <LeafTest />
                    </div>
                </div>
            </div>
            <MoreInfo />
        </div>
    )
}
export default Leaf;