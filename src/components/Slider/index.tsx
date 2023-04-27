import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { CarouselData } from "../../data/CarouselData";
export default function Slider() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={true}
      navigation={true}
    >
      {CarouselData.map((item, index) => {
        return (
          <SwiperSlide
            key={index}
            className="relative flex items-center justify-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.image} alt="IMG" className="min-h-screen w-full" />
            <div className="max-w-[25%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <h2 className="text-white">{item.headerText || item.subText}</h2>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
