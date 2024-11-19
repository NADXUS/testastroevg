import React from "react";
import { ButtonDefault, ButtonShop } from "./../Buttons";

const InfoHome = () => {
  return (
    <div className="bg-[#f5f5f5] py-10">
      <section className="py-10 max-w-7xl mx-auto">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start gap-8">
          <div className="w-full lg:w-1/2">
            <div className="mb-8">
              <h4 className="text-gray-500 text-lg md:text-left text-center">Por qué escogernos</h4>
              <h2 className="text-4xl font-bold text-gray-800 mb-4 leading-snug md:text-left text-center">
                Agricultura Sostenible con <span className="text-[#064c41]">Retornos Garantizados</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white shadow-md p-6 rounded-xl">
                <div className="mb-4">
                  <img src="/AboutUs/Featured icon.png" className="w-12 h-12" />
                </div>
                <h3 className="font-bold text-xl mb-2">Conoce la Empresa</h3>
                <p className="text-gray-600">
                  Somos una empresa agrícola 100% legal y constituida en Colombia, especializada en la siembra, cosecha y venta de aguacate Hass de tipo exportación.
                </p>
              </div>

              <div className="bg-white shadow-md p-6 rounded-xl">
                <div className="mb-4">
                  <img src="/AboutUs/Featured icon-1.png" className="w-12 h-12" />
                </div>
                <h3 className="font-bold text-xl mb-2">Ubicación y Origen</h3>
                <p className="text-gray-600">
                  Nuestro cultivo se encuentra en terreno propio en la región de Montebello, Antioquia. Avovite surgió durante la pandemia, cuando el sector agrícola y el tecnológico continuaron operando.
                </p>
              </div>

              <div className="bg-white shadow-md p-6 rounded-xl">
                <div className="mb-4">
                  <img src="/AboutUs/Featured icon-2.png" className="w-12 h-12" />

                </div>
                <h3 className="font-bold text-xl mb-2">Proyecto Sostenible</h3>
                <p className="text-gray-600">
                  Por ello, en 2021 lanzamos un proyecto innovador que combina el conocimiento agrícola con la tecnología, a través de nuestra plataforma.
                </p>
              </div>

              <div className="bg-white shadow-md p-6 rounded-xl">
                <div className="mb-4">
                  <img src="/AboutUs/Featured icon-3.png" className="w-12 h-12" />

                </div>
                <h3 className="font-bold text-xl mb-2">Compromiso Sostenible</h3>
                <p className="text-gray-600">
                  Trabajamos bajo los pilares de la sostenibilidad ambiental, lo social y lo financiero. Implementamos un protocolo de cultivo basado en productos biológicos, minerales, ecológicos y orgánicos.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="w-full flex items-end justify-end mt-10">
              <ButtonShop className="w-full lg:w-auto">Quiero comprar →</ButtonShop>
            </div>
            <div className="h-full flex items-center mt-40">
              <iframe
                className="h-[300px]  rounded-[30px] aspect-video"
                src="https://www.youtube.com/embed/qSUyxTnOdDs"
                title="Qué es Avovite?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfoHome;
