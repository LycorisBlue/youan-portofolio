
import { Section } from './Section';
import { clsx } from 'clsx';

const experiences = [
    {
        role: "Développeur Freelance Full Stack",
        company: "Indépendant",
        period: "2023 - Présent",
        description: "Conception et développement de solutions web et mobiles sur mesure pour des clients internationaux et locaux.",
        tags: ["React", "Node.js", "IoT"]
    },
    {
        role: "Développeur Web & Mobile",
        company: "Simplon Côte d'Ivoire",
        period: "2022 - 2023",
        description: "Formation intensive et projets pratiques. Développement d'applications complètes en méthodologie Agile.",
        tags: ["Laravel", "React Native", "Scrum"]
    }
];

export const Experience = () => {
    return (
        <Section id="experience" className="bg-neutral-offWhite">
            <div className="mb-16 max-w-2xl mx-auto text-center">
                <h2 className="mb-6">Parcours</h2>
                <p className="text-lg text-neutral-softBlack/70">
                    Une évolution constante guidée par la curiosité et l'exigence technique.
                </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 -ml-px hidden md:block" />

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className={clsx(
                            "flex flex-col md:flex-row gap-8 items-center",
                            index % 2 === 0 ? "md:flex-row-reverse" : ""
                        )}>
                            {/* Content */}
                            <div className="w-full md:w-1/2">
                                <div className={clsx(
                                    "bg-white p-8 rounded-xl shadow-subtle hover:shadow-medium transition-all duration-300 border border-primary/5",
                                    index % 2 === 0 ? "md:text-left" : "md:text-right"
                                )}>
                                    <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm font-bold rounded-full mb-4">
                                        {exp.period}
                                    </span>
                                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                                    <div className="text-primary/70 font-medium mb-4">{exp.company}</div>
                                    <p className="text-neutral-softBlack/80 mb-6 leading-relaxed">
                                        {exp.description}
                                    </p>
                                    <div className={clsx(
                                        "flex flex-wrap gap-2",
                                        index % 2 === 0 ? "justify-start" : "justify-end"
                                    )}>
                                        {exp.tags.map(tag => (
                                            <span key={tag} className="text-xs font-mono text-neutral-softBlack/60 bg-neutral-100 px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Dot */}
                            <div className="absolute left-1/2 w-4 h-4 rounded-full bg-accent-coral border-4 border-white shadow-sm transform -translate-x-1/2 hidden md:block" />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
