import BlogSection from "./../components/Blog/BlogSection"
import Contact from "./../components/Contact"
import Footer from "./../components/Footer"
import Header from "./../components/Header"
import AvoviteInMedia from "./../components/Home/AvoviteInMedia"
import Map from "./../components/Map"
import { SessionProvider } from '../Providers/SessionProvider'
import { CartProvider } from '../Providers/CartProvider'
import { ConfigProvider } from '../Providers/ConfigProvider'
const Blog = () => {
    return (
        <div>
            <SessionProvider>
                <CartProvider>
                    <ConfigProvider>
                        <Header client:visible subtitle1="Blog" title="Los frutos del aguacate HASS Colombiano son para todos" subtitle2="“Cultivamos y vendemos por ti”" />
                        <BlogSection client:load />
                        <AvoviteInMedia client:visible />
                        <Contact client:visible />
                        <Map client:visible />
                        <Footer client:visible />
                    </ConfigProvider>
                </CartProvider>
            </SessionProvider>
        </div>
    )
}

export { Blog }