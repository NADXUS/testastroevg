import About from "../components/AboutUs/About"
import Header from "../components/Header"
import InfoHome from "../components/AboutUs/InfoHome"
import MeetOurCoFounders from "../components/AboutUs/MeetOurCoFounders"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import AvoviteInMedia from "../components/Home/AvoviteInMedia"
import Map from "../components/Map"

const AboutUs = () => {
    return <div>
        <Header client:visible title="Los frutos del aguacate HASS Colombiano son para todos" subtitle1="Sobre Nosotros" subtitle2="“Cultivamos y vendemos por ti”" />
        <About client:visible />
        <InfoHome client:visible />
        <MeetOurCoFounders client:visible />
        <AvoviteInMedia client:visible />
        <Contact client:visible />
        <Map client:visible />
        <Footer client:visible />
    </div>
}

export default AboutUs