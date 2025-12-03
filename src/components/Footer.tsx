
import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { Section } from './Section';

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-neutral-offWhite border-t border-primary/10">
            <Section className="py-12 md:py-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <span className="font-serif font-bold text-2xl text-primary">Youan Bi Franck</span>
                        <p className="text-neutral-softBlack/60 text-sm">
                            © {new Date().getFullYear()} Youan Bi Franck. Tous droits réservés.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a
                            href="#"
                            className="text-neutral-softBlack/40 hover:text-neutral-softBlack/60 transition-colors cursor-not-allowed"
                            title="Coming Soon"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/faizan-franck-stephane-wilfried-youan-bi-625420193"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-softBlack hover:text-primary transition-colors transform hover:scale-110"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href="#"
                            className="text-neutral-softBlack/40 hover:text-neutral-softBlack/60 transition-colors cursor-not-allowed"
                            title="Coming Soon"
                        >
                            <Twitter size={24} />
                        </a>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="p-3 rounded-full bg-white border border-primary/10 shadow-subtle hover:shadow-medium hover:-translate-y-1 transition-all group"
                        aria-label="Back to top"
                    >
                        <ArrowUp size={20} className="text-primary group-hover:text-accent-coral transition-colors" />
                    </button>
                </div>
            </Section>
        </footer>
    );
};
