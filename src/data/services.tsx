
import { Globe, Layers, Smartphone, Cpu } from 'lucide-react';
import { ServiceCardProps } from '../types';

export const services: ServiceCardProps[] = [
    {
        icon: <Globe size={28} />,
        title: "Landing Page",
        description: "Página de destino otimizada para conversões que capturam leads e impulsionam vendas.",
        features: ["Design responsivo", "SEO otimizado", "Página de contato", "Integrações"]
    },
    {
        icon: <Layers size={28} />,
        title: "Sistema Web",
        description: "Aplicação web robusta com painel administrativo, autenticação e banco de dados.",
        features: ["Autenticação segura", "Painel admin", "API REST", "Banco de dados"]
    },
    {
        icon: <Cpu size={28} />,
        title: "Automação de Tarefas",
        description: "Agentes inteligentes que cuidam da sua agenda, confirmam reuniões e respondem clientes automaticamente.",
        features: ["Automação N8N", "Webhooks", "Agentes IA", "Relatórios"]
    },
    {
        icon: <Smartphone size={28} />,
        title: "MVP/Produto Digital",
        description: "Desenvolvimento rápido de produto mínimo viável para validação de mercado.",
        features: ["Prototipo ágil", "Lovable", "Low-Code", "No-Code"]
    }
];
