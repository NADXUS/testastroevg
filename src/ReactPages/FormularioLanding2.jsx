import Calendly from "./../components/Formulario/Calendly"
import Header from "./../components/Header"
import ShopHome from '../components/ShopHome'
import Contact from "./../components/Contact"
import Audios from "./../components/Formulario/Audios"
import Footer from "./../components/Footer"
import AvoviteInMedia from "./../components/Home/AvoviteInMedia"
import Map from "./../components/Map"
import CultivatingStories from "./../components/Testimonials/CultivatingStories"
import Legal from "./../components/KnowTheBusiness/Legal"
import { SessionProvider } from '../Providers/SessionProvider'
import { CartProvider } from '../Providers/CartProvider'
import { ConfigProvider } from '../Providers/ConfigProvider'

const Formulario = () => {
    return <div>
        <SessionProvider>
            <CartProvider>
                <ConfigProvider>
                    <Header client:visible title="Los frutos del aguacate HASS Colombiano son para todos" subtitle1="Formulario" subtitle2="“Cultivamos y vendemos por ti”" />
                    <Calendly client:visible />
                    <AvoviteInMedia client:visible />
                    <CultivatingStories client:visible />
                    <ShopHome client:visible />
                    <Legal client:visible />
                    <Audios client:load />
                    <Contact client:visible />
                    <Map client:visible />
                    <Footer client:visible />
                </ConfigProvider>
            </CartProvider>
        </SessionProvider>
    </div>
}

export { Formulario }