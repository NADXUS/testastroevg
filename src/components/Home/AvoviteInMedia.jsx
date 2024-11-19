export default function AvoviteInMedia() {

  const mediaLogos = [
    {
      name: "Portafolio",
      logo: "/Home/media/media (1).webp",
      link: "https://www.portafolio.co/emprendimiento/este-es-el-que-da-beneficios-por-medio-del-cultivo-de-aguacate-hass-609504",
    },
    {
      name: "El Espectador",
      logo: "/Home/media/media (2).webp",
      link: "https://www.elespectador.com/economia/emprendimiento-y-liderazgo/la-empresa-de-agro-que-cultiva-y-comercializa-aguacate-hass-en-colombia/",
    },
    {
      name: "Semana",
      logo: "/Home/media/media (3).webp",
      link: "https://www.semana.com/economia/emprendimiento/articulo/como-ganar-dinero-vendiendo-aguacate-hass-sin-saber-de-agricultura/202441/",
    },
    { name: "HSB", logo: "/Home/media/media (4).webp", link: "https://www.hsbnoticias.com/asi-se-ve-el-panorama-en-la-inversion-agricola-en-colombia/" },
    { name: "Extra", logo: "/Home/media/media (5).webp", link: "https://extra.com.co/asi-se-ve-el-panorama-en-la-inversion-agricola-en-colombia/" },
    {
      name: "Pulso",
      logo: "/Home/media/media (6).webp",
      link: "https://www.pulzo.com/economia/que-tan-rentable-es-negocio-aguacate-asi-puede-ganar-dinero-PP3803188",
    },
    { name: "Teleantioquia", logo: "/Home/media/media (7).webp", link: "https://www.youtube.com/watch?v=UNxX9WCFtKg" },
    {
      name: "El Quindiano",
      logo: "/Home/media/media (8).webp",
      link: "https://elquindiano.com/noticia/102581/nuevo-negocio-adquirir-la-produccion-de-un-arbol-de-aguacate-a-20-anos/",
    },
    {
      name: "El Nuevo Siglo",
      logo: "/Home/media/media (9).webp",
      link: "https://www.elnuevosiglo.com.co/economia/emprendedores-crean-modelo-de-participacion-en-la-exportacion-de-aguacate-hass",
    },
    {
      name: "La FM",
      logo: "/Home/media/media (10).webp",
      link: "https://www.lafm.com.co/estilo-de-vida/el-lucrativo-emprendimiento-del-que-usted-tambien-puede-hacer-parte-con-poca",
    },
    { name: "Primera Pagina", logo: "/Home/media/media (11).webp", link: "https://www.youtube.com/watch?v=9gVOG84ONhM" },
    {
      name: "Agro Negocios",
      logo: "/Home/media/media (12).webp",
      link: "https://www.agronegocios.co/tecnologia/conozca-la-app-que-le-podra-permitir-emprender-con-su-cosecha-de-aguacate-hass-3967986",
    },
    {
      name: "Diario Occidente",
      logo: "/Home/media/media (13).webp",
      link: "https://m.occidente.co/empresario/lanzan-app-para-emprender-en-cosechas-futuras-de-aguacate-hass",
    },
    {
      name: "La Nota Económica",
      logo: "/Home/media/media (14).webp",
      link: "https://lanotaeconomica.com.co/movidas-empresarial/vite-la-nueva-medida-de-inversion-para-la-exportacion-de-aguacate-hass-en-colombia/",
    },
    {
      name: "Diario del Sur",
      logo: "/Home/media/media (15).webp",
      link: "https://www.diariodelsur.com.co/asi-se-ve-el-panorama-en-la-inversion-agricola-en-colombia/",
    },
    {
      name: "Diario del Cauca",
      logo: "/Home/media/media (16).webp",
      link: "https://diariodelcauca.com.co/asi-se-ve-el-panorama-en-la-inversion-agricola-en-colombia/",
    },
    {
      name: "América Retail",
      logo: "/Home/media/media (17).webp",
      link: "https://america-retail.com/paises/colombia/revolucionando-la-inversion-agricola-la-nueva-oportunidad-en-la-exportacion-de-aguacate-hass-en-colombia/",
    },
    { name: "IT en Línea", logo: "/Home/media/media (18).webp", link: "https://itenlinea.com/avovite-primera-fintech-colombiana-del-sector-de-aguacate-hass/" },
    {
      name: "Radar Tecnológico",
      logo: "/Home/media/media (19).webp",
      link: "https://radartecnologico.com/28546/innovacion/avovite-la-primera-fintech-disenada-para-vender-aguacate-hass/",
    },
    { name: "MSN", logo: "/Home/media/media (20).webp", link: "https://elfrente.com.co/avovite-app/" },
    {
      name: "El Frente",
      logo: "/Home/media/media (21).webp",
      link: "https://www.msn.com/es-co/noticias/other/c%C3%B3mo-ganar-dinero-vendiendo-aguacate-hass-sin-saber-de-agricultura/ar-BB1pSCao",
    },
  ];

  return (
    <section className="py-16 px-4 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#0a4741] mb-16">
          Avovite En Medios
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {mediaLogos.map((logo, index) => (
            <div
              key={index}
              className="aspect-square relative bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="absolute inset-4">
                <a href={logo.link} target="_blank">
                  <img
                    src={logo.logo}
                    alt={`Logo de ${logo.name}`}
                    fill
                    className="object-contain rounded-full"
                    target="_blank"
                  />
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}