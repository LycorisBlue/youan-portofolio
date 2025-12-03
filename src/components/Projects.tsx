import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from './Section';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { clsx } from 'clsx';
import { Modal } from './Modal';
import { Button } from './Button';

interface Project {
    id: number;
    title: string;
    category: string;
    image: string;
    cols: 1 | 2;
    tags: string[];
    challenge: string;
    impact: string;
    description: string;
    solution: string;
    demoUrl: string;
    repoUrl: string;
    isPrivate?: boolean;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Mon Fournisseur 2.0",
        category: "Logistics & E-commerce",
        image: "bg-neutral-200", // Placeholder class
        cols: 2,
        tags: ["React", "Tailwind", "Supabase"],
        challenge: "Simplifier l'importation de produits depuis la Chine pour les commerçants ivoiriens",
        impact: "Facilite le commerce international",
        description: "Une plateforme complète permettant de commander en toute simplicité depuis la Chine jusqu'en Côte d'Ivoire.",
        solution: "Une interface intuitive pour la recherche de produits, le calcul des coûts et le suivi logistique de bout en bout.",
        demoUrl: "https://landing-page-mon-fournisseur-2-0.vercel.app/",
        repoUrl: "#"
    },
    {
        id: 2,
        title: "Migration ERP & Cloud",
        category: "DevOps & Infrastructure",
        image: "bg-neutral-200",
        cols: 1,
        tags: ["Dolibarr", "AWS", "Docker"],
        challenge: "Migration d'un ERP critique vers une infrastructure cloud haute disponibilité",
        impact: "99.9% Uptime",
        description: "Migration complète de l'infrastructure ERP d'une PME industrielle.",
        solution: "Conteneurisation de Dolibarr, mise en place de réplication de base de données et backups automatisés.",
        demoUrl: "#",
        repoUrl: "#",
        isPrivate: true
    },
    {
        id: 3,
        title: "Module Dolibarr Sur-Mesure",
        category: "Backend Development",
        image: "bg-neutral-200",
        cols: 1,
        tags: ["PHP", "SQL", "Dolibarr API"],
        challenge: "Automatisation de la facturation récurrente complexe",
        impact: "-15h admin/mois",
        description: "Développement d'un module personnalisé pour Dolibarr.",
        solution: "Création d'un module PHP natif s'intégrant au hook system de Dolibarr pour générer des factures basées sur des règles métier spécifiques.",
        demoUrl: "#",
        repoUrl: "#",
        isPrivate: true
    },
    {
        id: 4,
        title: "Intégration API Paiement",
        category: "Fintech Integration",
        image: "bg-neutral-200",
        cols: 2,
        tags: ["Node.js", "Mobile Money", "Security"],
        challenge: "Intégrer les paiements locaux (Orange, MTN, Wave) sur une plateforme existante",
        impact: "Couverture 100% paiements locaux",
        description: "Middleware de paiement unifié pour plusieurs agrégateurs.",
        solution: "API Gateway sécurisée normalisant les flux de différents fournisseurs de Mobile Money.",
        demoUrl: "#",
        repoUrl: "#",
        isPrivate: true
    },

];

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
                        onClick={() => setSelectedProject(project)}
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

            <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
                {selectedProject && (
                    <div className="flex flex-col lg:flex-row h-full">
                        {/* Image Side */}
                        <div className={clsx(
                            "w-full lg:w-1/2 h-64 lg:h-full bg-neutral-200 relative",
                            selectedProject.image
                        )}>
                            <div className="absolute inset-0 bg-black/10" />
                        </div>

                        {/* Content Side */}
                        <div className="p-8 md:p-12 lg:p-16 w-full lg:w-1/2 overflow-y-auto">
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 bg-accent-coral/10 text-accent-coral rounded-full text-sm font-bold tracking-wide uppercase">
                                        {selectedProject.category}
                                    </span>
                                    <div className="h-px flex-1 bg-neutral-100" />
                                </div>

                                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary leading-tight">
                                    {selectedProject.title}
                                </h2>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {selectedProject.tags.map(tag => (
                                        <span key={tag} className="px-4 py-1.5 bg-neutral-100 text-neutral-softBlack/70 rounded-full text-sm font-medium border border-neutral-200">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-10 mb-12">
                                <div>
                                    <h3 className="text-xl font-bold mb-3 text-primary flex items-center gap-2">
                                        <span className="w-1 h-6 bg-accent-coral rounded-full" />
                                        Le Challenge
                                    </h3>
                                    <p className="text-lg text-neutral-softBlack/80 leading-relaxed">
                                        {selectedProject.description} {selectedProject.challenge}
                                    </p>
                                </div>

                                {selectedProject.solution && (
                                    <div className="space-y-6 text-lg text-neutral-softBlack/80 leading-relaxed">
                                        {selectedProject.isPrivate ? (
                                            <div className="bg-neutral-offWhite p-6 rounded-xl border border-neutral-200">
                                                <p className="italic text-neutral-softBlack/70">
                                                    "Projet privé. Lors de notre prise de contact nous pourrons en parler, mais sous ordre de confidentialité aucune consultation n'est possible."
                                                </p>
                                            </div>
                                        ) : (
                                            <>
                                                <div>
                                                    <h4 className="font-bold text-primary mb-2">Le Défi</h4>
                                                    <p>{selectedProject.challenge}</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-primary mb-2">La Solution</h4>
                                                    <p>{selectedProject.solution}</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-primary mb-2">L'Impact</h4>
                                                    <p className="font-medium text-secondary">{selectedProject.impact}</p>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>

                            {!selectedProject.isPrivate && (
                                <div className="flex flex-wrap gap-4 pt-8 border-t border-neutral-100">
                                    <Button variant="primary" size="lg" className="gap-2 shadow-lg hover:shadow-xl" onClick={() => window.open(selectedProject.demoUrl, '_blank')}>
                                        Voir le site <ExternalLink size={20} />
                                    </Button>
                                    <Button variant="outline" size="lg" className="gap-2" onClick={() => window.open(selectedProject.repoUrl, '_blank')}>
                                        Code Source <Github size={20} />
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </Modal>
        </Section >
    );
};

