
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ onOpenModal }: { onOpenModal: () => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-sm shadow-lg shadow-blue-500/20 group-hover:rotate-6 transition-transform text-white">AWB</div>
                    <span className="text-2xl font-black tracking-tighter"><span className="text-blue-500">Digital</span></span>
                </div>

                <div className="hidden md:flex items-center gap-10 text-[13px] uppercase tracking-widest font-bold text-gray-400">
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors uppercase">Home</button>
                    <a href="#produtos" className="hover:text-white transition-colors uppercase">Produtos</a>
                    <a href="#processo" className="hover:text-white transition-colors uppercase">Processo</a>
                    <a href="#orcamento" className="hover:text-white transition-colors uppercase">Simulador</a>
                    <button onClick={onOpenModal} className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full shadow-lg shadow-blue-600/20 transition-all transform hover:scale-105 active:scale-95">
                        Agendar Reunião
                    </button>
                </div>

                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden glass absolute top-full left-0 w-full p-6 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4 border-t border-white/10">
                    <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsOpen(false); }} className="text-xl font-bold text-left uppercase">Home</button>
                    <a href="#produtos" className="text-xl font-bold uppercase" onClick={() => setIsOpen(false)}>Produtos</a>
                    <a href="#orcamento" className="text-xl font-bold uppercase" onClick={() => setIsOpen(false)}>Simulador</a>
                    <a href="#processo" className="text-xl font-bold uppercase" onClick={() => setIsOpen(false)}>Processo</a>
                    <button onClick={() => { onOpenModal(); setIsOpen(false); }} className="bg-blue-600 text-white w-full py-4 rounded-2xl font-bold text-lg">Agendar Reunião</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
