"use client";

import { Button } from "@/components/ui/button";
import { Play, Pause, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const recordingsData = [
    {
        id: 1,
        title: "Sunset Boulevard",
        artist: "City Lights",
        genre: "Pop",
        duration: "3:45",
        price: "$500",
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
        id: 2,
        title: "Electric Dreams",
        artist: "Synth Wave",
        genre: "Electronic",
        duration: "4:20",
        price: "$750",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
        id: 3,
        title: "Acoustic Soul",
        artist: "Wooden Guitar",
        genre: "Folk",
        duration: "3:10",
        price: "$300",
        image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
        id: 4,
        title: "Heavy Metal Thunder",
        artist: "Iron Clad",
        genre: "Metal",
        duration: "5:00",
        price: "$600",
        image: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
        id: 5,
        title: "Jazz Cafe",
        artist: "Smooth Sax",
        genre: "Jazz",
        duration: "4:15",
        price: "$450",
        image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
        id: 6,
        title: "Orchestral Epic",
        artist: "Symphony X",
        genre: "Classical",
        duration: "6:30",
        price: "$1200",
        image: "https://images.unsplash.com/photo-1507838153414-b4b713384ebd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
];

export function MasterRecordingList() {
    const [playing, setPlaying] = useState<number | null>(null);

    const togglePlay = (id: number) => {
        if (playing === id) {
            setPlaying(null);
        } else {
            setPlaying(id);
        }
    };

    return (
        <div className="py-10">
            <h2 className="text-3xl font-bold mb-8">Available Master Recordings</h2>

            <div className="flex flex-col space-y-2">
                {/* Header Row */}
                <div className="grid grid-cols-[auto_1fr_auto_auto] gap-4 px-4 py-2 text-sm text-muted-foreground border-b border-white/10 uppercase tracking-wider">
                    <div className="w-12 text-center">#</div>
                    <div>Title</div>
                    <div className="text-right w-24">Duration</div>
                    <div className="text-right w-32">License</div>
                </div>

                {recordingsData.map((item, index) => (
                    <div
                        key={item.id}
                        className="group grid grid-cols-[auto_1fr_auto_auto] gap-4 items-center px-4 py-3 rounded-lg hover:bg-white/5 transition-colors"
                    >
                        {/* Play/Index Column */}
                        <div className="w-12 flex justify-center">
                            <button
                                onClick={() => togglePlay(item.id)}
                                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-muted-foreground group-hover:text-white transition-colors"
                            >
                                {playing === item.id ? <Pause size={16} /> : <Play size={16} />}
                            </button>
                        </div>

                        {/* Title & Artist Column */}
                        <div className="flex items-center gap-4">
                            <div className="relative h-12 w-12 rounded overflow-hidden flex-shrink-0">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="font-bold text-base group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.artist}</p>
                            </div>
                        </div>

                        {/* Duration/Genre Column */}
                        <div className="text-right w-24 text-sm text-muted-foreground">
                            {item.duration}
                        </div>

                        {/* Price & Action Column */}
                        <div className="text-right w-32 flex items-center justify-end gap-4">
                            <span className="font-bold text-primary">{item.price}</span>
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0 rounded-full hover:bg-primary hover:text-white">
                                <ShoppingCart size={16} />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
