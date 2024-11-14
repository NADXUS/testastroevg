import React from 'react'
import Presentation from '../../components/Home/Presentation'
import ShopHome from '../../components/Home/ShopHome'
import Works from '../../components/Home/Works'
import AvoviteInMedia from '../../components/Home/AvoviteInMedia'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
import Map from '../../components/Map'
import NavBar from '../../components/Navbar'


export default function Home() {
    return (
        <div>
            <NavBar client:load />
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