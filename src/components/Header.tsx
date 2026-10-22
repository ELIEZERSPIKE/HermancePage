import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  currentLang: string;
  onSelectLang: (lang: string) => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  currentLang,
  onSelectLang,
  onNavigate
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#0F3B2A]/95 backdrop-blur-md border-b border-[#C9A45C]/25 transition-all">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 h-20 flex items-center justify-between">
        
        {/* Left: Logo MH + Brand Name */}
        <button
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-3.5 group text-left cursor-pointer focus:outline-none"
        >
          {/* Gold monogram MH inside a thin square */}
          <div className="w-10 h-10 border border-[#C9A45C] flex items-center justify-center transition-transform group-hover:scale-105 bg-[#0F3B2A]">
            <span className="font-serif-luxury text-[#C9A45C] font-semibold text-lg tracking-wider">
              MH
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif-luxury text-xl sm:text-2xl text-[#F6F1E7] tracking-[0.22em] font-medium uppercase group-hover:text-[#C9A45C] transition-colors">
              MAISON HERMANCE
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A45C] font-light hidden sm:block">
              Elegancia y Fragancias
            </span>
          </div>
        </button>

        {/* Center: Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-light tracking-widest uppercase">
          <button
            onClick={() => onNavigate('perfumes')}
            className="text-[#F6F1E7]/90 hover:text-[#C9A45C] transition-colors cursor-pointer py-1 relative group"
          >
            Perfumes
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C9A45C] transition-all duration-300 group-hover:w-full" />
          </button>
          <span className="text-[#C9A45C]/40 text-xs select-none">·</span>
          <button
            onClick={() => onNavigate('bolsos')}
            className="text-[#F6F1E7]/90 hover:text-[#C9A45C] transition-colors cursor-pointer py-1 relative group"
          >
            Bolsos
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C9A45C] transition-all duration-300 group-hover:w-full" />
          </button>
          <span className="text-[#C9A45C]/40 text-xs select-none">·</span>
          <button
            onClick={() => onNavigate('quiz')}
            className="text-[#F6F1E7]/90 hover:text-[#C9A45C] transition-colors cursor-pointer py-1 relative group"
          >
            Quiz
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C9A45C] transition-all duration-300 group-hover:w-full" />
          </button>
          <span className="text-[#C9A45C]/40 text-xs select-none">·</span>
          <button
            onClick={() => onNavigate('guias')}
            className="text-[#F6F1E7]/90 hover:text-[#C9A45C] transition-colors cursor-pointer py-1 relative group"
          >
            Guías
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C9A45C] transition-all duration-300 group-hover:w-full" />
          </button>
        </nav>

        {/* Right: Language Selector & Cart */}
        <div className="flex items-center gap-6 sm:gap-8">
          {/* Language selector: ES | FR | EN */}
          <div className="flex items-center text-xs tracking-widest text-[#F6F1E7]/70 font-light">
            <button
              onClick={() => onSelectLang('ES')}
              className={`px-1 py-0.5 cursor-pointer transition-colors ${
                currentLang === 'ES'
                  ? 'text-[#C9A45C] font-semibold border-b border-[#C9A45C]'
                  : 'hover:text-[#F6F1E7]'
              }`}
            >
              ES
            </button>
            <span className="mx-1.5 text-[#C9A45C]/30 select-none">|</span>
            <button
              onClick={() => onSelectLang('FR')}
              className={`px-1 py-0.5 cursor-pointer transition-colors ${
                currentLang === 'FR'
                  ? 'text-[#C9A45C] font-semibold border-b border-[#C9A45C]'
                  : 'hover:text-[#F6F1E7]'
              }`}
            >
              FR
            </button>
            <span className="mx-1.5 text-[#C9A45C]/30 select-none">|</span>
            <button
              onClick={() => onSelectLang('EN')}
              className={`px-1 py-0.5 cursor-pointer transition-colors ${
                currentLang === 'EN'
                  ? 'text-[#C9A45C] font-semibold border-b border-[#C9A45C]'
                  : 'hover:text-[#F6F1E7]'
              }`}
            >
              EN
            </button>
          </div>

          {/* Cart Button: Carrito (0) */}
          <button
            onClick={onOpenCart}
            className="group flex items-center gap-2.5 text-sm tracking-wider uppercase text-[#F6F1E7] hover:text-[#C9A45C] transition-colors cursor-pointer focus:outline-none"
            aria-label="Ver carrito"
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5 text-[#C9A45C] transition-transform group-hover:scale-110" strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-[#C9A45C] text-[#0F3B2A] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="font-light">
              Carrito <span className="font-normal text-[#C9A45C]">({cartCount})</span>
            </span>
          </button>
        </div>

      </div>
    </header>
  );
};
