import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { agency } from '@/data/agency';

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-xl font-medium">{agency.name}</h3>
            <p className="mt-3 font-mono text-xs text-paper/50 uppercase tracking-widest">
              {agency.tagline}
            </p>
            <p className="mt-6 font-mono text-xs text-paper/60 leading-relaxed">
              License {agency.license}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-paper/40 mb-4">
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/listings', label: 'Listings' },
                { to: '/services', label: 'Services' },
                { to: '/about', label: 'About' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-paper/80 hover:text-copper-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-paper/40 mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-paper/40" strokeWidth={1.6} />
                <span className="font-mono text-paper/70 leading-relaxed">
                  {agency.address.line1}
                  <br />
                  {agency.address.line2}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-paper/40" strokeWidth={1.6} />
                <a
                  href={`tel:${agency.phone.replace(/\s/g, '')}`}
                  className="font-mono text-paper/70 hover:text-copper-light transition-colors"
                >
                  {agency.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="shrink-0 text-paper/40" strokeWidth={1.6} />
                <a
                  href={`mailto:${agency.email}`}
                  className="font-mono text-paper/70 hover:text-copper-light transition-colors"
                >
                  {agency.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-paper/40 mb-4">
              Follow
            </h4>
            <div className="flex gap-3">
              <a
                href={agency.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 border border-paper/15 hover:border-copper hover:text-copper-light transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} strokeWidth={1.6} />
              </a>
              <a
                href={agency.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 border border-paper/15 hover:border-copper hover:text-copper-light transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} strokeWidth={1.6} />
              </a>
              <a
                href={agency.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 border border-paper/15 hover:border-copper hover:text-copper-light transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} strokeWidth={1.6} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-paper/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="font-mono text-xs text-paper/40">
            &copy; {new Date().getFullYear()} {agency.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-paper/40">
            License {agency.license} &middot; {agency.city}, {agency.country}
          </p>
        </div>
      </div>
    </footer>
  );
}
