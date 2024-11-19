const VideoBusiness = () => {
    return (
        <>
            <section className="pt-8 md:pt-24 w-screen -ml-[calc(50vw-50%)] overflow-hidden">
                <div className="max-w-7xl mx-auto bg-[#214820] text-white rounded-t-3xl px-4 py-8 md:px-20 md:py-20">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-5xl font-bold" style={{ lineHeight: "1.5" }}>
                            Cómo Avovite Transforma su Inversión en <span className="text-[#f9e988]">Crecimiento Sostenible</span>
                        </h2>
                    </div>
                    <div className="relative w-full pb-[56.25%] h-0">
                        <iframe
                            id="panda-23ca4a9c-d18f-467c-91e7-cc8fbe45667b"
                            src="https://player-vz-14763659-352.tv.pandavideo.com/embed/?v=23ca4a9c-d18f-467c-91e7-cc8fbe45667b"
                            className="absolute top-0 left-0 w-full h-full border-none"
                            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
                            fetchpriority="high"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VideoBusiness