import React, { useEffect, useState } from 'react';
import ShopButton from './ShopButton';

export default function CountdownSection() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetDate = new Date("2024-11-05T00:00:00");

        const countdown = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(countdown);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(countdown);
    }, []);

    const TimeBox = ({ value, label }) => (
        <div className="border border-[#E65525] rounded-tr-[30px] rounded-bl-[30px] p-4 min-w-[100px] text-center bg-transparent mb-2 sm:mb-0">
            <p className="text-white text-4xl font-bold leading-none mb-1">{value}</p>
            <p className="text-[#94A3B8] text-sm">{label}</p>
        </div>
    );

    const Dot = () => (
        <div className="w-1.5 h-1.5 rounded-full bg-[#E65525] hidden sm:block" />
    );

    return (
        <section className="bg-[#001524] bg-cover bg-center bg-no-repeat py-4 md:py-10 relative overflow-hidden px-2 md:px-20"
            style={{ backgroundImage: "url('/imgs/bg5-min.webp')" }}>
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
                <div className="mb-3 w-full md:w-[70rem] text-center md:text-left">
                    <p className="text-[#E65525] font-semibold mb-1 text-sm uppercase">
                        COUNTDOWN
                    </p>
                    <h1 className="text-white text-2xl md:text-4xl font-bold mb-2">
                        Cuenta regresiva hasta el evento.
                    </h1>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
                        <div className="flex items-start gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#E65525] mt-1" />
                            <div>
                                <p className="text-white text-lg font-bold leading-tight">06-08</p>
                                <p className="text-[#94A3B8] text-xs leading-tight">Diciembre 2024</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#E65525] mt-1" />
                            <div>
                                <p className="text-white text-lg font-bold leading-tight">Medellín - Colombia</p>
                                <p className="text-[#94A3B8] text-xs leading-tight">Polideportivo de Itagüí</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-10 w-full md:w-full">
                    <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap justify-center">
                        <TimeBox value={timeLeft.days} label="Días" />
                        <Dot />
                        <TimeBox value={timeLeft.hours} label="Horas" />
                        <Dot />
                        <TimeBox value={timeLeft.minutes} label="Minutos" />
                    </div>
                    <ShopButton />
                </div>
            </div>
        </section>
    );
}