import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay } from 'swiper';
import Image from '../Image';

import slide1 from '../../images/slide1.png';
import slide2 from '../../images/slide2.png';
import slide3 from '../../images/slide3.png';
import slide4 from '../../images/slide4.png';
import slide5 from '../../images/slide5.png';

import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';

const SimpleSlider = () => {
  return (
    <div className="text-white mt-16 lg:ml-14">
      <Swiper
        modules={[A11y, Autoplay]}
        loop
        rewind
        breakpoints={{
          320: {
            slidesPerView: 2,

            centeredSlides: true,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        spaceBetween={10}
        autoplay={{ delay: 2000 }}
      >
        <SwiperSlide className="relative">
          <Image src={slide1} alt="a cat" />
          <div
            className="h-[54px] rounded-3xl mt-4 brightness-[.5]"
            style={{
              background: `linear-gradient(160.2deg, rgba(255, 255, 255, 0.1) 2.36%, rgba(255, 255, 255, 0) 100.6%)`,
              transform: `matrix(1, -0.04, 0.01, 1, 0, 0) translate(0,10px) rotate(-2.22deg)`,
            }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="h-[54px] rounded-3xl mb-4 brightness-[.5]"
            style={{
              background: `linear-gradient(160.2deg, rgba(255, 255, 255, 0.1) 2.36%, rgba(255, 255, 255, 0) 100.6%)`,
              transform: `matrix(1, -0.04, 0.01, 1, 0, 0) rotate(-2.22deg)`,
            }}
          />
          <Image src={slide2} alt="a calico cat" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={slide3} alt="woman holding a dog" />
          <div
            className="h-[54px] rounded-3xl mt-4 brightness-[.5]"
            style={{
              background: `linear-gradient(160.2deg, rgba(255, 255, 255, 0.1) 2.36%, rgba(255, 255, 255, 0) 100.6%)`,
              transform: `matrix(1, -0.04, 0.01, 1, 0, 0) translate(0,10px) rotate(-2.22deg)`,
            }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="h-[54px] rounded-3xl mb-4 brightness-[.5]"
            style={{
              background: `linear-gradient(160.2deg, rgba(255, 255, 255, 0.1) 2.36%, rgba(255, 255, 255, 0) 100.6%)`,
              transform: `matrix(1, -0.04, 0.01, 1, 0, 0) rotate(-2.22deg)`,
            }}
          />
          <Image src={slide4} alt="a dog" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={slide5} alt="a cat looking up" />
          <div
            className="h-[54px] rounded-3xl mt-4 brightness-[.5]"
            style={{
              background: `linear-gradient(160.2deg, rgba(255, 255, 255, 0.1) 2.36%, rgba(255, 255, 255, 0) 100.6%)`,
              transform: `matrix(1, -0.04, 0.01, 1, 0, 0) translate(0,10px) rotate(-2.22deg)`,
            }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SimpleSlider;
