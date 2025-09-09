import React, { useEffect, useRef, useState } from 'react';
import ChatBubbleIcon from './icons/ChatBubbleIcon';
import TeamIcon from './icons/TeamIcon';
import LightningBoltIcon from './icons/LightningBoltIcon';
import PhoneIcon from './icons/PhoneIcon';

const InfoPoint: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0 mr-4 mt-1">{icon}</div>
        <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-300">{children}</p>
        </div>
    </div>
);

const ContactForm: React.FC = () => {
    return (
        <section className="bg-black text-white relative">
            <div className="container mx-auto px-6 py-24">
                <h2 className="text-5xl font-bold text-center mb-16">Fale conosco</h2>
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <InfoPoint icon={<ChatBubbleIcon className="w-8 h-8 text-blue-300" />} title="Atendimento personalizado">
                            Fale com nossa equipe e conheça nossos produtos. Iremos ouvir a sua demanda e te apresentar uma proposta perfeita para o seu projeto!
                        </InfoPoint>
                        <InfoPoint icon={<TeamIcon className="w-8 h-8 text-blue-300" />} title="Equipe Técnica">
                            Nossa equipe técnica está preparada para executar e conduzir os seus projetos.
                        </InfoPoint>
                        <InfoPoint icon={<LightningBoltIcon className="w-8 h-8 text-blue-300" />} title="Resposta rápida">
                            Entre em contato conosco no formulário e iremos te retornar o mais rápido possível.
                        </InfoPoint>
                        <InfoPoint icon={<PhoneIcon className="w-8 h-8 text-blue-300" />} title="Prefere o telefone?">
                            Ligue para (11) 3073-1616 e fale com a nossa equipe
                        </InfoPoint>
                    </div>
                    <div className="bg-gray-900/50 p-8 rounded-lg">
                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nome *</label>
                                    <input type="text" id="name" className="w-full bg-gray-800 border border-gray-600 rounded-md p-3 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Seu Nome*" />
                                </div>
                                <div>
                                    <label htmlFor="surname" className="block text-sm font-medium text-gray-300 mb-1">Sobrenome *</label>
                                    <input type="text" id="surname" className="w-full bg-gray-800 border border-gray-600 rounded-md p-3 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Seu Sobrenome*" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email *</label>
                                <input type="email" id="email" className="w-full bg-gray-800 border border-gray-600 rounded-md p-3 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Seu melhor e-mail" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Telefone *</label>
                                <input type="tel" id="phone" className="w-full bg-gray-800 border border-gray-600 rounded-md p-3 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Seu melhor telefone" />
                            </div>
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Empresa *</label>
                                <input type="text" id="company" className="w-full bg-gray-800 border border-gray-600 rounded-md p-3 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Sua empresa" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Descreva brevemente sobre o projeto</label>
                                <textarea id="message" rows={4} className="w-full bg-gray-800 border border-gray-600 rounded-md p-3 text-white focus:ring-blue-500 focus:border-blue-500"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="group relative w-full">
                                    <div className="relative z-10 flex h-12 w-full items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#070e41] to-[#263381] border-2 border-[rgb(76_100_255)] px-6 font-medium text-white transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3">
                                        Enviar Mensagem
                                    </div>
                                    <div className="absolute inset-0 z-0 h-full w-full rounded-full transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#394481,10px_10px_#5766be,15px_15px_#8898f3]"></div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
