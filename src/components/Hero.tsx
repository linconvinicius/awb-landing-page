
import { Rocket } from 'lucide-react';

const Hero = ({ onOpenModal }: { onOpenModal: () => void }) => {
    return (
        <section className="relative pt-40 pb-32 px-6 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[150px] -z-10 rounded-full"></div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.9]">
                        Nós criamos <br />
                        <span className="text-blue-500 italic inline-block pr-4">Software de Elite</span>
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-xl leading-relaxed">
                        Especialistas em automação com N8N, desenvolvimento Low-Code/No-Code com Lovable, e engenharia de software com Python, Node.js, React e Django.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
                        <button onClick={onOpenModal} className="w-full sm:w-auto px-12 py-5 bg-white text-black rounded-2xl font-black text-lg hover:bg-gray-200 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-white/5">
                            INICIAR PROJETO
                        </button>
                        <a href="#produtos" className="w-full sm:w-auto px-12 py-5 glass text-white rounded-2xl font-black text-lg hover:bg-white/10 transition-all border-white/10 flex items-center justify-center gap-3">
                            <div className="p-1.5 bg-blue-500 rounded-lg"><Rocket size={20} /></div>
                            Ver Portfólio
                        </a>
                    </div>
                </div>

                <div className="flex-1 w-full max-w-xl lg:max-w-none animate-float">
                    <div className="glass rounded-[2rem] p-1 border-white/10 shadow-2xl relative">
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-600/20 blur-2xl rounded-full"></div>
                        <div className="bg-[#0a0a0f] rounded-[1.8rem] overflow-hidden border border-white/5">
                            <div className="h-10 bg-white/5 border-b border-white/5 flex items-center px-6 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                <div className="ml-4 text-[10px] font-mono text-gray-500">seu_projeto.tsx</div>
                            </div>
                            <div className="p-8 font-mono text-sm leading-relaxed text-blue-300">
                                <div className="text-purple-400">importar</div> <span className="text-gray-300">{"{"}</span> <span className="text-blue-400">Successo</span> <span className="text-gray-300">{"}"}</span> <span className="text-purple-400">de</span> <span className="text-green-400">'@awb/digital'</span>;
                                <br /><br />
                                <span className="text-purple-400">iniciar</span> <span className="text-yellow-400">ProcessoAgil</span> = <span className="text-gray-300">() =&gt; {"{"}</span>
                                <br />
                                &nbsp;&nbsp;<span className="text-purple-400">retorna</span> <span className="text-gray-300">(</span>
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;Produto&gt;</span>
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-300">Entrega:</span> <span className="text-orange-400">14_DIAS</span>
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-300">Qualidade:</span> <span className="text-orange-400">'EXCELENTE'</span>
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&lt;/Produto&gt;</span>
                                <br />
                                &nbsp;&nbsp;<span className="text-gray-300">);</span>
                                <br />
                                &nbsp;&nbsp;<span className="text-gray-300">{"}"}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
