
import React from 'react';
import { motion } from "framer-motion";
import { PARTNERS } from '../../data/partners';

const PartnersMarquee = () => {
    return (
        <div className="w-full py-20 relative overflow-hidden glass border-y border-white/5">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 text-center">
                    Tecnologias de Ponta
                </span>
            </motion.div>

            <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex gap-6 items-center"
                        animate={{ x: [0, -1500] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 35,
                                ease: "linear"
                            }
                        }}
                    >
                        {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, index) => (
                            <div
                                key={`${partner.name}-${index}`}
                                className="flex items-center gap-4 px-6 py-4 bg-white/[0.03] border border-white/10 rounded-2xl whitespace-nowrap hover:border-blue-500/50 hover:bg-white/[0.07] transition-all duration-300 group cursor-default"
                            >
                                <div className="w-8 h-8 flex items-center justify-center overflow-hidden rounded-lg bg-white/5 p-1.5 group-hover:scale-110 transition-transform duration-300">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">
                                    {partner.name}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default PartnersMarquee;
