export default function AvoviteInMedia() {
  const mediaLogos = [
    // Primera fila
    { name: 'Portafolio', src: '/Home/media/media (1).webp' },
    { name: 'El Espectador', src: '/Home/media/media (2).webp' },
    { name: 'Semana', src: '/Home/media/media (3).webp' },
    { name: 'HSB', src: '/Home/media/media (4).webp' },
    { name: 'Extra', src: '/Home/media/media (5).webp' },
    { name: 'Pulzo', src: '/Home/media/media (6).webp' },
    // Segunda fila
    { name: 'Antioquía', src: '/Home/media/media (7).webp' },
    { name: 'El Quindiano', src: '/Home/media/media (8).webp' },
    { name: 'El Nuevo Siglo', src: '/Home/media/media (9).webp' },
    { name: 'La FM', src: '/Home/media/media (10).webp' },
    { name: 'Primera Página', src: '/Home/media/media (11).webp' },
    { name: 'Agro Negocios', src: '/Home/media/media (12).webp' },
    // Tercera fila
    { name: 'Diario Occidente', src: '/Home/media/media (13).webp' },
    { name: 'La Nota Económica', src: '/Home/media/media (14).webp' },
    { name: 'Diario del Sur', src: '/Home/media/media (15).webp' },
    { name: 'Diario del Cauca', src: '/Home/media/media (16).webp' },
    { name: 'Almacenistas', src: '/Home/media/media (17).webp' },
    { name: 'IT Online', src: '/Home/media/media (18).webp' },
    // Cuarta fila
    { name: 'Radar Tecnológico', src: '/Home/media/media (19).webp' },
    { name: 'El Frente', src: '/Home/media/media (20).webp' },
    { name: 'MSN', src: '/Home/media/media (21).webp' },
  ]

  return (
    <section className="py-16 px-4 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-16">
          Avovite En Medios
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {mediaLogos.map((logo, index) => (
            <div
              key={index}
              className="aspect-square relative bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="absolute inset-4">
                <img
                  src={logo.src}
                  alt={`Logo de ${logo.name}`}
                  fill
                  className="object-contain rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}