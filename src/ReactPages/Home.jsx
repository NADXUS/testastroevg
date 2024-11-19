import React from 'react'
import Presentation from '../components/Home/Presentation'
import ShopHome from '../components/ShopHome'
import Works from '../components/Home/Works'
import AvoviteInMedia from '../components/Home/AvoviteInMedia'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Map from '../components/Map'
import { SessionProvider } from '../Providers/SessionProvider'
import { CartProvider } from '../Providers/CartProvider'
import { ConfigProvider } from '../Providers/ConfigProvider'
export default function Home() {
    return (
        <div>
            <SessionProvider>
                <CartProvider>
                    <ConfigProvider>
                        <Presentation client:visible />
                        <ShopHome client:load />
                        <Works client:visible />
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