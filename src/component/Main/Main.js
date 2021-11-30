import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Main = ()=>{
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
  return(
    <div className="h-full lg:w-4/6 w-full hidden lg:block relative overflow-hidden">
      <div className="w-full h-full">
      <Slider {...settings}>
          <div className="w-full h-screen bg-wedding1 bg-no-repeat bg-cover bg-center"></div>
          <div className="w-full h-screen bg-wedding2 bg-no-repeat bg-cover bg-center"></div>
          <div className="w-full h-screen bg-wedding3 bg-no-repeat bg-cover bg-center"></div>
          <div className="w-full h-screen bg-wedding4 bg-no-repeat bg-cover bg-center"></div>
          <div className="w-full h-screen bg-wedding5 bg-no-repeat bg-cover bg-center"></div>
          <div className="w-full h-screen bg-wedding6 bg-no-repeat bg-cover bg-center"></div>
        </Slider>
      </div>
      <div className="bottom-10 left-10 absolute">
        <h1 className="font-title text-white leading-10 text-9xl">Anis & Ansi</h1>
      </div>
    </div>
  )
}

export default Main;