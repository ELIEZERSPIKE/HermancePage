import React from 'react';
import { GuideItem } from '../types';
import { X, Clock, BookOpen, Share2 } from 'lucide-react';

interface GuideModalProps {
  guide: GuideItem | null;
  onClose: () => void;
}

export const GuideModal: React.FC<GuideModalProps> = ({ guide, onClose }) => {
  if (!guide) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-2xl bg-[#F6F1E7] text-[#0F3B2A] border border-[#C9A45C] shadow-2xl overflow-hidden my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#0F3B2A] text-[#F6F1E7] hover:text-[#C9A45C] flex items-center justify-center cursor-pointer transition-colors shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image of the guide */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0A271C]">
          <img
            src={guide.image}
            alt={guide.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F3B2A]/70 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 flex items-center gap-2 text-xs tracking-wider text-[#C9A45C] uppercase font-light">
            <Clock className="w-3.5 h-3.5" />
            <span>{guide.readTime} · Cuaderno Maison Hermance</span>
          </div>
        </div>

        {/* Guide Content */}
        <div className="p-8 sm:p-10 space-y-6">
          <div className="border-b border-[#0F3B2A]/10 pb-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C9A45C] font-semibold block mb-1">
              Guía Editorial
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#0F3B2A] leading-tight font-normal">
              {guide.title}
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#0F3B2A]/90 font-light leading-relaxed italic border-l-2 border-[#C9A45C] pl-4">
            {guide.excerpt}
          </p>

          <div className="space-y-4 text-sm sm:text-base text-[#0F3B2A]/80 font-light leading-relaxed">
            <p>{guide.content}</p>
            <p>
              En Maison Hermance entendemos el lujo como la armonía silenciosa de la calidad sin estridencias: el peso específico del cristal de cada frasco tallado, la suavidad del forro interior de seda y el curtido vegetal que envejece con nobleza a lo largo de los años.
            </p>
            <p>
              Cada fragancia reposa en maceración durante semanas para garantizar que las notas de salida no oculten la profundidad del acorde amaderado o ambarino. Si tienes dudas en tu elección, te invitamos a realizar nuestro diagnóstico olfativo o contactar a nuestros asesores en Madrid y Barcelona.
            </p>
          </div>

          <div className="pt-6 border-t border-[#0F3B2A]/15 flex items-center justify-between">
            <span className="font-serif-luxury text-sm tracking-widest text-[#0F3B2A] uppercase">
              Maison Hermance · Madrid
            </span>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#0F3B2A] text-[#F6F1E7] text-xs uppercase tracking-widest font-medium hover:bg-[#164e38] cursor-pointer"
            >
              Cerrar lectura
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
