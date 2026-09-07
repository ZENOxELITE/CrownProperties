import { SEO } from '@/components/SEO';
import { agents } from '@/data/agents';
import { agency } from '@/data/agency';
import { Phone, Mail, MapPin } from 'lucide-react';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export function AboutPage() {
  return (
    <>
      <SEO
        title={`About — ${agency.name}, ${agency.city}`}
        description={`${agency.name} is an independent estate agency in ${agency.city}, ${agency.country}. Founded in 2014, covering ${agency.areasServed.join(', ')}.`}
      />

      {/* Header */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="font-display text-3xl sm:text-4xl font-medium">About the agency</h1>
          <p className="mt-3 font-mono text-xs text-ink/50 uppercase tracking-widest">
            Founded 2014 &middot; {agency.city}, {agency.country}
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 className="font-display text-2xl font-medium mb-6">How we started</h2>
        <div className="space-y-5 font-body text-base text-ink/80 leading-relaxed">
          <p>
            Crown Properties opened in 2014 on a single premise: that property
            transactions in Karachi needed an agency that knew the difference
            between a building that looks good and a building that is sound. Aisha
            Khan, our founding partner, had spent seven years at a commercial real
            estate firm in Dubai and returned to Karachi frustrated by how often
            buyers discovered title disputes, utility problems, or structural
            defects only after signing the bayana.
          </p>
          <p>
            We started with one desk in a shared office on Sunset Boulevard and a
            notebook of contacts — electricians, plumbers, society transfer clerks,
            and the DHA and Clifton Cantonment Board offices. The first year we
            sold four houses and managed six rentals. By 2019 we had four agents,
            each handling a different part of the city, and a management portfolio
            of thirty properties for overseas owners.
          </p>
          <p>
            We do not list every property we are offered. If the title documentation
            is incomplete — missing fard, pending inteqal, disputed mutation — we
            will not take the listing. If the asking price is more than 15% above
            comparable sales in the same block, we will tell the seller to adjust
            or find another agent. This means we carry fewer properties than the
            larger agencies, and we are comfortable with that.
          </p>
          <p>
            We are registered with the Sindh Real Estate Agents Association under
            license {agency.license} and carry professional indemnity insurance
            through EFU General. Our office is at {agency.address.line1},{' '}
            {agency.address.line2}.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="font-display text-2xl font-medium mb-2">The team</h2>
          <p className="font-mono text-xs text-ink/50 uppercase tracking-widest mb-12">
            Direct contacts — no receptionist routing
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
            {agents.map((agent) => (
              <div key={agent.id} className="bg-paper p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-6">
                  <img
                    src={agent.photo}
                    alt={agent.name}
                    loading="lazy"
                    className="w-full sm:w-32 h-48 sm:h-32 object-cover border border-border shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-medium">{agent.name}</h3>
                    <p className="font-mono text-[10px] text-ink/50 uppercase tracking-widest mt-1">
                      {agent.role}
                    </p>
                    <p className="font-mono text-xs text-copper mt-2">{agent.specialty}</p>
                    <p className="font-body text-sm text-ink/70 mt-3 leading-relaxed">
                      {agent.bio}
                    </p>
                    <div className="mt-4 pt-4 border-t border-border space-y-2">
                      <a
                        href={`tel:${agent.phone.replace(/\s/g, '')}`}
                        className="flex items-center gap-2 font-mono text-xs text-ink hover:text-copper transition-colors"
                      >
                        <Phone size={12} strokeWidth={1.6} />
                        {agent.phone}
                      </a>
                      <a
                        href={`mailto:${agent.email}`}
                        className="flex items-center gap-2 font-mono text-xs text-ink hover:text-copper transition-colors break-all"
                      >
                        <Mail size={12} strokeWidth={1.6} />
                        {agent.email}
                      </a>
                      <WhatsAppButton
                        phone={agent.whatsapp}
                        message={`Hello ${agent.name}, I'd like to discuss a property matter.`}
                        size="sm"
                        variant="outline"
                        className="mt-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas served */}
      <section className="border-t border-border bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h2 className="font-display text-2xl font-medium mb-2">Areas we cover</h2>
          <p className="font-mono text-xs text-ink/50 uppercase tracking-widest mb-8">
            Seven neighborhoods of {agency.city}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {areas.map((area) => (
              <div key={area.name} className="bg-paper p-6">
                <div className="flex items-start gap-2.5">
                  <MapPin size={16} className="shrink-0 mt-1 text-copper" strokeWidth={1.6} />
                  <div>
                    <h3 className="font-display text-base font-medium">{area.name}</h3>
                    <p className="font-body text-sm text-ink/70 mt-2 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const areas = [
  {
    name: 'Clifton',
    description:
      'The upmarket residential and commercial district along the coast, from Blocks 1 to 9. Apartments above shops, standalone houses, and the highest concentration of restaurants and offices in the city.',
  },
  {
    name: 'DHA',
    description:
      'Defence Housing Authority, spread across nine phases. Planned grid streets, underground electrification in developed phases, and the city\'s most active house and plot market.',
  },
  {
    name: 'Bahria Town',
    description:
      'A gated master-planned community on the M-9 Motorway with its own security, commercial areas, and amenities. Popular with families and overseas Pakistanis buying second homes.',
  },
  {
    name: 'Gulshan-e-Iqbal',
    description:
      'A densely populated residential area with 13 blocks, from apartments to 500 sq yd houses. Good access to University Road, NIPA, and Gulistan-e-Johar.',
  },
  {
    name: 'PECHS',
    description:
      'Pakistan Employees Cooperative Housing Society, Blocks 2 and 6 are the most active. Mid-range apartments and houses, close to Tariq Road and Korangi Road.',
  },
  {
    name: 'Malir Cantt',
    description:
      'A military-cantonment area near Jinnah International Airport with controlled access, wide roads, and a growing number of apartment buildings. Popular with airline staff and families wanting quiet streets.',
  },
  {
    name: 'North Nazimabad',
    description:
      'A planned residential area with Blocks A through N, known for its grid layout and 200–400 sq yd houses. Established infrastructure with schools, parks, and markets within walking distance.',
  },
];
