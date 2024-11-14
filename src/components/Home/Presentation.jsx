import { ButtonDefault } from "../Buttons"
import NavBar from "../Navbar"

const Presentation = () => {
    return (
        <div className="bg-white px-5">
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
                <div className="container relative z-10 mx-auto px-4 py-10 pb-0 md:pt-20 max-w-6xl">
                    <div className="max-w-3xl">
                        <h1
                            className="mb-8 text-2xl sm:text-5xl md:text-6xl md:font-bold text-white md:text-left text-center"
                            style={{ lineHeight: "1.2" }}
                        >
                            Los frutos del aguacate HASS Colombiano son para todos "Cultivamos y vendemos por ti"
                        </h1>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <ButtonDefault className="px-4 md:px-8 py-2 text-lg">
                                Empezar
                            </ButtonDefault>
                            <ButtonDefault className="px-4 md:px-8 py-2 text-lg">
                                Explorar
                            </ButtonDefault>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <div className="mt-12 flex flex-col sm:flex-row gap-6 sm:gap-12 bg-[#22482280] p-6 backdrop-blur-sm rounded-[30px] w-full sm:w-auto">
                            <div className="text-left space-y-3">
                                <p className="text-center md:text-left text-4xl sm:text-5xl text-yellow-300">99%</p>
                                <p className="text-center md:text-left text-white text-xl">Clientes satisfechos</p>
                            </div>
                            <div className="text-left space-y-3">
                                <p className="text-center md:text-left text-4xl sm:text-5xl text-yellow-300">10+</p>
                                <p className="text-center md:text-left text-white text-xl">Años de experiencia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Presentation
