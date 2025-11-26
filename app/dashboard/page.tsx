"use client";

import { Navbar } from "@/components/layout/Navbar";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/shared/GlassCard";
import { GradientText } from "@/components/shared/GradientText";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, DollarSign, Music, Wallet, TrendingUp } from "lucide-react";

export default function Dashboard() {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            {/* <Navbar /> */}

            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold">
                            Welcome back, <GradientText>Alex</GradientText>
                        </h1>
                        <p className="text-muted-foreground">Here's what's happening with your portfolio today.</p>
                    </div>
                    <div className="flex gap-3">
                        <Link href="/lending">
                            <Button variant="outline" className="border-white/10">Go to Lending</Button>
                        </Link>
                        <Button variant="outline" className="border-white/10">Withdraw</Button>
                        <Button className="bg-primary hover:bg-primary/90">Deposit Funds</Button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <GlassCard>
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-primary/20 rounded-lg text-primary">
                                <Wallet size={20} />
                            </div>
                            <span className="text-xs font-medium text-green-400 flex items-center">
                                +12.5% <ArrowUpRight size={12} className="ml-1" />
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">Total Balance</p>
                        <h3 className="text-2xl font-bold">$12,450.00</h3>
                    </GlassCard>

                    <GlassCard>
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-secondary/20 rounded-lg text-secondary">
                                <Music size={20} />
                            </div>
                            <span className="text-xs font-medium text-green-400 flex items-center">
                                +5.2% <ArrowUpRight size={12} className="ml-1" />
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">Token Value</p>
                        <h3 className="text-2xl font-bold">$8,230.50</h3>
                    </GlassCard>

                    <GlassCard>
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-accent/20 rounded-lg text-accent">
                                <DollarSign size={20} />
                            </div>
                            <span className="text-xs font-medium text-muted-foreground">
                                Last 30 days
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">Total Earnings</p>
                        <h3 className="text-2xl font-bold">$450.25</h3>
                    </GlassCard>

                    <GlassCard>
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                                <TrendingUp size={20} />
                            </div>
                            <span className="text-xs font-medium text-muted-foreground">
                                Active
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">Active Loans</p>
                        <h3 className="text-2xl font-bold">1</h3>
                    </GlassCard>
                </div>

                {/* Main Content Tabs */}
                <Tabs defaultValue="portfolio" className="space-y-6">
                    <TabsList className="bg-white/5 border border-white/10 p-1">
                        <TabsTrigger value="portfolio">My Portfolio</TabsTrigger>
                        <TabsTrigger value="loans">Loans</TabsTrigger>
                        <TabsTrigger value="activity">Activity</TabsTrigger>
                    </TabsList>

                    <TabsContent value="portfolio" className="space-y-6">
                        <h2 className="text-xl font-bold mb-4">Your Assets</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[1, 2, 3].map((i) => (
                                <GlassCard key={i} hoverEffect>
                                    <div className="aspect-square rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 mb-4 relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Button variant="secondary" size="sm">View Details</Button>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h4 className="font-bold">Midnight Dreams</h4>
                                            <p className="text-xs text-muted-foreground">Luna Eclipse</p>
                                        </div>
                                        <span className="text-xs font-bold bg-primary/20 text-primary px-2 py-1 rounded">
                                            Gold Tier
                                        </span>
                                    </div>
                                    <div className="space-y-2 mt-4">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Ownership</span>
                                            <span className="font-medium">0.5%</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">ROI (YTD)</span>
                                            <span className="font-medium text-green-400">+14.2%</span>
                                        </div>
                                    </div>
                                </GlassCard>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="loans">
                        <GlassCard>
                            <div className="p-4 text-center text-muted-foreground">
                                <p>You have one active loan.</p>
                                <div className="mt-4 max-w-md mx-auto">
                                    <div className="flex justify-between mb-2 text-sm">
                                        <span>Loan #L-2024-001</span>
                                        <span>$5,000 / $10,000</span>
                                    </div>
                                    <Progress value={50} className="h-2" />
                                    <div className="mt-4 flex justify-center">
                                        <Button>Make Payment</Button>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </TabsContent>

                    <TabsContent value="activity">
                        <GlassCard>
                            <div className="space-y-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center">
                                                <DollarSign size={16} />
                                            </div>
                                            <div>
                                                <p className="font-medium">Revenue Distribution</p>
                                                <p className="text-xs text-muted-foreground">Midnight Dreams - Oct 2024</p>
                                            </div>
                                        </div>
                                        <span className="font-bold text-green-400">+$45.20</span>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    </TabsContent>
                </Tabs>
            </main>
            <Footer />
        </div>
    );
}
