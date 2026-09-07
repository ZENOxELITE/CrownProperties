import { Link } from 'react-router-dom';
import type { Property } from '@/data/properties';
import { formatPrice } from '@/data/properties';
import { SearchBar, type SearchFilters } from './SearchBar';
import { agency } from '@/data/agency';

interface HeroProps {
  property: Property;
  onSearch: (filters: SearchFilters) => void;
}

export function Hero({ property, onSearch }: HeroProps) {
  return (
    <section className="relative">
      {/* Full-bleed image with annotations */}
      <div className="relative w-full h-[70vh] min-h-[520px] max-h-[760px] overflow-hidden bg-ink">
        <img
          src={property.heroImage}
          alt={`${property.title}, ${property.area}, ${agency.city}`}
          className="w-full h-full object-cover animate-scale-in"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-ink/30" />

        {/* Annotation labels — like dimension callouts on a blueprint */}
        {/* Top-left: price */}
        <div className="absolute top-6 left-4 sm:top-10 sm:left-10 animate-fade-in-up animation-delay-600">
          <div className="bg-paper/95 backdrop-blur-sm px-3 py-2 border border-border-dark">
            <p className="font-mono text-[9px] uppercase tracking-widest text-ink/50">
              Asking price
            </p>
            <p className="font-mono text-sm font-medium text-ink mt-0.5">
              {formatPrice(property.price, property.type)}
            </p>
          </div>
        </div>

        {/* Top-right: location */}
        <div className="absolute top-6 right-4 sm:top-10 sm:right-10 animate-fade-in-up animation-delay-800">
          <div className="bg-paper/95 backdrop-blur-sm px-3 py-2 border border-border-dark">
            <p className="font-mono text-[9px] uppercase tracking-widest text-ink/50">
              Location
            </p>
            <p className="font-mono text-sm font-medium text-ink mt-0.5">
              {property.area}, {agency.city}
            </p>
          </div>
        </div>

        {/* Bottom-left: title and specs */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 lg:p-12 animate-fade-in-up animation-delay-400">
          <div className="mx-auto max-w-7xl">
            <div className="inline-block bg-stamp text-paper px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest mb-4">
              Featured property
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium text-paper leading-tight max-w-3xl">
              {property.title}
            </h1>
            <p className="mt-4 font-mono text-sm text-paper/80">
              {property.beds} bed
              <span className="text-paper/40 mx-2">&middot;</span>
              {property.baths} bath
              <span className="text-paper/40 mx-2">&middot;</span>
              {property.size} {property.sizeUnit}
              <span className="text-paper/40 mx-2">&middot;</span>
              Plot {property.plotNumber}
            </p>
            <Link
              to={`/property/${property.slug}`}
              className="inline-block mt-6 font-mono text-sm uppercase tracking-widest text-copper-light border-b border-copper-light pb-1 hover:text-paper hover:border-paper transition-colors"
            >
              View this property
            </Link>
          </div>
        </div>
      </div>

      {/* Search bar overlapping hero bottom */}
      <div className="relative -mt-12 sm:-mt-16 z-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SearchBar onSearch={onSearch} variant="hero" />
        </div>
      </div>
    </section>
  );
}
