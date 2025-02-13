import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const NewsCarousel = () => {
  return (
    <div className="py-20 bg-rose-800">
      <div>
        <h3 className="text-3xl font-bold text-center font-merriweather text-white pb-7">Nuestras Noticias</h3>
      </div>
      <div className="px-6 sm:px-12">
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
            { title: "Noticia 1", description: "Descripción corta de la noticia 1.", image: "/news.jpg" },
            { title: "Noticia 2", description: "Resumen de la noticia 2 para captar la atención.", image: "/news.jpg" },
            { title: "Noticia 3", description: "Una pequeña descripción sobre la noticia 3.", image: "/news.jpg" },
            { title: "Noticia 4", description: "Breve descripción de la noticia 4.", image: "/news.jpg" },
            { title: "Noticia 5", description: "Resumen de la noticia 5 para mantener la consistencia.", image: "/news.jpg" }
          ].map((news, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-2xl font-bold text-center font-merriweather text-rose-800 py-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-lg mt-2 font-merriweather pb-3">
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
