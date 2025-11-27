"use client";

import { Footer } from "@/components/layout/Footer";
import { HallOfFameCarousel } from "@/components/sync-catalog/HallOfFameCarousel";
import { MasterRecordingList } from "@/components/sync-catalog/MasterRecordingList";
import { GradientText } from "@/components/shared/GradientText";

export default function SyncCatalog() {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <main className="flex-grow">
                {/* Header Section */}
                <section className="pt-32 pb-10 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
                    <div className="relative z-10 container mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Sync <GradientText>Catalog</GradientText>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Discover premium master recordings for your next film, game, or commercial project.
                            Direct licensing on the blockchain.
                        </p>
                    </div>
                </section>

                {/* Hall of Fame Carousel */}
                <section className="mb-10 container mx-auto px-4">
                    <HallOfFameCarousel />
                </section>

                {/* Catalog List */}
                <section className="container mx-auto px-4 pb-20">
                    <MasterRecordingList />
                </section>
            </main>
            <Footer />
        </div>
    );
}
