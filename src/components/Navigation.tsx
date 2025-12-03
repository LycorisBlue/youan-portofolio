import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import { Button } from './Button';

export const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Determine visibility based on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false); // Scrolling down & past threshold -> Hide
            } else {
                setIsVisible(true); // Scrolling up or at top -> Show
            }

            // Determine background style
            setIsScrolled(currentScrollY > 50);

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const navLinks = [
        { name: 'Accueil', href: '#home' },
        { name: 'À Propos', href: '#about' },
        { name: 'Projets', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={clsx(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform',
                isVisible ? 'translate-y-0' : '-translate-y-full',
                isScrolled ? 'bg-white/80 backdrop-blur-md shadow-subtle py-4' : 'bg-transparent py-6'
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center font-serif font-bold text-xl group-hover:scale-105 transition-transform">
                            YF
                        </div>
                        <span className={clsx(
                            "font-serif font-bold text-xl tracking-tight transition-colors",
                            isScrolled ? "text-primary" : "text-primary"
                        )}>
                            Youan Bi Franck
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-neutral-softBlack hover:text-accent-coral font-medium transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-coral transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                        <Button variant="primary" size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
                            Discutons
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-neutral-softBlack"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
            <div className={clsx(
                'fixed top-0 right-0 bottom-0 w-[80%] bg-white shadow-2xl z-50 md:hidden transition-transform duration-300 ease-in-out pt-24 px-6 overflow-y-auto',
                isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            )}>
                <nav className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-2xl font-serif font-bold text-primary hover:text-accent-coral transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button variant="primary" size="lg" className="w-full mt-4" onClick={() => {
                        setIsMobileMenuOpen(false);
                        document.getElementById('contact')?.scrollIntoView();
                    }}>
                        Discutons
                    </Button>
                </nav>
            </div>
        </header >
    );
};
