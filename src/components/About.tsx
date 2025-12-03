
import { motion } from 'framer-motion';
import { Section } from './Section';
import { GraduationCap, Code, TrendingUp } from 'lucide-react';

export const About = () => {
    const milestones = [
        {
            icon: GraduationCap,
            title: "Master Géographie",
            subtitle: "Option Géomatique",
            description: "Formation en SIG et analyse de données spatiales"
        },
        {
            icon: Code,
            title: "Formation Simplon",
            subtitle: "Développeur Full Stack",
            description: "Par passion pour l'informatique et le développement"
        },
        {
            icon: TrendingUp,
            title: "Expert ERP",
            subtitle: "Spécialiste Dolibarr",
            description: "Intégration et personnalisation de solutions ERP"
        }
    ];

    return (
        <Section id="about" className="bg-white">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="mb-6">Qui suis-je</h2>
                    <p className="text-xl text-neutral-softBlack/80 max-w-3xl mx-auto leading-relaxed">
                        Diplômé d'un <span className="font-bold text-primary">Master en Géographie option Géomatique</span>,
                        c'est la <span className="font-bold text-accent-coral">passion</span> qui m'a conduit vers l'informatique
                        à travers <span className="font-bold text-primary">Simplon</span>. Aujourd'hui, je combine mes compétences
                        en analyse de données spatiales et en développement pour créer des solutions techniques innovantes.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {milestones.map((milestone, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-neutral-offWhite rounded-xl p-6 hover:shadow-deep transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                <milestone.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-neutral-softBlack mb-1">
                                {milestone.title}
                            </h3>
                            <p className="text-primary font-semibold mb-3">
                                {milestone.subtitle}
                            </p>
                            <p className="text-neutral-softBlack/70">
                                {milestone.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
