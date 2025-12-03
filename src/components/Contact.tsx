import React, { useState } from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { Mail, Send } from 'lucide-react';

export const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        alert("Message envoyé ! (Simulation)");
    };

    return (
        <Section id="contact" className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                {/* Contact Info */}
                <div>
                    <h2 className="mb-6">Parlons de votre projet</h2>
                    <p className="text-lg text-neutral-softBlack/70 mb-8">
                        Vous avez une idée ? Un défi technique ? Ou simplement envie de discuter tech ?
                        Je suis toujours à l'écoute de nouvelles opportunités.
                    </p>

                    <div className="space-y-6 mb-10">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-neutral-offWhite rounded-full text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <div className="text-sm text-neutral-softBlack/60 font-medium">Email</div>
                                <a href="mailto:faizan.youanbi@email.com" className="text-lg font-bold text-primary hover:text-accent-coral transition-colors">
                                    faizan.youanbi@email.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-neutral-offWhite rounded-xl border border-primary/5">
                        <p className="text-sm text-neutral-softBlack/70 mb-2">Promesse de réponse</p>
                        <p className="font-medium text-primary">
                            "Vous entendrez parler de moi en moins de 24h. C'est un engagement."
                        </p>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-white p-8 rounded-2xl shadow-medium border border-neutral-100">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-neutral-softBlack">Nom</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-neutral-offWhite border-transparent focus:bg-white focus:border-primary focus:ring-0 transition-colors"
                                    placeholder="Votre nom"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-neutral-softBlack">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-neutral-offWhite border-transparent focus:bg-white focus:border-primary focus:ring-0 transition-colors"
                                    placeholder="votre@email.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-neutral-softBlack">Sujet</label>
                            <select
                                id="subject"
                                className="w-full px-4 py-3 rounded-lg bg-neutral-offWhite border-transparent focus:bg-white focus:border-primary focus:ring-0 transition-colors"
                            >
                                <option>Projet Web / Mobile</option>
                                <option>Consulting IoT</option>
                                <option>Partenariat</option>
                                <option>Autre</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-neutral-softBlack">Message</label>
                            <textarea
                                id="message"
                                required
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg bg-neutral-offWhite border-transparent focus:bg-white focus:border-primary focus:ring-0 transition-colors resize-none"
                                placeholder="Dites-moi tout..."
                            />
                        </div>

                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            className="w-full gap-2"
                            isLoading={isSubmitting}
                        >
                            Envoyer le message
                            <Send size={18} />
                        </Button>
                    </form>
                </div>
            </div>
        </Section>
    );
};
