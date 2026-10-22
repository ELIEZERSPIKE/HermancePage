import React from 'react';
import { TESTIMONIALS } from '../data';
import { Star, CheckCircle } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="opiniones" className="py-20 lg:py-28 bg-[#0F3B2A] text-[#F6F1E7] border-b border-[#C9A45C]/20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
          <span className="text-xs tracking-[0.35em] text-[#C9A45C] uppercase font-light block mb-3">
            Experiencias Reales
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#F6F1E7] font-normal tracking-tight">
            Opiniones de nuestros clientes
          </h2>
          <div className="w-16 h-[1px] bg-[#C9A45C] mx-auto mt-5 opacity-60" />
        </div>

        {/* 3 Gold-Bordered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#0A271C] border border-[#C9A45C] p-8 lg:p-9 flex flex-col justify-between relative transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Subtle top-corner gold accent */}
              <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden pointer-events-none">
                <div className="w-12 h-[1px] bg-[#C9A45C] transform rotate-45 translate-x-1 translate-y-3" />
              </div>

              <div>
                {/* 5 Gold Stars */}
                <div className="flex items-center gap-1 text-[#C9A45C] mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C9A45C]" strokeWidth={0} />
                  ))}
                </div>

                {/* Testimonial Quote in Spanish */}
                <p className="text-base text-[#F6F1E7]/90 font-light leading-relaxed italic mb-8">
                  {testimonial.text}
                </p>
              </div>

              {/* Customer Info with Real Portrait */}
              <div className="pt-6 border-t border-[#C9A45C]/25 flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name}, ${testimonial.city}`}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border border-[#C9A45C]"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif-luxury text-lg text-[#F6F1E7] font-medium tracking-wide">
                      {testimonial.name}, {testimonial.city}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-[#C9A45C] font-light">
                    <CheckCircle className="w-3 h-3 text-[#C9A45C]" />
                    <span>Compra verificada</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
