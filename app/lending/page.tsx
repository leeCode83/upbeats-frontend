"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/shared/GlassCard";
import { GradientText } from "@/components/shared/GradientText";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider"; // Need to check if I installed slider, if not I'll use standard input or install it. I didn't install slider. I'll use Input type="range" or just a mock visual.
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle, Calculator } from "lucide-react";
import { useState } from "react";

export default function Lending() {
    const [loanAmount, setLoanAmount] = useState(5000);

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            {/* <Navbar /> */}

            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">
                        Instant <GradientText>Liquidity</GradientText> for Artists
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Use your future streaming revenue as collateral to get instant funding for your next project. No credit checks, no paperwork.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {/* Loan Calculator */}
                    <GlassCard className="p-8">
                        <div className="flex items-center gap-2 mb-6">
                            <Calculator className="text-primary" />
                            <h2 className="text-2xl font-bold">Loan Calculator</h2>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">How much do you need?</label>
                                <div className="flex items-center gap-4">
                                    <span className="text-2xl font-bold text-primary">${loanAmount.toLocaleString()}</span>
                                    <input
                                        type="range"
                                        min="1000"
                                        max="50000"
                                        step="1000"
                                        value={loanAmount}
                                        onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Select Collateral</label>
                                <select className="w-full bg-black/20 border border-white/10 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                                    <option>Midnight Dreams (Est. Value: $25,000)</option>
                                    <option>Neon City (Est. Value: $12,000)</option>
                                </select>
                            </div>

                            <div className="p-4 bg-white/5 rounded-lg space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Interest Rate</span>
                                    <span className="font-bold">5.5% APR</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">LTV Ratio</span>
                                    <span className="font-bold">20%</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Monthly Payment</span>
                                    <span className="font-bold">${(loanAmount * 0.055 / 12).toFixed(2)}</span>
                                </div>
                            </div>

                            <Button className="w-full bg-primary hover:bg-primary/90 h-12 text-lg">
                                Apply for Loan
                            </Button>
                        </div>
                    </GlassCard>

                    {/* Benefits & Info */}
                    <div className="space-y-6">
                        <GlassCard>
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <CheckCircle className="text-green-400" /> Why borrow from Upbeats?
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">1</div>
                                    <div>
                                        <p className="font-bold">Instant Approval</p>
                                        <p className="text-sm text-muted-foreground">Smart contracts verify your collateral instantly.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">2</div>
                                    <div>
                                        <p className="font-bold">Keep Your Rights</p>
                                        <p className="text-sm text-muted-foreground">You retain ownership of your masters. Only the revenue is used for repayment.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">3</div>
                                    <div>
                                        <p className="font-bold">Flexible Repayment</p>
                                        <p className="text-sm text-muted-foreground">Repay automatically from streaming royalties.</p>
                                    </div>
                                </li>
                            </ul>
                        </GlassCard>

                        <GlassCard className="bg-yellow-500/10 border-yellow-500/20">
                            <div className="flex gap-3">
                                <AlertCircle className="text-yellow-500 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-yellow-500">Important Note</h4>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Failure to repay the loan may result in liquidation of your collateral tokens to cover the outstanding debt.
                                    </p>
                                </div>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
