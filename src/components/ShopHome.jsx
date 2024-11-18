import { ButtonShop } from "./Buttons"
import { CardShop } from "./Cards"



export default function ShopHome() {
    const packages = [
        {
            vites: 1,
            price: 2200000,
            image: "/Home/shop (1).webp",
            bestSeller: false,
        },
        {
            vites: 5,
            price: 10670000,
            image: "/Home/shop (1).webp",
            bestSeller: true,
        },
        {
            vites: 10,
            price: 20900000,
            image: "/Home/shop (1).webp",
            bestSeller: false,
        },
        {
            vites: 20,
            price: 39600000,
            image: "/Home/shop (1).webp",
            bestSeller: false,
        },
    ]

    const formatPrice = (price) => {
        return new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        })
            .format(price)
            .replace("COP", "$")
    }

    return (
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex md:flex-row flex-col gap-8 mb-12">
                    <h2 className="md:text-left text-center text-4xl w-full md:text-5xl font-bold text-green-950" style={{ lineHeight: "1.2" }}>
                        Escoge el{" "}
                        <span className="text-green-700">Paquete Adecuado</span>
                        <br />
                        <span className="md:visible hidden">Para tu Objetivo</span>
                    </h2>
                    <div className="lg:text-left flex-0.2">
                        <h3 className="md:text-left text-center text-xl font-semibold text-green-950 mb-2">¿Qué es un Vite?</h3>
                        <p className="text-gray-600 md:text-left text-center ">
                            Un Vite equivale a la cosecha de 1 árbol de aguacate Hass durante{" "}
                            <span className="font-semibold">20 años</span>.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {packages.map((pkg, index) => (
                        <CardShop key={index} className="relative">
                            {pkg.bestSeller && (
                                <div className="absolute top-4 left-4 bg-yellow-400 text-green-950 px-3 py-1 rounded-full flex items-center gap-1 font-medium z-10">
                                    {/* <Flame className="h-4 w-4" /> */}
                                    Mejor Vendido
                                </div>
                            )}
                            <div className="aspect-square relative p-2 rounded-[15px]">
                                <img
                                    src={pkg.image}
                                    alt={`${pkg.vites} Vites package`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="w-full h-full rounded-[15px]"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-green-950">{pkg.vites} Vite{pkg.vites > 1 ? 's' : ''}</h3>
                                    <div className="text-right">
                                        <p className="text-sm text-gray-500">Precio:</p>
                                        <p className="text-lg font-semibold text-green-700">{formatPrice(pkg.price)}</p>
                                    </div>
                                </div>
                                <ButtonShop className="w-full">
                                    🛒 Comprar ahora
                                </ButtonShop>
                                <p className="mt-4 text-sm text-gray-600 text-center">
                                    Un Vite equivale a la cosecha de 1 árbol de aguacate Hass durante 20 años.
                                </p>
                            </div>
                        </CardShop>
                    ))}
                </div>
            </div>
        </div>
    )
}