import React from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Truck } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 70.0;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0F3B2A] text-[#F6F1E7] border-l border-[#C9A45C]/40 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-[#C9A45C]/25 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 border border-[#C9A45C] flex items-center justify-center">
                <span className="font-serif-luxury text-xs text-[#C9A45C] font-semibold">MH</span>
              </div>
              <h2 className="font-serif-luxury text-xl text-[#F6F1E7] tracking-wider uppercase font-medium">
                Tu Carrito ({items.reduce((acc, it) => acc + it.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-[#F6F1E7]/70 hover:text-[#C9A45C] transition-colors p-1 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Free Shipping Meter */}
          <div className="px-6 py-3.5 bg-[#082117] border-b border-[#C9A45C]/20 text-xs">
            <div className="flex items-center justify-between text-[#C9A45C] mb-1.5 font-light">
              <div className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5" />
                <span>
                  {remainingForFreeShipping === 0
                    ? '¡Envío gratuito conseguido!'
                    : `Te faltan ${remainingForFreeShipping.toFixed(2).replace('.', ',')} € para el envío gratuito`}
                </span>
              </div>
              <span className="font-medium">{Math.round(progressPercent)}%</span>
            </div>
            <div className="w-full h-1 bg-[#0F3B2A] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#C9A45C] transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <p className="font-serif-luxury text-2xl text-[#F6F1E7]/60">Tu carrito está vacío</p>
                <p className="text-xs text-[#F6F1E7]/50 max-w-xs mx-auto font-light">
                  Explora nuestra selección de alta perfumería y marroquinería artesana.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 border border-[#C9A45C] text-[#C9A45C] text-xs uppercase tracking-widest font-semibold hover:bg-[#C9A45C] hover:text-[#0F3B2A] transition-colors cursor-pointer"
                >
                  Descubrir catálogo
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3.5 bg-[#082117] border border-[#C9A45C]/25 transition-colors"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="w-18 h-18 object-cover border border-[#C9A45C]/30 shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-serif-luxury text-sm font-medium text-[#F6F1E7] line-clamp-1">
                        {item.product.name}
                      </h4>
                      <p className="text-xs text-[#C9A45C] font-semibold mt-0.5">
                        {item.product.price.toFixed(2).replace('.', ',')} €
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-[#C9A45C]/40 bg-[#0F3B2A]">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-1 text-xs text-[#F6F1E7]/80 hover:text-[#C9A45C] cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 py-0.5 text-xs font-medium text-[#F6F1E7]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-1 text-xs text-[#F6F1E7]/80 hover:text-[#C9A45C] cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Remove item */}
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-[#F6F1E7]/50 hover:text-red-400 p-1 cursor-pointer transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Checkout Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#C9A45C]/30 bg-[#082117] space-y-4">
              <div className="space-y-1.5 text-xs text-[#F6F1E7]/80">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-medium text-[#F6F1E7]">{subtotal.toFixed(2).replace('.', ',')} €</span>
                </div>
                <div className="flex justify-between">
                  <span>Envío a España y Europa:</span>
                  <span className="text-[#C9A45C]">
                    {remainingForFreeShipping === 0 ? 'Gratis' : '4,90 €'}
                  </span>
                </div>
                <div className="flex justify-between text-base font-serif-luxury font-medium text-[#F6F1E7] pt-2 border-t border-[#C9A45C]/20">
                  <span>Total estimado:</span>
                  <span className="text-[#C9A45C] font-sans font-bold text-lg">
                    {(subtotal + (remainingForFreeShipping === 0 ? 0 : 4.90)).toFixed(2).replace('.', ',')} €
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  alert('¡Gracias por tu interés! La pasarela de pago segura de Maison Hermance procesará tu pedido con entrega preferente.');
                }}
                className="w-full py-4 bg-[#C9A45C] text-[#0F3B2A] hover:bg-[#b58f47] transition-all font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Tramitar pedido</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#F6F1E7]/50">
                <ShieldCheck className="w-3 h-3 text-[#C9A45C]" />
                <span>Pago 100% encriptado · Devoluciones gratuitas 30 días</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
