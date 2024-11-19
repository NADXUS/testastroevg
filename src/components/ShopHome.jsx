import { ButtonShop } from "./Buttons"
import { CardShop } from "./Cards"
import useCart from "./../Hooks/useCart";
import { useEffect, useState } from "react";

export default function ShopHome() {
    const cart = useCart() || [];
    const [, { push }] = cart;
    const [IsLoading, setIsLoading] = useState(null)

    const packages = [
        {
            id: 7,
            title: "1 Vite",
            price: "$2,200,000",
            image: "/Home/shop/shop (1).webp",
            bestSelling: false,
            imageUrl: "/042280df-1176-4871-9ce3-292911ef2d44.jpg",
            discountId: 11,
            quantity: 1,
            percentDiscount: 0,
        },
        {
            id: 8,
            title: "5 Vites",
            price: "$10,670,000",
            image: "/Home/shop/shop (2).webp",
            bestSelling: true,
            imageUrl: "/492cbaf9-b53f-4825-b673-5f34060c6f1c.jpg",
            discountId: 13,
            quantity: 5,
            percentDiscount: 3,
        },
        {
            id: 9,
            title: "10 Vites",
            price: "$20,900,000",
            image: "/Home/shop/shop (3).webp",
            bestSelling: false,
            imageUrl: "/cce88bc0-d252-4913-9a60-9d743e960c2b.jpg",
            discountId: 12,
            quantity: 10,
            percentDiscount: 5,
        },
        {
            id: 4,
            title: "20 Vites",
            price: "$39,600,000",
            image: "/Home/shop/shop (4).webp",
            bestSelling: false,
            imageUrl: "/492cbaf9-b53f-4825-b673-5f34060c6f1c.jpg",
            discountId: 15,
            quantity: 20,
            percentDiscount: 10,
        },
    ];

    useEffect(() => {
        const imagePromises = packages.map((pkg) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = pkg.image;
                img.onload = resolve;
            });
        });

        Promise.all(imagePromises).then(() => {
            setTimeout(() => setIsLoading(false), 100);
        });

        return () => setIsLoading(true);
    }, []);

    const addToCart = (pkg) => {
        const item = {
            id_product: pkg.id,
            id_discount: pkg.discountId,
            product_name: pkg.id !== 7 ? "VITES" : "VITE",
            unitary_price: 2200000,
            url_image: `https://conexiones-star.concilbot.com/fileblocks/avovite${pkg.imageUrl}`,
            discount_name: "PACK STANDARD",
            quantity: pkg.quantity,
            percent_discount: pkg.percentDiscount,
        };

        push(item);
        window.location.href = "/shop";
    };


    return (
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex md:flex-row flex-col gap-8 mb-12">
                    <h2 className="md:text-left text-center text-4xl w-full md:text-5xl font-bold text-green-950" style={{ lineHeight: "1.2" }}>
                        Escoge el{" "}
                        <span className="text-[#0D524C]">Paquete Adecuado</span>
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
                            {pkg.bestSelling && (
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
                                    <h3 className="text-2xl font-bold text-green-950">{pkg.title}</h3>
                                    <div className="text-right">
                                        <p className="text-sm text-gray-500">Precio:</p>
                                        <p className="text-lg font-semibold text-green-700">{pkg.price}</p>
                                    </div>
                                </div>
                                <ButtonShop className="w-full" onClick={() => addToCart(pkg)}>
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