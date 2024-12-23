'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import Image from "next/image"; // Import Next.js Image component
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
    <div className={`slider-container overflow-hidden ${styles.sliderContainer}`}>
      <Slider {...settings}>
        <div className={styles.slide}>
          <Image
            src="https://www.venkateshwarhospitals.com/blog/wp-content/uploads/2019/03/IVF-treatment-hospitals-in-Delhi-Venkateshwar-Hospital.jpg"
            alt="Slide 1"
            width={1920}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
        <div className={styles.slide}>
          <Image
            src="https://beyondtype1.org/wp-content/uploads/2022/02/BT1-Importance-of-Accessible-Womens-HEADER.jpeg"
            alt="Slide 2"
            width={1920}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
        <div className={styles.slide}>
          <Image
            src="https://assets.thehansindia.com/h-upload/2024/08/21/1473260-dxcv-21.jpg"
            alt="Slide 5"
            width={1920}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
        <div className={styles.slide}>
          <Image
            src="https://www.medicoverhospitals.in/images/articles/healthy-pregnancy-tips-taking-care-yourself-your-baby.webp"
            alt="Slide 6"
            width={1920}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
      </Slider>
    </div>
  );
}

export default HomeSlider;
