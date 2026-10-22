import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Truck } from 'lucide-react';

interface HeroProps {
  onFindPerfume: () => void;
  onViewBags: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onFindPerfume, onViewBags }) => {
  return (
    <section id="hero" className="relative bg-[#0F3B2A] text-[#F6F1E7] overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#C9A45C]/20">
      
      {/* Subtle luxury ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C9A45C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#17523b]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & CTAs (5 to 6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-7 z-10">
            
            {/* Sur-titre */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#C9A45C]" />
              <span className="text-xs sm:text-sm tracking-[0.35em] text-[#C9A45C] uppercase font-light">
                Elegancia y Fragancias
              </span>
            </div>

            {/* Titre */}
            <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-[68px] leading-[1.08] font-normal tracking-tight text-[#F6F1E7]">
              El perfume que te define.
            </h1>

            {/* Texte */}
            <p className="text-base sm:text-lg lg:text-xl text-[#F6F1E7]/80 font-light leading-relaxed max-w-xl">
              Perfumes y bolsos seleccionados con cuidado. Envío a toda Europa.
            </p>

            {/* Buttons: or plein & contour or */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
              <button
                onClick={onFindPerfume}
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#C9A45C] text-[#0F3B2A] hover:bg-[#b58f47] transition-all duration-300 font-medium text-sm tracking-widest uppercase cursor-pointer shadow-lg shadow-[#082117]/40"
              >
                <span>Encuentra tu perfume</span>
                <ArrowRight className="ml-2.5 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onViewBags}
                className="inline-flex items-center justify-center px-8 py-4 border border-[#C9A45C] text-[#C9A45C] hover:bg-[#C9A45C]/10 transition-all duration-300 font-medium text-sm tracking-widest uppercase cursor-pointer"
              >
                <span>Ver bolsos</span>
              </button>
            </div>

            {/* Trust highlights banner */}
            <div className="pt-6 border-t border-[#C9A45C]/15 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs tracking-wider text-[#F6F1E7]/60 font-light">
              <div className="flex items-center gap-2">
                <Truck className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span>Envío 24-48h en España</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span>Muestras exclusivas</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span>Garantía artesanal</span>
              </div>
            </div>

          </div>

          {/* Right Column: Grande photo d'un flacon de parfum et d'un sac */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative gold frame */}
              <div className="absolute -inset-3 sm:-inset-4 border border-[#C9A45C]/30 pointer-events-none transform translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3" />
              
              {/* Main Image container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0A271C] border border-[#C9A45C]/40 shadow-2xl">
                <img
                  src="/src/assets/images/hero_hermance_1792064949985.jpg"
                  alt="Maison Hermance - Alta perfumería y marroquinería de lujo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F3B2A]/40 via-transparent to-transparent pointer-events-none" />
                
                {/* Monogram stamp watermark */}
                <div className="absolute bottom-5 right-5 bg-[#0F3B2A]/85 backdrop-blur-sm border border-[#C9A45C]/50 px-3.5 py-1.5 flex items-center gap-2 text-[#C9A45C]">
                  <span className="font-serif-luxury text-xs tracking-widest uppercase">Maison Hermance</span>
                  <span className="text-[10px] text-[#F6F1E7]/60">· Colección 2026</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
