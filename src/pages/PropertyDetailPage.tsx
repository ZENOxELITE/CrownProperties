import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Ruler, BedDouble, Bath, Hash, Phone, Mail } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Gallery } from '@/components/Gallery';
import { PropertyCard } from '@/components/PropertyCard';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { getPropertyBySlug, getSimilarProperties, formatPrice } from '@/data/properties';
import { getAgent } from '@/data/agents';
import { agency } from '@/data/agency';

export function PropertyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const property = slug ? getPropertyBySlug(slug) : undefined;

  if (!property) {
    return <Navigate to="/listings" replace />;
  }

  const agent = getAgent(property.agentId);
  const similar = getSimilarProperties(property, 4);

  const whatsappMessage = `Hello ${agent?.name || ''}, I'm interested in "${property.title}" at ${property.address} (${property.area}, ${agency.city}), listed at ${formatPrice(property.price, property.type)}. Is it still available?`;

  const statusLabels: Record<string, string> = {
    new: 'New listing',
    sold: 'Sold',
    available: 'Available',
    'under-offer': 'Under offer',
  };

  const specs = [
    { icon: BedDouble, label: 'Bedrooms', value: property.beds },
    { icon: Bath, label: 'Bathrooms', value: property.baths },
    { icon: Ruler, label: 'Floor area', value: `${property.size} ${property.sizeUnit}` },
    { icon: Hash, label: 'Plot number', value: property.plotNumber },
    { icon: Calendar, label: 'Year built', value: property.yearBuilt },
    { icon: MapPin, label: 'Area', value: property.area },
  ];

  return (
    <>
      <SEO
        title={`${property.title} — ${property.area}, ${agency.city} | ${agency.name}`}
        description={`${property.beds}-bed ${property.type === 'sale' ? 'property for sale' : 'property for rent'} in ${property.area}, ${agency.city}. ${property.size} ${property.sizeUnit}, ${property.baths} bathrooms. ${formatPrice(property.price, property.type)}.`}
        image={property.heroImage}
        type="article"
      />

      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/listings"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink/60 hover:text-copper transition-colors"
          >
            <ArrowLeft size={14} strokeWidth={1.8} />
            Back to listings
          </Link>
        </div>
      </div>

      {/* Title block */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span
                className={`font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 ${
                  property.status === 'sold'
                    ? 'bg-stamp text-paper'
                    : property.status === 'under-offer'
                      ? 'bg-ink text-paper'
                      : property.status === 'new'
                        ? 'bg-paper text-stamp border border-stamp'
                        : 'bg-paper text-ink/50 border border-border-dark'
                }`}
              >
                {statusLabels[property.status]}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink/50">
                {property.type === 'sale' ? 'For sale' : 'For rent'}
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-medium">
              {property.title}
            </h1>
            <p className="mt-2 font-mono text-sm text-ink/60 flex items-center gap-1.5">
              <MapPin size={14} strokeWidth={1.8} />
              {property.address}, {agency.city}
            </p>
          </div>
          <div className="text-left sm:text-right">
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50">
              Asking price
            </p>
            <p className="font-serif text-2xl sm:text-3xl font-medium mt-1">
              {formatPrice(property.price, property.type)}
            </p>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
        <Gallery images={property.gallery} altPrefix={property.title} />
      </div>

      {/* Main content — description + spec table */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Description */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-xl font-medium mb-6">About this property</h2>
            <p className="font-body text-base text-ink/80 leading-relaxed">
              {property.description}
            </p>

            {/* Features */}
            <h3 className="font-mono text-xs uppercase tracking-widest text-ink/50 mt-12 mb-4">
              Features
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-border">
              {property.features.map((feature, i) => (
                <li
                  key={i}
                  className="font-body text-sm text-ink/80 py-3 border-b border-border flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-copper shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar — spec table + agent card */}
          <div className="space-y-8">
            {/* Spec table */}
            <div className="border border-border">
              <div className="bg-ink text-paper px-5 py-3">
                <p className="font-mono text-xs uppercase tracking-widest">
                  Specification
                </p>
              </div>
              <dl>
                {specs.map((spec, i) => {
                  const Icon = spec.icon;
                  return (
                    <div
                      key={i}
                      className={`flex items-center justify-between px-5 py-3 ${
                        i < specs.length - 1 ? 'border-b border-border' : ''
                      }`}
                    >
                      <dt className="flex items-center gap-2.5 font-mono text-xs text-ink/60 uppercase tracking-wider">
                        <Icon size={14} strokeWidth={1.6} className="text-ink/40" />
                        {spec.label}
                      </dt>
                      <dd className="font-mono text-sm font-medium">{spec.value}</dd>
                    </div>
                  );
                })}
              </dl>
            </div>

            {/* Agent card */}
            {agent && (
              <div className="border border-border">
                <div className="flex items-center gap-4 p-5 border-b border-border">
                  <img
                    src={agent.photo}
                    alt={agent.name}
                    className="w-16 h-16 object-cover border border-border"
                  />
                  <div>
                    <p className="font-display text-base font-medium">{agent.name}</p>
                    <p className="font-mono text-[10px] text-ink/50 uppercase tracking-widest mt-0.5">
                      {agent.role}
                    </p>
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <p className="font-mono text-xs text-ink/50">
                    Direct contact for this property:
                  </p>
                  <a
                    href={`tel:${agent.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-2.5 font-mono text-sm text-ink hover:text-copper transition-colors"
                  >
                    <Phone size={14} strokeWidth={1.6} />
                    {agent.phone}
                  </a>
                  <a
                    href={`mailto:${agent.email}`}
                    className="flex items-center gap-2.5 font-mono text-sm text-ink hover:text-copper transition-colors break-all"
                  >
                    <Mail size={14} strokeWidth={1.6} />
                    {agent.email}
                  </a>
                  <WhatsAppButton
                    phone={agent.whatsapp}
                    message={whatsappMessage}
                    label="WhatsApp agent"
                    size="md"
                    className="w-full justify-center mt-3"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Map */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="font-serif text-xl font-medium mb-6">Location</h2>
          <div className="border border-border h-[400px]">
            <iframe
              src={property.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map of ${property.address}`}
            />
          </div>
        </div>
      </section>

      {/* Similar properties */}
      {similar.length > 0 && (
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <h2 className="font-serif text-xl font-medium mb-2">Similar properties</h2>
            <p className="font-mono text-xs text-ink/50 uppercase tracking-widest mb-8">
              In the same area or category
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
              {similar.map((p) => (
                <PropertyCard key={p.id} property={p} className="bg-paper" />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
