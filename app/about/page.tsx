"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GradientText } from "@/components/shared/GradientText";
import { GlassCard } from "@/components/shared/GlassCard";
import { Users, Globe, Shield, Zap } from "lucide-react";

export default function About() {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            {/* <Navbar /> */}

            <main className="flex-grow">
                {/* Hero */}
                <section className="py-20 text-center container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Empowering the <br />
                        <GradientText>Creative Economy</GradientText>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Upbeats is on a mission to democratize music investment and provide artists with the financial freedom they deserve.
                    </p>
                </section>

                {/* Values */}
                <section className="py-16 bg-white/5">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 text-primary">
                                    <Users size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Community First</h3>
                                <p className="text-muted-foreground">We believe in the power of fans and artists working together.</p>
                            </div>
                            <div className="text-center">
                                <div className="h-16 w-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4 text-secondary">
                                    <Globe size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Global Access</h3>
                                <p className="text-muted-foreground">Music knows no borders, and neither should investment opportunities.</p>
                            </div>
                            <div className="text-center">
                                <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4 text-accent">
                                    <Shield size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Transparency</h3>
                                <p className="text-muted-foreground">Blockchain technology ensures every transaction is verifiable and secure.</p>
                            </div>
                            <div className="text-center">
                                <div className="h-16 w-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4 text-purple-400">
                                    <Zap size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                                <p className="text-muted-foreground">We're constantly pushing the boundaries of what's possible in DeFi and Music.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team (Mock) */}
                <section className="py-20 container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <GlassCard key={i} className="text-center">
                                <div className="h-32 w-32 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 mx-auto mb-4" />
                                <h3 className="text-xl font-bold">Team Member {i}</h3>
                                <p className="text-primary font-medium mb-2">Co-Founder</p>
                                <p className="text-sm text-muted-foreground">
                                    Visionary leader with 10+ years in the music industry and blockchain development.
                                </p>
                            </GlassCard>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
