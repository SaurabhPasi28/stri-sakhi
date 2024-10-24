'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import styles from '@/Css/carousel.module.css';

function HomeSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <GrNext
        className={className}
        style={{ ...style, display: "block", margin: "0px 33px", scale: "2.0", color: "white" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <GrPrevious
        className={className}
        style={{ ...style, display: "block", marginLeft: "32px", zIndex: "100", scale: "2", color: "white" }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className={`slider-container overflow-hidden bottom-2 border-b-[#B97A4F] ${styles.slider}`}>
      <Slider {...settings}>
        <div>
          <img
            src="https://www.venkateshwarhospitals.com/blog/wp-content/uploads/2019/03/IVF-treatment-hospitals-in-Delhi-Venkateshwar-Hospital.jpg"
            alt="Slide 1"
            className="object-cover h-[400px] w-screen overflow-hidden"
          />
        </div>
        <div>
          <img
            src="https://beyondtype1.org/wp-content/uploads/2022/02/BT1-Importance-of-Accessible-Womens-HEADER.jpeg"
            alt="Slide 2"
            className="object-cover h-[400px] w-screen overflow-hidden"
          />
        </div>
        {/* <div>
          <img
            src="jayhoGPT.png"
            alt="Slide 3"
            className="object-cover h-[400px] w-screen overflow-hidden"
          />
        </div>
        <div>
          <img
            src="jayhoGPT2.png"
            alt="Slide 4"
            className="object-cover h-[400px] w-screen overflow-hidden"
          />
        </div> */}
        <div>
          <img
            src="https://assets.thehansindia.com/h-upload/2024/08/21/1473260-dxcv-21.jpg"
            alt="Slide 5"
            className="object-cover h-[400px] w-screen overflow-hidden"
          />
        </div>
        <div>
          <img
            src="https://www.medicoverhospitals.in/images/articles/healthy-pregnancy-tips-taking-care-yourself-your-baby.webp"
            alt="Slide 6"
            className="object-cover h-[400px] w-screen overflow-hidden"
          />
        </div>
      </Slider>
    </div>
  );
}

export default HomeSlider;
