const Header = () => {
    return (
        <header className="relative bg-green-900 py-16 md:py-24 lg:py-26 bg-cover bg-center" style={{ backgroundImage: "radial-gradient(50% 50% at 50% 50%, rgba(13, 82, 76, 0.6885) 0%, rgba(13, 82, 76, 0.85) 100%),url(/AboutUs/heroAbout.webp)" }}>
            <div className="relative container mx-auto px-4 text-center">
                <p className="text-yellow-300 text-sm md:text-lg mb-2 md:mb-4">Sobre Nosotros</p>
                <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-4 leading-tight">
                    Los frutos del aguacate HASS Colombiano son para todos
                </h1>
                <p className="text-white text-xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-4 leading-tight">
                    "Cultivamos y vendemos por ti"
                </p>
            </div>
        </header>
    )
}

export default Header