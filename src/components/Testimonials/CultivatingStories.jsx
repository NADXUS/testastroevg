const CultivatingStories = () => {
    const blogs = [
        {
            id: 1,
            title: "Testimonio - Natalia Patiño",
            durantion: "8 min",
            date: "21 Ago 2024",
            video: "https://youtu.be/73kspdrXuPc",
        },
        {
            id: 2,
            title: "🥑Invertí en una finca de AGUACATES con 2 Millones de pesos (mira las GANANCIAS💰)",
            durantion: "8 min",
            date: "21 Ago 2024",
            video: "https://youtu.be/REoDkdBwSVA",
        },
        {
            id: 3,
            title: "💰MIS AHORROS los estoy invirtiendo en un CULTIVO DE AGUACATES 🥑 Un negocio....",
            durantion: "8 min",
            date: "21 Ago 2024",
            video: "https://youtu.be/7dN1wB0zNIs",
        },
        {
            id: 4,
            title: "Testimonio - Liliana Sanchez",
            durantion: "8 min",
            date: "21 Ago 2024",
            video: "https://youtu.be/dgZx2r2wDqU",
        },
    ];

    function convertToEmbedUrl(url) {
        let videoId;

        if (url.includes("youtube.com/watch?v=")) {
            videoId = url.split("v=")[1]?.split("&")[0];
        } else if (url.includes("youtu.be/")) {
            videoId = url.split("youtu.be/")[1];
        } else if (url.includes("youtube.com/shorts/")) {
            videoId = url.split("shorts/")[1]?.split("?")[0];
        }

        return `https://www.youtube.com/embed/${videoId}`;
    }

    return (
        <section className="bg-white py-10 max-w-7xl mx-auto">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-20 mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold md:font-semibold text-gray-800">Historias Reales De Avovite</h2>
                    <p className="text-gray-600">
                        Escuche directamente a nuestros clientes sobre su experiencia invirtiendo con Avovite y el impacto duradero del cultivo sustentable de aguacate Hass.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-20">
                    {blogs.map((blog, index) => (
                        <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden">
                            <div className="relative">
                                <iframe
                                    src={convertToEmbedUrl(blog.video)}
                                    title={blog.title}
                                    className="w-full aspect-video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                                    <span>{blog.date}</span>
                                    <span className="ml-auto">{blog.durantion}</span>
                                </div>
                                <h3 className="font-bold text-lg text-gray-800">{blog.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>)
}

export default CultivatingStories