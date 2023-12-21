import { useNavigate, useNavigation } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen">
            <div className="flex justify-center items-center">  
                <p className="text-9xl font-extrabold text-white tracking-widest">404</p>
                <p className="absolute rotate-12 px-4 bg-black text-sm text-white rounded">Page not Found..</p>
            </div>
            <button className="m-5 group" >
                <a href="" className="relative inline-block text-[#ff6A3D] text-sm font-medium group-active:text-yellow-500 gruop-focus:outline-none group-focus:ring"
                >
                    <span onClick={navigate(-1)} className="border-current block px-8 py-3 border bg-[#1A2233]">Go Back</span>
                </a>
            </button>
        </div>
 
    );

}

export default NotFound;