import React from "react";

const MeetOurCoFounders = () => {
  return (
    <section className="py-20 max-w-5xl mx-auto">
      <div className="container mx-auto px-4 space-y-20">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-10">
          Conoce Nuestros <span className="text-[#0d524c]">Cofundadores</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-xl p-6 rounded-xl flex flex-col items-center">
            <div className="w-full mb-4">
              <img
                src="/AboutUs/cofounder1.webp"
                alt="Emir Andres Silva"
                className="w-full h-full object-cover rounded-full border-4 border-white"
              />
            </div>
            <h3 className="font-bold text-xl text-gray-800 mb-1">Emir Andres Silva</h3>
            <p className="text-blue-600 mb-4">Co-fundador</p>
            <div className="flex gap-4 mb-4">
              <div className="flex w-8 ">
                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 100 100" id="linkedin" fill="#2563eb">
                  <path d="M87.877 5.608H11.174c-3.673 0-6.65 2.886-6.65 6.448v77.101c0 3.562 2.978 6.451 6.65 6.451h76.703c3.673 0 6.646-2.89 6.646-6.451V12.056c0-3.561-2.973-6.448-6.646-6.448zM31.809 80.944H18.211V40.31h13.598v40.634zm-6.798-46.185h-.091c-4.56 0-7.516-3.119-7.516-7.023 0-3.983 3.043-7.017 7.693-7.017 4.651 0 7.512 3.033 7.602 7.017 0 3.905-2.95 7.023-7.688 7.023zm55.816 46.185H67.233v-21.74c0-5.464-1.97-9.191-6.886-9.191-3.761 0-5.993 2.515-6.973 4.942-.364.868-.453 2.08-.453 3.292v22.696H39.329s.178-36.823 0-40.634h13.593v5.761c1.805-2.768 5.029-6.717 12.249-6.717 8.947 0 15.656 5.804 15.656 18.291v23.3zM52.834 46.199c.024-.038.056-.084.088-.128v.128h-.088z"></path>
                </svg>
              </div>
              <div className="flex w-8">
                <svg fill="#2563eb" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 16 16" id="instagram">
                  <path d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"></path>
                  <path d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"></path>
                  <circle cx="12.3" cy="3.7" r=".533"></circle>
                </svg>
              </div>
            </div>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-600">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
            <p className="text-gray-600 text-center italic">
              "Emprendedor e inversor especializado en el crecimiento personal y organizacional con más de 7 años de experiencia en varios sectores de la economía."
            </p>
          </div>

          <div className="bg-white shadow-xl p-6 rounded-xl flex flex-col items-center">
            <div className="w-full mb-4">
              <img
                src="/AboutUs/cofounder2.webp"
                alt="Juan Esteban Jaramillo"
                className="w-full h-full object-cover rounded-full border-4 border-white"
              />
            </div>
            <h3 className="font-bold text-xl text-gray-800 mb-1">Juan Esteban Jaramillo</h3>
            <p className="text-blue-600 mb-4">Co-fundador</p>
            <div className="flex gap-4 mb-4">
              <div className="flex w-8 ">
                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 100 100" id="linkedin" fill="#2563eb">
                  <path d="M87.877 5.608H11.174c-3.673 0-6.65 2.886-6.65 6.448v77.101c0 3.562 2.978 6.451 6.65 6.451h76.703c3.673 0 6.646-2.89 6.646-6.451V12.056c0-3.561-2.973-6.448-6.646-6.448zM31.809 80.944H18.211V40.31h13.598v40.634zm-6.798-46.185h-.091c-4.56 0-7.516-3.119-7.516-7.023 0-3.983 3.043-7.017 7.693-7.017 4.651 0 7.512 3.033 7.602 7.017 0 3.905-2.95 7.023-7.688 7.023zm55.816 46.185H67.233v-21.74c0-5.464-1.97-9.191-6.886-9.191-3.761 0-5.993 2.515-6.973 4.942-.364.868-.453 2.08-.453 3.292v22.696H39.329s.178-36.823 0-40.634h13.593v5.761c1.805-2.768 5.029-6.717 12.249-6.717 8.947 0 15.656 5.804 15.656 18.291v23.3zM52.834 46.199c.024-.038.056-.084.088-.128v.128h-.088z"></path>
                </svg>
              </div>
              <div className="flex w-8">
                <svg fill="#2563eb" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 16 16" id="instagram">
                  <path d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"></path>
                  <path d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"></path>
                  <circle cx="12.3" cy="3.7" r=".533"></circle>
                </svg>
              </div>
            </div>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-600">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
            <p className="text-gray-600 text-center italic">
              "Ingeniero financiero de la Universidad de Medellín con énfasis en mercados de capitales, con experiencia en los sectores financiero e inmobiliario."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurCoFounders;
