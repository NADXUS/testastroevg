function ShopButton({ fullWidth = true }) {
    if (fullWidth) {
        return (
            <a
                href="#shop"
                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors inline-block text-center flex items-center space-x-2 justify-center gap-2"
            >
                Comprar ahora <img src="/imgs/icons/register-min.svg" className='w-3 h-3 -mb-1' />
            </a>
        );
    } else {
        return (
            <a
                href="#shop"
                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors inline-block text-center flex inline-flex  items-center space-x-2 justify-center gap-2"
            >
                Comprar ahora <img src="/imgs/icons/register-min.svg" className='w-3 h-3 -mb-1' />
            </a>
        );
    }
}

export default ShopButton;