
import { motion } from 'framer-motion';
import { Section } from './Section';
import { Button } from './Button';
import { Download } from 'lucide-react';

export const About = () => {
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
                    <a href="/cv.pdf" download>
                        <Button variant="outline" className="gap-2">
                            <Download size={18} />
                            Télécharger mon CV
                        </Button>
                    </a>
                </motion.div>
            </div>
        </Section>
    );
};
