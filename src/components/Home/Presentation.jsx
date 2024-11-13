import { ButtonDefault } from "../Buttons"


const Presentation = () => {
    return <div className="bg-white px-5">
        <header className="container mx-auto py-5 px-20">
            <nav className="flex items-center justify-between py-4">
                <a href="/" className="flex items-center gap-2">
                    <img
                        src="/Home/Logop.webp"
                        alt="Avovite Logo"
                        height={40}
                        className="h-10"
                    />
                </a>
                <div className="hidden md:flex items-center gap-6">
                    <a href="#" className="text-green-700 hover:text-green-800 text-sm">
                        Inicio
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">
                        Nosotros
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">
                        Conoce el negocio
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">
                        Cultivando historias
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">
                        Comprar ahora
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">
                        Quiero ser Parte
                    </a>
                </div>
                <ButtonDefault>Ingresar</ButtonDefault>
            </nav>
        </header>
        <main className="relative">
            <div className="absolute inset-0 z-0">
                <img
                    src="/Home/heroImage.webp"
                    alt="Aguacates frescos"
                    width={1920}
                    height={800}
                    className="h-full w-full object-cover rounded-[30px]"
                    priority
                />
                <div className="absolute inset-0" />
            </div>
            <div className="container relative z-10 mx-auto px-4 py-20 max-w-6xl pb-0">
                <div className="max-w-3xl">
                    <h1 className="mb-8 text-5xl font-bold text-white md:text-6xl" style={{ lineHeight: "1.2" }}>
                        Los frutos del aguacate HASS Colombiano son para todos "Cultivamos y vendemos por ti"
                    </h1>
                    <div className="flex gap-4">
                        <ButtonDefault className="px-8 py-2 text-lg">Empezar</ButtonDefault>
                        <ButtonDefault className="px-8 py-2 text-lg">Explorar</ButtonDefault>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <div className="mt-12 flex gap-12 bg-[#22482280] p-6 backdrop-blur-sm max-w-fit rounded-[30px] w-full">
                        <div className="text-left space-y-3">
                            <p className="text-5xl text-yellow-300">99%</p>
                            <p className="text-white text-1xl">Clientes satisfechos</p>
                        </div>
                        <div className="text-left space-y-3">
                            <p className="text-5xl text-yellow-300">10+</p>
                            <p className="text-white text-1xl">Años de experiencia</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
}

export default Presentation