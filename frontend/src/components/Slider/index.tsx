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
    >
      {CarouselData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              style={{ backgroundImage: `url(${item.image})` }}
              className="min-h-screen w-full bg-no-repeat bg-cover"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
