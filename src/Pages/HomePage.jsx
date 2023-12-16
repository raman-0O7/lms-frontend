import HomeLayout from "../HomeLayout";
import HomePageImage from "../Asset/Images/homePageMainImage.png";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <HomeLayout>
            <div className="h-[90vh] flex items-center justify-center gap-3 ml-20">
                <div className="w-1/2 space-y-6">
                    <div className="flex items-center justify-center">
                        <h1 className="text-4xl font-bold text-white">Find Your Best &nbsp;</h1>
                        <span className="text-5xl font-extrabold text-yellow-500"> Online Course</span>
                    </div>
                    <div className="mt-3">
                        <p className="text-gray-300 font-semibold text-xl text-center">We have a great collection of courses taught by skilled teacher at a very affordable cost.</p>
                    </div>
                    <div className="mt-5 flex items-center justify-center gap-8">
                        <Link to="/courses" >
                            <button className="bg-yellow-500 font-bold text-xl text-white py-3 px-4 rounded-md hover:border hover:">Explore Courses</button>
                        </Link>
                        <Link to="/contact" >
                            <button className="border border-yellow-500 hover:text-yellow-500 font-bold text-xl text-white py-3 px-4 rounded-md">Contact Us</button>
                        </Link>
                    </div>
                </div>
            
                <div className="w-1/2 flex items-center justify-center ">
                    <img alt="Image of a man viewing tech" src={HomePageImage}/>
                </div>
            </div>
        </HomeLayout>
    )
}

export default HomePage;