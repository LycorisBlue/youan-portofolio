import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { Button } from './Button';

export const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
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

                    {/* Navigation */}
                    <nav className="flex items-center gap-4 md:gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm md:text-base text-neutral-softBlack hover:text-accent-coral font-medium transition-colors relative group"
                            >
                                <span className="hidden md:inline">{link.name}</span>
                                <span className="md:hidden">{link.name.charAt(0)}</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-coral transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                        <Button variant="primary" size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
                            <span className="hidden md:inline">Discutons</span>
                            <span className="md:hidden">•••</span>
                        </Button>
                    </nav>

                </div>
            </div>
        </header >
    );
};
