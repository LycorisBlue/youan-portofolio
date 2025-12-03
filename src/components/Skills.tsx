
import { Section } from './Section';
import { Server, Smartphone, Cpu, Cloud } from 'lucide-react';

export const Skills = () => {
    const skillGroups = [
        {
            icon: <Server className="w-8 h-8 text-accent-coral" />,
            title: "Architecture Backend",
            skills: ["PHP (Laravel)", "Node.js", "APIs REST/GraphQL", "Design Patterns", "Scalability"]
        },
        {
            title: "Backend & ERP",
            icon: <Server size={32} />,
            skills: ["PHP", "Laravel", "Dolibarr", "Node.js", "MySQL", "PostgreSQL"]
        },
        {
            title: "Mobile & Web",
            icon: <Smartphone size={32} />,
            skills: ["React Native", "React.js", "JavaScript", "WordPress", "HTML/CSS"]
        },
        {
            title: "IoT & Embedded",
            icon: <Cpu size={32} />,
            skills: ["Arduino", "Raspberry Pi", "MQTT"]
        },
        {
            title: "DevOps & Cloud",
            icon: <Cloud size={32} />,
            skills: ["Terraform", "Kubernetes", "OpenStack", "Docker", "CI/CD"]
        }
    ];

    return (
        <Section id="skills" className="bg-white">
            <div className="mb-16 max-w-2xl">
                <h2 className="mb-6">Expertise Technique</h2>
                <p className="text-lg text-neutral-softBlack/70">
                    Au-delà des langages, je maîtrise des écosystèmes complets pour bâtir des solutions robustes et pérennes.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillGroups.map((group, index) => (
                    <div
                        key={index}
                        className="p-8 rounded-xl bg-neutral-offWhite border border-primary/5 hover:border-primary/20 hover:shadow-medium transition-all duration-300 group"
                    >
                        <div className="mb-6 p-3 bg-white rounded-lg w-fit shadow-subtle group-hover:scale-110 transition-transform duration-300">
                            {group.icon}
                        </div>

                        <h3 className="text-xl font-bold mb-4">{group.title}</h3>

                        <ul className="space-y-2">
                            {group.skills.map((skill, i) => (
                                <li key={i} className="flex items-center gap-2 text-neutral-softBlack/80">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
};
