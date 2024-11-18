import BlogSection from "../components/Blog/BlogSection"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Header from "../components/Header"
import AvoviteInMedia from "../components/Home/AvoviteInMedia"
import Map from "../components/Map"

const Blog = () => {
    return (
        <div>
            <Header client:visible subtitle1="Blog" title="Los frutos del aguacate HASS Colombiano son para todos" subtitle2="“Cultivamos y vendemos por ti”" />
            <BlogSection client:visible />
            <AvoviteInMedia client:visible />
            <Contact client:visible />
            <Map client:visible />
            <Footer client:visible />
        </div>
    )
}

export { Blog }