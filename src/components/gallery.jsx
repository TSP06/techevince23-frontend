import React, { useState, useEffect } from "react";
import person from "../assets/raman.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./gallery.css";

export default function Gallery() {
  const gallery = [
    {
      img_url:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&w=1000&q=80",
      img_alt: "raman",
    },
    {
      img_url:
        "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
      img_alt: "raman",
    },
    {
      img_url:
        "https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg",
      img_alt: "raman",
    },
    {
      img_url:
        "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
      img_alt: "raman",
    },
    {
      img_url:
        "https://gratisography.com/wp-content/uploads/2023/02/gratisography-colorful-kittenfree-stock-photo-800x525.jpg",
      img_alt: "raman",
    },
    {
      img_url:
        "https://images.pexels.com/photos/255419/pexels-photo-255419.jpeg?cs=srgb&dl=pexels-pixabay-255419.jpg&fm=jpg",
      img_alt: "raman",
    },
  ];
  const [active, setActive] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:
      screenWidth > 640 ? 4 : screenWidth > 480 ? 3 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "10px",
    arrows: false,
    className: "slides",
    afterChange: (current) => setActive((current - 2 + gallery.length)%gallery.length),
  };

  return (
    <div>
      <div className=' flex flex-col'>
        <div className='mt-12'>
          <p className='flex flex-col items-start text-3xl md:text-4xl font-semibold self-stretch mx-14 -mb-3 top-5 left-14 z-10 font-ClashDisplay'>
            Event Gallery
          </p>
          <div className='rectangle bg-customBlue-100 h-3 w-48 sm:w-44 mx-14 sm:mx-28 top-11 left-28'></div>
        </div>
        <div className=' text-white flex  mx-0'>
          <div className='w-full mx-0 mt-12'>
            <Slider {...settings}>
              {gallery &&
                gallery.map((item, index) => {
                  return (
                    <div key={index} className='h-60 md:h-80 overflow-y-auto'>
                      <img
                        src={item.img_url}
                        alt={item.img_alt}
                        title={item.img_alt}
                        className='h-full w-full center'
                      />
                    </div>
                  );
                })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
