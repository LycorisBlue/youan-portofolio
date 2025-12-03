
import { motion } from 'framer-motion';
import { Section } from './Section';
import { Button } from './Button';
import { Download } from 'lucide-react';

export const About = () => {
    const stats = [
        { label: 'Projects Completed', value: '50+' },
        { label: 'Active Clients', value: '15+' },
        { label: 'Years Experience', value: '3+' },
    ];

    return (
        <Section id="about" className="bg-white">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-[45%] relative"
                >
                    <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-deep">
                        {/* Placeholder for user image */}
                        <div className="absolute inset-0 bg-neutral-softBlack/5 flex items-center justify-center">
                            <span className="text-neutral-softBlack/20 font-serif text-4xl">FY</span>
                        </div>
                        <div className="absolute inset-0 border-2 border-accent-gold/20 rounded-lg m-4" />
                    </div>
                    {/* Decorative */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/10 rounded-full -z-10" />
                </motion.div>

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-[55%]"
                >
                    <h2 className="mb-8">Qui je suis</h2>

                    <div className="space-y-6 text-lg text-neutral-softBlack/80 mb-10">
                        <p>
                            Mon parcours a commencé chez Simplon Côte d'Ivoire, où j'ai découvert que le code n'était pas une fin en soi, mais un moyen de résoudre des problèmes réels.
                        </p>
                        <p>
                            Je ne me contente pas d'écrire du code. Je construis des ponts entre la complexité technique et les besoins humains. Mon approche est collaborative, agile et toujours orientée vers l'utilisateur final.
                        </p>
                        <p>
                            Passionné par l'interconnexion entre le Web, le Mobile et l'IoT, je crois fermement que la technologie peut transformer le quotidien en Afrique en apportant des solutions locales, accessibles et performantes.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-6 mb-10">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center lg:text-left">
                                <div className="text-3xl font-serif font-bold text-accent-coral mb-1">{stat.value}</div>
                                <div className="text-sm text-neutral-softBlack/60 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="mb-10">
                        <h3 className="text-lg font-bold mb-4">Compétences Clés</h3>
                        <p className="leading-relaxed">
                            <span className="font-bold text-primary">Frontend:</span> React, React Native, UI/UX •
                            <span className="font-bold text-primary ml-2">Backend:</span> PHP (Laravel), Node.js, APIs •
                            <span className="font-bold text-primary ml-2">IoT:</span> Arduino, Raspberry Pi, MQTT
                        </p>
                    </div>

                    <Button variant="outline" className="gap-2">
                        <Download size={18} />
                        Télécharger mon CV
                    </Button>
                </motion.div>
            </div>
        </Section>
    );
};
