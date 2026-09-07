import { Link } from 'react-router-dom';
import type { Property } from '@/data/properties';
import { formatPrice } from '@/data/properties';
import { WhatsAppButton } from './WhatsAppButton';
import { agency } from '@/data/agency';
import { getAgent } from '@/data/agents';

interface PropertyCardProps {
  property: Property;
  className?: string;
}

export function PropertyCard({ property, className = '' }: PropertyCardProps) {
  const agent = getAgent(property.agentId);
  const whatsappMessage = `Hello, I'm interested in "${property.title}" (${property.address}, ${property.area}). Is it still available?`;

  const statusLabels: Record<string, string> = {
    new: 'New listing',
    sold: 'Sold',
    available: '',
    'under-offer': 'Under offer',
  };

  const status = statusLabels[property.status];

  return (
    <article className={`group border border-border bg-paper ${className}`}>
      {/* Image — natural aspect ratio, no crop */}
      <div className="relative overflow-hidden border-b border-border">
        <Link to={`/property/${property.slug}`}>
          <img
            src={property.heroImage}
            alt={`${property.title}, ${property.area}, ${agency.city}`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </Link>
        {status && (
          <span
            className={`absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 ${
              property.status === 'sold'
                ? 'bg-stamp text-paper'
                : property.status === 'under-offer'
                  ? 'bg-ink text-paper'
                  : 'bg-paper text-stamp border border-stamp'
            }`}
          >
            {status}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <Link to={`/property/${property.slug}`}>
            <h3 className="font-serif text-lg font-medium leading-snug hover:text-copper transition-colors">
              {property.title}
            </h3>
          </Link>
          <span className="font-mono text-sm font-medium whitespace-nowrap">
            {formatPrice(property.price, property.type)}
          </span>
        </div>

        <p className="font-mono text-xs text-ink/60 mb-3">
          {property.area} &middot; {agency.city}
        </p>

        {/* Spec line — data row */}
        <p className="font-mono text-xs text-ink/75 border-t border-border pt-3">
          {property.beds} bed
          <span className="text-border-dark mx-2">&middot;</span>
          {property.baths} bath
          <span className="text-border-dark mx-2">&middot;</span>
          {property.size} {property.sizeUnit}
        </p>

        {/* Actions */}
        <div className="mt-4 flex items-center gap-3">
          <Link
            to={`/property/${property.slug}`}
            className="font-mono text-xs uppercase tracking-widest text-copper hover:text-copper-dark transition-colors"
          >
            View details
          </Link>
          {agent && (
            <WhatsAppButton
              phone={agent.whatsapp}
              message={whatsappMessage}
              size="sm"
              variant="outline"
              className="ml-auto"
            />
          )}
        </div>
      </div>
    </article>
  );
}
