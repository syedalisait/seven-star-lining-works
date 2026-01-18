import Link from 'next/link';
import { businessInfo } from '@/data/business-info';
import { MapPin, Phone, Clock } from 'lucide-react';
// TODO: Add back Mail icon when email is set up

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{businessInfo.name}</h3>
            <p className="text-gray-300 mb-4">{businessInfo.tagline}</p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-secondary shrink-0 mt-0.5" />
                <p className="text-sm text-gray-300">
                  {businessInfo.address.street}, {businessInfo.address.area}
                  <br />
                  {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.pincode}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-secondary" />
                <a
                  href={`tel:${businessInfo.contact.phone}`}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {businessInfo.contact.phone}
                </a>
              </div>
              {/* TODO: Uncomment when business email is set up
              {businessInfo.contact.email && (
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-brand-secondary" />
                  <a
                    href={`mailto:${businessInfo.contact.email}`}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {businessInfo.contact.email}
                  </a>
                </div>
              )}
              */}
            </div>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Clock className="h-5 w-5 mr-2 text-brand-secondary" />
              Operating Hours
            </h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex justify-between gap-4">
                <span>Monday - Saturday</span>
                <span className="text-right">{businessInfo.hours.Monday.open} - {businessInfo.hours.Monday.close}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Sunday</span>
                <span className="text-right text-red-400">
                  {businessInfo.hours.Sunday.closed ? 'Closed' : `${businessInfo.hours.Sunday.open} - ${businessInfo.hours.Sunday.close}`}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              {businessInfo.social.googleBusiness && (
                <li>
                  <a
                    href={businessInfo.social.googleBusiness}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Google Business Profile
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
