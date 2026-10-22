import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CollectionsProps {
  onSelectCategory: (category: 'perfumes' | 'bolsos') => void;
}

export const Collections: React.FC<CollectionsProps> = ({ onSelectCategory }) => {
  return (
    <section id="colecciones" className="py-20 lg:py-28 bg-[#0F3B2A] text-[#F6F1E7] border-b border-[#C9A45C]/20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
          <span className="text-xs tracking-[0.35em] text-[#C9A45C] uppercase font-light block mb-3">
            Maison Hermance
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#F6F1E7] font-normal tracking-tight">
            Dos universos
          </h2>
          <div className="w-16 h-[1px] bg-[#C9A45C] mx-auto mt-5 opacity-60" />
        </div>

        {/* Two Grand Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: Perfumes */}
          <div
            id="perfumes"
            onClick={() => onSelectCategory('perfumes')}
            className="group relative cursor-pointer overflow-hidden border border-[#C9A45C]/30 bg-[#082117] transition-all duration-500 hover:border-[#C9A45C]"
          >
            {/* Image container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img
                src="/src/assets/images/collection_perfumes_1792064952423.jpg"
                alt="Colección de Perfumes Maison Hermance"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082117]/85 via-[#082117]/25 to-transparent transition-opacity group-hover:opacity-90" />
            </div>

            {/* Content overlay bottom */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10 lg:p-12">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C9A45C] font-light mb-2">
                Extractos puros · Alta concentración
              </span>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#F6F1E7] mb-4 font-normal tracking-wide">
                Perfumes
              </h3>
              <p className="text-sm text-[#F6F1E7]/75 font-light leading-relaxed max-w-md mb-6 hidden sm:block">
                Fragancias de autor creadas con esencias botánicas raras y una fijación envolvente.
              </p>
              
              <div className="inline-flex items-center gap-3 text-sm tracking-widest uppercase text-[#C9A45C] font-medium group-hover:text-[#F6F1E7] transition-colors">
                <span className="border-b border-[#C9A45C] pb-1">Descubrir</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </div>
            </div>

            {/* Inner corner ornament */}
            <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#C9A45C]/40 pointer-events-none" />
          </div>

          {/* Card 2: Bolsos */}
          <div
            id="bolsos"
            onClick={() => onSelectCategory('bolsos')}
            className="group relative cursor-pointer overflow-hidden border border-[#C9A45C]/30 bg-[#082117] transition-all duration-500 hover:border-[#C9A45C]"
          >
            {/* Image container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img
                src="/src/assets/images/collection_bolsos_1792064952460.jpg"
                alt="Colección de Bolsos de cuero Maison Hermance"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082117]/85 via-[#082117]/25 to-transparent transition-opacity group-hover:opacity-90" />
            </div>

            {/* Content overlay bottom */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10 lg:p-12">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C9A45C] font-light mb-2">
                Piel noble · Marroquinería artesana
              </span>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#F6F1E7] mb-4 font-normal tracking-wide">
                Bolsos
              </h3>
              <p className="text-sm text-[#F6F1E7]/75 font-light leading-relaxed max-w-md mb-6 hidden sm:block">
                Siluetas depuradas de cuero vacuno curtido de forma vegetal, sin logotipos visibles.
              </p>

              <div className="inline-flex items-center gap-3 text-sm tracking-widest uppercase text-[#C9A45C] font-medium group-hover:text-[#F6F1E7] transition-colors">
                <span className="border-b border-[#C9A45C] pb-1">Descubrir</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </div>
            </div>

            {/* Inner corner ornament */}
            <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#C9A45C]/40 pointer-events-none" />
          </div>

        </div>

      </div>
    </section>
  );
};
