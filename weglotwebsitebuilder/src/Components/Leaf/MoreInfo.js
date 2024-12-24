import {Button} from "flowbite-react";
import { FaClone } from "react-icons/fa";
import { MdGridView } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
const MoreInfo = () => {
    return (
        <div className = "pt-16 pb-24 px-4 lg:px-28 flex flex-col gap-8 lg:flex-row">
            <div className="text-white">
                <p className = "mb-8">The landing page and UI Kit are available to clone. Clone, implement and enjoy!</p>
                <Button className="align-middle mt-4 bg-white text-black hover:bg-transparent hover:text-white hover:ring-4 hover:ring-orange-500" pill color="primary" size="lg">
                    <FaClone className="mr-2 w-5 h-5" />
                    Clone this website</Button>
            </div>

            <div className="text-white">
                <p className = "mb-8">We designed cool Webflow language switchers which you can easily clone and use</p>
                <Button className="mt-4 hover:bg-pink-500 hover:ring-4 hover:ring-slate-50" pill gradientMonochrome="failure" size="lg">
                    <MdGridView className="mr-2 w-5 h-5" />
                    Check the UI Kit</Button>
            </div>

            <div className="text-white align-middle">
                <p className = "mb-8">Need help with implementation? Want a custom component?</p>
                <Button className="mt-4 bg-transparent hover:text-orange-500 ring-4 ring-orange-500 hover:ring-8" pill size="lg"
                    color = "failure"
                >
                    <MdOutlineEmail className="mr-2 w-5 h-5" />
                    Contact us</Button>
            </div>
        </div>
    )
}
export default MoreInfo;