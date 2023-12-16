import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import {AiFillCloseCircle} from "react-icons/ai";
import Footer from "./components/Footer";

function HomeLayout({ children}) {

    function changeWidth() {
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = "auto";
    }
 
    function hideDocker() {
        const drawerToggle = document.getElementsByClassName("drawer-toggle");
        drawerToggle[0].checked = false;

        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = "0";
    }
    return (
        <div className="min-h-[90vh]">
            <div className="drawer text-white w-fit absolute left-0 z-50">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="relative cursor-pointer l inline-block">
                        <FiMenu size={"32px"} onClick={changeWidth} className="text-white font-bold m-4"/>
                    </label>

                </div>
            
                <div className="drawer-side w-0">
                    <label htmlFor="my-drawer" className="drawer-overlay">

                    </label>
                    <ul className="menu bg-base-200 relative w-48 sm:w-80 p-4 text-base-content">
                        <li className="w-fit absolute right-2 z-50">

                            <button onClick={hideDocker}>
                                <AiFillCloseCircle size={24}/>
                            </button>
                        </li>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/courses">All Courses</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
            {children}
            <Footer />
        </div>
    )
}

export default HomeLayout;