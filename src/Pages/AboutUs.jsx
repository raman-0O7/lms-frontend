import aboutMainImage from "../Asset/Images/aboutMainImage.png"
import CarouselSlide from "../components/CarouselSlide";
import {carouselData} from "../constant/carouselData";
import HomeLayout from "../HomeLayout";

function AboutUs() {
    const celebrities = carouselData;

    return (
        <HomeLayout>
            <div className="flex flex-col pl-20 pt-10 items-center">
                <div className="flex items-center justify-center ml-10 gap-10">
                    <section className="flex items-center justify-center flex-col gap-5 w-1/2">
                        <h1 className="text-5xl text-yellow-500 text-semibold">
                            Providing Quality Education at Affordable Price.
                        </h1>
                        <p className="text-xl text-gray-200">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nam ullam omnis illo animi dolorem magni similique impedit eligendi voluptatum.
                        </p>
                    </section>
                    <div className="w-1/2">
                        <img src={aboutMainImage} alt="about us main image" 
                            className="drop-shadow-2xl"
                        />

                    </div>

                </div>
                <div className="carousel w-[50%] m-20">
                    {celebrities.map(celebrity => <CarouselSlide title={celebrity.title} description={celebrity.description} image={celebrity.image} slideNumber={celebrity.slideNumber} key={celebrity.slideNumber} totalSlide={celebrities.length}/>)}
                </div>
            
            </div>
        </HomeLayout>
    );
}

export default AboutUs;