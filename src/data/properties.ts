// export type ListingType = 'sale' | 'rent';
// export type PropertyStatus = 'available' | 'new' | 'sold' | 'under-offer';

// export interface Property {
//   id: string;
//   slug: string;
//   title: string;
//   type: ListingType;
//   status: PropertyStatus;
//   price: number;
//   pricePeriod?: string;
//   area: string;
//   address: string;
//   beds: number;
//   baths: number;
//   size: number; // in sq yd or sqft as noted
//   sizeUnit: string;
//   plotNumber: string;
//   yearBuilt: number;
//   agentId: string;
//   heroImage: string;
//   gallery: string[];
//   description: string;
//   features: string[];
//   mapsEmbed: string;
//   featured: boolean;
//   dateAdded: string;
// }

// export const properties: Property[] = [
//   {
//     id: 'p01',
//     slug: 'house-dha-phase-8-zamzama',
//     title: 'House Zamzama',
//     type: 'sale',
//     status: 'new',
//     price: 85000000,
//     area: 'DHA',
//     address: 'Street 12, Phase 8, DHA City',
//     beds: 5,
//     baths: 6,
//     size: 500,
//     sizeUnit: 'sq yd',
//     plotNumber: 'DHA-P8-S12-0047',
//     yearBuilt: 2021,
//     agentId: 'bilal-ahmed',
//     heroImage:
//       'https://images.pexels.com/photos/7031407/pexels-photo-7031407.jpeg?auto=compress&cs=tinysrgb&w=1600',
//     gallery: [
//       'https://images.pexels.com/photos/7031407/pexels-photo-7031407.jpeg?auto=compress&cs=tinysrgb&w=1600',
//       'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&w=1600',
//       'https://images.pexels.com/photos/7045356/pexels-photo-7045356.jpeg?auto=compress&cs=tinysrgb&w=1600',
//       'https://images.pexels.com/photos/8089071/pexels-photo-8089071.jpeg?auto=compress&cs=tinysrgb&w=1600',
//       'https://images.pexels.com/photos/14598479/pexels-photo-14598479.jpeg?auto=compress&cs=tinysrgb&w=1600',
//     ],
//     description:
//       'A 500 sq yd double-storey house in DHA Phase 8, on a 40-foot wide street with street parking for two cars plus a covered carport. The ground floor has a drawing room, a dining room, a kitchen with a pantry, and a guest bedroom with an attached bath. The first floor has three bedrooms, all with attached bathrooms and built-in wardrobes. The master bedroom has a walk-in closet and a balcony facing the street. The house has a 10 KVA generator with ATS (auto transfer switch), a 3-ton water tank on the roof, and a bore well with a filtration unit. The street has underground electrification and a functioning sewer line — confirmed by DHA utilities before listing.',
//     features: [
//       '500 sq yd plot',
//       'Double-storey with carport',
//       '10 KVA generator with ATS',
//       'Bore well with water filtration',
//       '3-ton overhead water tank',
//       'Underground electrification in street',
//       'Drawing room and separate dining room',
//       '5 bedrooms, all with attached baths',
//     ],
//     mapsEmbed:
//       'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.8!2d67.0491!3d24.8237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ5JzI1LjMiTiA2N8KwMDInNTcuOCJF!5e0!3m2!1sen!2s!4v1700000000000',
//     featured: true,
//     dateAdded: '2026-08-20',
//   },
//   {
//     id: 'p02',
//     slug: 'apartment-clifton-block-5-crescent',
//     title: 'Apartment The Crescent',
//     type: 'sale',
//     status: 'available',
//     price: 42000000,
//     area: 'Clifton',
//     address: 'Block 5, Clifton, near Seaview',
//     beds: 3,
//     baths: 3,
//     size: 1850,
//     sizeUnit: 'sqft',
//     plotNumber: 'CL-B5-CR-1203',
//     yearBuilt: 2018,
//     agentId: 'aisha-khan',
//     heroImage:
//       'https://images.pexels.com/photos/29012619/pexels-photo-29012619.jpeg?auto=compress&cs=tinysrgb&w=1600',
//     gallery: [
//       'https://images.pexels.com/photos/29012619/pexels-photo-29012619.jpeg?auto=compress&cs=tinysrgb&w=1600',
//       'https://images.pexels.com/photos/280239/pexels-photo-280239.jpeg?auto=compress&cs=tinysrgb&w=1600',
//       'https://images.pexels.com/photos/8146213/pexels-photo-8146213.jpeg?auto=compress&cs=tinysrgb&w=1600',
//       'https://images.pexels.com/photos/5998031/pexels-photo-5998031.jpeg?auto=compress&cs=tinysrgb&w=1600',
//       'https://images.pexels.com/photos/7749046/pexels-photo-7749046.jpeg?auto=compress&cs=tinysrgb&w=1600',
//     ],
//     description:
//       'A 1,850 sqft apartment on the 6th floor of The Crescent, a 14-storey building in Clifton Block 5, a five-minute walk from Seaview. The living room and two balconies face south, getting sea breeze from mid-afternoon. The kitchen is open-plan with a granite counter and a separate utility area for washing machine and ironing. The master bedroom has an attached bath with a walk-in shower and a fitted wardrobe. The building has two high-speed elevators, a backup generator that covers all common areas and one light point per apartment, and 24-hour security with CCTV. Maintenance charges are Rs 8,500 per month and include elevator servicing and common area cleaning.',
//     features: [
//       '6th floor with sea breeze',
//       'Two high-speed elevators',
//       'Backup generator for common areas',
//       '24-hour security with CCTV',
//       'Open-plan kitchen with granite counter',
//       'Two balconies facing south',
//       'Maintenance: Rs 8,500/month',
//       '5-minute walk to Seaview',
//     ],
//     mapsEmbed:
//       'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.1!2d67.0291!3d24.8137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ4JzQ5LjMiTiA2N8KwMDEnNDQuOCJF!5e0!3m2!1sen!2s!4v1700000000000',
//     featured: true,
//     dateAdded: '2026-07-15',
//   },
//   {
//     id: 'p03',
//     slug: 'apartment-pechs-block-2-johar',
//     title: 'Apartment Johar Heights',
//     type: 'sale',
//     status: 'available',
//     price: 22500000,
//     area: 'PECHS',
//     address: 'Block 2, PECHS, near Tariq Road',
//     beds: 3,
//     baths: 2,
//     size: 1300,
//     sizeUnit: 'sqft',
//     plotNumber: 'PE-B2-JH-0304',
//     yearBuilt: 2015,
//     agentId: 'aisha-khan',
//     heroImage:
//       'https://images.pexels.com/photos/280239/pexels-photo-280239.jpeg?auto=compress&cs=tinysrgb&w=1600',
//     gallery: [
//       'https://images.pexels.com/photos/280239/pexels-photo-280239.jpeg?auto=compress&cs=tinysrgb&w=1600',
//       'https://images.pexels.com/photos/8089155/pexels-photo-8089155.jpeg?auto=compress&cs=tinysrgb&w=1600',
//       'https://images.pexels.com/photos/7045356/pexels-photo-7045356.jpeg?auto=compress&cs=tinysrgb&w=1600',
//       'https://images.pexels.com/photos/8089071/pexels-photo-8089071.jpeg?auto=compress&cs=tinysrgb&w=1600',
//     ],
//     description:
//       'A 1,300 sqft apartment on the 4th floor of Johar Heights, a 10-storey building in PECHS Block 2, two minutes from Tariq Road. The living room faces the street and gets morning light. The kitchen is separate and has a utility balcony. All three bedrooms have built-in wardrobes; the master has an attached bath. The building has one elevator, a backup generator for common areas and one light point per apartment, and a water filtration plant in the basement. Maintenance charges are Rs 5,200 per month. A car parking space is assigned on the ground floor. The building was last externally painted in 2023.',
//     features: [
//       '4th floor with street-facing living room',
//       '1 assigned car parking space',
//       'Backup generator for common areas',
//       'Water filtration plant in basement',
//       'Built-in wardrobes in all bedrooms',
//       'Separate kitchen with utility balcony',
//       'Maintenance: Rs 5,200/month',
//       '2 minutes from Tariq Road',
//     ],
//     mapsEmbed:
//       'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.9!2d67.0521!3d24.8727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUyJzIxLjciTiA2N8KwMDMnMDcuNiJF!5e0!3m2!1sen!2s!4v1700000000000',
//     featured: true,
//     dateAdded: '2026-08-01',
//   },
//   {
//     id: 'p04',
//     slug: 'house-bahria-town-preciado',
//     title: 'House Preciado',
//     type: 'sale',
//     status: 'available',
//     price: 65000000,
//     area: 'Bahria Town',
//     address: 'Preciado Villas, Sector C, Bahria Town Karachi',
//     beds: 4,
//     baths: 4,
//     size: 10,
//     sizeUnit: 'marla',
//     plotNumber: 'BT-PC-S12-0089',
//     yearBuilt: 2019,
//     agentId: 'usman-raza',
//     heroImage:
//       'https://images.pexels.com/photos/7031600/pexels-photo-7031600.jpeg?auto=compress&cs=tinysrgb&w=1600',
//     gallery: [
//       'https://images.pexels.com/photos/7031600/pexels-photo-7031600.jpeg?auto=compress&cs=tinysrgb&w=1600',
//       'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&w=1600',
//       'https://images.pexels.com/photos/7587864/pexels-photo-7587864.jpeg?auto=compress&cs=tinysrgb&w=1600',
//       'https://images.pexels.com/photos/8089071/pexels-photo-8089071.jpeg?auto=compress&cs=tinysrgb&w=1600',
//       'https://images.pexels.com/photos/6908357/pexels-photo-6908357.jpeg?auto=compress&cs=tinysrgb&w=1600',
//     ],
//     description:
//       'A 10-marla (2,700 sqft) house in Preciado Villas, Sector C, Bahria Town Karachi. The ground floor has a lounge, a dining area, an open kitchen with a breakfast counter, and a guest bedroom with an attached bath. The first floor has two bedrooms with attached bathrooms and a family sitting area. The master suite is on the second floor with a private terrace. The house has a 7 KVA UPS system, solar water heating panels, and a lawn in the front setback maintained by the society maintenance team. The society provides gated security, underground electrification, and a shared swimming pool and gym within walking distance.',
//     features: [
//       '10 marla (2,700 sqft) built area',
//       'Gated community with 24-hour security',
//       '7 KVA UPS system',
//       'Solar water heating panels',
//       'Shared swimming pool and gym',
//       'Underground electrification',
//       'Master suite with private terrace on 2nd floor',
//       'Society-maintained front lawn',
//     ],
//     mapsEmbed:
//       'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.5!2d67.5191!3d24.8537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUxJzEzLjMiTiA2N8KwMzEnMDguOCJF!5e0!3m2!1sen!2s!4v1700000000000',
//     featured: true,
//     dateAdded: '2026-06-28',
//   },
//   {
//     id: 'p05',
//     slug: 'apartment-clifton-block-8-do-darya',
//     title: 'Apartment Sea View',
//     type: 'rent',
//     status: 'available',
//     price: 185000,
//     pricePeriod: '/month',
//     area: 'Clifton',
//     address: 'Block 8, Clifton, near Do Darya',
//     beds: 2,
//     baths: 2,
//     size: 1100,
//     sizeUnit: 'sqft',
//     plotNumber: 'CL-B8-SV-0705',
//     yearBuilt: 2020,
//     agentId: 'fatima-noor',
//     heroImage:
//       'https://images.pexels.com/photos/17271980/pexels-photo-17271980.jpeg?auto=compress&cs=tinysrgb&w=1600',
//     gallery: [
//       'https://images.pexels.com/photos/17271980/pexels-photo-17271980.jpeg?auto=compress&cs=tinysrgb&w=1600',
//       'https://images.pexels.com/photos/7167073/pexels-photo-7167073.jpeg?auto=compress&cs=tinysrgb&w=1600',
//       'https://images.pexels.com/photos/7045356/pexels-photo-7045356.jpeg?auto=compress&cs=tinysrgb&w=1600',
//       'https://images.pexels.com/photos/8089071/pexels-photo-8089071.jpeg?auto=compress&cs=tinysrgb&w=1600',
//     ],
//     description:
//       'A furnished 2-bedroom apartment on the 5th floor of a recent building in Clifton Block 8, with a direct view of the Arabian Sea from the living room balcony. The apartment comes with a double bed in the master bedroom, a single bed in the second bedroom, a sofa set, a dining table for four, and a fully equipped kitchen (fridge, microwave, stove, and water dispenser). Both bedrooms have attached baths with geysers. The building has two elevators, a backup generator, and 24-hour security. Rent includes building maintenance but not electricity and gas. A minimum lease of one year applies, and two months rent is required as a security deposit.',
//     features: [
//       'Fully furnished',
//       'Direct sea view from living room',
//       'Backup generator for common areas',
//       '24-hour security',
//       'Equipped kitchen (fridge, microwave, stove)',
//       'Geysers in both bathrooms',
//       'Two elevators',
//       'Minimum 1-year lease, 2-month deposit',
//     ],
//     mapsEmbed:
//       'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.3!2d67.0091!3d24.8037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ4JzEzLjMiTiA2N8KwMDAnMzIuOCJF!5e0!3m2!1sen!2s!4v1700000000000',
//     featured: true,
//     dateAdded: '2026-08-10',
//   },
//   {
//     id: 'p06',
//     slug: 'house-gulshan-e-iqbal-block-10-gulshan',
//     title: 'House Gulshan',
//     type: 'sale',
//     status: 'sold',
//     price: 35000000,
//     area: 'Gulshan-e-Iqbal',
//     address: 'Block 10, Gulshan-e-Iqbal, near NIPA',
//     beds: 4,
//     baths: 3,
//     size: 240,
//     sizeUnit: 'sq yd',
//     plotNumber: 'GI-B10-GL-0211',
//     yearBuilt: 2012,
//     agentId: 'bilal-ahmed',
//     heroImage:
//       'https://images.pexels.com/photos/13600836/pexels-photo-13600836.jpeg?auto=compress&cs=tinysrgb&w=1600',
//     gallery: [
//       'https://images.pexels.com/photos/13600836/pexels-photo-13600836.jpeg?auto=compress&cs=tinysrgb&w=1600',
//       'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&w=1600',
//       'https://images.pexels.com/photos/7587864/pexels-photo-7587864.jpeg?auto=compress&cs=tinysrgb&w=1600',
//       'https://images.pexels.com/photos/6908357/pexels-photo-6908357.jpeg?auto=compress&cs=tinysrgb&w=1600',
//     ],
//     description:
//       'A 240 sq yd single-storey house in Gulshan-e-Iqbal Block 10, a five-minute walk from NIPA Chowrangi. The house has a drawing room, a lounge, two bedrooms with attached baths, and a third bedroom used as a study. The kitchen has a separate entrance to the back courtyard where there is a washing area and a servant quarter with a bath. The house has a 3 KVA UPS, a 2-ton overhead water tank, and a bore well. The street is 30 feet wide with parking for two cars in the porch. The property has a clear title with an updated fard and inteqal in the current owner\'s name.',
//     features: [
//       '240 sq yd single-storey',
//       'Drawing room and separate lounge',
//       'Servant quarter with attached bath',
//       '3 KVA UPS system',
//       'Bore well with overhead tank',
//       '30-foot street with porch parking',
//       'Clear title (updated fard and inteqal)',
//       '5-minute walk from NIPA',
//     ],
//     mapsEmbed:
//       'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.7!2d67.0681!3d24.9077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU0JzI3LjciTiA2N8KwA0JzA1LjIiRQ!5e0!3m2!1sen!2s!4v1700000000000',
//     featured: false,
//     dateAdded: '2026-03-12',
//   },
//   {
//     id: 'p07',
//     slug: 'apartment-malir-cantt-falaknaz',
//     title: 'Apartment Falak Heights',
//     type: 'rent',
//     status: 'new',
//     price: 95000,
//     pricePeriod: '/month',
//     area: 'Malir Cantt',
//     address: 'Falak Heights, Malir Cantt, Gate 3',
//     beds: 2,
//     baths: 2,
//     size: 950,
//     sizeUnit: 'sqft',
//     plotNumber: 'MC-FH-G3-0502',
//     yearBuilt: 2022,
//     agentId: 'fatima-noor',
//     heroImage:
//       'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&w=1600',
//     gallery: [
//       'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&w=1600',
//       'https://images.pexels.com/photos/8146213/pexels-photo-8146213.jpeg?auto=compress&cs=tinysrgb&w=1600',
//       'https://images.pexels.com/photos/8089079/pexels-photo-8089079.jpeg?auto=compress&cs=tinysrgb&w=1600',
//     ],
//     description:
//       'An unfurnished 2-bedroom apartment on the 3rd floor of Falak Heights, a gated residential building inside Malir Cantt near Gate 3. The living room and both bedrooms have tiled floors and painted walls — no false ceilings or feature walls, so the tenant can furnish to taste. The kitchen has a granite counter and a steel sink. Both bathrooms have western-style fixtures and electric geysers. The building has one elevator, a backup generator for common areas, and assigned parking for one car per apartment. The cantt area provides additional security and controlled access. A minimum lease of one year applies.',
//     features: [
//       'Unfurnished — ready to customize',
//       'Inside Malir Cantt with controlled access',
//       'Backup generator for common areas',
//       'Assigned car parking',
//       'Granite kitchen counter',
//       'Western-style bathroom fixtures',
//       'Electric geysers in both bathrooms',
//       'Minimum 1-year lease',
//     ],
//     mapsEmbed:
//       'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.2!2d67.2091!3d24.8927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUzJzI3LjciTiA2N8KwEyJzMyLjgiRQ!5e0!3m2!1sen!2s!4v1700000000000',
//     featured: false,
//     dateAdded: '2026-08-25',
//   },
//   {
//     id: 'p08',
//     slug: 'house-north-nazimabad-block-h-shadman',
//     title: 'House Shadman',
//     type: 'sale',
//     status: 'under-offer',
//     price: 28000000,
//     area: 'North Nazimabad',
//     address: 'Block H, North Nazimabad, near Shadman Town',
//     beds: 3,
//     baths: 3,
//     size: 200,
//     sizeUnit: 'sq yd',
//     plotNumber: 'NN-BH-SH-0156',
//     yearBuilt: 2008,
//     agentId: 'bilal-ahmed',
//     heroImage:
//       'https://images.pexels.com/photos/8146213/pexels-photo-8146213.jpeg?auto=compress&cs=tinysrgb&w=1600',
//     gallery: [
//       'https://images.pexels.com/photos/8146213/pexels-photo-8146213.jpeg?auto=compress&cs=tinysrgb&w=1600',
//       'https://images.pexels.com/photos/29012619/pexels-photo-29012619.jpeg?auto=compress&cs=tinysrgb&w=1600',
//       'https://images.pexels.com/photos/280239/pexels-photo-280239.jpeg?auto=compress&cs=tinysrgb&w=1600',
//       'https://images.pexels.com/photos/7749046/pexels-photo-7749046.jpeg?auto=compress&cs=tinysrgb&w=1600',
//     ],
//     description:
//       'A 200 sq yd double-storey house in North Nazimabad Block H, near Shadman Town. The ground floor has a lounge, a kitchen, and one bedroom with an attached bath. The first floor has two bedrooms with a shared bathroom and a small family sitting area. The house has been partially renovated — the ground floor was retiled and the kitchen was replaced in 2022. The first floor retains the original flooring and bathroom fittings. There is a 2 KVA UPS and a 1.5-ton overhead water tank. The street is 24 feet wide with porch parking for one car. The property has a clear title with a current fard available for verification.',
//     features: [
//       '200 sq yd double-storey',
//       'Ground floor renovated (2022)',
//       'New kitchen on ground floor',
//       '2 KVA UPS system',
//       '1.5-ton overhead water tank',
//       'Porch parking for one car',
//       'Clear title with current fard',
//       'Near Shadman Town',
//     ],
//     mapsEmbed:
//       'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.5!2d67.0191!3d24.9377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU2JzE1LjciTiA2N8KwAxJzA4LjgiRQ!5e0!3m2!1sen!2s!4v1700000000000',
//     featured: false,
//     dateAdded: '2026-05-18',
//   },
// ];

// export function getFeaturedProperties(): Property[] {
//   return properties.filter((p) => p.featured);
// }

// export function getPropertyBySlug(slug: string): Property | undefined {
//   return properties.find((p) => p.slug === slug);
// }

// export function getSimilarProperties(property: Property, count = 4): Property[] {
//   return properties
//     .filter(
//       (p) =>
//         p.id !== property.id &&
//         p.status !== 'sold' &&
//         (p.area === property.area || p.type === property.type),
//     )
//     .slice(0, count);
// }

// export function formatPrice(price: number, type: ListingType): string {
//   const formatted = new Intl.NumberFormat('en-PK', {
//     maximumFractionDigits: 0,
//   }).format(price);
//   const suffix = type === 'rent' ? ' /month' : '';
//   return `Rs ${formatted}${suffix}`;
// }

export type ListingType = 'sale' | 'rent';
export type PropertyStatus = 'available' | 'new' | 'sold' | 'under-offer';

export interface Property {
  id: string;
  slug: string;
  title: string;
  type: ListingType;
  status: PropertyStatus;
  price: number;
  pricePeriod?: string;
  area: string;
  address: string;
  beds: number;
  baths: number;
  size: number; // in sq yd or sqft as noted
  sizeUnit: string;
  plotNumber: string;
  yearBuilt: number;
  agentId: string;
  heroImage: string;
  gallery: string[];
  description: string;
  features: string[];
  mapsEmbed: string;
  featured: boolean;
  dateAdded: string;
}

export const properties: Property[] = [
  {
    id: 'p01',
    slug: 'house-dha-phase-8-zamzama',
    title: 'House Zamzama',
    type: 'sale',
    status: 'new',
    price: 85000000,
    area: 'DHA',
    address: 'Street 12, Phase 8, DHA City',
    beds: 5,
    baths: 6,
    size: 500,
    sizeUnit: 'sq yd',
    plotNumber: 'DHA-P8-S12-0047',
    yearBuilt: 2021,
    agentId: 'bilal-ahmed',
    heroImage:
      'https://images.pexels.com/photos/7031407/pexels-photo-7031407.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/7031407/pexels-photo-7031407.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/7045356/pexels-photo-7045356.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/8089071/pexels-photo-8089071.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/14598479/pexels-photo-14598479.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    description:
      'A 500 sq yd double-storey house in DHA Phase 8, on a 40-foot wide street with street parking for two cars plus a covered carport. The ground floor has a drawing room, a dining room, a kitchen with a pantry, and a guest bedroom with an attached bath. The first floor has three bedrooms, all with attached bathrooms and built-in wardrobes. The master bedroom has a walk-in closet and a balcony facing the street. The house has a 10 KVA generator with ATS (auto transfer switch), a 3-ton water tank on the roof, and a bore well with a filtration unit. The street has underground electrification and a functioning sewer line — confirmed by DHA utilities before listing.',
    features: [
      '500 sq yd plot',
      'Double-storey with carport',
      '10 KVA generator with ATS',
      'Bore well with water filtration',
      '3-ton overhead water tank',
      'Underground electrification in street',
      'Drawing room and separate dining room',
      '5 bedrooms, all with attached baths',
    ],
    mapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.8!2d67.0491!3d24.8237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ5JzI1LjMiTiA2N8KwMDInNTcuOCJF!5e0!3m2!1sen!2s!4v1700000000000',
    featured: true,
    dateAdded: '2026-08-20',
  },
  {
    id: 'p02',
    slug: 'apartment-clifton-block-5-crescent',
    title: 'Apartment The Crescent',
    type: 'sale',
    status: 'available',
    price: 42000000,
    area: 'Clifton',
    address: 'Block 5, Clifton, near Seaview',
    beds: 3,
    baths: 3,
    size: 1850,
    sizeUnit: 'sqft',
    plotNumber: 'CL-B5-CR-1203',
    yearBuilt: 2018,
    agentId: 'aisha-khan',
    heroImage:
      'https://images.pexels.com/photos/29012619/pexels-photo-29012619.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/29012619/pexels-photo-29012619.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/280239/pexels-photo-280239.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/8146213/pexels-photo-8146213.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/5998031/pexels-photo-5998031.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/7749046/pexels-photo-7749046.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    description:
      'A 1,850 sqft apartment on the 6th floor of The Crescent, a 14-storey building in Clifton Block 5, a five-minute walk from Seaview. The living room and two balconies face south, getting sea breeze from mid-afternoon. The kitchen is open-plan with a granite counter and a separate utility area for washing machine and ironing. The master bedroom has an attached bath with a walk-in shower and a fitted wardrobe. The building has two high-speed elevators, a backup generator that covers all common areas and one light point per apartment, and 24-hour security with CCTV. Maintenance charges are Rs 8,500 per month and include elevator servicing and common area cleaning.',
    features: [
      '6th floor with sea breeze',
      'Two high-speed elevators',
      'Backup generator for common areas',
      '24-hour security with CCTV',
      'Open-plan kitchen with granite counter',
      'Two balconies facing south',
      'Maintenance: Rs 8,500/month',
      '5-minute walk to Seaview',
    ],
    mapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.1!2d67.0291!3d24.8137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ4JzQ5LjMiTiA2N8KwMDEnNDQuOCJF!5e0!3m2!1sen!2s!4v1700000000000',
    featured: true,
    dateAdded: '2026-07-15',
  },
  {
    id: 'p03',
    slug: 'apartment-pechs-block-2-johar',
    title: 'Apartment Johar Heights',
    type: 'sale',
    status: 'available',
    price: 22500000,
    area: 'PECHS',
    address: 'Block 2, PECHS, near Tariq Road',
    beds: 3,
    baths: 2,
    size: 1300,
    sizeUnit: 'sqft',
    plotNumber: 'PE-B2-JH-0304',
    yearBuilt: 2015,
    agentId: 'aisha-khan',
    heroImage:
      'https://images.pexels.com/photos/280239/pexels-photo-280239.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/280239/pexels-photo-280239.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/8089155/pexels-photo-8089155.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/7045356/pexels-photo-7045356.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/8089071/pexels-photo-8089071.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    description:
      'A 1,300 sqft apartment on the 4th floor of Johar Heights, a 10-storey building in PECHS Block 2, two minutes from Tariq Road. The living room faces the street and gets morning light. The kitchen is separate and has a utility balcony. All three bedrooms have built-in wardrobes; the master has an attached bath. The building has one elevator, a backup generator for common areas and one light point per apartment, and a water filtration plant in the basement. Maintenance charges are Rs 5,200 per month. A car parking space is assigned on the ground floor. The building was last externally painted in 2023.',
    features: [
      '4th floor with street-facing living room',
      '1 assigned car parking space',
      'Backup generator for common areas',
      'Water filtration plant in basement',
      'Built-in wardrobes in all bedrooms',
      'Separate kitchen with utility balcony',
      'Maintenance: Rs 5,200/month',
      '2 minutes from Tariq Road',
    ],
    mapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.9!2d67.0521!3d24.8727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUyJzIxLjciTiA2N8KwMDMnMDcuNiJF!5e0!3m2!1sen!2s!4v1700000000000',
    featured: true,
    dateAdded: '2026-08-01',
  },
  {
    id: 'p04',
    slug: 'house-bahria-town-preciado',
    title: 'House Preciado',
    type: 'sale',
    status: 'available',
    price: 65000000,
    area: 'Bahria Town',
    address: 'Preciado Villas, Sector C, Bahria Town Karachi',
    beds: 4,
    baths: 4,
    size: 10,
    sizeUnit: 'marla',
    plotNumber: 'BT-PC-S12-0089',
    yearBuilt: 2019,
    agentId: 'usman-raza',
    heroImage:
      'https://images.pexels.com/photos/7031600/pexels-photo-7031600.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/7031600/pexels-photo-7031600.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/7587864/pexels-photo-7587864.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/8089071/pexels-photo-8089071.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/6908357/pexels-photo-6908357.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    description:
      'A 10-marla (2,700 sqft) house in Preciado Villas, Sector C, Bahria Town Karachi. The ground floor has a lounge, a dining area, an open kitchen with a breakfast counter, and a guest bedroom with an attached bath. The first floor has two bedrooms with attached bathrooms and a family sitting area. The master suite is on the second floor with a private terrace. The house has a 7 KVA UPS system, solar water heating panels, and a lawn in the front setback maintained by the society maintenance team. The society provides gated security, underground electrification, and a shared swimming pool and gym within walking distance.',
    features: [
      '10 marla (2,700 sqft) built area',
      'Gated community with 24-hour security',
      '7 KVA UPS system',
      'Solar water heating panels',
      'Shared swimming pool and gym',
      'Underground electrification',
      'Master suite with private terrace on 2nd floor',
      'Society-maintained front lawn',
    ],
    mapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.5!2d67.5191!3d24.8537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUxJzEzLjMiTiA2N8KwMzEnMDguOCJF!5e0!3m2!1sen!2s!4v1700000000000',
    featured: true,
    dateAdded: '2026-06-28',
  },
  {
    id: 'p05',
    slug: 'apartment-clifton-block-8-do-darya',
    title: 'Apartment Sea View',
    type: 'rent',
    status: 'available',
    price: 185000,
    pricePeriod: '/month',
    area: 'Clifton',
    address: 'Block 8, Clifton, near Do Darya',
    beds: 2,
    baths: 2,
    size: 1100,
    sizeUnit: 'sqft',
    plotNumber: 'CL-B8-SV-0705',
    yearBuilt: 2020,
    agentId: 'fatima-noor',
    heroImage:
      'https://images.pexels.com/photos/17271980/pexels-photo-17271980.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/17271980/pexels-photo-17271980.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/7167073/pexels-photo-7167073.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/7045356/pexels-photo-7045356.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/8089071/pexels-photo-8089071.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    description:
      'A furnished 2-bedroom apartment on the 5th floor of a recent building in Clifton Block 8, with a direct view of the Arabian Sea from the living room balcony. The apartment comes with a double bed in the master bedroom, a single bed in the second bedroom, a sofa set, a dining table for four, and a fully equipped kitchen (fridge, microwave, stove, and water dispenser). Both bedrooms have attached baths with geysers. The building has two elevators, a backup generator, and 24-hour security. Rent includes building maintenance but not electricity and gas. A minimum lease of one year applies, and two months rent is required as a security deposit.',
    features: [
      'Fully furnished',
      'Direct sea view from living room',
      'Backup generator for common areas',
      '24-hour security',
      'Equipped kitchen (fridge, microwave, stove)',
      'Geysers in both bathrooms',
      'Two elevators',
      'Minimum 1-year lease, 2-month deposit',
    ],
    mapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.3!2d67.0091!3d24.8037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ4JzEzLjMiTiA2N8KwMDAnMzIuOCJF!5e0!3m2!1sen!2s!4v1700000000000',
    featured: true,
    dateAdded: '2026-08-10',
  },
  {
    id: 'p06',
    slug: 'house-gulshan-e-iqbal-block-10-gulshan',
    title: 'House Gulshan',
    type: 'sale',
    status: 'sold',
    price: 35000000,
    area: 'Gulshan-e-Iqbal',
    address: 'Block 10, Gulshan-e-Iqbal, near NIPA',
    beds: 4,
    baths: 3,
    size: 240,
    sizeUnit: 'sq yd',
    plotNumber: 'GI-B10-GL-0211',
    yearBuilt: 2012,
    agentId: 'bilal-ahmed',
    heroImage:
      'https://images.pexels.com/photos/13600836/pexels-photo-13600836.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/13600836/pexels-photo-13600836.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/7587864/pexels-photo-7587864.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/6908357/pexels-photo-6908357.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    description:
      'A 240 sq yd single-storey house in Gulshan-e-Iqbal Block 10, a five-minute walk from NIPA Chowrangi. The house has a drawing room, a lounge, two bedrooms with attached baths, and a third bedroom used as a study. The kitchen has a separate entrance to the back courtyard where there is a washing area and a servant quarter with a bath. The house has a 3 KVA UPS, a 2-ton overhead water tank, and a bore well. The street is 30 feet wide with parking for two cars in the porch. The property has a clear title with an updated fard and inteqal in the current owner\'s name.',
    features: [
      '240 sq yd single-storey',
      'Drawing room and separate lounge',
      'Servant quarter with attached bath',
      '3 KVA UPS system',
      'Bore well with overhead tank',
      '30-foot street with porch parking',
      'Clear title (updated fard and inteqal)',
      '5-minute walk from NIPA',
    ],
    mapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.7!2d67.0681!3d24.9077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU0JzI3LjciTiA2N8KwA0JzA1LjIiRQ!5e0!3m2!1sen!2s!4v1700000000000',
    featured: false,
    dateAdded: '2026-03-12',
  },
  {
    id: 'p07',
    slug: 'apartment-malir-cantt-falaknaz',
    title: 'Apartment Falak Heights',
    type: 'rent',
    status: 'new',
    price: 95000,
    pricePeriod: '/month',
    area: 'Malir Cantt',
    address: 'Falak Heights, Malir Cantt, Gate 3',
    beds: 2,
    baths: 2,
    size: 950,
    sizeUnit: 'sqft',
    plotNumber: 'MC-FH-G3-0502',
    yearBuilt: 2022,
    agentId: 'fatima-noor',
    heroImage:
      'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/8146213/pexels-photo-8146213.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/8089079/pexels-photo-8089079.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    description:
      'An unfurnished 2-bedroom apartment on the 3rd floor of Falak Heights, a gated residential building inside Malir Cantt near Gate 3. The living room and both bedrooms have tiled floors and painted walls — no false ceilings or feature walls, so the tenant can furnish to taste. The kitchen has a granite counter and a steel sink. Both bathrooms have western-style fixtures and electric geysers. The building has one elevator, a backup generator for common areas, and assigned parking for one car per apartment. The cantt area provides additional security and controlled access. A minimum lease of one year applies.',
    features: [
      'Unfurnished — ready to customize',
      'Inside Malir Cantt with controlled access',
      'Backup generator for common areas',
      'Assigned car parking',
      'Granite kitchen counter',
      'Western-style bathroom fixtures',
      'Electric geysers in both bathrooms',
      'Minimum 1-year lease',
    ],
    mapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.2!2d67.2091!3d24.8927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUzJzI3LjciTiA2N8KwEyJzMyLjgiRQ!5e0!3m2!1sen!2s!4v1700000000000',
    featured: false,
    dateAdded: '2026-08-25',
  },
  {
    id: 'p08',
    slug: 'house-north-nazimabad-block-h-shadman',
    title: 'House Shadman',
    type: 'sale',
    status: 'under-offer',
    price: 28000000,
    area: 'North Nazimabad',
    address: 'Block H, North Nazimabad, near Shadman Town',
    beds: 3,
    baths: 3,
    size: 200,
    sizeUnit: 'sq yd',
    plotNumber: 'NN-BH-SH-0156',
    yearBuilt: 2008,
    agentId: 'bilal-ahmed',
    heroImage:
      'https://images.pexels.com/photos/8146213/pexels-photo-8146213.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/8146213/pexels-photo-8146213.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/29012619/pexels-photo-29012619.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/280239/pexels-photo-280239.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/7749046/pexels-photo-7749046.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    description:
      'A 200 sq yd double-storey house in North Nazimabad Block H, near Shadman Town. The ground floor has a lounge, a kitchen, and one bedroom with an attached bath. The first floor has two bedrooms with a shared bathroom and a small family sitting area. The house has been partially renovated — the ground floor was retiled and the kitchen was replaced in 2022. The first floor retains the original flooring and bathroom fittings. There is a 2 KVA UPS and a 1.5-ton overhead water tank. The street is 24 feet wide with porch parking for one car. The property has a clear title with a current fard available for verification.',
    features: [
      '200 sq yd double-storey',
      'Ground floor renovated (2022)',
      'New kitchen on ground floor',
      '2 KVA UPS system',
      '1.5-ton overhead water tank',
      'Porch parking for one car',
      'Clear title with current fard',
      'Near Shadman Town',
    ],
    mapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.5!2d67.0191!3d24.9377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU2JzE1LjciTiA2N8KwAxJzA4LjgiRQ!5e0!3m2!1sen!2s!4v1700000000000',
    featured: false,
    dateAdded: '2026-05-18',
  },

  {
    id: 'p09',
    slug: 'house-dha-phase-6-bukhari',
    title: 'House Bukhari',
    type: 'sale',
    status: 'available',
    price: 72000000,
    area: 'DHA',
    address: 'Bukhari Commercial, Phase 6, DHA Karachi',
    beds: 4,
    baths: 5,
    size: 400,
    sizeUnit: 'sq yd',
    plotNumber: 'DHA-P6-BK-0182',
    yearBuilt: 2020,
    agentId: 'usman-raza',
    heroImage: 'https://images.pexels.com/photos/7031407/pexels-photo-7031407.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/7031407/pexels-photo-7031407.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/7045356/pexels-photo-7045356.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    description: 'A well-maintained 400 sq yd double-storey house in DHA Phase 6 with spacious living areas, modern bathrooms, a landscaped front lawn, and covered parking.',
    features: [
      '400 sq yd plot',
      'Double-storey house',
      'Covered car parking',
      'Landscaped front lawn',
      'Modern kitchen',
      'Master bedroom with attached bath',
      'Backup power system',
      'Prime Phase 6 location',
    ],
    mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.8!2d67.0491!3d24.8237',
    featured: false,
    dateAdded: '2026-08-30',
  },
  {
    id: 'p10',
    slug: 'apartment-bahria-town-tower',
    title: 'Apartment Bahria Heights',
    type: 'sale',
    status: 'new',
    price: 18500000,
    area: 'Bahria Town',
    address: 'Bahria Heights, Sector E, Bahria Town Karachi',
    beds: 2,
    baths: 2,
    size: 1050,
    sizeUnit: 'sqft',
    plotNumber: 'BT-BH-E-0904',
    yearBuilt: 2023,
    agentId: 'aisha-khan',
    heroImage: 'https://images.pexels.com/photos/280239/pexels-photo-280239.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/280239/pexels-photo-280239.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/8146213/pexels-photo-8146213.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/5998031/pexels-photo-5998031.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    description: 'A bright 2-bedroom apartment in Bahria Heights featuring an open living area, fitted kitchen, two bathrooms, balcony access, and dedicated parking.',
    features: [
      '2 bedrooms',
      'Open-plan living area',
      'Fitted kitchen',
      'Private balcony',
      'Dedicated parking',
      'Elevator access',
      'Backup generator',
      'Gated community',
    ],
    mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.5!2d67.5191!3d24.8537',
    featured: false,
    dateAdded: '2026-08-29',
  },
  {
    id: 'p11',
    slug: 'house-dha-phase-5-khayaban',
    title: 'House Khayaban',
    type: 'sale',
    status: 'available',
    price: 56000000,
    area: 'DHA',
    address: 'Khayaban-e-Bukhari, Phase 5, DHA Karachi',
    beds: 4,
    baths: 4,
    size: 300,
    sizeUnit: 'sq yd',
    plotNumber: 'DHA-P5-KB-0264',
    yearBuilt: 2017,
    agentId: 'bilal-ahmed',
    heroImage: 'https://images.pexels.com/photos/7031600/pexels-photo-7031600.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/7031600/pexels-photo-7031600.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/7587864/pexels-photo-7587864.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/6908357/pexels-photo-6908357.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    description: 'A 300 sq yd family home in DHA Phase 5 with four bedrooms, a separate drawing room, spacious lounge, renovated kitchen, and parking for two cars.',
    features: [
      '300 sq yd plot',
      'Four bedrooms',
      'Separate drawing room',
      'Renovated kitchen',
      'Parking for two cars',
      'Spacious family lounge',
      'Backup UPS system',
      'Prime residential street',
    ],
    mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.8!2d67.0491!3d24.8237',
    featured: false,
    dateAdded: '2026-08-27',
  },
  {
    id: 'p12',
    slug: 'apartment-clifton-block-2-seaview',
    title: 'Apartment Clifton Pearl',
    type: 'rent',
    status: 'available',
    price: 135000,
    pricePeriod: '/month',
    area: 'Clifton',
    address: 'Block 2, Clifton, Karachi',
    beds: 2,
    baths: 2,
    size: 1200,
    sizeUnit: 'sqft',
    plotNumber: 'CL-B2-CP-0807',
    yearBuilt: 2019,
    agentId: 'fatima-noor',
    heroImage: 'https://images.pexels.com/photos/17271980/pexels-photo-17271980.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/17271980/pexels-photo-17271980.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/7167073/pexels-photo-7167073.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/7045356/pexels-photo-7045356.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    description: 'A furnished 2-bedroom rental apartment in Clifton with a spacious lounge, modern kitchen, balcony, attached bathrooms, and secure building access.',
    features: [
      'Fully furnished',
      '2 bedrooms with wardrobes',
      'Modern kitchen',
      'Private balcony',
      'Secure building',
      'Backup generator',
      'Elevator access',
      'Close to Seaview',
    ],
    mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.3!2d67.0091!3d24.8037',
    featured: false,
    dateAdded: '2026-08-26',
  },
  {
    id: 'p13',
    slug: 'house-gulshan-e-iqbal-block-7',
    title: 'House Gulshan Garden',
    type: 'sale',
    status: 'available',
    price: 46000000,
    area: 'Gulshan-e-Iqbal',
    address: 'Block 7, Gulshan-e-Iqbal, Karachi',
    beds: 5,
    baths: 4,
    size: 300,
    sizeUnit: 'sq yd',
    plotNumber: 'GI-B7-GG-0345',
    yearBuilt: 2016,
    agentId: 'usman-raza',
    heroImage: 'https://images.pexels.com/photos/13600836/pexels-photo-13600836.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/13600836/pexels-photo-13600836.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/8089071/pexels-photo-8089071.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    description: 'A spacious 300 sq yd house in Gulshan-e-Iqbal with five bedrooms, a large family lounge, landscaped backyard, servant quarter, and double-car porch.',
    features: [
      '300 sq yd plot',
      'Five bedrooms',
      'Double-car porch',
      'Landscaped backyard',
      'Servant quarter',
      'Large family lounge',
      'Separate dining area',
      'Clear ownership documents',
    ],
    mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.7!2d67.0681!3d24.9077',
    featured: false,
    dateAdded: '2026-08-24',
  },
  {
    id: 'p14',
    slug: 'apartment-pechs-block-6-tariq-road',
    title: 'Apartment PECHS Central',
    type: 'rent',
    status: 'new',
    price: 110000,
    pricePeriod: '/month',
    area: 'PECHS',
    address: 'Block 6, PECHS, near Tariq Road',
    beds: 3,
    baths: 2,
    size: 1450,
    sizeUnit: 'sqft',
    plotNumber: 'PE-B6-PC-0603',
    yearBuilt: 2021,
    agentId: 'aisha-khan',
    heroImage: 'https://images.pexels.com/photos/8146213/pexels-photo-8146213.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/8146213/pexels-photo-8146213.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/29012619/pexels-photo-29012619.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/7749046/pexels-photo-7749046.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    description: 'A spacious 3-bedroom apartment in PECHS close to Tariq Road, offering a large lounge, separate kitchen, utility area, parking, and 24-hour security.',
    features: [
      '3 bedrooms',
      'Large living room',
      'Separate kitchen',
      'Utility area',
      'Assigned parking',
      '24-hour security',
      'Backup generator',
      'Close to Tariq Road',
    ],
    mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.9!2d67.0521!3d24.8727',
    featured: false,
    dateAdded: '2026-08-22',
  },
  {
    id: 'p15',
    slug: 'villa-bahria-town-precinct-15',
    title: 'Villa Bahria Garden',
    type: 'sale',
    status: 'available',
    price: 78000000,
    area: 'Bahria Town',
    address: 'Precinct 15, Bahria Town Karachi',
    beds: 5,
    baths: 6,
    size: 12,
    sizeUnit: 'marla',
    plotNumber: 'BT-P15-BG-0412',
    yearBuilt: 2022,
    agentId: 'fatima-noor',
    heroImage: 'https://images.pexels.com/photos/7031407/pexels-photo-7031407.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/7031407/pexels-photo-7031407.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/7587864/pexels-photo-7587864.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    description: 'A modern 12-marla villa in Bahria Town with five bedrooms, six bathrooms, a landscaped lawn, spacious family areas, and premium community amenities nearby.',
    features: [
      '12 marla villa',
      'Five bedrooms',
      'Six bathrooms',
      'Landscaped lawn',
      'Modern kitchen',
      'Covered parking',
      'Gated community',
      'Nearby park and commercial area',
    ],
    mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.5!2d67.5191!3d24.8537',
    featured: true,
    dateAdded: '2026-08-18',
  },

];

export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.featured);
}

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function getSimilarProperties(property: Property, count = 4): Property[] {
  return properties
    .filter(
      (p) =>
        p.id !== property.id &&
        p.status !== 'sold' &&
        (p.area === property.area || p.type === property.type),
    )
    .slice(0, count);
}

export function formatPrice(price: number, type: ListingType): string {
  const formatted = new Intl.NumberFormat('en-PK', {
    maximumFractionDigits: 0,
  }).format(price);
  const suffix = type === 'rent' ? ' /month' : '';
  return `Rs ${formatted}${suffix}`;
}
