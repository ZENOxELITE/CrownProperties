import { SEO } from '@/components/SEO';
import { ContactForm } from '@/components/ContactForm';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { agency } from '@/data/agency';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function ContactPage() {
  return (
    <>
      <SEO
        title={`Contact — ${agency.name}, ${agency.city}`}
        description={`Contact ${agency.name} in ${agency.city}. Phone ${agency.phoneDisplay}, WhatsApp, email, or visit our office at ${agency.address.line1}, ${agency.address.line2}.`}
      />

      {/* Header */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="font-serif text-3xl sm:text-4xl font-medium">Contact</h1>
          <p className="mt-3 font-mono text-xs text-ink/50 uppercase tracking-widest">
            WhatsApp is fastest &middot; office hours below
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Form */}
          <div>
            <h2 className="font-serif text-xl font-medium mb-6">Send a message</h2>
            <ContactForm />
          </div>

          {/* Contact details */}
          <div className="space-y-8">
            {/* WhatsApp */}
            <div className="border border-copper p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-copper mb-3">
                Preferred contact
              </h3>
              <p className="font-body text-base text-ink/80 leading-relaxed mb-4">
                Messages go directly to the agent handling your enquiry. Typical
                response time: under 2 hours during business hours.
              </p>
              <WhatsAppButton
                phone={agency.whatsapp}
                message={`Hello, I'd like to speak with someone at ${agency.name}.`}
                label="WhatsApp us"
                size="lg"
                className="w-full justify-center"
              />
            </div>

            {/* Office details */}
            <div className="border border-border p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-ink/50 mb-5">
                Office
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="shrink-0 mt-0.5 text-ink/40" strokeWidth={1.6} />
                  <div>
                    <p className="font-mono text-sm text-ink/80 leading-relaxed">
                      {agency.address.line1}
                      <br />
                      {agency.address.line2}
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="shrink-0 text-ink/40" strokeWidth={1.6} />
                  <a
                    href={`tel:${agency.phone.replace(/\s/g, '')}`}
                    className="font-mono text-sm text-ink hover:text-copper transition-colors"
                  >
                    {agency.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="shrink-0 text-ink/40" strokeWidth={1.6} />
                  <a
                    href={`mailto:${agency.email}`}
                    className="font-mono text-sm text-ink hover:text-copper transition-colors break-all"
                  >
                    {agency.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={18} className="shrink-0 mt-0.5 text-ink/40" strokeWidth={1.6} />
                  <div className="font-mono text-sm text-ink/80">
                    <p>Mon–Fri 09:00–18:00</p>
                    <p>Sat 10:00–14:00</p>
                    <p className="text-ink/40">Sun closed</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map */}
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-ink/50 mb-3">
                Find us
              </h3>
              <div className="border border-border h-[300px]">
                <iframe
                  src={agency.mapsEmbedOffice}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${agency.name} office`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
