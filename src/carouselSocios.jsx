import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CarouselSocios = () => {
  const [socios, setSocios] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/socios")
      .then((res) => setSocios(res.data))
      .catch((err) => console.error("Error cargando socios:", err));
  }, []);

  return (
    <div className="py-16 bg-white">
      <div>
        <h3 className="text-3xl font-bold text-center font-merriweather text-rose-800 pb-7">Nuestros Socios</h3>
      </div>
      <div className="px-6 py-4 sm:px-12">
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
          {socios.map((socio, index) => (
            <SwiperSlide key={index}>
              <div className="bg-rose-800 rounded-t-3xl overflow-hidden shadow-lg">
                <img 
                  src={socio.image} 
                  alt={socio.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-2xl font-bold text-center font-merriweather text-white py-2">
                    {socio.title}
                  </h3>
                  <p className="text-white text-lg mt-2 font-merriweather pb-3">
                    {socio.description}
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

export default CarouselSocios;
