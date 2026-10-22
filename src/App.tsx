/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Collections } from './components/Collections';
import { QuizSection } from './components/QuizSection';
import { FavoritesSection } from './components/FavoritesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { GuidesSection } from './components/GuidesSection';
import { TikTokSection } from './components/TikTokSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { GuideModal } from './components/GuideModal';
import { Product, CartItem, GuideItem } from './types';
import { PRODUCTS } from './data';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: PRODUCTS[0], quantity: 1 }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('ES');
  const [selectedGuide, setSelectedGuide] = useState<GuideItem | null>(null);
  const [justAddedProductId, setJustAddedProductId] = useState<string | null>(null);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });

    setJustAddedProductId(product.id);
    setIsCartOpen(true);
    setTimeout(() => {
      setJustAddedProductId(null);
    }, 2000);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0F3B2A] text-[#F6F1E7] selection:bg-[#C9A45C] selection:text-[#0F3B2A]">
      {/* En-tête de la marque */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        currentLang={currentLang}
        onSelectLang={setCurrentLang}
        onNavigate={scrollToSection}
      />

      {/* Corps du site */}
      <main>
        {/* Hero */}
        <Hero
          onFindPerfume={() => scrollToSection('quiz')}
          onViewBags={() => scrollToSection('bolsos')}
        />

        {/* Dos universos */}
        <Collections
          onSelectCategory={(category) => {
            if (category === 'perfumes') scrollToSection('quiz');
            else scrollToSection('favoritos');
          }}
        />

        {/* Quiz en 5 preguntas */}
        <QuizSection onAddToCart={handleAddToCart} />

        {/* Nuestros favoritos */}
        <FavoritesSection
          onAddToCart={handleAddToCart}
          addedProductId={justAddedProductId}
        />

        {/* Opiniones de nuestros clientes */}
        <ReviewsSection />

        {/* Guías para elegir bien */}
        <GuidesSection onSelectGuide={(guide) => setSelectedGuide(guide)} />

        {/* Síguenos en TikTok */}
        <TikTokSection />
      </main>

      {/* Pied de page */}
      <Footer onNavigate={scrollToSection} />

      {/* Tiroir Panier interactif */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* Modal lecture des guides éditoriaux */}
      <GuideModal
        guide={selectedGuide}
        onClose={() => setSelectedGuide(null)}
      />
    </div>
  );
}
