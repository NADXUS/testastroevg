const CultivatingStories = () => {
    const blogs = [
        {
            date: "21 Ago 2024",
            title: "Testimonio - Natalia Patiño",
            duration: "8 min",
            videoUrl: "https://www.youtube.com/embed/example1",
        },
        {
            date: "21 Ago 2024",
            title: "Invertí en una finca de AGUACATES con 2 Millones de pesos (mira las GANANCIAS💰)",
            duration: "8 min",
            videoUrl: "https://www.youtube.com/embed/example2",
        },
        {
            date: "21 Ago 2024",
            title: "Testimonio - Natalia Patiño",
            duration: "8 min",
            videoUrl: "https://www.youtube.com/embed/example1",
        },
        {
            date: "21 Ago 2024",
            title: "Invertí en una finca de AGUACATES con 2 Millones de pesos (mira las GANANCIAS💰)",
            duration: "8 min",
            videoUrl: "https://www.youtube.com/embed/example2",
        },
    ];

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
                                    src={blog.videoUrl}
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
                                    <span className="ml-auto">{blog.duration}</span>
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