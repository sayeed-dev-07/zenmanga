import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "motion/react";
import { Navigation } from "swiper/modules";
import CarousalCards from "./CarousalCards";

const Carousal = ({ data }) => {

  return (
    <motion.div initial={{
      opacity: 0,
      y: 20,
      filter: 'blur(10px)'
    }} animate={{
      opacity: 1,
      y: 0,
      filter: 'blur(0px)'
    }} transition={{
      duration: 0.3,
      type: "spring",
      stiffness: 120,
      damping: 15

    }} className="w-full max-w-[90vw] lg:max-w-[85vw] xl:max-w-[80vw] mx-auto my-12 px-2 sm:px-4">
      <Swiper
        className="px-2"
        modules={[Navigation]}
        spaceBetween={20}
        loop={true}
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 15
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 25
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1536: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }}
      >
        {data.map((item) => (

          <SwiperSlide key={item.id}>
            <CarousalCards card={item} />
          </SwiperSlide>

        ))}
      </Swiper>


    </motion.div>
  );
};

export default Carousal;
