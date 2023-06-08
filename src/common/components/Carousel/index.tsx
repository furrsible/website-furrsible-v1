import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

function HideArrows() {
  return <div className="hidden" />;
}

const SimpleSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: `linear`,
    nextArrow: <HideArrows />,
    prevArrow: <HideArrows />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="text-white">
      <Swiper spaceBetween={50} slidesPerView={5}>
        <SwiperSlide>
          <h3>1</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3>2</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3>3</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3>4</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3>5</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3>6</h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SimpleSlider;
