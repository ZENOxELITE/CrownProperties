export const agency = {
  name: 'Crown Properties',
  tagline: 'Estate agency for Karachi and its neighborhoods',
  city: 'Karachi',
  country: 'Pakistan',
  areasServed: [
    'Clifton',
    'DHA',
    'Bahria Town',
    'Gulshan-e-Iqbal',
    'PECHS',
    'Malir Cantt',
    'North Nazimabad',
  ],
  phone: '+92 21 3537 8820',
  phoneDisplay: '+92 21 3537 8820',
  whatsapp: '922135378820',
  whatsappDisplay: '+92 21 3537 8820',
  email: 'info@sahilsaaya.pk',
  address: {
    line1: 'Sunset Boulevard, Block 2',
    line2: 'Clifton, Karachi 75600',
    country: 'Pakistan',
  },
  mapsEmbedOffice:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.2!2d67.0291!3d24.8137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ4JzQ5LjMiTiA2N8KwMDEnNDQuOCJF!5e0!3m2!1sen!2s!4v1700000000000',
  social: {
    instagram: 'https://instagram.com/sahilsaaya',
    facebook: 'https://facebook.com/sahilsaaya',
    linkedin: 'https://linkedin.com/company/sahilsaaya',
  },
  license: 'SREAR-2024-1187',
  stats: {
    yearsOperating: 11,
    propertiesSold: 480,
    areasCovered: 7,
    activeListings: 62,
  },
  currency: 'PKR',
  currencySymbol: 'Rs',
  formspreeEndpoint: 'https://formspree.io/f/xyzwabcd',
};

export type Agency = typeof agency;
