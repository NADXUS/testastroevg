
function About() {
  return (
    <section className="py-20 px-5 bg-white max-w-7xl mx-auto">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <div className="lg:w-1/2">
            <p className="text-green-700 md:text-left text-center font-medium mb-2">Sobre Nosotros</p>
            <h2 className="text-4xl md:text-left text-center md:text-5xl font-bold text-gray-900 mb-6">Conoce Avovite</h2>
            <p className="text-gray-700 mb-6 text-lg md:text-left text-center ">
              Somos una empresa agrícola 100% legal y constituida en Colombia, especializada en la siembra, cosecha y venta de aguacate Hass de tipo exportación. Nuestro cultivo se encuentra en terreno propio en la región de Montebello, Antioquia.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 bg-[#4b6a4a] rounded-full text-white p-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p className="text-gray-700 text-lg">
                  Fundada durante la pandemia, cuando los sectores agrícola y tecnológico se mantuvieron resilientes.
                </p>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 bg-[#4b6a4a] rounded-full text-white p-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p className="text-gray-700 text-lg">
                  Lanzamos un proyecto innovador en 2021, combinando la agricultura con la tecnología para permitir que los inversionistas urbanos participen en el cultivo de aguacate.
                </p>
              </li>
            </ul>
          </div>
          <div className="lg:w-[40%]">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/AboutUs/image15.webp"
                alt="Trabajadores de Avovite en el campo de aguacates"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
