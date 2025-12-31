
import React from 'react';

const ProcessSection = () => {
    return (
        <section id="processo" className="py-32 px-6 bg-white/[0.01]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 reveal">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">Nosso <span className="text-blue-500">Processo</span></h2>
                    <p className="text-gray-500">Metodologia otimizada para máxima velocidade e transparência.</p>
                </div>
                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        { step: '01', title: 'Imersão', desc: 'Entendemos seu negócio e requisitos técnicos.' },
                        { step: '02', title: 'Design', desc: 'Interfaces de alta fidelidade focadas em UX.' },
                        { step: '03', title: 'Sprint', desc: 'Desenvolvimento ágil com entregas semanais.' },
                        { step: '04', title: 'Lançamento', desc: 'Deploy seguro e monitoramento escalável.' }
                    ].map((p, i) => (
                        <div key={i} className="glass p-8 rounded-[2rem] border-white/5 reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                            <div className="text-4xl font-black text-blue-500/20 mb-6">{p.step}</div>
                            <h4 className="text-xl font-bold mb-3">{p.title}</h4>
                            <p className="text-sm text-gray-500">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
