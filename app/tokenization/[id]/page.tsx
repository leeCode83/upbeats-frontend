"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/shared/GlassCard";
import { GradientText } from "@/components/shared/GradientText";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Play, Pause, ArrowLeft, Share2, Heart, Clock, DollarSign, TrendingUp, Users } from "lucide-react";
import { useState, use } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Mock data - in a real app this would come from an API or context
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
        description: "A synth-pop anthem exploring the mysteries of the night. Luna Eclipse brings her signature ethereal vocals to a driving beat that's sure to be a summer hit.",
        releaseDate: "Oct 15, 2024",
        totalTokens: 10000,
        availableTokens: 2500,
        streamingHistory: [
            { month: "Jan", streams: 12000 },
            { month: "Feb", streams: 15000 },
            { month: "Mar", streams: 18000 },
            { month: "Apr", streams: 22000 },
            { month: "May", streams: 25000 },
            { month: "Jun", streams: 30000 },
        ]
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
        description: "High-energy electronic track perfectly capturing the vibe of a futuristic metropolis. Heavy basslines and soaring synths make this a club favorite.",
        releaseDate: "Nov 01, 2024",
        totalTokens: 8000,
        availableTokens: 4800,
        streamingHistory: []
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
        description: "Raw, emotional acoustic performance that touches the heart. Sarah's powerful voice shines over a simple guitar arrangement.",
        releaseDate: "Sep 20, 2024",
        totalTokens: 5000,
        availableTokens: 500,
        streamingHistory: []
    },
    // ... add other mock assets if needed to match dashboard list
];

export default function TokenDetail({ params }: { params: Promise<{ id: string }> }) {
    // Unwrap params using React.use()
    const resolvedParams = use(params);
    const id = parseInt(resolvedParams.id);
    const asset = mockAssets.find(a => a.id === id) || mockAssets[0]; // Fallback to first asset if not found
    const [playing, setPlaying] = useState(false);

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            {/* <Navbar /> */}

            <main className="flex-grow container mx-auto px-4 py-8">
                <Link href="/dashboard" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors">
                    <ArrowLeft size={20} className="mr-2" /> Back
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Image & Media */}
                    <div className="lg:col-span-1 space-y-6">
                        <GlassCard className="p-0 overflow-hidden">
                            <div className={`aspect-square ${asset.image} relative flex items-center justify-center`}>
                                <button
                                    onClick={() => setPlaying(!playing)}
                                    className="h-20 w-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-primary hover:scale-110 transition-all"
                                >
                                    {playing ? <Pause fill="white" size={32} /> : <Play fill="white" size={32} className="ml-1" />}
                                </button>
                                <Badge className="absolute top-4 left-4 bg-black/50 backdrop-blur-md border-0 text-lg py-1 px-3">
                                    {asset.genre}
                                </Badge>
                            </div>
                            <div className="p-6">
                                <h1 className="text-3xl font-bold mb-1">{asset.title}</h1>
                                <p className="text-xl text-primary mb-4">{asset.artist}</p>

                                <div className="flex gap-4">
                                    <Button variant="outline" className="flex-1 border-white/10 gap-2">
                                        <Heart size={18} /> Save
                                    </Button>
                                    <Button variant="outline" className="flex-1 border-white/10 gap-2">
                                        <Share2 size={18} /> Share
                                    </Button>
                                </div>
                            </div>
                        </GlassCard>

                        <GlassCard>
                            <h3 className="font-bold mb-4">About the Track</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {asset.description}
                            </p>
                            <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-xs text-muted-foreground">Release Date</p>
                                    <p className="font-medium">{asset.releaseDate}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground">Label</p>
                                    <p className="font-medium">Upbeats Records</p>
                                </div>
                            </div>
                        </GlassCard>
                    </div>

                    {/* Right Column: Investment Stats & Action */}
                    <div className="lg:col-span-2 space-y-6">
                        <GlassCard>
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                                <div>
                                    <p className="text-muted-foreground mb-1">Current Token Price</p>
                                    <h2 className="text-4xl font-bold flex items-center gap-2">
                                        ${asset.price} <span className="text-sm font-normal text-muted-foreground">/ token</span>
                                    </h2>
                                </div>
                                <div className="flex gap-2">
                                    <Badge variant="secondary" className="bg-green-500/20 text-green-400 hover:bg-green-500/30">
                                        <TrendingUp size={14} className="mr-1" /> +{asset.roi}% ROI
                                    </Badge>
                                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30">
                                        <Users size={14} className="mr-1" /> {Math.floor(Math.random() * 500) + 100} Investors
                                    </Badge>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-muted-foreground">Funding Progress</span>
                                        <span className="font-bold">{asset.funded}%</span>
                                    </div>
                                    <Progress value={asset.funded} className="h-3" />
                                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                                        <span>${(asset.totalTokens * asset.price * asset.funded / 100).toLocaleString()} raised</span>
                                        <span>Goal: ${(asset.totalTokens * asset.price).toLocaleString()}</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div className="bg-white/5 rounded-xl p-4">
                                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                                            <DollarSign size={16} />
                                            <span className="text-sm">Market Cap</span>
                                        </div>
                                        <p className="text-xl font-bold">${(asset.totalTokens * asset.price).toLocaleString()}</p>
                                    </div>
                                    <div className="bg-white/5 rounded-xl p-4">
                                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                                            <Clock size={16} />
                                            <span className="text-sm">Royalty Term</span>
                                        </div>
                                        <p className="text-xl font-bold">Permanent</p>
                                    </div>
                                    <div className="bg-white/5 rounded-xl p-4">
                                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                                            <TrendingUp size={16} />
                                            <span className="text-sm">Est. Annual Yield</span>
                                        </div>
                                        <p className="text-xl font-bold text-green-400">{asset.roi}%</p>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-white/10">
                                    <h3 className="font-bold mb-4">Invest Now</h3>
                                    <div className="flex gap-4">
                                        <Button className="flex-1 bg-primary hover:bg-primary/90 h-12 text-lg">
                                            Buy Tokens
                                        </Button>
                                        <Button variant="outline" className="flex-1 border-white/10 h-12 text-lg">
                                            View Contract
                                        </Button>
                                    </div>
                                    <p className="text-xs text-center text-muted-foreground mt-4">
                                        By investing, you agree to the Terms of Service and Token Purchase Agreement.
                                    </p>
                                </div>
                            </div>
                        </GlassCard>

                        <GlassCard>
                            <h3 className="font-bold mb-4">Streaming Performance</h3>
                            <div className="h-48 flex items-end justify-between gap-2 px-2">
                                {asset.streamingHistory.length > 0 ? (
                                    asset.streamingHistory.map((data, i) => (
                                        <div key={i} className="flex flex-col items-center gap-2 flex-1 group">
                                            <div
                                                className="w-full bg-primary/20 rounded-t-sm group-hover:bg-primary/40 transition-colors relative"
                                                style={{ height: `${(data.streams / 30000) * 100}%` }}
                                            >
                                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                                    {data.streams.toLocaleString()}
                                                </div>
                                            </div>
                                            <span className="text-xs text-muted-foreground">{data.month}</span>
                                        </div>
                                    ))
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                                        No streaming data available yet.
                                    </div>
                                )}
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
