import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const NewsCarousel = () => {
  return (
    <div className="py-16 bg-white">
      <div>
        <h3 className="text-3xl font-bold text-center font-merriweather text-rose-800 pb-7">Nuestros Socios</h3>
      </div>
      <div className="px-6 py-4 sm:px-12">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1} // Configuración base para móviles
          breakpoints={{
            640: { slidesPerView: 1 }, // Teléfonos
            768: { slidesPerView: 2 }, // Tablets
            1024: { slidesPerView: 3 }, // Escritorio
          }}
          navigation
          pagination={{ clickable: true }}
          loop
        >
          {[
            { title: "Socio 1", description: "Descripción corta del socio 1.", image: "/socios.jpg" },
            { title: "Socio 2", description: "Descripción corta del socio 2.", image: "/socios.jpg" },
            { title: "Socio 3", description: "Descripción corta del socio 3.", image: "/socios.jpg" },
            { title: "Socio 4", description: "Descripción corta del socio 4.", image: "/socios.jpg" },
            { title: "Socio 5", description: "Descripción corta del socio 5.", image: "/socios.jpg" }
          ].map((news, index) => (
            <SwiperSlide key={index}>
              <div className="bg-rose-800 rounded-t-3xl overflow-hidden shadow-lg">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-2xl font-bold text-center font-merriweather text-white py-2">
                    {news.title}
                  </h3>
                  <p className="text-white text-lg mt-2 font-merriweather pb-3">
                    {news.description}
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

export default NewsCarousel;