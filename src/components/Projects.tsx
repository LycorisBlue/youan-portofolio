
import { motion } from 'framer-motion';
import { Section } from './Section';
import { ArrowUpRight } from 'lucide-react';
import { clsx } from 'clsx';

interface Project {
    id: number;
    title: string;
    category: string;
    image: string;
    cols: 1 | 2;
    tags: string[];
    challenge: string;
    impact: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Plateforme E-Commerce Ivoirienne",
        category: "Web & Payment",
        image: "bg-neutral-200", // Placeholder class
        cols: 2,
        tags: ["React", "Laravel", "Stripe"],
        challenge: "Créer une marketplace sécurisée pour PME locales",
        impact: "↑ 35% conversion vs ancien site"
    },
    {
        id: 2,
        title: "Santé Connectée",
        category: "Mobile App",
        image: "bg-neutral-300",
        cols: 1,
        tags: ["React Native", "Firebase"],
        challenge: "Réduire les rendez-vous manqués",
        impact: "Utilisée par 500+ patients"
    },
    {
        id: 3,
        title: "Smart Home Dashboard",
        category: "IoT",
        image: "bg-neutral-400",
        cols: 1,
        tags: ["Arduino", "React", "MQTT"],
        challenge: "Solution domotique low-cost",
        impact: "Coût réduit de 60%"
    },
    {
        id: 4,
        title: "Analytics Real-time",
        category: "Data Viz",
        image: "bg-neutral-200",
        cols: 2,
        tags: ["React", "D3.js", "Node"],
        challenge: "Visualisation de données en temps réel",
        impact: "10k+ data points/seconde"
    }
];

export const Projects = () => {
    return (
        <Section id="projects" className="bg-neutral-offWhite">
            <div className="mb-16 md:mb-24 max-w-2xl">
                <h2 className="mb-6">Projets Sélectionnés</h2>
                <p className="text-lg text-neutral-softBlack/70">
                    Une collection de travaux où la technique rencontre l'impact réel.
                    Chaque projet est une réponse à un problème concret.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className={clsx(
                            "group relative bg-white rounded-xl overflow-hidden shadow-subtle hover:shadow-deep transition-all duration-500 cursor-pointer",
                            project.cols === 2 ? "md:col-span-2 aspect-[2/1]" : "aspect-[4/3]"
                        )}
                    >
                        {/* Image Placeholder */}
                        <div className={clsx("absolute inset-0 transition-transform duration-700 group-hover:scale-105", project.image)} />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300" />

                        {/* Content */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-accent-coral font-mono text-sm tracking-wider uppercase">{project.category}</span>
                                    <div className="h-px w-8 bg-white/30" />
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-accent-gold transition-colors">
                                    {project.title}
                                </h3>

                                <div className="space-y-1 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    <p className="text-white/90 font-medium">{project.challenge}</p>
                                    <p className="text-accent-secondary text-sm">Impact: {project.impact}</p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs border border-white/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                                <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white hover:text-primary transition-colors">
                                    <ArrowUpRight size={24} />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
