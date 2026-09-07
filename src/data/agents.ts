import { agency } from './agency';

export interface Agent {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  photo: string;
  phone: string;
  whatsapp: string;
  email: string;
}

export const agents: Agent[] = [
  {
    id: 'aisha-khan',
    name: 'Aisha Khan',
    role: 'Founding Partner',
    specialty: 'Clifton apartments & commercial leasing',
    bio: 'Aisha founded Crown Properties in 2014 after seven years at a commercial real estate firm in Dubai. She handles the Clifton and DHA lease portfolio and has placed over 300 families and businesses in the area. She holds an MBA from IBA Karachi and is a member of the Sindh Real Estate Agents Association. She speaks Urdu, English, and conversational Arabic.',
    photo:
      'https://images.pexels.com/photos/27086922/pexels-photo-27086922.jpeg?auto=compress&cs=tinysrgb&w=800',
    phone: '+92 21 3537 8821',
    whatsapp: '922135378821',
    email: 'aisha@sahilsaaya.pk',
  },
  {
    id: 'bilal-ahmed',
    name: 'Bilal Ahmed',
    role: 'Partner, Residential Sales',
    specialty: 'DHA Phase 6–8 houses & plots',
    bio: 'Bilal grew up in DHA Phase 4 and has been selling houses and plots in Phases 6 through 8 for eight years. He knows which blocks have completed development, which sectors still have utility delays, and which streets hold value during market dips. Before real estate he worked as a civil engineer on Bahria Town infrastructure projects. He speaks Urdu and English.',
    photo:
      'https://images.pexels.com/photos/37148308/pexels-photo-37148308.jpeg?auto=compress&cs=tinysrgb&w=800',
    phone: '+92 21 3537 8822',
    whatsapp: '922135378822',
    email: 'bilal@sahilsaaya.pk',
  },
  {
    id: 'fatima-noor',
    name: 'Fatima Noor',
    role: 'Rentals & Relocation',
    specialty: 'Family rentals and corporate relocation',
    bio: 'Fatima runs the rentals desk, handling both furnished and unfurnished apartments and houses across Clifton, DHA, and PECHS. She has helped over 180 families relocating to Karachi from other cities or from abroad, and maintains a vetted list of painters, electricians, and AC mechanics that she shares with new tenants. She speaks Urdu, English, and Punjabi.',
    photo:
      'https://images.pexels.com/photos/30609905/pexels-photo-30609905.jpeg?auto=compress&cs=tinysrgb&w=800',
    phone: '+92 21 3537 8823',
    whatsapp: '922135378823',
    email: 'fatima@sahilsaaya.pk',
  },
  {
    id: 'usman-raza',
    name: 'Usman Raza',
    role: 'Property Management',
    specialty: 'Overseas owner villa management',
    bio: 'Usman oversees the management portfolio — currently 41 houses and apartments whose owners live abroad, mostly in the Gulf, UK, and North America. He handles staff payroll, generator and UPS maintenance, utility bill payments, and quarterly property reports with photos. He previously managed a 60-unit residential tower in Bahria Town. He speaks Urdu and English.',
    photo:
      'https://images.pexels.com/photos/17049771/pexels-photo-17049771.jpeg?auto=compress&cs=tinysrgb&w=800',
    phone: '+92 21 3537 8824',
    whatsapp: '922135378824',
    email: 'usman@sahilsaaya.pk',
  },
];

export function getAgent(id: string): Agent | undefined {
  return agents.find((a) => a.id === id);
}

export { agency };
