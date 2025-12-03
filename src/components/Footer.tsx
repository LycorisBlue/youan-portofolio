
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
                        <span className="font-serif font-bold text-2xl text-primary">FY</span>
                        <p className="text-neutral-softBlack/60 text-sm">
                            © {new Date().getFullYear()} Faizan Youan-Bi. All rights reserved.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="https://github.com/faizanyouanbi" target="_blank" rel="noopener noreferrer" className="text-neutral-softBlack hover:text-primary transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com/in/faizan-youan-bi" target="_blank" rel="noopener noreferrer" className="text-neutral-softBlack hover:text-primary transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-softBlack hover:text-primary transition-colors">
                            <Twitter size={20} />
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
