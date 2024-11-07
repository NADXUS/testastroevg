import React, { useState } from 'react';

export default function Presentation() {
    const [modal, setModal] = useState(null);

    const navItems = [
        { text: 'Acerca de', action: () => setModal('about') },
        { text: 'Entrenadores', href: '#CoachesSection' },
        { text: 'Logo', src: '/imgs/Logo-min.svg' },
        { text: 'Contacto', href: '#GallerySection' },
        { text: 'Únete ahora', href: 'https://www.quickticket.com.co/unlock-the-game', target: '_blank' },
    ];

    return (
        <div className="relative h-screen overflow-hidden bg-black bg-opacity-70 bg-blend-multiply bg-cover bg-center bg-no-repeat md:bg-opacity-0"
            style={{ backgroundImage: "url('/imgs/home-min.webp')" }}>
            {modal === 'about' && <AboutDialog onClose={() => setModal(null)} />}
            <div className="container mx-auto px-4">
                {/* Navigation */}
                <nav className="hidden py-2 md:flex justify-between items-center mt-8">
                    <div className="opacity-0">Search</div>
                    <ul className="flex space-x-8 items-center text-white">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                {item.src ? (
                                    <img src={item.src} alt="Logo" className="w-24 h-12 object-contain" />
                                ) : (
                                    <a
                                        href={item.href}
                                        target={item.target}
                                        onClick={item.action}
                                        className="hover:text-orange-500 transition-colors"
                                    >
                                        {item.text}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className="opacity-0">Menu</div>
                </nav>

                {/* Hero Content */}
                <main className="py-4 md:py-8 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 relative z-10 mt-20 md:space-y-10">
                    <div className="w-full md:w-3/5 space-y-3 flex gap-3 flex-col">
                        <div className="text-orange-500 font-bold tracking-wider">UNLOCK THE GAME</div>
                        <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
                            ELEVATE YOUR GAME ELITE{' '}
                            <span className="text-orange-500">BASKETBALL TRAINING</span>
                        </h1>
                        <p className="text-gray-400 max-w-xl">
                            Entrena con los mejores entrenadores, mejora tus habilidades y desbloquea tu potencial. EVG Camp ofrece una experiencia transformadora para llevar tu desempeño al siguiente nivel.
                        </p>
                        <CountdownSectionSmall />
                        <div className="flex items-center space-x-2">
                            <a
                                href="https://www.instagram.com/evgtraining"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-orange-500 transition-colors flex items-center space-x-1"
                            >
                                <img src="/imgs/socialIcons/icons (3)-min.svg" alt="Instagram" className="w-6 h-6" />
                                <span>Instagram / evgtraining</span>
                            </a>
                        </div>
                        <div className="flex flex-col gap-4 sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                            <ShopButton />
                            <a
                                href="#VideoContainer"
                                className="flex items-center space-x-2 text-white hover:text-orange-500 transition-colors"
                            >
                                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center border-2 border-orange-700">
                                    <img src="/imgs/icons/arrow-min.svg" className='w-3 h-3' />
                                </div>
                                <span>Mira el vídeo de introducción</span>
                            </a>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

function AboutDialog({ onClose }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">Acerca de</h2>
                <p className="mb-4">Información sobre Unlock the Game...</p>
                <button
                    onClick={onClose}
                    className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
}

function CountdownSectionSmall() {
    return (
        <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-white text-center">Countdown placeholder</p>
        </div>
    );
}

function ShopButton() {
    return (
        <a
            href="#shop"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors inline-block text-center"
        >
            Comprar ahora
        </a>
    );
}