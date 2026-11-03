import { Service, Testimonial, GalleryItem } from '../types';

export const SALON_INFO = {
  name: "Charme Salão de Beleza",
  brandName: "Charme",
  logo: "/assets/aistudio/images-removebg-preview__1__86d79fa1.png",
  segment: "Salão de Beleza",
  phone: "(67) 99261-3387",
  phoneFormatted: "+5567992613387",
  whatsapp: "5567992613387",
  address: "Rua Inúbia Paulista, 1116 – Jardim Monumento, Campo Grande – MS, CEP 79071-180",
  addressShort: "Rua Inúbia Paulista, 1116 – Jardim Monumento, Campo Grande – MS",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+In%C3%BAbia+Paulista%2C+1116+-+Jardim+Monumento%2C+Campo+Grande+-+MS%2C+79071-180",
  hours: "Atendimento até as 20h (conforme disponibilidade e confirmação do salão)",
  rating: 5.0,
  reviewsCount: 95,
  heroTitle: "Sua beleza merece esse momento.",
  heroSubtitle: "Realce sua beleza, renove sua autoestima e viva uma experiência especial no Charme Salão de Beleza.",
};

export const SERVICES: Service[] = [
  {
    id: 'cabelo-corte',
    name: 'Cabelos & Cortes',
    category: 'cabelos',
    categoryLabel: 'Cabelo',
    price: 'Sob Consulta',
    duration: 'Consulte horário',
    description: 'Cortes femininos personalizados que valorizam seus traços e trazem leveza, movimento e elegância aos fios.',
    longDescription: 'Design de corte pensado para realçar sua beleza natural e facilitar sua rotina diária. Converse com nossas profissionais para definir o estilo ideal.',
    benefits: ['Avaliação personalizada', 'Higienização e lavagem cuidadosa', 'Finalização com caimento perfeito', 'Atendimento atencioso e dedicado'],
    image: '/assets/aistudio/image_7766990a_hd.png',
    popular: true
  },
  {
    id: 'coloracao-mechas',
    name: 'Coloração & Mechas',
    category: 'coloracao',
    categoryLabel: 'Coloração',
    price: 'Sob Consulta',
    duration: 'Consulte horário',
    description: 'Técnicas de iluminação, mechas e colorações com produtos de qualidade para brilho radiante e fios preservados.',
    longDescription: 'Transforme ou renove sua cor com técnicas de iluminação que conferem naturalidade, sofisticação e saúde capilar.',
    benefits: ['Análise prévia da saúde do fio', 'Aplicação precisa e cuidadosa', 'Tonalização personalizada', 'Resultado com acabamento impecável'],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'escova-modelagem',
    name: 'Escova & Penteados',
    category: 'escova',
    categoryLabel: 'Escova',
    price: 'Sob Consulta',
    duration: 'Consulte horário',
    description: 'Escovas modeladas, lisas ou com ondas naturais, além de produções e penteados especiais.',
    longDescription: 'Perfeito para eventos, festas ou para começar a semana com os fios impecáveis, alinhados e cheios de brilho.',
    benefits: ['Proteção térmica de qualidade', 'Modelagem duradoura', 'Brilho e maciez imediata', 'Finalização impecável'],
    image: '/assets/aistudio/image_24ee8b19_hd.png',
  },
  {
    id: 'tratamentos-capilares',
    name: 'Tratamentos & Hidratação',
    category: 'hidratacao',
    categoryLabel: 'Tratamentos',
    price: 'Sob Consulta',
    duration: 'Consulte horário',
    description: 'Rituais de nutrição, hidratação profunda e reconstrução para revitalizar a fibra capilar.',
    longDescription: 'Cuidado intensivo para devolver a vitalidade, maciez e força aos cabelos fragilizados ou que precisam de revitalização periódica.',
    benefits: ['Reposição de nutrientes essenciais', 'Fios macios e sedosos', 'Alinhamento de cutículas', 'Atendimento carinhoso'],
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'manicure-pedicure',
    name: 'Manicure & Pedicure',
    category: 'unhas',
    categoryLabel: 'Unhas',
    price: 'Sob Consulta',
    duration: 'Consulte horário',
    description: 'Cuidado completo das mãos e pés, com esmaltação cuidadosa, cutilagem e acabamento detalhista.',
    longDescription: 'Unhas bem cuidadas com materiais rigorosamente esterilizados, ampla variedade de cores e atenção a cada detalhe.',
    benefits: ['Biossegurança e esterilização', 'Esmaltação de alta durabilidade', 'Hidratação de cutículas', 'Cuidado relaxante para mãos e pés'],
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'estetica-procedimentos',
    name: 'Estética & Procedimentos',
    category: 'estetica',
    categoryLabel: 'Estética',
    price: 'Sob Consulta',
    duration: 'Consulte horário',
    description: 'Procedimentos de beleza e estética para valorizar sua autoestima e completar sua experiência.',
    longDescription: 'Consulte nossa equipe pelo WhatsApp para conhecer todos os procedimentos de beleza disponíveis no salão e agendar seu horário.',
    benefits: ['Atendimento atencioso e acolhedor', 'Ambiente confortável e higienizado', 'Foco no bem-estar pessoal', 'Confirmação rápida via WhatsApp'],
    image: 'https://images.unsplash.com/photo-1512290900672-1f4144422e1b?auto=format&fit=crop&w=800&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Cliente Google',
    role: 'Avaliação Verificada no Google',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'Avaliação no Google',
    service: 'Cabelo & Atendimento',
    text: 'As atendentes são atenciosas e o resultado do cabelo ficou top.'
  },
  {
    id: 't-2',
    name: 'Cliente Google',
    role: 'Avaliação Verificada no Google',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'Avaliação no Google',
    service: 'Serviço de Qualidade',
    text: 'Profissionais excelentes e serviço de qualidade.'
  },
  {
    id: 't-3',
    name: 'Cliente Google',
    role: 'Avaliação Verificada no Google',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'Avaliação no Google',
    service: 'Atendimento de Excelência',
    text: 'Um dos melhores que já fui até hoje, atendimento de excelência.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Transformação & Iluminação Capilar',
    category: 'coloracao',
    image: '/assets/aistudio/image_50f97781_hd.png',
    description: 'Resultado radiante com mechas e iluminação cuidadosa que valorizam a beleza natural.'
  },
  {
    id: 'gal-2',
    title: 'Lounge Aconchegante de Espera',
    category: 'ambiente',
    image: '/assets/aistudio/image_7766990a_hd.png',
    description: 'Espaço com sofá terracota confortável e decoração elegante para você se sentir em casa.'
  },
  {
    id: 'gal-3',
    title: 'Escova & Finalização com Brilho',
    category: 'cabelos',
    image: '/assets/aistudio/image_24ee8b19_hd.png',
    description: 'Modelagem com ondas impecáveis e toque sedoso para ocasiões especiais ou dia a dia.'
  },
  {
    id: 'gal-4',
    title: 'Manicure & Cuidado das Unhas',
    category: 'unhas',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
    description: 'Esmaltação primorosa, cutilagem detalhada e cuidado completo para mãos e pés.'
  },
  {
    id: 'gal-5',
    title: 'Tratamento & Saúde Capilar',
    category: 'cabelos',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
    description: 'Recuperação intensiva do brilho, maciez e vitalidade dos fios.'
  },
  {
    id: 'gal-6',
    title: 'Ambiente Aconchegante do Salão',
    category: 'ambiente',
    image: '/assets/aistudio/image_c4423f05_hd.png',
    description: 'Espaço higienizado, acolhedor e preparado para você relaxar e renovar suas energias.'
  }
];
