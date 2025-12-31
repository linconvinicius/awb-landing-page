
import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import {
    Calculator as CalcIcon,
    Minus,
    Plus,
    Zap,
    Calendar,
    ArrowRight
} from 'lucide-react';
import { formatCurrency } from '../lib/utils';

// --- Constantes da Calculadora ---
const PROJECT_TYPES = [
    { label: "Landing Page", value: "landing", basePrice: 2500, hasScreens: true, hasIntegrations: false },
    { label: "Sistema Web", value: "sistema", basePrice: 12000, hasScreens: true, hasIntegrations: true },
    { label: "Automação de Tarefas", value: "automacao", basePrice: 1000, hasScreens: false, hasIntegrations: true },
    { label: "MVP/Produto Digital", value: "mvp", basePrice: 8000, hasScreens: true, hasIntegrations: true },
];

const COMPLEXITY_LABELS = ["MVP / Simples", "Intermediário", "Escalável / Enterprise"];
const URGENCY_MULTIPLIER = 1.2;
const SCREEN_PRICE = 850;
const INTEGRATION_PRICE = 2500;
const INTEGRATION_OPTIONS = [
    { label: "Autenticação", value: "auth" },
    { label: "Painel Admin", value: "admin" },
    { label: "Automação N8N", value: "n8n" },
    { label: "Webhooks / API", value: "webhooks" },
    { label: "Pagamentos (Stripe/Pix)", value: "payments" },
    { label: "IA / Chatbot", value: "ai_chat" },
];

const BreakdownItem = ({ label, value, isHighlight }: { label: string, value: number, isHighlight?: boolean }) => (
    <div className={`flex justify-between items-center text-sm ${isHighlight ? 'font-bold text-white pt-3 border-t border-white/10 mt-3' : 'text-gray-400'}`}>
        <span>{label}</span>
        <span className={isHighlight ? 'text-blue-500 text-lg' : ''}>R$ {formatCurrency(value)}</span>
    </div>
);

const ProjectEstimator = ({ onOpenModal }: { onOpenModal: (data: any) => void }) => {
    const [projectType, setProjectType] = useState("landing");
    const [complexity, setComplexity] = useState(1);
    const [isUrgent, setIsUrgent] = useState(false);
    const [screens, setScreens] = useState(5);
    const [selectedIntegrations, setSelectedIntegrations] = useState<string[]>([]);

    const selectedTypeConfig = useMemo(() => PROJECT_TYPES.find(p => p.value === projectType), [projectType]);

    // Auto-selecionar integrações para Automação de Tarefas
    useEffect(() => {
        if (projectType === "automacao") {
            setSelectedIntegrations(["n8n", "webhooks", "ai_chat"]);
        } else {
            setSelectedIntegrations([]);
        }
    }, [projectType]);

    const estimate = useMemo(() => {
        if (!selectedTypeConfig) return null;

        let basePrice = selectedTypeConfig.basePrice;
        const complexityPrice = basePrice * (complexity - 1);
        const screensPrice = selectedTypeConfig.hasScreens ? screens * SCREEN_PRICE : 0;

        let integrationsPrice = 0;

        if (projectType === "automacao") {
            // Para Automação: preço base é R$ 1.000, cada integração vale R$ 500
            // Com as 3 integrações: R$ 1.000 + R$ 1.500 = R$ 2.500
            const automacaoBasePrice = 1000;
            const integrationValue = 500;
            basePrice = automacaoBasePrice;
            integrationsPrice = selectedIntegrations.length * integrationValue;
        } else if (selectedTypeConfig.hasIntegrations) {
            // Para outros tipos, cobra R$ 2.500 por integração
            integrationsPrice = selectedIntegrations.length * INTEGRATION_PRICE;
        }

        const subtotal = basePrice + complexityPrice + screensPrice + integrationsPrice;
        const urgencyPrice = isUrgent ? subtotal * (URGENCY_MULTIPLIER - 1) : 0;
        const total = subtotal + urgencyPrice;

        return {
            type: selectedTypeConfig.label,
            basePrice,
            complexityPrice,
            screensPrice,
            integrationsPrice,
            urgencyPrice,
            total
        };
    }, [projectType, complexity, isUrgent, screens, selectedIntegrations, selectedTypeConfig]);

    const handleIntegrationToggle = (val: string) => {
        setSelectedIntegrations(prev => prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val]);
    };

    return (
        <section id="orcamento" className="py-24 px-6 reveal">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <span className="inline-block px-4 py-2 mb-4 text-[10px] font-black uppercase tracking-[0.3em] bg-blue-600/10 border border-blue-500/20 rounded-full text-blue-500">
                    Simulador de Investimento
                </span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Personalize sua <span className="text-blue-500">Solução</span></h2>
            </div>

            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
                <div className="glass p-8 md:p-12 rounded-[3rem] border-white/5 space-y-10">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-500">
                            <CalcIcon size={20} />
                        </div>
                        <h3 className="text-xl font-bold">Configuração do Projeto</h3>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <label className="text-xs font-black uppercase tracking-widest text-gray-500 block mb-4">Tipo de Software</label>
                            <select
                                value={projectType}
                                onChange={(e) => setProjectType(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-blue-500 appearance-none"
                            >
                                {PROJECT_TYPES.map(t => (
                                    <option key={t.value} value={t.value} className="bg-[#0a0a0f]">{t.label}</option>
                                ))}
                            </select>
                            {projectType === "automacao" && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-4 p-4 bg-blue-600/10 border border-blue-500/20 rounded-xl"
                                >
                                    <p className="text-xs text-blue-400 leading-relaxed">
                                        💡 <strong>Ideal para dentistas, advogados, contadores e profissionais liberais.</strong> Criamos agentes inteligentes que gerenciam sua agenda, confirmam reuniões e respondem clientes automaticamente via WhatsApp. <strong>As 3 integrações vêm pré-selecionadas, mas você pode removê-las se não precisar!</strong>
                                    </p>
                                </motion.div>
                            )}
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <label className="text-xs font-black uppercase tracking-widest text-gray-500">Complexidade</label>
                                <span className="text-xs font-bold text-blue-500">{COMPLEXITY_LABELS[complexity - 1]}</span>
                            </div>
                            <input
                                type="range" min="1" max="3" step="1"
                                value={complexity}
                                onChange={(e) => setComplexity(parseInt(e.target.value))}
                                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
                            />
                        </div>

                        <AnimatePresence mode="wait">
                            {selectedTypeConfig?.hasScreens && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                                    className="space-y-4"
                                >
                                    <label className="text-xs font-black uppercase tracking-widest text-gray-500 block">Número de Telas / Rotas</label>
                                    <div className="flex items-center gap-4">
                                        <button onClick={() => setScreens(Math.max(1, screens - 1))} className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-white/5"><Minus size={18} /></button>
                                        <div className="flex-1 text-center font-bold text-2xl">{screens}</div>
                                        <button onClick={() => setScreens(screens + 1)} className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-white/5"><Plus size={18} /></button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <AnimatePresence mode="wait">
                            {selectedTypeConfig?.hasIntegrations && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                                    className="space-y-4"
                                >
                                    <label className="text-xs font-black uppercase tracking-widest text-gray-500 block">Recursos Adicionais</label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {INTEGRATION_OPTIONS.map(opt => (
                                            <button
                                                key={opt.value}
                                                onClick={() => handleIntegrationToggle(opt.value)}
                                                className={`p-3 rounded-xl border text-[10px] font-bold uppercase transition-all ${selectedIntegrations.includes(opt.value) ? 'bg-blue-600/20 border-blue-500 text-blue-500' : 'bg-white/5 border-white/5 text-gray-500'}`}
                                            >
                                                {opt.label}
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="flex items-center justify-between p-6 glass rounded-2xl border-white/5">
                            <div className="flex items-center gap-4">
                                <Zap size={20} className={isUrgent ? 'text-yellow-500' : 'text-gray-500'} />
                                <div>
                                    <p className="text-sm font-bold">Prazo de Urgência?</p>
                                    <p className="text-[10px] text-gray-500 uppercase font-black">Entrega 30% mais rápida (+20% valor)</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsUrgent(!isUrgent)}
                                className={`w-12 h-6 rounded-full relative transition-colors ${isUrgent ? 'bg-blue-600' : 'bg-white/10'}`}
                            >
                                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${isUrgent ? 'left-7' : 'left-1'}`}></div>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="glass p-8 md:p-12 rounded-[3rem] border-blue-500/20 bg-blue-600/[0.02] flex flex-col">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-500">
                            <Calendar size={20} />
                        </div>
                        <h3 className="text-xl font-bold">Investimento Estimado</h3>
                    </div>

                    <div className="text-center mb-10">
                        <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">A partir de</span>
                        <div className="text-5xl md:text-7xl font-black text-white my-4">
                            <span className="text-2xl text-blue-500">R$</span> {estimate ? formatCurrency(estimate.total).split(',')[0] : '0'}
                            <span className="text-2xl text-gray-600">,{estimate ? formatCurrency(estimate.total).split(',')[1] : '00'}</span>
                        </div>
                        <p className="text-sm text-gray-400">
                            {selectedTypeConfig?.label} • Complexidade {complexity}
                        </p>
                    </div>

                    <div className="flex-1 space-y-3 bg-white/[0.02] p-6 rounded-2xl border border-white/5 mb-10">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-4">Detalhamento</h4>
                        {estimate && (
                            <>
                                <BreakdownItem label="Valor Base do Projeto" value={estimate.basePrice} />
                                {estimate.complexityPrice > 0 && <BreakdownItem label={`Complexidade Nível ${complexity}`} value={estimate.complexityPrice} />}
                                {estimate.screensPrice > 0 && <BreakdownItem label={`Telas e Rotas (${screens}x)`} value={estimate.screensPrice} />}
                                {estimate.integrationsPrice > 0 && <BreakdownItem label={`Recursos e Integrações (${selectedIntegrations.length}x)`} value={estimate.integrationsPrice} />}
                                {estimate.urgencyPrice > 0 && <BreakdownItem label="Taxa de Urgência (+20%)" value={estimate.urgencyPrice} />}
                                <BreakdownItem label="Total Estimado" value={estimate.total} isHighlight />
                            </>
                        )}
                    </div>

                    <button
                        onClick={() => onOpenModal(estimate)}
                        className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 group"
                    >
                        AGENDAR REUNIÃO <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProjectEstimator;
