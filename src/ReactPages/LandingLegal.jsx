import Header from "./../components/Header"
import Contact from "./../components/Contact"
import Audios from "./../components/Formulario/Audios"
import Footer from "./../components/Footer"
import Map from "./../components/Map"
import Legal from "./../components/KnowTheBusiness/Legal"

const Formulario = () => {
    return <div>
        <Header client:visible title="Los frutos del aguacate HASS Colombiano son para todos" subtitle1="Formulario" subtitle2="“Cultivamos y vendemos por ti”" />
        <Legal client:visible />
        <Audios client:load />
        <Contact client:visible />
        <Map client:visible />
        <Footer client:visible />
    </div>
}

export default Formulario