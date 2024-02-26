import React, { useEffect, useRef } from "react";
import { Box, Center } from "@chakra-ui/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

import image1 from "./image/Banner1.jpg";
import image2 from "./image/Banner2.jpg";
import image3 from "./image/Banner3.jpg";
import image4 from "./image/Banner4.jpg";
import image5 from "./image/Banner5.jpg";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Carousel = () => {
  const images = [image1, image2, image3, image4, image5];
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    const interval = setInterval(() => {
      if (swiper) {
        swiper.slideNext();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Center>
      <Box width="80%">
        <Swiper
          ref={swiperRef}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Center>
  );
};

export default Carousel;
