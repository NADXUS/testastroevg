import { useEffect, useState } from "react";
import { ButtonDefault } from "./Buttons";

const NavBar = ({ activeRoute = "/" }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [floatNavBar, setfloatNavBar] = useState(true)

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const SignInRedirect = () => {
        const apiUrl = import.meta.env.PUBLIC_APP_URL;
        if (apiUrl) {
            window.location.href = apiUrl;
        }
        return null;
    };

    useEffect(() => {
        const handleScroll = () => {
            // Cambia el estado según el desplazamiento vertical
            if (window.scrollY > 20) {
                setfloatNavBar(false);
            } else {
                setfloatNavBar(true);
            }
        };

        // Agrega el event listener de scroll
        window.addEventListener("scroll", handleScroll);

        // Limpia el event listener al desmontar el componente
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    //#b4d564

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
                    <a href="/" className="text-green-700 hover:text-green-800 text-sm" style={{
                        fontWeight: activeRoute === "/" ? "bold" : "normal",
                        color: activeRoute === "/" ? "#b4d564" : "#0E1D0E"
                    }}>
                        Inicio
                    </a>
                    <a href="/about" className="text-gray-600 hover:text-gray-800 text-sm" style={{
                        fontWeight: activeRoute === "/about" ? "bold" : "normal",
                        color: activeRoute === "/about" ? "#b4d564" : "#0E1D0E"
                    }}>
                        Nosotros
                    </a>
                    <a href="/knowthebusiness" className="text-gray-600 hover:text-gray-800 text-sm" style={{
                        fontWeight: activeRoute === "/knowthebusiness" ? "bold" : "normal",
                        color: activeRoute === "/knowthebusiness" ? "#b4d564" : "#0E1D0E"
                    }}>
                        Conoce el negocio
                    </a>
                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="text-gray-600 hover:text-gray-800 text-sm flex items-center"
                            style={{
                                fontWeight: activeRoute === "/blog" || activeRoute === "/testimonials" || activeRoute === "/multimedia" || activeRoute === "/multimedia" ? "bold" : "normal",
                                color: activeRoute === "/blog" || activeRoute === "/testimonials" || activeRoute === "/multimedia" || activeRoute === "/multimedia" ? "#b4d564" : "#0E1D0E"
                            }}
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
                                    style={{
                                        fontWeight: activeRoute === "/blog" ? "bold" : "normal",
                                        color: activeRoute === "/blog" ? "#b4d564" : "#0E1D0E"
                                    }}
                                >
                                    Blog
                                </a>
                                <a
                                    href="/testimonials"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    style={{
                                        fontWeight: activeRoute === "/testimonials" ? "bold" : "normal",
                                        color: activeRoute === "/testimonials" ? "#b4d564" : "#0E1D0E"
                                    }}
                                >
                                    Testimonios
                                </a>
                                {/* <a
                                    href="/multimedia"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    style={{
                                        fontWeight: activeRoute === "/multimedia" ? "bold" : "normal",
                                        color: activeRoute === "/multimedia" ? "#b4d564" : "#0E1D0E"
                                    }}
                                >
                                    Multimedia
                                </a> */}
                            </div>
                        )}
                    </div>
                    <a href="/shop" className="text-gray-600 hover:text-gray-800 text-sm" style={{
                        fontWeight: activeRoute === "/shop" ? "bold" : "normal",
                        color: activeRoute === "/shop" ? "#b4d564" : "#0E1D0E"
                    }}>
                        Comprar ahora
                    </a>
                    <a href="/formulario" className="text-gray-600 hover:text-gray-800 text-sm" style={{
                        fontWeight: activeRoute === "/formulario" ? "bold" : "normal",
                        color: activeRoute === "/formulario" ? "#b4d564" : "#0E1D0E"
                    }}>
                        Quiero ser Parte
                    </a>
                </div>
                <ButtonDefault onClick={() => SignInRedirect()}>Ingresar</ButtonDefault>
            </nav>

            {!floatNavBar &&
                <nav className="flex items-center justify-between py-4 fixed top-0 left-0 right-0 bg-white z-20 px-5 mt-3 rounded-full shadow-lg max-w-[89rem] mx-auto ">
                    <a href="/" className="flex items-center gap-2">
                        <img
                            src="/Home/Logop.webp"
                            alt="Avovite Logo"
                            height={40}
                            className="h-10"
                        />
                    </a>
                    <div className="hidden md:flex items-center gap-6 relative">
                        <a href="/" className="text-green-700 hover:text-green-800 text-sm" style={{
                            fontWeight: activeRoute === "/" ? "bold" : "normal",
                            color: activeRoute === "/" ? "#b4d564" : "#0E1D0E"
                        }}>
                            Inicio
                        </a>
                        <a href="/about" className="text-gray-600 hover:text-gray-800 text-sm" style={{
                            fontWeight: activeRoute === "/about" ? "bold" : "normal",
                            color: activeRoute === "/about" ? "#b4d564" : "#0E1D0E"
                        }}>
                            Nosotros
                        </a>
                        <a href="/knowthebusiness" className="text-gray-600 hover:text-gray-800 text-sm" style={{
                            fontWeight: activeRoute === "/knowthebusiness" ? "bold" : "normal",
                            color: activeRoute === "/knowthebusiness" ? "#b4d564" : "#0E1D0E"
                        }}>
                            Conoce el negocio
                        </a>
                        <div className="relative">
                            <button
                                onClick={toggleDropdown}
                                className="text-gray-600 hover:text-gray-800 text-sm flex items-center"
                                style={{
                                    fontWeight: activeRoute === "/blog" || activeRoute === "/testimonials" || activeRoute === "/multimedia" || activeRoute === "/multimedia" ? "bold" : "normal",
                                    color: activeRoute === "/blog" || activeRoute === "/testimonials" || activeRoute === "/multimedia" || activeRoute === "/multimedia" ? "#b4d564" : "#0E1D0E"
                                }}
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
                                        style={{
                                            fontWeight: activeRoute === "/blog" ? "bold" : "normal",
                                            color: activeRoute === "/blog" ? "#b4d564" : "#0E1D0E"
                                        }}
                                    >
                                        Blog
                                    </a>
                                    <a
                                        href="/testimonials"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                        style={{
                                            fontWeight: activeRoute === "/testimonials" ? "bold" : "normal",
                                            color: activeRoute === "/testimonials" ? "#b4d564" : "#0E1D0E"
                                        }}
                                    >
                                        Testimonios
                                    </a>
                                    {/*  <a
                                        href="/multimedia"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                        style={{
                                            fontWeight: activeRoute === "/multimedia" ? "bold" : "normal",
                                            color: activeRoute === "/multimedia" ? "#b4d564" : "#0E1D0E"
                                        }}
                                    >
                                        Multimedia
                                    </a> */}
                                </div>
                            )}
                        </div>
                        <a href="/shop" className="text-gray-600 hover:text-gray-800 text-sm" style={{
                            fontWeight: activeRoute === "/shop" ? "bold" : "normal",
                            color: activeRoute === "/shop" ? "#b4d564" : "#0E1D0E"
                        }}>
                            Comprar ahora
                        </a>
                        <a href="/formulario" className="text-gray-600 hover:text-gray-800 text-sm" style={{
                            fontWeight: activeRoute === "/formulario" ? "bold" : "normal",
                            color: activeRoute === "/formulario" ? "#b4d564" : "#0E1D0E"
                        }}>
                            Quiero ser Parte
                        </a>
                    </div>
                    <ButtonDefault onClick={() => SignInRedirect()}>Ingresar</ButtonDefault>
                </nav>
            }

        </header>
    );
};

export default NavBar;