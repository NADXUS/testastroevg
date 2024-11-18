import { useState } from "react";

const Legal = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const documents = [
    "Cámara de Comercio",
    "RUT Avovite",
    "Contrato Estándar",
    "Presentación corporativa",
    "Informe de gestión 2021",
    "Informe de gestión 2022",
    "Informe de gestión 2023",
    "Escritura finca 1",
    "Escritura finca 2",
    "Escritura finca 3",
    "Escritura finca 4",
    "Escritura finca 5",
    "Escritura finca 6",
    "Póliza",
    "Simulador de cosechas y producción",
    "Certificado de uso de suelos",
  ];

  const faqs = [
    {
      question: "¿Que es un vite y cómo funciona Avovite?",
      answer: "texto de ejemplo",
    },
    {
      question: "¿Por qué Avovite considera que para un cliente puede ser atractivo adquirir los frutos con aras de una reventa por cuenta propia o de terceros?",
      answer: "texto de ejemplo",
    },
    {
      question: "¿Quiénes son los dueños de los terrenos?",
      answer: "texto de ejemplo",
    },
    {
      question: "¿Cómo determina Avovite el valor a cobrar de cada Vite?",
      answer: "texto de ejemplo",
    },
    {
      question: "¿Cuál es el valor comercial de los terrenos?",
      answer: "texto de ejemplo",
    },
    {
      question: "¿Cuál es el sustento financiero detrás del modelo de negocio?",
      answer: "texto de ejemplo",
    },
    {
      question: "¿Cuánto tardan en producirse las cosechas?",
      answer: "texto de ejemplo",
    },
    {
      question: "¿Cómo funciona la comercialización de frutos en general?",
      answer: "texto de ejemplo",
    },
    {
      question: "¿Cómo garantizan la transparencia en las operaciones?",
      answer: "texto de ejemplo",
    },
    {
      question: "¿Cómo se lleva la contabilidad?",
      answer: "texto de ejemplo",
    },
    {
      question: "¿Hay reuniones o actualizaciones periódicas para los clientes?",
      answer: "texto de ejemplo",
    },
    {
      question: "¿Qué representa para el cliente esto en términos contables?",
      answer: "texto de ejemplo",
    },
    {
      question: "¿Pueden retractarse los clientes de la compra?",
      answer: "texto de ejemplo",
    },
    {
      question: "¿Avovite garantiza algún tipo de rentabilidad?",
      answer: "texto de ejemplo",
    },
    {
      question: "¿Cómo maneja Avovite el componente social?",
      answer: "texto de ejemplo",
    },
    {
      question: "¿Qué tan viable es dicha reventa?",
      answer: "texto de ejemplo",
    },
    {
      question: "¿Cómo maneja Avovite el componente ambiental?",
      answer: "texto de ejemplo",
    },
  ];

  return (
    <>


      <section className="bg-white py-10 max-w-7xl mx-auto">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-semibold text-gray-800 mb-8" style={{ lineHeight: '1.2' }}>Documentos y <br /> Recursos Legales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center hover:shadow-md transition-shadow aspect-square text-center text-gray-800 font-semibold cursor-pointer h-[200px] w-full"
              >
                <span className="mb-2 text-xl">{doc}</span>
                <span className="text-2xl">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 max-w-7xl mx-auto">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-y-16 gap-x-8">
            {faqs.map((faq, index) => (
              <div key={index} className="w-full">
                <div
                  className="flex items-start justify-between gap-6 cursor-pointer"
                  onClick={() => toggleAnswer(index)}
                >
                  <p className="font-semibold text-gray-800 w-4/5 text-lg">{faq.question}</p>
                  <span className="text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className={`w-6 h-6 transition-transform transform ${activeIndex === index ? "rotate-180" : "rotate-0"}`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
                {activeIndex === index && (
                  <p className="mt-4 text-gray-600 transition-opacity duration-300 ease-in-out opacity-100">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Legal