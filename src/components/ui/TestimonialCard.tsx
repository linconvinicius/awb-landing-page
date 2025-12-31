
import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../../types';

const TestimonialCard: React.FC<Testimonial> = ({ name, role, company, content }) => (
    <div className="glass p-8 rounded-3xl border-white/5 flex flex-col gap-6">
        <div className="flex gap-1 text-yellow-500">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
        </div>
        <p className="text-gray-300 italic leading-relaxed">"{content}"</p>
        <div className="flex items-center gap-4 mt-auto">
            <div>
                <h4 className="font-bold text-sm">{name}</h4>
                <p className="text-sm text-gray-500 uppercase font-bold">{role} @{company}</p>
            </div>
        </div>
    </div>
);

export default TestimonialCard;
