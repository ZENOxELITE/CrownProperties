export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  property: string;
  area: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    quote:
      'Aisha helped us find a 3-bedroom apartment in Clifton Block 5 when we relocated from London. She was upfront about which buildings had reliable backup power and which ones had water pressure issues on upper floors. We signed the lease within two weeks of landing in Karachi.',
    name: 'Hina & Daniyal Sheikh',
    property: '3-bedroom apartment, furnished rental',
    area: 'Clifton',
  },
  {
    id: 'test-2',
    quote:
      'I bought a 500 sq yd house in DHA Phase 7 through Bilal. He showed me six properties and told me why four of them were overpriced — one had a boundary wall crack, another had an incomplete transfer file. The house I bought was fairly priced and the transfer went through in three weeks.',
    name: 'Imran Qureshi',
    property: '500 sq yd house, purchase',
    area: 'DHA Phase 7',
  },
  {
    id: 'test-3',
    quote:
      'We live in Toronto and own a house in Bahria Town that we rent out. Usman manages everything — tenant screening, rent collection, maintenance, and a monthly report with photos. When the AC compressor failed in June, a replacement was installed the same day and we were notified with the invoice.',
    name: 'Sana & Junaid Malik',
    property: '10-marla house, managed remotely',
    area: 'Bahria Town',
  },
];
