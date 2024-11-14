import { ButtonDefault } from "./Buttons"

const NavBar = () => {
    return <header className="container mx-auto py-5 px-5 md:px-20">
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
}

export default NavBar