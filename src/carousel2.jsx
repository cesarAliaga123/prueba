import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const NewsCarousel2 = () => {
  return (
    <div className="py-20 bg-white">
        <div>
        <h3 className="text-3xl font-bold text-center font-merriweather text-rose-800 pb-7">Nuestros Socios</h3>
        </div>
      <div className="px-6 sm:px-12">
        <Swiper
          spaceBetween={30} // Espacio entre los slides
          slidesPerView={3} // Número de slides visibles
          navigation // Habilitar navegación
          pagination={{ clickable: true }} // Habilitar paginación
          loop // Habilitar loop (volver al principio cuando llegue al final)
        >
          <SwiperSlide>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="./socios.jpg" 
                alt="Noticia 1" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold text-center font-merriweather text-rose-800 py-2">Socio 1</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/socios.jpg" 
                alt="Noticia 2" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold text-center font-merriweather text-rose-800 py-2">Socio 2</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/socios.jpg" 
                alt="Noticia 3" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold text-center font-merriweather text-rose-800 py-2">Socio 3</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/socios.jpg" 
                alt="Noticia 4" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold text-center font-merriweather text-rose-800 py-2">Socio 4</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/socios.jpg" 
                alt="Noticia 4" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold text-center font-merriweather text-rose-800 py-2">Socio 5</h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default NewsCarousel2;
