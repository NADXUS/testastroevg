import Header from '../components/Header';
import ShoppingCart from '../components/Shop/ShoppingCart';
import ShopSection from '../components/Shop/ShopSection';
import { CartProvider } from '../Providers/CartProvider';
import { SessionProvider } from '../Providers/SessionProvider';
import { ConfigProvider } from '../../../frontend/src/Providers/ConfigProvider';

const Shop = () => {
  return (
    <div>
      <SessionProvider>
        <CartProvider>
          <ConfigProvider>
            <Header client:visible title='Los frutos del aguacate HASS Colombiano son para todos' subtitle1='Sé parte de nosotros' subtitle2='“Cultivamos y vendemos por ti”' />
            <ShopSection client:only />
            <ShoppingCart client:only />
          </ConfigProvider>
        </CartProvider>
      </SessionProvider>
    </div>
  );
};

export { Shop };
