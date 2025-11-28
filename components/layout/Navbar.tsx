"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/shared/GradientText";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
    { name: "Home", href: "/" },
    {
        name: "Marketplace",
        href: "#", // Placeholder for dropdown parent
        items: [
            { name: "Sync Catalog", href: "/sync-catalog" },
            { name: "Tokenization", href: "/tokenization" },
        ],
    },
    { name: "About", href: "/about" }
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "sticky z-50 transition-all duration-500 ease-in-out border-white/10 inset-x-0 mx-auto",
                scrolled
                    ? "top-6 w-[95%] max-w-6xl rounded-full border bg-[#050505]/70 backdrop-blur-xl shadow-2xl shadow-black/50"
                    : "top-0 w-full border-b bg-black/20 backdrop-blur-sm",
                isOpen && scrolled && "rounded-3xl" // Adjust shape when mobile menu is open and floating
            )}
        >
            <div className="px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 shrink-0">
                    <GradientText className="text-2xl font-bold tracking-tighter">
                        Upbeats
                    </GradientText>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center justify-center space-x-2">
                    {navItems.map((item) => {
                        if (item.items) {
                            return (
                                <DropdownMenu key={item.name}>
                                    <DropdownMenuTrigger className={cn(
                                        "flex items-center px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 focus:outline-none",
                                        pathname.startsWith(item.href)
                                            ? "bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                                            : "text-muted-foreground hover:text-white hover:bg-white/5"
                                    )}>
                                        {item.name}
                                        <ChevronDown className="ml-1 h-3 w-3" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="center" className="bg-[#0a0a0a]/95 border-white/10 backdrop-blur-xl rounded-xl p-2 mt-2 w-48">
                                        {item.items.map((subItem) => (
                                            <DropdownMenuItem key={subItem.href} asChild className="rounded-lg focus:bg-white/10 focus:text-white cursor-pointer">
                                                <Link
                                                    href={subItem.href}
                                                    className={cn(
                                                        "w-full",
                                                        pathname === subItem.href && "text-primary"
                                                    )}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            );
                        }

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
                                    pathname === item.href
                                        ? "bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                                        : "text-muted-foreground hover:text-white hover:bg-white/5"
                                )}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Auth Buttons */}
                <div className="hidden md:flex items-center space-x-3 shrink-0">
                    <Link href="/dashboard">
                        <Button variant="ghost" className="rounded-full text-muted-foreground hover:text-white hover:bg-white/5">
                            Dashboard
                        </Button>
                    </Link>
                    <Button className="rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 px-6">
                        Connect Wallet
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-muted-foreground hover:text-white transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-white/5 bg-transparent pb-6 px-2">
                    <div className="px-4 py-4 flex flex-col space-y-3">
                        {navItems.map((item) => {
                            if (item.items) {
                                return (
                                    <div key={item.name} className="flex flex-col space-y-2">
                                        <button
                                            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                                            className="flex items-center justify-between px-4 py-3 text-sm font-medium text-muted-foreground hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                                        >
                                            {item.name}
                                            <ChevronDown
                                                className={cn(
                                                    "h-4 w-4 transition-transform",
                                                    mobileDropdownOpen && "rotate-180"
                                                )}
                                            />
                                        </button>
                                        {mobileDropdownOpen && (
                                            <div className="pl-4 flex flex-col space-y-1 ml-1">
                                                {item.items.map((subItem) => (
                                                    <Link
                                                        key={subItem.href}
                                                        href={subItem.href}
                                                        className={cn(
                                                            "block px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                                                            pathname === subItem.href
                                                                ? "bg-white/10 text-white"
                                                                : "text-muted-foreground hover:text-white hover:bg-white/5"
                                                        )}
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "block px-4 py-3 text-sm font-medium rounded-xl transition-colors",
                                        pathname === item.href
                                            ? "bg-white/10 text-white"
                                            : "text-muted-foreground hover:text-white hover:bg-white/5"
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                        <div className="pt-4 flex flex-col space-y-3">
                            <Button variant="ghost" className="w-full justify-start rounded-xl hover:bg-white/5">
                                Log in
                            </Button>
                            <Button className="w-full rounded-xl bg-primary hover:bg-primary/90">
                                Sign up
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
