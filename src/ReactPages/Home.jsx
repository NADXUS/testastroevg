import React from 'react'
import Presentation from '../components/Home/Presentation'
import ShopHome from '../components/ShopHome'
import Works from '../components/Home/Works'
import AvoviteInMedia from '../components/Home/AvoviteInMedia'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Map from '../components/Map'

export default function Home() {
    return (
        <div>
            <Presentation client:visible />
            <ShopHome client:visible />
            <Works client:visible />
            <AvoviteInMedia client:visible />
            <Contact client:visible />
            <Map client:visible />
            <Footer client:visible />
        </div>
    )
}