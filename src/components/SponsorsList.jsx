import React from 'react';

export default function SponsorsList() {
    const logos = [
        { name: "Planday", url: "/imgs/sponsors/sponsor (1).webp" },
        { name: "Asana", url: "/imgs/sponsors/sponsor (2).webp" },
        { name: "Chase", url: "/imgs/sponsors/sponsor (3).webp" },
        { name: "Umbraco", url: "/imgs/sponsors/sponsor (4).webp" },
        { name: "Pearlfisher", url: "/imgs/sponsors/sponsor (5).webp" },
        { name: "Brightpearl", url: "/imgs/sponsors/sponsor (6).webp" },
        { name: "Brightpearl", url: "/imgs/sponsors/sponsor (7).webp" },
        { name: "Brightpearl", url: "/imgs/sponsors/sponsor (8).webp" },
        { name: "Validocus", url: "/imgs/sponsors/sponsor (9).webp" },
    ];

    return (
        <section className="bg-[#E65525] py-0 overflow-hidden">
            <div className="max-w-full overflow-x-auto scrollbar-hide flex items-center justify-center">
                <div className="flex items-center gap-4 md:gap-6 min-w-[300px] md:min-w-max flex-wrap md:flex-nowrap justify-center md:justify-start">
                    {logos.map((logo, index) => (
                        <img
                            key={`${logo.name}-${index}`}
                            src={logo.url}
                            alt={`${logo.name} logo`}
                            className="filter brightness-0 invert w-[40%] md:w-28 opacity-90 transition-opacity duration-200 ease-in-out aspect-square md:aspect-auto object-contain hover:opacity-100"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}