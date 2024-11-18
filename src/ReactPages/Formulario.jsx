import Calendly from "../components/Formulario/Calendly"
import Header from "../components/Header"
import ShopHome from '../components/ShopHome'
import Contact from "../components/Contact"
import Audios from "../components/Formulario/Audios"
import Footer from "../components/Footer"
import AvoviteInMedia from "../components/Home/AvoviteInMedia"
import Map from "../components/Map"

const Formulario = () => {
    return <div>
        <Header client:visible title="Los frutos del aguacate HASS Colombiano son para todos" subtitle1="Sé parte de nosotros" subtitle2="“Cultivamos y vendemos por ti”" />
        <Calendly client:visible />
        <ShopHome client:visible />
        <AvoviteInMedia client:visible />
        <Audios client:load />
        <Contact client:visible />
        <Map client:visible />
        <Footer client:visible />
    </div>
}

export default Formulario