import React from 'react'
import Presentation from '../../components/Home/Presentation'
import ShopHome from '../../components/Home/ShopHome'
import Works from '../../components/Home/Works'
import AvoviteInMedia from '../../components/Home/AvoviteInMedia'
import Contact from '../../components/Home/Contact'
import Footer from '../../components/Home/Footer'
import Map from '../../components/Home/Map'


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