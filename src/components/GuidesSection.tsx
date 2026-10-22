import React from 'react';
import { GUIDES } from '../data';
import { GuideItem } from '../types';
import { ArrowRight, BookOpen } from 'lucide-react';

interface GuidesSectionProps {
  onSelectGuide: (guide: GuideItem) => void;
}

export const GuidesSection: React.FC<GuidesSectionProps> = ({ onSelectGuide }) => {
  return (
    <section id="guias" className="py-20 lg:py-28 bg-[#F6F1E7] text-[#0F3B2A] border-b border-[#C9A45C]/30">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
          <span className="text-xs tracking-[0.35em] text-[#C9A45C] uppercase font-semibold block mb-3">
            Saber Hacer & Asesoramiento
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#0F3B2A] font-normal tracking-tight">
            Guías para elegir bien
          </h2>
          <div className="w-16 h-[1px] bg-[#C9A45C] mx-auto mt-5 opacity-70" />
        </div>

        {/* 3 Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GUIDES.map((guide) => (
            <div
              key={guide.id}
              onClick={() => onSelectGuide(guide)}
              className="group cursor-pointer bg-[#FAF7F2] border border-[#0F3B2A]/10 hover:border-[#C9A45C] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EAE2D2]">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-[#0F3B2A]/80 backdrop-blur-xs text-[#F6F1E7] text-[11px] font-light tracking-wider px-2.5 py-1">
                    {guide.readTime}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="font-serif-luxury text-2xl text-[#0F3B2A] mb-3 group-hover:text-[#17523b] transition-colors leading-snug">
                    {guide.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0F3B2A]/75 font-light leading-relaxed">
                    {guide.excerpt}
                  </p>
                </div>
              </div>

              {/* Action: "Leer la guía" */}
              <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0F3B2A] font-semibold group-hover:text-[#C9A45C] transition-colors">
                  <span className="border-b border-[#0F3B2A] group-hover:border-[#C9A45C] pb-0.5">
                    Leer la guía
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
