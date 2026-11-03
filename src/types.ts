export interface Service {
  id: string;
  name: string;
  category: 'cabelos' | 'coloracao' | 'escova' | 'hidratacao' | 'unhas' | 'maquiagem' | 'estetica';
  categoryLabel: string;
  price: string;
  originalPrice?: string;
  duration: string;
  description: string;
  longDescription: string;
  benefits: string[];
  image: string;
  popular?: boolean;
}

export interface Specialist {
  id: string;
  name: string;
  role: string;
  experience: string;
  image: string;
  specialty: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  service: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'cabelos' | 'coloracao' | 'unhas' | 'noivas' | 'ambiente';
  image: string;
  description: string;
}

export interface BookingFormData {
  serviceId: string;
  specialistId: string;
  date: string;
  time: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  notes: string;
}
