import React from 'react';
import { PRODUCTS } from '../data';
import { Product } from '../types';
import { Star, ShoppingBag, Check } from 'lucide-react';

interface FavoritesSectionProps {
  onAddToCart: (product: Product) => void;
  addedProductId: string | null;
}

export const FavoritesSection: React.FC<FavoritesSectionProps> = ({
  onAddToCart,
  addedProductId
}) => {
  return (
    <section id="favoritos" className="py-20 lg:py-28 bg-[#0F3B2A] text-[#F6F1E7] border-b border-[#C9A45C]/20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18">
          <span className="text-xs tracking-[0.35em] text-[#C9A45C] uppercase font-light block mb-3">
            Selección Exclusiva
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#F6F1E7] font-normal tracking-tight">
            Nuestros favoritos
          </h2>
          <div className="w-16 h-[1px] bg-[#C9A45C] mx-auto mt-5 opacity-60" />
        </div>

        {/* 4 Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PRODUCTS.map((product) => {
            const isJustAdded = addedProductId === product.id;

            return (
              <div
                key={product.id}
                className="group flex flex-col bg-[#0A271C] border border-[#C9A45C]/30 hover:border-[#C9A45C] transition-all duration-300 relative"
              >
                {/* Photo container on light ivory background for realistic studio showcase */}
                <div className="relative aspect-square w-full overflow-hidden bg-[#F6F1E7] p-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Top Badge: "Novedad" or "Más vendido" */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-[#C9A45C] text-[#0F3B2A] text-[10px] tracking-[0.2em] uppercase font-bold px-3 py-1 shadow-sm">
                      {product.badge}
                    </div>
                  )}

                  {/* Discount tag: "-20 %" for Ambre Royal */}
                  {product.discountBadge && (
                    <div className="absolute top-3 right-3 bg-[#0F3B2A] border border-[#C9A45C] text-[#C9A45C] text-[11px] font-semibold tracking-wider px-2.5 py-0.5">
                      {product.discountBadge}
                    </div>
                  )}
                </div>

                {/* Details Section */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div>
                    {/* Stars & Reviews: ★★★★★ (X opiniones) */}
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="flex text-[#C9A45C]">
                        {[...Array(product.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#C9A45C]" strokeWidth={0} />
                        ))}
                      </div>
                      <span className="text-xs text-[#F6F1E7]/60 font-light">
                        ({product.reviewsCount} opiniones)
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="font-serif-luxury text-lg text-[#F6F1E7] font-normal leading-snug group-hover:text-[#C9A45C] transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  {/* Price Row & Add to Cart button */}
                  <div className="pt-3 border-t border-[#C9A45C]/15 space-y-3.5">
                    {/* Price display with optional strikethrough original price */}
                    <div className="flex items-baseline gap-2.5">
                      {product.originalPrice ? (
                        <>
                          <span className="text-sm text-[#F6F1E7]/40 line-through font-light">
                            {product.originalPrice.toFixed(2).replace('.', ',')} €
                          </span>
                          <span className="text-lg font-bold text-[#F6F1E7] tracking-tight">
                            {product.price.toFixed(2).replace('.', ',')} €
                          </span>
                        </>
                      ) : (
                        <span className="text-lg font-medium text-[#F6F1E7] tracking-tight">
                          {product.price.toFixed(2).replace('.', ',')} €
                        </span>
                      )}
                    </div>

                    {/* Add to Cart link / button */}
                    <button
                      onClick={() => onAddToCart(product)}
                      className={`w-full py-3 px-4 text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                        isJustAdded
                          ? 'bg-[#17523b] text-[#C9A45C] border border-[#C9A45C]'
                          : 'border border-[#C9A45C] text-[#C9A45C] hover:bg-[#C9A45C] hover:text-[#0F3B2A]'
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Añadido al carrito</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" strokeWidth={1.5} />
                          <span>Añadir al carrito</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
