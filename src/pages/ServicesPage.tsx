import { SEO } from '@/components/SEO';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { agency } from '@/data/agency';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function ServicesPage() {
  return (
    <>
      <SEO
        title={`Services — ${agency.name}, ${agency.city}`}
        description={`Property services in ${agency.city}: buying, selling, renting, and property management. What each service actually involves.`}
      />

      {/* Header */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="font-display text-3xl sm:text-4xl font-medium">Services</h1>
          <p className="mt-3 font-mono text-xs text-ink/50 uppercase tracking-widest">
            What we do, and what it costs
          </p>
        </div>
      </div>

      {/* Services list */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="space-y-px bg-border border border-border">
          {services.map((service, idx) => (
            <div key={service.title} className="bg-paper p-6 sm:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
                <div className="sm:col-span-1">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
                    {String(idx + 1).padStart(2, '0')}
                  </p>
                  <h2 className="font-display text-xl font-medium mt-2">
                    {service.title}
                  </h2>
                  <p className="font-mono text-xs text-copper mt-2">
                    {service.fee}
                  </p>
                </div>
                <div className="sm:col-span-2">
                  <p className="font-body text-base text-ink/80 leading-relaxed">
                    {service.description}
                  </p>
                  {service.bullets && (
                    <ul className="mt-5 space-y-2">
                      {service.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="font-body text-sm text-ink/70 flex items-start gap-2"
                        >
                          <span className="w-1 h-1 bg-copper shrink-0 mt-2.5" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-medium">
            Ready to talk?
          </h2>
          <p className="mt-4 font-body text-base text-paper/70 max-w-lg mx-auto">
            WhatsApp us with your question, or browse our current listings to see
            what is on the market.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <WhatsAppButton
              phone={agency.whatsapp}
              message={`Hello, I'd like to discuss a property matter with ${agency.name}.`}
              label="WhatsApp us"
              size="lg"
            />
            <Link
              to="/listings"
              className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-copper-light border border-copper-light px-5 py-3 hover:bg-copper-light hover:text-ink transition-colors"
            >
              View listings
              <ArrowRight size={16} strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const services = [
  {
    title: 'Buying',
    fee: 'No fee to the buyer',
    description:
      'We accompany you from the first viewing to the transfer of title at the society or cantt board office. This includes identifying suitable properties, arranging viewings, verifying title documentation (fard, inteqal, mutation entries, no-objection certificates from the society), and negotiating the price. We attend the bayana ceremony and the final transfer with you, and we review the agreement before you sign. We do not represent both sides of a transaction — if we are listing the property, we tell you and you are welcome to bring your own agent.',
    bullets: [
      'Title documentation verified before you pay the bayana',
      'Society/cantt transfer appointment accompanied',
      'Bayana agreement reviewed line by line',
      'No dual representation — we disclose if we are the listing agent',
    ],
  },
  {
    title: 'Selling',
    fee: '2% commission on sale price',
    description:
      'We value your property based on recent comparable sales in the same block or phase, not on what you would like to hear. We photograph it, write the listing description, and publish it on our site and on Zameen.com, OLX, and our Facebook page. We conduct all viewings personally — no key handoff to strangers. We vet buyers for seriousness before recommending an offer, and we hold the bayana amount in a designated account until the transfer date.',
    bullets: [
      'Valuation based on comparable block-level sales, not wishful thinking',
      'Professional photography included',
      'Published on our site, Zameen.com, and OLX',
      'All viewings conducted by your named agent',
      'Buyer vetting before offer acceptance',
    ],
  },
  {
    title: 'Renting',
    fee: 'One month rent for long-term lets',
    description:
      'We handle both furnished and unfurnished long-term rentals (eleven months or more, the standard Pakistani lease term). We do not do short-term holiday rentals. For tenants, we maintain a current list of available properties and can arrange viewings within 48 hours. For landlords, we photograph and list the property, conduct tenant reference checks (employer verification, previous landlord contact, CNIC copy retention), and prepare the rental agreement with the standard security deposit and advance rent terms.',
    bullets: [
      'Long-term rentals only (11-month standard lease)',
      'Tenant reference checks: employer, previous landlord, CNIC',
      'Rental agreement prepared with standard deposit terms',
      'Inventory and condition report with photos at handover',
    ],
  },
  {
    title: 'Property management',
    fee: 'From Rs 8,000/month per property',
    description:
      'We manage houses and apartments for owners who live outside Karachi — mostly in the Gulf, UK, and North America. The service includes staff management (housekeeper, gardener, driver), utility bill payment (K-Electric, SSGC gas, KWSB water), generator and UPS servicing, and a quarterly property report with photos. We hold a set of keys in our office and conduct an unannised walkthrough every six weeks. If something breaks — an AC compressor, a water pump, a breaker — we source three quotes, send them to you on WhatsApp, and execute the work once you approve.',
    bullets: [
      'Staff hiring, payroll, and supervision',
      'Utility bills paid from a dedicated float account',
      'Quarterly report with photos and financial summary',
      'Unannounced walkthrough every six weeks',
      'Three quotes for any repair over Rs 10,000',
    ],
  },
];
