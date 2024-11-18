const BlogSection = () => {
    const blogs = [
        {
            date: "3 julio 2024",
            title: "Inversiones Agrícolas con Avovite: Ahora puedes adquirir Vites y gestionar tu inversión en nuestra nueva plataforma",
            description: "En un mundo donde las inversiones pueden parecer complicadas y arriesgadas, Avovite llega para...",
            imageUrl: "/public/Blog/1.jpg",
            author: "Avovite",
        },
        {
            date: "17 junio 2024",
            title: "Aguacate Hass sostenible, la promesa de Avovite",
            description: "En Avovite, redefinimos la forma en que se cultiva el Aguacate Hass, enfocándonos en prácticas sostenibles...",
            imageUrl: "/public/Blog/1.jpg",
            author: "Avovite",
        },
        {
            date: "1 junio 2024",
            title: "¡Nos invitaron a Teleantioquia a conversar sobre Aguacate Hass!",
            description: "¡Nos invitaron a Teleantioquia a conversar sobre #AguacateHass!...",
            imageUrl: "/public/Blog/1.jpg",
            author: "Avovite",
        },
    ];

    return (
        <section className="bg-white py-10 max-w-7xl mx-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden">
                            <img src={blog.imageUrl} alt={blog.title} className="w-full h-48 object-cover rounded-xl" />
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="w-5 h-5 text-green-600"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 7V3m8 4V3m-9 4h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span>{blog.date}</span>
                                    <span className="ml-auto flex items-center gap-1">
                                        <div className="bg-green-600 rounded-full w-6 h-6 p-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 512 512" id="user" fill="white">
                                                <path d="M256 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 96v48h384v-48c0-63.598-128.402-96-192-96z"></path>
                                            </svg>
                                        </div>
                                        <span>{blog.author}</span>
                                    </span>
                                </div>
                                <h3 className="font-bold text-xl text-gray-800 mb-2">{blog.title}</h3>
                                <p className="text-gray-600">{blog.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;