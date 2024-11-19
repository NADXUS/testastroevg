import { useEffect } from 'react';
import useCart from '../../Hooks/useCart';
import { IMAGE_PLACEHOLDER } from '../../utilities/constants';

function CardProductHome({ product, sx }) {
  const [, { push }] = useCart();
  const color = product.discount_name === 'PACK STANDARD' ? 'text-primary' : 'text-green-700';

  const handleBuy = (product) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...currentCart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  useEffect(() => {
    const syncCartWithLocalStorage = () => {
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      if (storedCart.length > 0) {
        storedCart.forEach((product) => push(product));
        localStorage.removeItem('cart');
      }
    };

    syncCartWithLocalStorage();

    const handleStorageUpdate = () => {
      syncCartWithLocalStorage();
    };

    window.addEventListener('cartUpdated', handleStorageUpdate);

    return () => {
      window.removeEventListener('cartUpdated', handleStorageUpdate);
    };
  }, [push]);

  return (
    <div className={`rounded-xl shadow-lg p-4 bg-gray-50`}>
      <div className='relative'>
        <img src={product.url_image || IMAGE_PLACEHOLDER} alt='Product Image' className='w-full h-64 object-cover rounded-lg' />
        {product.percent_discount > 0 && <div className={`absolute top-2 right-2 w-12 h-12 flex items-center justify-center rounded-full bg-[#67AA36] text-white font-semibold`}>-{product.percent_discount}%</div>}
      </div>
      <div className='flex flex-col items-center mt-4 gap-2'>
        <p className={`font-semibold text-[#67AA36] text-xl`}>
          {product.quantity} Vite{product.quantity > 1 ? 's' : ''}
        </p>
        <p className='text-xl text-[#979797]'>
          Precio: <span className={`font-bold text-[#67AA36] text-xl`}>${Math.round(product.quantity * product.unitary_price * (1 - product.percent_discount / 100)).toLocaleString()}</span>
        </p>
        <button
          className='w-full bg-[#F9E988] text-green-700 rounded-full py-3 px-6 text-lg mt-4 hover:bg-[#B4D564] transition-all duration-200'
          onClick={() => {
            handleBuy(product);
            fbq('track', 'AddToCart');
          }}>
          Añadir al Carrito
        </button>
        <a href={`https://avovite.com/avovite_flujo_neto_comprador_descarga-4/`} className='text-xs text-[#67AA36] underline mt-2'>
          Producción del paquete
        </a>
      </div>
    </div>
  );
}

export default CardProductHome;
