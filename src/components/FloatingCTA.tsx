
import { MessageSquare } from 'lucide-react';

const FloatingCTA = ({ onOpenModal }: { onOpenModal: () => void }) => {
    return (
        <div className="fixed bottom-10 right-10 z-50">
            <button onClick={onOpenModal} className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/50 hover:bg-blue-500 transition-all transform hover:rotate-6 active:scale-90 group relative">
                <div className="absolute -top-12 right-0 bg-white text-black px-3 py-1 rounded-lg text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Fala com a gente!</div>
                <MessageSquare size={28} className="fill-white" />
            </button>
        </div>
    );
};

export default FloatingCTA;
