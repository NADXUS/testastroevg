import React, { useEffect, useState } from 'react';

export default function CountdownSectionSmall() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetDate = new Date("2024-12-06T00:00:00");

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

    return (
        <div>
            <div className="flex items-center justify-between w-full flex-col sm:flex-row">
                <div className="flex items-center gap-4 flex-nowrap justify-center">
                    <div className="border border-[#E65525] rounded-none rounded-tr-[30px] rounded-bl-[30px] bg-[#040f16] md:bg-transparent p-4 min-w-[100px] text-center mb-2 sm:mb-0">
                        <p className="text-white text-2xl font-bold leading-none mb-1">
                            {timeLeft.days}
                        </p>
                        <p className="text-[#94A3B8] text-sm">
                            Días
                        </p>
                    </div>

                    <div className="w-1.5 h-1.5 rounded-full bg-[#E65525] hidden sm:block" />

                    <div className="border border-[#E65525] rounded-none rounded-tr-[30px] rounded-bl-[30px] bg-[#040f16] md:bg-transparent p-4 min-w-[100px] text-center mb-2 sm:mb-0">
                        <p className="text-white text-2xl font-bold leading-none mb-1">
                            {timeLeft.hours}
                        </p>
                        <p className="text-[#94A3B8] text-sm">
                            Horas
                        </p>
                    </div>

                    <div className="w-1.5 h-1.5 rounded-full bg-[#E65525] hidden sm:block" />

                    <div className="border border-[#E65525] rounded-none rounded-tr-[30px] rounded-bl-[30px] bg-[#040f16] md:bg-transparent p-4 min-w-[100px] text-center">
                        <p className="text-white text-2xl font-bold leading-none mb-1">
                            {timeLeft.minutes}
                        </p>
                        <p className="text-[#94A3B8] text-sm">
                            Minutos
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}