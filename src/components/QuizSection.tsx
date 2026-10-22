import React, { useState } from 'react';
import { QUIZ_STEPS, PRODUCTS } from '../data';
import { Product } from '../types';
import { ArrowRight, Check, Sparkles, RotateCcw, Mail } from 'lucide-react';

interface QuizSectionProps {
  onAddToCart: (product: Product) => void;
}

export const QuizSection: React.FC<QuizSectionProps> = ({ onAddToCart }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [emailInput, setEmailInput] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const currentStep = QUIZ_STEPS[currentStepIndex];

  const handleSelectOption = (value: string) => {
    const updated = { ...selectedAnswers, [currentStep.questionNumber]: value };
    setSelectedAnswers(updated);

    if (currentStepIndex < QUIZ_STEPS.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
    setEmailSubmitted(false);
  };

  const recommendedProducts = [PRODUCTS[0], PRODUCTS[1]];

  return (
    <section id="quiz" className="py-20 lg:py-28 bg-[#F6F1E7] text-[#0F3B2A] border-b border-[#C9A45C]/30 relative overflow-hidden">
      
      {/* Decorative subtle background line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-[1px] bg-[#C9A45C]/20" />
      
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Presentation */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs tracking-[0.35em] text-[#C9A45C] uppercase font-semibold">
              Diagnóstico Olfativo
            </span>

            <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-[54px] leading-[1.12] font-normal text-[#0F3B2A] tracking-tight">
              Tu perfume en 5 preguntas.
            </h2>

            <p className="text-base sm:text-lg text-[#0F3B2A]/80 font-light leading-relaxed max-w-lg">
              Ocasión, estilo y presupuesto. Recibe 3 recomendaciones por email.
            </p>

            <div className="pt-2">
              <button
                onClick={() => {
                  if (showResults) {
                    handleReset();
                  } else {
                    // focus or start
                    const card = document.getElementById('quiz-interactive-card');
                    card?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#0F3B2A] text-[#F6F1E7] hover:bg-[#164e38] transition-all duration-300 font-medium text-sm tracking-widest uppercase cursor-pointer shadow-md group"
              >
                <span>{showResults ? 'Reiniciar el quiz' : 'Empezar el quiz'}</span>
                <ArrowRight className="ml-2.5 w-4 h-4 text-[#C9A45C] transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Sub-features list */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs tracking-wider text-[#0F3B2A]/70 font-light">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                <span>Recomendaciones 100% personalizadas</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                <span>Muestra gratis con tu pedido</span>
              </div>
            </div>
          </div>

          {/* Right Column: Green Interactive Card */}
          <div className="lg:col-span-6">
            <div
              id="quiz-interactive-card"
              className="bg-[#0F3B2A] text-[#F6F1E7] p-8 sm:p-10 lg:p-12 border border-[#C9A45C]/40 shadow-2xl relative"
            >
              {/* Gold decorative border accents */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#C9A45C]" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#C9A45C]" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-[#C9A45C]" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#C9A45C]" />

              {!showResults ? (
                <>
                  {/* Step Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-[#C9A45C]/25 mb-6">
                    <span className="text-xs uppercase tracking-[0.25em] text-[#C9A45C] font-medium">
                      Pregunta {currentStep.questionNumber} / {currentStep.totalQuestions}
                    </span>
                    <div className="flex items-center gap-1">
                      {QUIZ_STEPS.map((step, idx) => (
                        <div
                          key={step.questionNumber}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            idx === currentStepIndex
                              ? 'w-6 bg-[#C9A45C]'
                              : idx < currentStepIndex
                              ? 'w-2 bg-[#C9A45C]/70'
                              : 'w-2 bg-[#F6F1E7]/20'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Question Title */}
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-[#F6F1E7] mb-2 tracking-wide">
                    {currentStep.title}
                  </h3>
                  {currentStep.subtitle && (
                    <p className="text-xs sm:text-sm text-[#F6F1E7]/70 font-light mb-6">
                      {currentStep.subtitle}
                    </p>
                  )}

                  {/* Buttons (exact: Día a día, Noche, Regalo on step 1) */}
                  <div className="space-y-3.5 my-6">
                    {currentStep.options.map((opt) => {
                      const isSelected = selectedAnswers[currentStep.questionNumber] === opt.value;
                      return (
                        <button
                          key={opt.value}
                          onClick={() => handleSelectOption(opt.value)}
                          className={`w-full py-4 px-5 text-left border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                            isSelected
                              ? 'bg-[#C9A45C] text-[#0F3B2A] border-[#C9A45C] font-medium'
                              : 'border-[#C9A45C]/40 text-[#F6F1E7] hover:border-[#C9A45C] hover:bg-[#164e38]/50'
                          }`}
                        >
                          <div>
                            <span className="text-sm tracking-wider uppercase block font-medium">
                              {opt.label}
                            </span>
                            {opt.desc && (
                              <span className={`text-xs block mt-0.5 ${
                                isSelected ? 'text-[#0F3B2A]/80' : 'text-[#F6F1E7]/60'
                              }`}>
                                {opt.desc}
                              </span>
                            )}
                          </div>
                          <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs transition-colors ${
                            isSelected
                              ? 'border-[#0F3B2A] bg-[#0F3B2A] text-[#C9A45C]'
                              : 'border-[#C9A45C]/50 group-hover:border-[#C9A45C]'
                          }`}>
                            {isSelected ? '✓' : ''}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Step Footer navigation */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#C9A45C]/20 text-xs text-[#F6F1E7]/60">
                    {currentStepIndex > 0 ? (
                      <button
                        onClick={() => setCurrentStepIndex(prev => prev - 1)}
                        className="hover:text-[#C9A45C] cursor-pointer flex items-center gap-1.5"
                      >
                        ← Anterior
                      </button>
                    ) : (
                      <span className="text-[11px] text-[#C9A45C]">Selecciona una opción para avanzar</span>
                    )}

                    <button
                      onClick={() => setShowResults(true)}
                      className="hover:text-[#C9A45C] cursor-pointer ml-auto"
                    >
                      Ver recomendación directa →
                    </button>
                  </div>
                </>
              ) : (
                /* Results View */
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-[#C9A45C]/30">
                    <div className="flex items-center gap-2 text-[#C9A45C]">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-xs uppercase tracking-[0.25em] font-medium">
                        Tu selección ideal
                      </span>
                    </div>
                    <button
                      onClick={handleReset}
                      className="text-xs text-[#F6F1E7]/70 hover:text-[#C9A45C] flex items-center gap-1 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Repetir quiz</span>
                    </button>
                  </div>

                  <h3 className="font-serif-luxury text-2xl text-[#F6F1E7]">
                    Tus 2 fragancias predilectas
                  </h3>

                  <div className="space-y-3">
                    {recommendedProducts.map(product => (
                      <div
                        key={product.id}
                        className="flex items-center gap-4 p-3 bg-[#082117] border border-[#C9A45C]/30"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          referrerPolicy="no-referrer"
                          className="w-14 h-14 object-cover border border-[#C9A45C]/20"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif-luxury text-sm font-medium text-[#F6F1E7] truncate">
                            {product.name}
                          </h4>
                          <span className="text-xs text-[#C9A45C] font-semibold">
                            {product.price.toFixed(2).replace('.', ',')} €
                          </span>
                        </div>
                        <button
                          onClick={() => onAddToCart(product)}
                          className="px-3 py-1.5 bg-[#C9A45C] text-[#0F3B2A] text-xs font-semibold uppercase tracking-wider hover:bg-[#b58f47] cursor-pointer"
                        >
                          Añadir
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Email Capture */}
                  <div className="pt-2">
                    {!emailSubmitted ? (
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          if (emailInput) setEmailSubmitted(true);
                        }}
                        className="space-y-2.5"
                      >
                        <label className="text-xs text-[#F6F1E7]/80 block">
                          Recibe la ficha olfativa completa y tu código de bienvenida:
                        </label>
                        <div className="flex">
                          <input
                            type="email"
                            required
                            placeholder="tu.email@ejemplo.com"
                            value={emailInput}
                            onChange={(e) => setEmailInput(e.target.value)}
                            className="flex-1 bg-[#082117] border border-[#C9A45C]/50 px-3.5 py-2.5 text-xs text-[#F6F1E7] placeholder-[#F6F1E7]/40 focus:outline-none focus:border-[#C9A45C]"
                          />
                          <button
                            type="submit"
                            className="bg-[#C9A45C] text-[#0F3B2A] px-4 py-2.5 text-xs uppercase tracking-wider font-semibold hover:bg-[#b58f47] cursor-pointer"
                          >
                            Enviar
                          </button>
                        </div>
                      </form>
                    ) : (
                      <div className="p-3 bg-[#082117] border border-[#C9A45C] text-xs text-[#C9A45C] flex items-center gap-2">
                        <Check className="w-4 h-4 shrink-0" />
                        <span>¡Recomendaciones enviadas a {emailInput}! Revisa tu bandeja de entrada.</span>
                      </div>
                    )}
                  </div>

                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
