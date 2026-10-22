import React, { useState } from 'react';
import { Mail, Check, Phone, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#082117] text-[#F6F1E7] border-t border-[#C9A45C]/30 pt-16 pb-12">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Newsletter Banner */}
        <div className="pb-16 mb-16 border-b border-[#C9A45C]/20">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <span className="text-xs uppercase tracking-[0.35em] text-[#C9A45C] font-light">
              Maison Hermance Privé
            </span>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#F6F1E7] font-normal tracking-wide">
              Recibe nuestras novedades
            </h3>
            <p className="text-xs sm:text-sm text-[#F6F1E7]/70 font-light max-w-md mx-auto">
              Invitaciones a ventas privadas, lanzamientos de perfumes de edición limitada y notas de cata olfativa.
            </p>

            {/* Newsletter Form */}
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="pt-4 flex flex-col sm:flex-row max-w-md mx-auto gap-2">
                <input
                  type="email"
                  required
                  placeholder="Tu email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 bg-[#0F3B2A] border border-[#C9A45C]/40 px-4 py-3.5 text-sm text-[#F6F1E7] placeholder-[#F6F1E7]/40 focus:outline-none focus:border-[#C9A45C]"
                />
                <button
                  type="submit"
                  className="px-7 py-3.5 bg-[#C9A45C] text-[#0F3B2A] hover:bg-[#b58f47] transition-colors text-xs uppercase tracking-widest font-semibold cursor-pointer whitespace-nowrap"
                >
                  Suscribirme
                </button>
              </form>
            ) : (
              <div className="pt-4 max-w-md mx-auto p-3.5 bg-[#0F3B2A] border border-[#C9A45C] text-xs text-[#C9A45C] flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-[#C9A45C]" />
                <span>Gracias por suscribirte. Te hemos enviado un correo de bienvenida.</span>
              </div>
            )}
          </div>
        </div>

        {/* 4 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12 mb-16">
          
          {/* Column 1: Tienda */}
          <div className="space-y-4">
            <h4 className="font-serif-luxury text-lg text-[#C9A45C] uppercase tracking-wider font-medium">
              Tienda
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F6F1E7]/75 font-light tracking-wide">
              <li>
                <button onClick={() => onNavigate('perfumes')} className="hover:text-[#C9A45C] transition-colors cursor-pointer">
                  Perfumes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('bolsos')} className="hover:text-[#C9A45C] transition-colors cursor-pointer">
                  Bolsos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('guias')} className="hover:text-[#C9A45C] transition-colors cursor-pointer">
                  Cofres regalo
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('quiz')} className="hover:text-[#C9A45C] transition-colors cursor-pointer">
                  Quiz
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Ayuda */}
          <div className="space-y-4">
            <h4 className="font-serif-luxury text-lg text-[#C9A45C] uppercase tracking-wider font-medium">
              Ayuda
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F6F1E7]/75 font-light tracking-wide">
              <li>
                <span className="hover:text-[#C9A45C] transition-colors cursor-pointer">
                  Envíos y entregas
                </span>
              </li>
              <li>
                <span className="hover:text-[#C9A45C] transition-colors cursor-pointer">
                  Devoluciones
                </span>
              </li>
              <li>
                <span className="hover:text-[#C9A45C] transition-colors cursor-pointer">
                  Preguntas frecuentes
                </span>
              </li>
              <li>
                <span className="hover:text-[#C9A45C] transition-colors cursor-pointer">
                  Contacto
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="space-y-4">
            <h4 className="font-serif-luxury text-lg text-[#C9A45C] uppercase tracking-wider font-medium">
              Legal
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F6F1E7]/75 font-light tracking-wide">
              <li>
                <span className="hover:text-[#C9A45C] transition-colors cursor-pointer">
                  Aviso legal
                </span>
              </li>
              <li>
                <span className="hover:text-[#C9A45C] transition-colors cursor-pointer">
                  Política de privacidad
                </span>
              </li>
              <li>
                <span className="hover:text-[#C9A45C] transition-colors cursor-pointer">
                  Política de cookies
                </span>
              </li>
              <li>
                <span className="hover:text-[#C9A45C] transition-colors cursor-pointer">
                  Términos y condiciones
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contacto */}
          <div className="space-y-4">
            <h4 className="font-serif-luxury text-lg text-[#C9A45C] uppercase tracking-wider font-medium">
              Contacto
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F6F1E7]/75 font-light tracking-wide">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C9A45C]" />
                <a href="tel:+34641016013" className="hover:text-[#C9A45C] transition-colors">
                  +34 641 016 013
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span className="hover:text-[#C9A45C] transition-colors cursor-pointer">
                  WhatsApp
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#C9A45C] font-semibold text-xs">TT</span>
                <span className="hover:text-[#C9A45C] transition-colors cursor-pointer">
                  TikTok @MAISON HERMANCE
                </span>
              </li>
              <li className="pt-2 text-[11px] text-[#F6F1E7]/50">
                Atención al cliente: Lunes a Viernes 09:00 – 19:00 CET
              </li>
            </ul>
          </div>

        </div>

        {/* Row of Payment Icons: Visa, Mastercard, PayPal, Klarna */}
        <div className="pt-8 border-t border-[#C9A45C]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-[#F6F1E7]/60 tracking-wider uppercase mr-1">
              Pagos seguros:
            </span>
            
            {/* Visa */}
            <div className="h-7 px-2.5 border border-[#C9A45C]/40 bg-[#0F3B2A] rounded-xs flex items-center justify-center text-[11px] font-bold tracking-wider text-[#F6F1E7]">
              VISA
            </div>

            {/* Mastercard */}
            <div className="h-7 px-2.5 border border-[#C9A45C]/40 bg-[#0F3B2A] rounded-xs flex items-center justify-center gap-1">
              <div className="w-3 h-3 rounded-full bg-[#C9A45C] opacity-90" />
              <div className="w-3 h-3 rounded-full bg-[#EAE2D2] opacity-80 -ml-2" />
              <span className="text-[10px] text-[#F6F1E7] tracking-tighter hidden sm:inline">mastercard</span>
            </div>

            {/* PayPal */}
            <div className="h-7 px-2.5 border border-[#C9A45C]/40 bg-[#0F3B2A] rounded-xs flex items-center justify-center text-[11px] font-bold italic tracking-wider text-[#C9A45C]">
              PayPal
            </div>

            {/* Klarna */}
            <div className="h-7 px-2.5 border border-[#C9A45C]/40 bg-[#0F3B2A] rounded-xs flex items-center justify-center text-[11px] font-semibold tracking-wider text-[#F6F1E7]">
              Klarna.
            </div>
          </div>

          {/* Final Line */}
          <p className="text-xs text-[#F6F1E7]/60 font-light text-center sm:text-right tracking-wide">
            © 2026 Maison Hermance. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};
