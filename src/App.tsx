
import { useState } from 'react';
import { useReveal } from './hooks/useReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PartnersMarquee from './components/ui/PartnersMarquee';
import ServiceCard from './components/ui/ServiceCard';
import ProjectEstimator from './components/ProjectEstimator';
import TestimonialCard from './components/ui/TestimonialCard';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import ContactModal from './components/ContactModal';
import ProcessSection from './components/ProcessSection';
import { services } from './data/services';
import { testimonials } from './data/testimonials';

export default function App() {
    useReveal();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentSimulation, setCurrentSimulation] = useState<any>(null);

    const handleOpenModal = (simData?: any) => {
        setCurrentSimulation(simData || null);
        setIsModalOpen(true);
    };

    return (
        <div id="home" className="min-h-screen bg-grid">
            <Navbar onOpenModal={() => handleOpenModal()} />
            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                simulationData={currentSimulation}
            />
            <Hero onOpenModal={() => handleOpenModal()} />
            <PartnersMarquee />

            <section id="produtos" className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 reveal">
                        <div className="max-w-2xl">
                            <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Nossa Stack de Soluções</span>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">O que nós <span className="text-blue-500">criamos</span>.</h2>
                        </div>
                        <p className="text-gray-500 max-w-xs text-right hidden md:block">
                            Focados em tecnologias de ponta que garantem escalabilidade e manutenção zero.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((s, i) => (
                            <div key={i} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                                <ServiceCard {...s} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ProcessSection />

            <ProjectEstimator onOpenModal={handleOpenModal} />

            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 reveal">
                        <h2 className="text-4xl md:text-5xl font-black mb-6">O que dizem os <span className="text-blue-500">visionários</span></h2>
                        <p className="text-gray-500">Fundadores e gestores que escalaram seus negócios com a AWB Digital.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <div key={i} className="reveal" style={{ transitionDelay: `${i * 150}ms` }}>
                                <TestimonialCard {...t} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CallToAction onOpenModal={() => handleOpenModal()} />
            <Footer />
            <FloatingCTA onOpenModal={() => handleOpenModal()} />
        </div>
    );
}
