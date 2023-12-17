import { FiMenu } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import {AiFillCloseCircle} from "react-icons/ai";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";

function HomeLayout({ children}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLoggedIn = useSelector(state => state?.auth?.isLoggedIn);
    const role = useSelector(state => state?.auth?.role);

    async function handleLogout(e) {
        e.preventDefault();
        // const res = await dispatch(logout());
        // if(res?.payload?.success)
        navigate("/");

    }

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
                    <ul className="menu bg-base-200 h-[100%] relative w-48 sm:w-80 p-4 text-base-content">
                        <li className="w-fit absolute right-2 z-50">

                            <button onClick={hideDocker}>
                                <AiFillCloseCircle size={24}/>
                            </button>
                        </li>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        {isLoggedIn && role === "ADMIN" &&
                            (<li>
                                <Link to="/admin/dashboard">Admin Dashboard</Link>
                            </li>)
                        } 
                        <li>
                            <Link to="/courses">All Courses</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        {!isLoggedIn &&
                            <li className="absolute bottom-4 w-[90%]">
                                <div className="flex items-center justify-center w-full">
                                   <button className="btn btn-primary font-semibold w-1/2 rounded-md py-1 px-4">
                                   <Link to="/login">Login</Link>
                                   </button>
                                   <button className="btn btn-secondary font-semibold w-1/2 rounded-md py-1 px-4">
                                   <Link to="/signup">Sign Up</Link>
                                   </button>
                                </div>
                            </li>
                        }
                        {isLoggedIn && (
                            <li className="absolute bottom-4 w-[90%]">
                                <div className="w-full flex items-center justify-center">
                                    <button className='btn btn-primary px-4 py-1 font-semibold rounded-md w-1/2'>
                                        <Link to="/user/profile">Profile</Link>
                                    </button>
                                    <button className='btn btn-secondary px-4 py-1 font-semibold rounded-md w-1/2'>
                                        <Link onClick={handleLogout}>Logout</Link>
                                    </button>
                                </div>
                            </li>
                        )}
                        
                    </ul>
                </div>
            </div>
            {children}
            <Footer />
        </div>
    )
}

export default HomeLayout;