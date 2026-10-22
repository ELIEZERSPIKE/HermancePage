import { Product, Testimonial, GuideItem, QuizQuestion } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'noir-elegance',
    name: 'Noir Élégance – Eau de Parfum 50 ml',
    category: 'perfumes',
    price: 49.90,
    rating: 5,
    reviewsCount: 24,
    image: '/src/assets/images/perfume_noir_1792064953401.jpg',
    description: 'Una fragancia magnética y refinada con notas de bergamota negra, vetiver ahumado y sándalo noble.'
  },
  {
    id: 'ambre-royal',
    name: 'Ambre Royal – Eau de Parfum 100 ml',
    category: 'perfumes',
    price: 79.90,
    originalPrice: 99.90,
    discountBadge: '-20 %',
    badge: 'Novedad',
    rating: 5,
    reviewsCount: 38,
    image: '/src/assets/images/perfume_ambre_1792064953408.jpg',
    description: 'Acorde cálido de ámbar dorado, vainilla de Madagascar y cedro blanco en un frasco de alta costura.'
  },
  {
    id: 'tote-camel',
    name: 'Bolso Tote Camel',
    category: 'bolsos',
    price: 89.00,
    badge: 'Más vendido',
    rating: 5,
    reviewsCount: 17,
    image: '/src/assets/images/tote_camel_1792064977579.jpg',
    description: 'Piel de grano fino camel con dos asas resistentes y acabados artesanales sin logotipos aparentes.'
  },
  {
    id: 'bolso-burdeos',
    name: 'Bolso Burdeos con bandolera',
    category: 'bolsos',
    price: 119.00,
    rating: 5,
    reviewsCount: 21,
    image: '/src/assets/images/bag_burgundy_1792064977750.jpg',
    description: 'Estructura rígida en cuero burdeos noble con herrajes dorados cepillados y correa bandolera desmontable.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    name: 'Laura',
    city: 'Madrid',
    rating: 5,
    text: '«El aroma de Noir Élégance es simplemente sublime. Duración impecable durante todo el día y el packaging es una auténtica joya sobre mi tocador.»',
    avatar: '/src/assets/images/avatar_laura_1792065056169.jpg',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Carlos',
    city: 'Barcelona',
    rating: 5,
    text: '«Compré el Bolso Tote Camel para un regalo y la calidad del cuero supera con creces mis expectativas. Envío rapidísimo a Barcelona.»',
    avatar: '/src/assets/images/avatar_carlos_1792065096777.jpg',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Elena',
    city: 'Sevilla',
    rating: 5,
    text: '«Ambre Royal tiene una estela cálida y distinguida que no pasa desapercibida. La atención al cliente y los detalles del envío son de diez.»',
    avatar: '/src/assets/images/avatar_elena_1792065096549.jpg',
    verified: true
  }
];

export const GUIDES: GuideItem[] = [
  {
    id: 'guide-perfume',
    title: 'Cómo elegir tu perfume',
    readTime: '4 min de lectura',
    image: '/src/assets/images/guide_spray_1792065004878.jpg',
    excerpt: 'Descubre las familias olfativas, las notas de salida, corazón y fondo, y cómo encontrar la fragancia que se funde con tu piel.',
    content: 'Elegir un perfume personal es un ritual íntimo. La clave reside en comprender cómo interactúan las notas olfativas con tu pH natural. Te guiamos paso a paso entre aromas amaderados, orientales y florales.'
  },
  {
    id: 'guide-gift',
    title: 'Ideas de regalo',
    readTime: '3 min de lectura',
    image: '/src/assets/images/guide_gift_1792065004902.jpg',
    excerpt: 'Cofres exclusivos de edición limitada y combinaciones armónicas de perfumes y marroquinería para acertar con distinción.',
    content: 'Nuestros cofres regalo Maison Hermance se presentan en cajas forradas en terciopelo verde esmeralda y lazo de raso dorado. El obsequio definitivo para ocasiones inolvidables.'
  },
  {
    id: 'guide-bag',
    title: 'Cómo elegir tu bolso',
    readTime: '5 min de lectura',
    image: '/src/assets/images/guide_bag_1792065004902.jpg',
    excerpt: 'Guía de siluetas, tipos de cuero noble y funcionalidad cotidiana para una inversión atemporal de fondo de armario.',
    content: 'Un bolso de lujo debe unir proporciones perfectas, ligereza y durabilidad extrema. Analizamos desde el formato tote diario hasta el bolso estructurado para eventos de noche.'
  }
];

export const TIKTOK_VIDEOS = [
  {
    id: 'tt-1',
    image: '/src/assets/images/tiktok_unboxing_clean_1792065056243.jpg',
    tag: 'Unboxing',
    caption: 'Desempaquetando el Bolso Tote Camel · El arte de los detalles',
    views: '142.8K',
    likes: '12.4K'
  },
  {
    id: 'tt-2',
    image: '/src/assets/images/tiktok_perfume_macro_1792065054925.jpg',
    tag: 'Fragancia',
    caption: 'La fijación de Ambre Royal en primer plano',
    views: '98.5K',
    likes: '8.9K'
  },
  {
    id: 'tt-3',
    image: '/src/assets/images/tiktok_gift_scene_1792065054703.jpg',
    tag: 'El Arte de Regalar',
    caption: 'Cofres verdes esmeralda con cinta dorada artesanal',
    views: '215.1K',
    likes: '19.2K'
  },
  {
    id: 'tt-4',
    image: '/src/assets/images/tiktok_bag_outfit_1792065055486.jpg',
    tag: 'Estilo',
    caption: 'Cómo llevar el Bolso Burdeos de la mañana a la noche',
    views: '167.3K',
    likes: '14.8K'
  }
];

export const QUIZ_STEPS: QuizQuestion[] = [
  {
    questionNumber: 1,
    totalQuestions: 5,
    title: '¿Para qué ocasión?',
    subtitle: 'Selecciona el momento en el que deseas que tu fragancia te acompañe:',
    options: [
      { label: 'Día a día', value: 'dia', desc: 'Frescura duradera y sutileza para tu rutina.' },
      { label: 'Noche', value: 'noche', desc: 'Intensidad, magnetismo y calidez envolvente.' },
      { label: 'Regalo', value: 'regalo', desc: 'Un acierto seguro, equilibrado y elegante.' }
    ]
  },
  {
    questionNumber: 2,
    totalQuestions: 5,
    title: '¿Qué familia olfativa prefieres?',
    subtitle: 'El universo aromático que mejor refleja tu personalidad:',
    options: [
      { label: 'Amaderada & Especiada', value: 'amaderada', desc: 'Cedro, vetiver y pimienta rosa.' },
      { label: 'Ámbar & Oriental', value: 'ambar', desc: 'Vainilla noble, resinas y pachulí.' },
      { label: 'Floral & Cítrica fresca', value: 'floral', desc: 'Bergamota, jazmín y flor de azahar.' }
    ]
  },
  {
    questionNumber: 3,
    totalQuestions: 5,
    title: '¿Cuál es la intensidad que buscas?',
    subtitle: 'El impacto y la estela que dejarás a tu paso:',
    options: [
      { label: 'Discreta e íntima', value: 'intima', desc: 'Un velo sutil apreciable en las distancias cortas.' },
      { label: 'Equilibrada y sofisticada', value: 'equilibrada', desc: 'Presencia elegante que perdura 8 horas.' },
      { label: 'Firma inolvidable', value: 'intensa', desc: 'Estela duradera y memorable con personalidad.' }
    ]
  },
  {
    questionNumber: 4,
    totalQuestions: 5,
    title: '¿Cuál es tu estilo predilecto?',
    subtitle: 'La armonía con tu atuendo y porte habitual:',
    options: [
      { label: 'Minimalista refinado', value: 'minimalista', desc: 'Líneas limpias, materiales nobles y calma.' },
      { label: 'Clásico atemporal', value: 'clasico', desc: 'La máxima tradición de la alta perfumería europea.' },
      { label: 'Audaz y vanguardista', value: 'audaz', desc: 'Contrastes inesperados y carácter único.' }
    ]
  },
  {
    questionNumber: 5,
    totalQuestions: 5,
    title: '¿Cuál es tu rango de presupuesto?',
    subtitle: 'Para sugerirte las piezas ideales de nuestro catálogo:',
    options: [
      { label: 'Hasta 60 €', value: 'b1', desc: 'Formatos esenciales de 50 ml.' },
      { label: '60 € – 120 €', value: 'b2', desc: 'Frascos gran formato o combinaciones.' },
      { label: 'Más de 120 €', value: 'b3', desc: 'Cofres de coleccionista y conjuntos marroquinería.' }
    ]
  }
];
