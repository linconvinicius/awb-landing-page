
import React from 'react';
import { ServiceCardProps } from '../../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features, size = 'normal' }) => (
    <div className={`glass p-8 rounded-[2rem] transition-all duration-500 card-hover flex flex-col group h-full ${size === 'large' ? 'md:col-span-2' : ''}`}>
        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 group-hover:rotate-6">
            {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-400 text-sm mb-8 leading-relaxed flex-grow">{description}</p>
        <div className="grid grid-cols-2 gap-3 mt-auto">
            {features.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-[10px] uppercase tracking-tighter font-bold text-gray-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                    <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                    {f}
                </div>
            ))}
        </div>
    </div>
);

export default ServiceCard;
