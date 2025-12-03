import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';
import { Button } from './Button';
import { Section } from './Section';

export const Hero = () => {
    return (
        <Section id="home" className="min-h-screen flex items-center pt-32 pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
                    className="relative"
                >
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary/20 -ml-6 hidden md:block" />

                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6 leading-tight">
                        Intégrateur & <br />
                        <span className="text-accent-coral">Développeur ERP</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-neutral-softBlack/80 mb-8 max-w-xl leading-relaxed">
                        Expert Dolibarr, Géomaticien & DevOps Junior.
                        <span className="block mt-2 text-base text-neutral-softBlack/60">
                            Transformant les données complexes en solutions simples.
                        </span>
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button variant="primary" size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView()}>
                            Voir mes projets
                        </Button>
                        <Button variant="outline" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
                            Discutons
                        </Button>
                    </div>
                </motion.div>

                {/* Right Content - Visual Element */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
                    className="relative hidden md:block"
                >
                    <div className="relative z-10 bg-neutral-softBlack rounded-lg shadow-deep p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                        <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <span className="ml-2 text-xs text-white/40 font-mono">developer.tsx</span>
                        </div>

                        <div className="space-y-3 font-mono text-sm md:text-base">
                            <div className="flex gap-2">
                                <span className="text-accent-coral">const</span>
                                <span className="text-accent-gold">profile</span>
                                <span className="text-white">=</span>
                                <span className="text-white">{'{'}</span>
                            </div>
                            <div className="pl-6 space-y-2">
                                <div>
                                    <span className="text-secondary">role:</span>
                                    <span className="text-green-400"> 'Intégrateur ERP'</span>,
                                </div>
                                <div>
                                    <span className="text-secondary">stack:</span>
                                    <span className="text-white"> [</span>
                                    <span className="text-green-400">'Dolibarr'</span>,
                                    <span className="text-green-400"> 'React'</span>,
                                    <span className="text-green-400"> 'PHP'</span>
                                    <span className="text-white">]</span>,
                                </div>
                                <div>
                                    <span className="text-secondary">location:</span>
                                    <span className="text-green-400"> 'Abidjan, CI'</span>,
                                </div>
                                <div>
                                    <span className="text-secondary">passion:</span>
                                    <span className="text-green-400"> 'Géomatique & IoT'</span>
                                </div>
                            </div>
                            <div className="text-white">{'}'}</div>
                        </div>                 <div className="mt-4 flex items-center gap-2 text-white/60">
                            <span className="text-accent-coral">➜</span>
                            <span className="animate-pulse">_</span>
                        </div>
                    </div>


                    {/* Decorative elements */}
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent-coral/10 rounded-full blur-3xl -z-10" />
                    <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10" />
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-softBlack/40"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <ChevronDown className="animate-bounce" />
            </motion.div>
        </Section>
    );
};
