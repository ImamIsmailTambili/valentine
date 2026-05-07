"use client"

import { useState, useEffect } from 'react';

export const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const target = new Date('2026-02-14T00:00:00');

        const timer = setInterval(() => {
            const now = new Date();
            const difference = target.getTime() - now.getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const Card = ({ value, label }: { value: number; label: string }) => (
        <div className="flex flex-col items-center bg-white/60 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-rose-100 min-w-20">
            <span className="text-3xl font-bold text-rose-600 font-['Quicksand']">{value.toString().padStart(2, '0')}</span>
            <span className="text-xs uppercase tracking-widest text-rose-400 font-medium">{label}</span>
        </div>
    );

    return (
        <div className="flex gap-4 flex-wrap justify-center">
            <Card value={timeLeft.days} label="Hari" />
            <Card value={timeLeft.hours} label="Jam" />
            <Card value={timeLeft.minutes} label="Menit" />
            <Card value={timeLeft.seconds} label="Detik" />
        </div>
    );
};