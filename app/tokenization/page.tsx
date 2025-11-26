"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/shared/GlassCard";
import { GradientText } from "@/components/shared/GradientText";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Search, Filter, Play, Pause } from "lucide-react";
import { useState } from "react";

const mockAssets = [
    {
        id: 1,
        title: "Midnight Dreams",
        artist: "Luna Eclipse",
        genre: "Pop",
        price: 50,
        roi: 12.5,
        funded: 75,
        image: "bg-gradient-to-br from-purple-500 to-blue-500",
    },
    {
        id: 2,
        title: "Neon City Lights",
        artist: "The Cyberpunks",
        genre: "Electronic",
        price: 35,
        roi: 15.2,
        funded: 40,
        image: "bg-gradient-to-br from-cyan-500 to-blue-600",
    },
    {
        id: 3,
        title: "Acoustic Soul",
        artist: "Sarah Jenkins",
        genre: "Indie",
        price: 25,
        roi: 8.5,
        funded: 90,
        image: "bg-gradient-to-br from-orange-400 to-red-500",
    },
    {
        id: 4,
        title: "Heavy Metal Thunder",
        artist: "Iron Forge",
        genre: "Rock",
        price: 45,
        roi: 11.0,
        funded: 20,
        image: "bg-gradient-to-br from-gray-700 to-black",
    },
    {
        id: 5,
        title: "Jazz Cafe",
        artist: "Blue Note Quartet",
        genre: "Jazz",
        price: 60,
        roi: 9.8,
        funded: 60,
        image: "bg-gradient-to-br from-yellow-600 to-yellow-800",
    },
    {
        id: 6,
        title: "Summer Vibes",
        artist: "DJ Sunny",
        genre: "House",
        price: 40,
        roi: 13.5,
        funded: 10,
        image: "bg-gradient-to-br from-pink-400 to-purple-500",
    },
];

export default function Tokenization() {
    const [playing, setPlaying] = useState<number | null>(null);

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            {/* <Navbar /> */}

            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">
                        Invest in the <GradientText>Next Big Hit</GradientText>
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Discover rising artists, buy royalty tokens, and earn passive income from streaming revenue.
                    </p>
                </div>

                {/* Filters & Search */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="relative flex-grow">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                        <Input placeholder="Search artists, songs, or genres..." className="pl-10 bg-white/5 border-white/10" />
                    </div>
                    <Button variant="outline" className="border-white/10 gap-2">
                        <Filter size={20} /> Filters
                    </Button>
                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                        {["All", "Pop", "Electronic", "Rock", "Hip-Hop", "Jazz"].map((genre) => (
                            <Badge key={genre} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white transition-colors px-4 py-2">
                                {genre}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Assets Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mockAssets.map((asset) => (
                        <GlassCard key={asset.id} hoverEffect className="group">
                            <div className={`aspect-square rounded-lg ${asset.image} mb-4 relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                                <button
                                    onClick={() => setPlaying(playing === asset.id ? null : asset.id)}
                                    className="absolute bottom-4 right-4 h-12 w-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-primary hover:scale-110 transition-all"
                                >
                                    {playing === asset.id ? <Pause fill="white" /> : <Play fill="white" className="ml-1" />}
                                </button>
                                <Badge className="absolute top-4 left-4 bg-black/50 backdrop-blur-md border-0">
                                    {asset.genre}
                                </Badge>
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold text-lg leading-none mb-1">{asset.title}</h3>
                                        <p className="text-sm text-muted-foreground">{asset.artist}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-lg">${asset.price}</p>
                                        <p className="text-xs text-muted-foreground">per token</p>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Funding Goal</span>
                                        <span className="font-medium">{asset.funded}%</span>
                                    </div>
                                    <Progress value={asset.funded} className="h-2" />
                                </div>

                                <div className="grid grid-cols-2 gap-4 py-2">
                                    <div className="bg-white/5 rounded-lg p-2 text-center">
                                        <p className="text-xs text-muted-foreground">Proj. ROI</p>
                                        <p className="font-bold text-green-400">{asset.roi}%</p>
                                    </div>
                                    <div className="bg-white/5 rounded-lg p-2 text-center">
                                        <p className="text-xs text-muted-foreground">Term</p>
                                        <p className="font-bold">Permanent</p>
                                    </div>
                                </div>

                                <Button className="w-full bg-white/10 hover:bg-primary hover:text-white transition-colors">
                                    View Details
                                </Button>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
