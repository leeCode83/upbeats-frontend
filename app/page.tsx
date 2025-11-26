"use client";

import { Button } from "@/components/ui/button";
import { Footer } from "@/components/layout/Footer";
import { GradientText } from "@/components/shared/GradientText";
import { GlassCard } from "@/components/shared/GlassCard";
import { HeroBackground } from "@/components/shared/HeroBackground";
import { ArrowRight, Music, Coins, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-hidden">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center overflow-hidden">
          {/* Background Elements */}
          <HeroBackground />

          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                The Future of <br />
                <GradientText>Music Investment</GradientText>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10">
                Connect with your favorite artists, invest in their success, and earn royalties through blockchain technology.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg h-12 px-8 rounded-full shadow-lg shadow-primary/25">
                  Start Investing <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg h-12 px-8 rounded-full border-white/20 hover:bg-white/10">
                  For Artists
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Upbeats?</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                We provide a comprehensive ecosystem for artists and fans to grow together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <GlassCard hoverEffect className="h-full">
                  <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6 text-primary">
                    <Coins size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Tokenization</h3>
                  <p className="text-muted-foreground">
                    Artists can tokenize their master recordings. Fans buy tokens to own a share of the revenue.
                  </p>
                </GlassCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <GlassCard hoverEffect className="h-full">
                  <div className="h-12 w-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-6 text-secondary">
                    <TrendingUp size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">DeFi Lending</h3>
                  <p className="text-muted-foreground">
                    Artists can use their future streaming revenue as collateral to get instant loans for production.
                  </p>
                </GlassCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <GlassCard hoverEffect className="h-full">
                  <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center mb-6 text-accent">
                    <Users size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Fan Engagement</h3>
                  <p className="text-muted-foreground">
                    Token holders get exclusive perks like meet & greets, voting rights, and VIP concert tickets.
                  </p>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 pointer-events-none" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to join the revolution?</h2>
            <Link href="/tokenization">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 text-lg h-14 px-10 rounded-full font-bold">
                Explore Marketplace
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
