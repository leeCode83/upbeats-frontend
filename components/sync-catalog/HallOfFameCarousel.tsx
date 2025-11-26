"use client";

import { GlassCard } from "@/components/shared/GlassCard";
import { motion } from "framer-motion";
import { Music, Trophy } from "lucide-react";
import Image from "next/image";

const hallOfFameData = [
    {
        id: 1,
        title: "Neon Lights",
        artist: "Cyber Punk",
        licenses: 150,
        image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
        id: 2,
        title: "Urban Flow",
        artist: "Street Beats",
        licenses: 120,
        image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
        id: 3,
        title: "Cosmic Journey",
        artist: "Star Walker",
        licenses: 95,
        image: "https://images.unsplash.com/photo-1459749411177-287ce14650e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
        id: 4,
        title: "Deep Ocean",
        artist: "Blue Wave",
        licenses: 88,
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
        id: 5,
        title: "Mountain High",
        artist: "Peak Performance",
        licenses: 80,
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
];

export function HallOfFameCarousel() {
    return (
        <div className="w-full overflow-hidden py-10 relative">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex items-center gap-2 mb-6 px-4">
                <Trophy className="text-yellow-500" />
                <h2 className="text-2xl font-bold">Hall of Fame</h2>
            </div>

            <motion.div
                className="flex gap-6 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20,
                }}
            >
                {[...hallOfFameData, ...hallOfFameData].map((item, index) => (
                    <div key={`${item.id}-${index}`} className="w-[300px]">
                        <GlassCard hoverEffect className="h-full">
                            <div className="relative h-40 w-full rounded-lg overflow-hidden mb-4">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-full text-xs font-bold text-yellow-400 flex items-center gap-1">
                                    <Trophy size={12} />
                                    #{index % 5 + 1}
                                </div>
                            </div>
                            <h3 className="font-bold text-lg truncate">{item.title}</h3>
                            <p className="text-muted-foreground text-sm mb-2">{item.artist}</p>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Sync Licenses</span>
                                <span className="font-bold text-primary">{item.licenses}</span>
                            </div>
                        </GlassCard>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
