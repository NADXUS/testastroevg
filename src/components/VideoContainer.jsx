import React, { useState, useEffect } from 'react';
import VideoPlayer from './videoPlayer';

export default function VideoContainer() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className="relative bg-[#000b11] bg-cover bg-center bg-no-repeat w-full h-fit md:h-fit mx-auto overflow-hidden py-2 md:py-5 px-2 md:px-10 flex justify-center items-center"
            style={{ backgroundImage: "url('/imgs/bg3-min.webp')" }}>
            <div className="w-full md:w-4/5 bg-[rgba(0,11,17,0.5)] rounded-lg overflow-hidden outline outline-3 outline-[rgba(233,87,29,1)]">
                <VideoPlayer
                    client:visible
                    client:only="react"
                    videoUrl={"https://humans.s3.wasabisys.com/4d65a44a-3d53-41dd-bd3c-d3e239b7025e.mp4"}
                    poster={"/video/portada-min.webp"}
                />
            </div>
        </div>
    );
}