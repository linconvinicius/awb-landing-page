
import { MessageSquare } from 'lucide-react';

const CallToAction = ({ onOpenModal }: { onOpenModal: () => void }) => {
    return (
        <section id="contato" className="py-32 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-600/10 -z-10"></div>
            <div className="max-w-4xl mx-auto glass p-16 md:p-24 rounded-[4rem] text-center border-white/10 shadow-2xl reveal">
                <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter leading-none">Pronto para <br /> <span className="text-blue-500">acelerar?</span></h2>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button onClick={onOpenModal} className="px-12 py-5 bg-white text-black rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl">
                        Agendar Reunião
                    </button>
                    <a href="https://wa.me/5511947268712?text=Olá,%20gostaria%20de%20falar%20com%20um%20especialista%20da%20AWB%20Digital" target="_blank" className="px-12 py-5 glass text-white rounded-2xl font-black text-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                        <MessageSquare size={20} /> Falar no WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
