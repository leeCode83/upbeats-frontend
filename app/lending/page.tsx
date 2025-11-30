"use client";

import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/shared/GlassCard";
import { GradientText } from "@/components/shared/GradientText";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Wallet, ArrowRight, DollarSign, RefreshCw } from "lucide-react";
import { useState } from "react";

// Mock Data for Collaterals
const COLLATERAL_OPTIONS = [
    { id: "eth", name: "Ethereum", symbol: "ETH", price: 2000, ltv: 0.7 },
    { id: "usdc", name: "USD Coin", symbol: "USDC", price: 1, ltv: 0.8 },
    { id: "music_nft", name: "Music NFT (Midnight Dreams)", symbol: "MNFT", price: 500, ltv: 0.5 },
];

const INTEREST_RATE = 0.05; // 5% Fixed Interest

export default function Lending() {
    // Borrow State
    const [selectedCollateralId, setSelectedCollateralId] = useState(COLLATERAL_OPTIONS[0].id);
    const [collateralAmount, setCollateralAmount] = useState("");

    // Repay State (Mocking active loan)
    const [activeLoan, setActiveLoan] = useState<{ amount: number; collateral: string } | null>(null);
    const [repayAmount, setRepayAmount] = useState("");

    const selectedCollateral = COLLATERAL_OPTIONS.find(c => c.id === selectedCollateralId) || COLLATERAL_OPTIONS[0];

    // Calculations
    const maxLoanAmount = collateralAmount
        ? (parseFloat(collateralAmount) * selectedCollateral.price * selectedCollateral.ltv)
        : 0;

    const interestAmount = maxLoanAmount * INTEREST_RATE;
    const totalRepayment = maxLoanAmount + interestAmount;

    const handleBorrow = () => {
        if (!collateralAmount || parseFloat(collateralAmount) <= 0) return;
        // Mock API Call
        setActiveLoan({
            amount: totalRepayment,
            collateral: `${collateralAmount} ${selectedCollateral.symbol}`
        });
        setCollateralAmount("");
    };

    const handleRepay = () => {
        if (!activeLoan || !repayAmount) return;
        const amount = parseFloat(repayAmount);
        if (amount >= activeLoan.amount) {
            setActiveLoan(null); // Loan paid off
            setRepayAmount("");
        } else {
            setActiveLoan(prev => prev ? { ...prev, amount: prev.amount - amount } : null);
            setRepayAmount("");
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <main className="flex-grow container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">
                        DeFi <GradientText>Lending</GradientText> Protocol
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Borrow against your crypto assets or music NFTs instantly.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* BORROW SECTION */}
                    <GlassCard className="p-8 flex flex-col h-full">
                        <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                            <Wallet className="text-primary" />
                            <h2 className="text-2xl font-bold">Borrow</h2>
                        </div>

                        <div className="space-y-6 flex-grow">
                            {/* Collateral Selection */}
                            <div>
                                <label className="block text-sm font-medium mb-2 text-muted-foreground">Select Collateral</label>
                                <select
                                    className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                    value={selectedCollateralId}
                                    onChange={(e) => setSelectedCollateralId(e.target.value)}
                                >
                                    {COLLATERAL_OPTIONS.map(option => (
                                        <option key={option.id} value={option.id}>
                                            {option.name} ({option.symbol}) - LTV {option.ltv * 100}%
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Collateral Amount Input */}
                            <div>
                                <label className="block text-sm font-medium mb-2 text-muted-foreground">Collateral Amount</label>
                                <div className="relative">
                                    <Input
                                        type="number"
                                        placeholder="0.00"
                                        value={collateralAmount}
                                        onChange={(e) => setCollateralAmount(e.target.value)}
                                        className="pr-16 text-lg font-semibold"
                                    />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-muted-foreground">
                                        {selectedCollateral.symbol}
                                    </span>
                                </div>
                                <p className="text-xs text-muted-foreground mt-2">
                                    Est. Value: ${collateralAmount ? (parseFloat(collateralAmount) * selectedCollateral.price).toLocaleString() : "0.00"}
                                </p>
                            </div>

                            {/* Loan Details */}
                            <div className="p-5 bg-white/5 rounded-xl space-y-3 border border-white/5">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Max Loan Amount</span>
                                    <span className="font-bold text-green-400">${maxLoanAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Interest (5%)</span>
                                    <span className="font-bold">${interestAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                                </div>
                                <div className="border-t border-white/10 my-2 pt-2 flex justify-between text-base">
                                    <span className="font-medium">Total Repayment</span>
                                    <span className="font-bold text-primary">${totalRepayment.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                                </div>
                            </div>

                            <Button
                                className="w-full bg-primary hover:bg-primary/90 h-12 text-lg font-bold shadow-lg shadow-primary/20"
                                onClick={handleBorrow}
                                disabled={!collateralAmount || parseFloat(collateralAmount) <= 0}
                            >
                                Borrow Now <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    </GlassCard>

                    {/* REPAY SECTION */}
                    <GlassCard className="p-8 flex flex-col h-full relative overflow-hidden">
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                        <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                            <RefreshCw className="text-primary" />
                            <h2 className="text-2xl font-bold">Repay</h2>
                        </div>

                        {activeLoan ? (
                            <div className="space-y-6 flex-grow flex flex-col justify-center">
                                <div className="text-center p-6 bg-black/20 rounded-xl border border-white/5">
                                    <p className="text-sm text-muted-foreground mb-1">Outstanding Balance</p>
                                    <p className="text-4xl font-bold text-white mb-2">
                                        ${activeLoan.amount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                                    </p>
                                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                                        Collateral: {activeLoan.collateral}
                                    </Badge>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2 text-muted-foreground">Repayment Amount ($)</label>
                                    <Input
                                        type="number"
                                        placeholder="0.00"
                                        value={repayAmount}
                                        onChange={(e) => setRepayAmount(e.target.value)}
                                        className="text-lg"
                                    />
                                </div>

                                <Button
                                    variant="secondary"
                                    className="w-full h-12 text-lg font-bold"
                                    onClick={handleRepay}
                                    disabled={!repayAmount || parseFloat(repayAmount) <= 0}
                                >
                                    Repay Loan
                                </Button>
                            </div>
                        ) : (
                            <div className="flex-grow flex flex-col items-center justify-center text-center space-y-4 opacity-60">
                                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                                    <DollarSign className="w-8 h-8 text-muted-foreground" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">No Active Loans</h3>
                                    <p className="text-sm text-muted-foreground max-w-xs mx-auto mt-2">
                                        You don't have any outstanding loans. Borrow funds to see your repayment details here.
                                    </p>
                                </div>
                            </div>
                        )}
                    </GlassCard>
                </div>
            </main>
            <Footer />
        </div>
    );
}
