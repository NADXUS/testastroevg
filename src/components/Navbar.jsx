import { useState } from "react";
import { ButtonDefault } from "./Buttons";

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="container mx-auto py-5 px-5 md:px-20">
            <nav className="flex items-center justify-between py-4">
                <a href="/" className="flex items-center gap-2">
                    <img
                        src="/Home/Logop.webp"
                        alt="Avovite Logo"
                        height={40}
                        className="h-10"
                    />
                </a>
                <div className="hidden md:flex items-center gap-6 relative">
                    <a href="/" className="text-green-700 hover:text-green-800 text-sm">
                        Inicio
                    </a>
                    <a href="/about" className="text-gray-600 hover:text-gray-800 text-sm">
                        Nosotros
                    </a>
                    <a href="/knowthebusiness" className="text-gray-600 hover:text-gray-800 text-sm">
                        Conoce el negocio
                    </a>
                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="text-gray-600 hover:text-gray-800 text-sm flex items-center"
                        >
                            Cultivando historias
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-4 h-4 ml-1"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-md rounded-md py-2 z-10">
                                <a
                                    href="/blog"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    Blog
                                </a>
                                <a
                                    href="/testimonials"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    Testimonios
                                </a>
                                <a
                                    href="/multimedia"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    Multimedia
                                </a>
                            </div>
                        )}
                    </div>
                    <a href="/shop" className="text-gray-600 hover:text-gray-800 text-sm">
                        Comprar ahora
                    </a>
                    <a href="/formulario" className="text-gray-600 hover:text-gray-800 text-sm">
                        Quiero ser Parte
                    </a>
                </div>
                <ButtonDefault>Ingresar</ButtonDefault>
            </nav>
        </header>
    );
};

export default NavBar;