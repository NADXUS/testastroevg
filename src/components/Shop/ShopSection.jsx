import React, { useEffect, useMemo, useState } from 'react';
import useCart from '../../Hooks/useCart';
import useSession from '../../Hooks/useSession';
import AuthModal from './AuthModal';
import ShopService from '../../Services/product.service';
import CardProductHome from './CardProductHome';
import CartDrawer from './CartDrawer';

const ShopSection = () => {
  const cart = useCart() || [];
  const [, { push }] = cart;
  const [session] = useSession();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [shoppingCart] = useCart();
  const [open, setOpen] = useState(false);

  const $Shop = useMemo(() => new ShopService(session.token), [session.token]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const { status, data } = await $Shop.shop.get();
        if (status && Array.isArray(data.data)) {
          setProducts(data.data);
        } else {
          console.error('Data is not an array', data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    if ($Shop) {
      fetchProducts();
    }
  }, [$Shop]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart && storedCart.length > 0) {
      storedCart.forEach(push);
      localStorage.removeItem('cart');
    }
  }, [push]);

  const handleBuyClick = () => setAuthModalOpen(true);
  const handleDrawerToggle = () => setOpen((prev) => !prev);

  return (
    <div className='p-8 max-w-7xl mx-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {loading
          ? Array.from({ length: 8 }, (_, index) => <div key={index} className='h-[480px] rounded-lg bg-gray-200 animate-pulse'></div>)
          : products.map((product) => (
              <div key={product.id_product}>
                <CardProductHome
                  product={product}
                  onBuy={(product) => {
                    push(product);
                    window.location.href = '/cart';
                  }}
                />
              </div>
            ))}
      </div>
      <button
        className='w-full md:w-1/3 rounded-2xl text-[#67AA36] py-2 px-4 hover:bg-[#b3d56431] transition-colors duration-200 mx-auto block'
        onClick={() => {
          fbq('track', 'Lead');
          session?.token ? handleDrawerToggle() : handleBuyClick();
        }}>
        Comprar
      </button>

      {/* Modal de autenticación */}
      <AuthModal open={authModalOpen} onClose={() => setAuthModalOpen(false)} />

      {/* Drawer del carrito */}
      <CartDrawer open={open} onClose={handleDrawerToggle} shoppingCart={shoppingCart} />
    </div>
  );
};

export default ShopSection;
