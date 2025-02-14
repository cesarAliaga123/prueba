import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CarouselNoticias = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/news")
      .then((res) => setNews(res.data))
      .catch((err) => console.error("Error cargando noticias:", err));
  }, []);

  return (
    <div className="py-20 bg-rose-800">
      <div>
        <h3 className="text-3xl font-bold text-center font-merriweather text-white pb-7">
          Nuestras Noticias
        </h3>
      </div>
      <div className="px-6 sm:px-12">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          loop
        >
          {news.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-t-3xl overflow-hidden shadow-lg">
                <img 
                  src={item.image_url} 
                  alt={item.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-2xl font-bold text-center font-merriweather text-rose-800 py-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-lg mt-2 font-merriweather pb-3">
                    {item.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CarouselNoticias;
