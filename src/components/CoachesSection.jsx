import React from 'react';

export default function CoachesSection() {
    const coaches = [
        {
            name: "TIM MARTIN",
            description:
                "Entrenador clave en el desarrollo de talentos a nivel mundial y en la mejor liga del baloncesto del mundo. Una leyenda que en la actualidad es el entrenador de Victor Wembayama el mayor prospecto de la NBA, Trae Young el point guard de los Atlanta Hawks entre otros.",
            image: "/imgs/Meet the Experts/img (1)-min.webp",
            instagramLink: "https://www.instagram.com/timmartinbball?igsh=OTNvdDY5eWtpMXU4",
            instagramName: "timmartinbball",
        },
        {
            name: "RAUL SOSA",
            description:
                "Entrenador y Fundador de Dream Chaser Basketball Director Físico del Equipo Profesional de Puerto Rico.",
            image: "/imgs/Meet the Experts/img (2)-min.webp",
            instagramLink: "https://www.instagram.com/dreamchaserbball?igsh=MWRhN3hzYWNpa2Yweg==",
            instagramName: "dreamchaserbball",
        },
        {
            name: "A.J. SKILLS",
            description:
                "Un experto en el arte de las habilidades profesionales en el baloncesto.",
            image: "/imgs/Meet the Experts/img (3)-min.webp",
            instagramLink: "https://www.instagram.com/ajskills_academy?igsh=MXV0NDVlbGcwOGViMg==",
            instagramName: "ajskills_academy",
        },
        {
            name: "THOMAS MACHADO",
            description:
                "Entrenador de renombre e influencer de NBA Latam.",
            image: "/imgs/Meet the Experts/img (4)-min.webp",
            instagramLink: "https://www.instagram.com/thomas.dunkeros?igsh=MWN4dHl1eHd2bDJyYg==",
            instagramName: "thomas.dunkeros",
        },
        {
            name: "GIO MUÑOZ",
            description:
                "Fundador de EVG TRAINING, un centro de alto rendimiento en Medellín que ha liderado un movimiento de jugadores, entrenadores y marcas desde 2010.",
            image: "/imgs/Meet the Experts/img (5)-min.webp",
            instagramLink: "https://www.instagram.com/gio_munoz24?igsh=M3h6ZmQ2cjY0eG9r",
            instagramName: "gio_munoz24",
        },
        {
            name: "RG SKILLS COACH",
            description:
                "Entranador de habilidades especialista en footwork hand skills ball handling, integrante de diferentes selecciones atlántico y santander juveniles y mayores",
            image: "/imgs/Meet the Experts/img (6)-min.webp",
            instagramLink: "https://www.instagram.com/rg.skillsacademy?igsh=ajEyMGttczZhbDZj",
            instagramName: "rg.skillsacademy",
        },
    ];

    const CoachCard = ({ coach }) => (
        <div className="relative rounded-3xl overflow-hidden border border-[rgba(230,85,37,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(230,85,37,0.1)] outline outline-3 outline-[rgba(233,87,29,1)]">
            <div className="flex flex-col sm:flex-row p-3 gap-3">
                <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-full sm:w-2/5 object-cover rounded-2xl aspect-square sm:aspect-[3/4]"
                />
                <div className="flex-1">
                    <h3 className="text-white text-2xl mb-1">{coach.name}</h3>
                    <p className="text-[#94A3B8] text-base mb-3">{coach.description}</p>
                    <div className="flex gap-1 mb-3">
                        {coach.instagramLink && (
                            <a
                                href={coach.instagramLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-[#ff4d00] transition-colors"
                            >
                                <span className="flex items-center gap-1">
                                    <img loading="lazy" src="/imgs/socialIcons/icons (3).svg" alt="" className="w-6 h-6" />
                                    Instagram / {coach.instagramName}
                                </span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section className="bg-[#001524] py-6 md:py-10 bg-cover bg-center bg-no-repeat px-5 md:px-20" style={{ backgroundImage: "url('/imgs/bg4-min.webp')" }}>
            <div className="container mx-auto max-w-7xl">
                <p className="text-[#E65525] text-center font-semibold mb-2 tracking-widest">
                    MEET THE EXPERTS
                </p>
                <h2 className="text-white text-center text-2xl md:text-4xl font-bold mb-3">
                    Entrenadores de Clase Mundial Dedicados a Tu Crecimiento
                </h2>
                <p className="text-[#94A3B8] text-center max-w-3xl mx-auto mb-8">
                    Nuestro equipo de entrenadores élite combina años de experiencia profesional con una pasión por la enseñanza. Cada entrenador aporta conocimientos y estrategias únicas, ayudándote a perfeccionar tus habilidades y elevar tu juego.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-3 md:px-15">
                    {coaches.map((coach, index) => (
                        <CoachCard key={index} coach={coach} />
                    ))}
                </div>
            </div>
        </section>
    );
}