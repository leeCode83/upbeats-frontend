"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GradientText } from "@/components/shared/GradientText";
import { GlassCard } from "@/components/shared/GlassCard";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            {/* <Navbar /> */}

            <main className="flex-grow container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">
                        Frequently Asked <GradientText>Questions</GradientText>
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Everything you need to know about Upbeats, tokenization, and lending.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <GlassCard>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>What is Upbeats?</AccordionTrigger>
                                <AccordionContent>
                                    Upbeats is a blockchain-based platform that connects independent artists with fans and investors. It allows artists to tokenize their master recordings to raise funds and provides instant liquidity through DeFi lending.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>How does tokenization work?</AccordionTrigger>
                                <AccordionContent>
                                    Tokenization involves creating digital assets (tokens) that represent a share of the ownership or future revenue of a song. Fans can buy these tokens to support the artist and earn a portion of the streaming royalties.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Is my investment safe?</AccordionTrigger>
                                <AccordionContent>
                                    All transactions are recorded on the blockchain for transparency. However, like all investments, there are risks involved. We recommend diversifying your portfolio and doing your own research.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>How do I apply for a loan?</AccordionTrigger>
                                <AccordionContent>
                                    Artists can apply for a loan by connecting their streaming accounts and wallet. Our system analyzes your streaming history to determine your borrowing limit. If approved, you can use your future revenue as collateral to get instant funds.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger>What are the fees?</AccordionTrigger>
                                <AccordionContent>
                                    Upbeats charges a small platform fee on token sales and loan originations. Specific fee structures are detailed in the terms of service for each transaction.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </GlassCard>
                </div>
            </main>
            <Footer />
        </div>
    );
}
