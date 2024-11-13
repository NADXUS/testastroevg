import { ButtonDefault } from "../Buttons"

const Button = ({ children, className, ...props }) => (
  <button
    className={`inline-flex items-center gap-2 bg-yellow-300 hover:bg-yellow-400 text-green-950 font-semibold rounded-full px-6 py-3 ${className}`}
    {...props}
  >
    {children}
  </button>
)

const StepCard = ({ number, title, description, imageSrc }) => (
  <div className="bg-white rounded-2xl p-5 shadow-lg">
    <div className="aspect-square relative rounded-xl overflow-hidden mb-6">
      <img
        src={imageSrc}
        alt={title}
        fill
        className="object-cover w-full h-full"
      />
    </div>
    <div className="space-y-2">
      <p className="text-green-700 font-medium">Paso {number}</p>
      <h3 className="text-2xl font-bold text-green-950">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
)

export default function Works() {
  const steps = [
    {
      number: 1,
      title: "Elige tu Paquete",
      description: "Selecciona la cantidad de plantas de aguacate que deseas poseer",
      imageSrc: "/Home/works1.webp"
    },
    {
      number: 2,
      title: "Sigue tu Progreso",
      description: "Recibe actualizaciones sobre tus plantas y cosechas en tiempo real a través de nuestro panel de control",
      imageSrc: "/Home/works1.webp"
    },
    {
      number: 3,
      title: "Cosecha y Gana",
      description: "Recibe pagos regulares basados en los rendimientos de la cosecha y los precios del mercado",
      imageSrc: "/Home/works1.webp"
    }
  ]

  return (
    <div className="relative py-20">
      <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('/Home/worksbg.webp')",
      }} />

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <p className="text-yellow-300 font-medium">Cómo Funciona</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Comience su Viaje de
            <br />
            Inversor
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {steps.map((step) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              imageSrc={step.imageSrc}
            />
          ))}
        </div>

        <div className="text-center">
          <a href="/comprar">
            <ButtonDefault>
              Quiero comprar
              {/*  <ArrowRight className="w-5 h-5" /> */}
            </ButtonDefault>
          </a>
        </div>
      </div>
    </div>
  )
}