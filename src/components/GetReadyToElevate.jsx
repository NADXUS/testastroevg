import React from 'react';
import ShopButton from './ShopButton';

export default function GetReadyToElevate() {
    return (
        <div className="bg-[#000b11] bg-cover bg-center min-h-screen flex items-center py-4 md:py-8 px-5 md:px-20"
            style={{ backgroundImage: "url('/imgs/bg2-min.webp')" }}>
            <div className="container mx-auto flex justify-center items-center">
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
                    {/* Sección de Imagen */}
                    <div className="relative w-full md:w-2/5">
                        <img
                            src="/imgs/elevate-min.webp"
                            alt="Jugador de baloncesto con camiseta amarilla"
                            className="w-full h-auto rounded-3xl relative z-10 object-cover aspect-[4/5]"
                        />
                    </div>

                    {/* Sección de Contenido */}
                    <div className="w-full md:w-[55%]">
                        <p className="text-[#E65525] font-semibold mb-2 tracking-wider">
                            GET READY TO ELEVATE
                        </p>

                        <h1 className="text-white text-2xl md:text-4xl font-bold leading-tight mb-3">
                            Entra en la Experiencia Definitiva de Campamento de Entrenamiento de Baloncesto
                        </h1>

                        <p className="text-[#94A3B8] text-lg leading-relaxed mb-4 max-w-[600px]">
                            El Campamento EVG ofrece una experiencia intensiva de entrenamiento de baloncesto
                            diseñada para mejorar tus habilidades, estrategia y confianza. Dirigido por
                            entrenadores y preparadores de renombre mundial, nuestro campamento se enfoca en cada aspecto del juego: desde técnicas fundamentales hasta estrategias avanzadas.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-4">
                            <div className="flex items-center gap-2">
                                <img loading="lazy" src="/imgs/elevateIcons/elevate (1).svg" alt="" className="w-6 h-6" />
                                <div>
                                    <p className="text-white font-semibold">
                                        06-08
                                    </p>
                                    <p className="text-[#94A3B8]">
                                        Diciembre 2024
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <img loading="lazy" src="/imgs/elevateIcons/elevate (2).svg" alt="" className="w-6 h-6" />
                                <div>
                                    <p className="text-white font-semibold">
                                        Medellín - Colombia
                                    </p>
                                    <p className="text-[#94A3B8]">
                                        Polideportivo de Itagüí
                                    </p>
                                </div>
                            </div>
                        </div>

                        <ShopButton fullWidth={false} />
                    </div>
                </div>
            </div>
        </div>
    );
}