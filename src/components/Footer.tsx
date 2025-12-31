
import React from 'react';

const Footer = () => {
    return (
        <footer className="py-20 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16 mb-20">
                <div className="col-span-2">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-sm shadow-lg shadow-blue-500/20 text-white">AWB</div>
                        <span className="font-black text-2xl tracking-tighter"><span className="text-blue-500">Digital</span></span>
                    </div>
                    <p className="text-gray-500 max-w-xs leading-relaxed">
                        Elevando o padrão de desenvolvimento de software no Brasil através de processos ágeis e tecnologias modernas.
                    </p>
                </div>
                <div>
                    <h4 className="font-black mb-6 uppercase tracking-widest text-xs text-blue-500">Navegação</h4>
                    <ul className="space-y-4 text-gray-400 text-sm font-medium">
                        <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors uppercase">Home</button></li>
                        <li><a href="#produtos" className="hover:text-white transition-colors uppercase">Produtos</a></li>
                        <li><a href="#processo" className="hover:text-white transition-colors uppercase">Processo</a></li>
                        <li><a href="#orcamento" className="hover:text-white transition-colors uppercase">Simulador</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-black mb-6 uppercase tracking-widest text-xs text-blue-500">Social</h4>
                    <ul className="space-y-4 text-gray-400 text-sm font-medium">
                        <li><a href="#" className="hover:text-white transition-colors uppercase">LinkedIn</a></li>
                        <li><a href="#" className="hover:text-white transition-colors uppercase">Instagram</a></li>
                        <li><a href="#" className="hover:text-white transition-colors uppercase">Twitter (X)</a></li>
                        <li><a href="#" className="hover:text-white transition-colors uppercase">GitHub</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
                <p className="text-gray-600 text-xs font-bold uppercase tracking-widest">© 2024 AWB Digital — CODE WITH PASSION</p>
                <div className="flex gap-8 text-[10px] font-bold uppercase text-gray-600 tracking-widest">
                    <a href="#" className="hover:text-white">Privacidade</a>
                    <a href="#" className="hover:text-white">Termos</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
