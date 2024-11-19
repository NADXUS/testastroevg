import BlogSectionInfo from "./../components/blogSection/blogSectionInfo"
import Footer from "./../components/Footer"
import Header from "./../components/Header"
import { SessionProvider } from '../Providers/SessionProvider'
import { CartProvider } from '../Providers/CartProvider'
import { ConfigProvider } from '../Providers/ConfigProvider'
import { useEffect, useState } from "react";
import usePost from "./../Hooks/usePost";

const BlogSection = () => {
    return (
        <div>
            <SessionProvider>
                <CartProvider>
                    <ConfigProvider>
                        <BlogSectionInfo client:visible />
                        <Footer client:visible />
                    </ConfigProvider>
                </CartProvider>
            </SessionProvider>
        </div>
    )
}

export { BlogSection }