import Contact from "./../components/Contact"
import Footer from "./../components/Footer"
import Header from "./../components/Header"
import BusinessModel from "./../components/KnowTheBusiness/BusinessModel"
import Legal from "./../components/KnowTheBusiness/Legal"
import VideoBusiness from "./../components/KnowTheBusiness/VideoBusiness"
import Map from "./../components/Map"
import ShopHome from "./../components/ShopHome"
import { SessionProvider } from '../Providers/SessionProvider'
import { CartProvider } from '../Providers/CartProvider'
import { ConfigProvider } from '../Providers/ConfigProvider'

const KnowTheBusiness = () => {
    return (
        <div>
            <SessionProvider>
                <CartProvider>
                    <ConfigProvider>
                        <Header client:visible subtitle1="Conoce el negocio" title="Los frutos del aguacate HASS Colombiano son para todos" subtitle2="“Cultivamos y vendemos por ti”" />
                        <BusinessModel client:visible />
                        <VideoBusiness client:visible />
                        <ShopHome client:visible />
                        <Legal client:visible />
                        <Contact client:visible />
                        <Map client:visible />
                        <Footer client:visible />
                    </ConfigProvider>
                </CartProvider>
            </SessionProvider>
        </div>
    )
}

export { KnowTheBusiness }