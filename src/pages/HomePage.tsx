import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { Hero } from '@/components/Hero';
import { PropertyCard } from '@/components/PropertyCard';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { SEO } from '@/components/SEO';
import { getFeaturedProperties } from '@/data/properties';
import { agents } from '@/data/agents';
import { testimonials } from '@/data/testimonials';
import { agency } from '@/data/agency';
import type { SearchFilters } from '@/components/SearchBar';

export function HomePage() {
  const navigate = useNavigate();
  const featured = getFeaturedProperties();
  const heroProperty = featured[0];

  const handleSearch = (filters: SearchFilters) => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value && value !== 'all') params.set(key, value);
    });
    navigate(`/listings?${params.toString()}`);
  };

  return (
    <>
      <SEO
        title={`${agency.name} — Estate Agency, ${agency.city}`}
        description={`Independent estate agency in ${agency.city}. Property sales, rentals, and management across ${agency.areasServed.join(', ')}.`}
      />

      {heroProperty && <Hero property={heroProperty} onSearch={handleSearch} />}

      {/* Featured listings */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium">
              Featured listings
            </h2>
            <p className="mt-2 font-mono text-xs text-ink/50 uppercase tracking-widest">
              A selection from our current portfolio
            </p>
          </div>
          <Link
            to="/listings"
            className="hidden sm:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-copper hover:text-copper-dark transition-colors"
          >
            All listings
            <ArrowRight size={14} strokeWidth={1.8} />
          </Link>
        </div>

        {/* Asymmetric grid — photos keep natural aspect ratio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} className="bg-paper" />
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Link
            to="/listings"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-copper"
          >
            All listings
            <ArrowRight size={14} strokeWidth={1.8} />
          </Link>
        </div>
      </section>

      {/* Why us — specific numbers */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="font-serif text-2xl sm:text-3xl font-medium mb-2">
            Why {agency.name}
          </h2>
          <p className="font-mono text-xs text-ink/50 uppercase tracking-widest mb-12">
            Eleven years in {agency.city}, one office, no franchise
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            <div className="bg-paper p-6 sm:p-8">
              <p className="font-serif text-3xl sm:text-4xl font-medium text-copper">
                {agency.stats.yearsOperating}
              </p>
              <p className="mt-2 font-mono text-xs text-ink/60 uppercase tracking-widest">
                Years operating
              </p>
            </div>
            <div className="bg-paper p-6 sm:p-8">
              <p className="font-serif text-3xl sm:text-4xl font-medium text-copper">
                {agency.stats.propertiesSold}
              </p>
              <p className="mt-2 font-mono text-xs text-ink/60 uppercase tracking-widest">
                Properties sold
              </p>
            </div>
            <div className="bg-paper p-6 sm:p-8">
              <p className="font-serif text-3xl sm:text-4xl font-medium text-copper">
                {agency.stats.areasCovered}
              </p>
              <p className="mt-2 font-mono text-xs text-ink/60 uppercase tracking-widest">
                Areas covered
              </p>
            </div>
            <div className="bg-paper p-6 sm:p-8">
              <p className="font-serif text-3xl sm:text-4xl font-medium text-copper">
                {agency.stats.activeListings}
              </p>
              <p className="mt-2 font-mono text-xs text-ink/60 uppercase tracking-widest">
                Active listings
              </p>
            </div>
          </div>

          <div className="mt-8 max-w-2xl">
            <p className="font-body text-base text-ink/80 leading-relaxed">
              We work from a single office on Sunset Boulevard in Clifton. No call
              centre, no junior staff reading from a script. Every viewing is
              conducted by the agent who knows the building, the street, and the
              title history. We carry professional indemnity insurance through
              EFU General and are registered with the Sindh Real Estate Agents
              Association under license {agency.license}.
            </p>
          </div>
        </div>
      </section>

      {/* Agent team preview */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="font-serif text-2xl sm:text-3xl font-medium mb-2">
            The team
          </h2>
          <p className="font-mono text-xs text-ink/50 uppercase tracking-widest mb-12">
            Four agents, four specialisms
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {agents.map((agent) => (
              <div key={agent.id} className="bg-paper">
                <div className="border-b border-border overflow-hidden">
                  <img
                    src={agent.photo}
                    alt={`${agent.name}, ${agent.role}`}
                    loading="lazy"
                    className="w-full h-48 sm:h-64 object-cover"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="font-display text-base font-medium">{agent.name}</h3>
                  <p className="font-mono text-[10px] text-ink/50 uppercase tracking-widest mt-1">
                    {agent.role}
                  </p>
                  <p className="font-body text-sm text-ink/70 mt-3 leading-relaxed">
                    {agent.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-copper hover:text-copper-dark transition-colors"
            >
              Meet the full team
              <ArrowRight size={14} strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="font-serif text-2xl sm:text-3xl font-medium mb-2">
            Client work
          </h2>
          <p className="font-mono text-xs text-ink/50 uppercase tracking-widest mb-12">
            What happened, in their words
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border border border-border">
            {testimonials.map((t) => (
              <figure key={t.id} className="bg-paper p-6 sm:p-8">
                <blockquote className="font-body text-sm sm:text-base text-ink/80 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 pt-4 border-t border-border">
                  <p className="font-mono text-sm font-medium">{t.name}</p>
                  <p className="font-mono text-xs text-ink/50 mt-1">{t.property}</p>
                  <p className="font-mono text-xs text-copper mt-1">{t.area}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-border bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium">
                Talk to us about a property
              </h2>
              <p className="mt-4 font-body text-base text-paper/70 leading-relaxed max-w-lg">
                WhatsApp is the fastest way to reach us — messages go directly to the
                agent handling the listing. You can also call the office during
                business hours or send a message through the contact page.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 items-center">
                <WhatsAppButton
                  phone={agency.whatsapp}
                  message={`Hello, I'd like to speak with someone at ${agency.name} about a property.`}
                  label="Message us on WhatsApp"
                  size="lg"
                />
                <Link
                  to="/contact"
                  className="font-mono text-sm uppercase tracking-widest text-copper-light border-b border-copper-light pb-1 hover:text-paper hover:border-paper transition-colors"
                >
                  Full contact page
                </Link>
              </div>
            </div>
            <div className="lg:border-l lg:border-paper/10 lg:pl-12">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="shrink-0 text-paper/40 mt-1" strokeWidth={1.6} />
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-paper/40 mb-1">
                    Office
                  </p>
                  <p className="font-mono text-sm text-paper/80">
                    {agency.address.line1}
                    <br />
                    {agency.address.line2}
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-paper/10 font-mono text-sm text-paper/80">
                <p>{agency.phoneDisplay}</p>
                <p className="mt-1">{agency.email}</p>
                <p className="mt-3 text-xs text-paper/40">
                  Mon–Fri 09:00–18:00, Sat 10:00–14:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
