
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, User, Mail, Phone, Building2, FileText } from 'lucide-react';
import { formatCurrency } from '../lib/utils';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    simulationData?: any;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, simulationData }) => {
    const [formState, setFormState] = useState({ name: '', email: '', phone: '', company: '', message: '' });
    const [isSending, setIsSending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);

        try {
            const response = await fetch('http://localhost:3001/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formState,
                    simulation: simulationData || null
                }),
            });

            if (!response.ok) throw new Error('Falha no envio');

            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                onClose();
                setFormState({ name: '', email: '', phone: '', company: '', message: '' });
            }, 3000);
        } catch (error) {
            console.error('Erro ao enviar:', error);
            alert('Houve um erro ao enviar sua solicitação. Por favor, tente novamente ou contate-nos pelo WhatsApp.');
        } finally {
            setIsSending(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="glass w-full max-w-2xl rounded-[2.5rem] border-white/10 overflow-hidden relative z-10"
                    >
                        <div className="p-8 md:p-12">
                            <button onClick={onClose} className="absolute top-8 right-8 text-gray-400 hover:text-white transition-colors">
                                <X size={24} />
                            </button>

                            {isSuccess ? (
                                <div className="py-20 text-center space-y-6">
                                    <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h2 className="text-3xl font-black">Solicitação Enviada!</h2>
                                    <p className="text-gray-400">Em breve um de nossos especialistas entrará em contato.</p>
                                </div>
                            ) : (
                                <>
                                    <div className="mb-10">
                                        <h2 className="text-3xl font-black mb-2">Agendar <span className="text-blue-500">Reunião</span></h2>
                                        <p className="text-gray-400">Preencha os campos abaixo para iniciarmos seu projeto.</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 flex items-center gap-2"><User size={12} /> Nome Completo</label>
                                                <input required value={formState.name} onChange={e => setFormState({ ...formState, name: e.target.value })} type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-blue-500 outline-none transition-all" placeholder="Seu nome" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 flex items-center gap-2"><Mail size={12} /> E-mail Corporativo</label>
                                                <input required value={formState.email} onChange={e => setFormState({ ...formState, email: e.target.value })} type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-blue-500 outline-none transition-all" placeholder="email@empresa.com" />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 flex items-center gap-2"><Phone size={12} /> WhatsApp / Telefone</label>
                                                <input required value={formState.phone} onChange={e => setFormState({ ...formState, phone: e.target.value })} type="tel" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-blue-500 outline-none transition-all" placeholder="(00) 00000-0000" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 flex items-center gap-2"><Building2 size={12} /> Empresa</label>
                                                <input value={formState.company} onChange={e => setFormState({ ...formState, company: e.target.value })} type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-blue-500 outline-none transition-all" placeholder="Nome da sua empresa" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 flex items-center gap-2"><FileText size={12} /> Descrição da Necessidade</label>
                                            <textarea value={formState.message} onChange={e => setFormState({ ...formState, message: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-blue-500 outline-none transition-all h-32 resize-none" placeholder="Conte um pouco sobre o seu desafio..."></textarea>
                                        </div>

                                        {simulationData && (
                                            <div className="p-4 bg-blue-600/10 border border-blue-500/20 rounded-2xl">
                                                <p className="text-[10px] font-black uppercase text-blue-500 mb-2">Resumo da Simulação</p>
                                                <div className="flex justify-between text-xs">
                                                    <span>{simulationData.type}</span>
                                                    <span className="font-bold">Investimento: R$ {formatCurrency(simulationData.total)}</span>
                                                </div>
                                            </div>
                                        )}

                                        <button disabled={isSending} type="submit" className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3">
                                            {isSending ? <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" /> : 'CONFIRMAR AGENDAMENTO'}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
