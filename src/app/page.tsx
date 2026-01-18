import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroCarousel } from '@/components/home/HeroCarousel';
import { ContactForm } from '@/components/contact/ContactForm';
import { businessInfo } from '@/data/business-info';
import { services } from '@/data/services';
import { portfolioItems } from '@/data/portfolio';
import { testimonials } from '@/data/testimonials';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Phone, MapPin } from 'lucide-react';
import { websiteCopy } from '@/data/website-copy';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Seven Star Lining Works | Premium Motorcycle Accessories in Chennai',
  description: 'Specializing in custom seat covers, tank covers, and premium motorcycle accessories. Serving Chennai since 1993 with quality craftsmanship.',
  openGraph: {
    title: 'Seven Star Lining Works | Premium Motorcycle Accessories',
    description: 'Custom seat covers, tank covers, and bike accessories in Chennai. 33+ years of excellence.',
    images: ['/images/portfolio/re-brown-leather.jpg'],
  },
};

export default function Home() {
  const featuredPortfolio = portfolioItems.filter((item) => item.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Carousel */}
        <HeroCarousel items={featuredPortfolio} />

        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{websiteCopy.services.title}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {websiteCopy.services.subtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Card key={service.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold">{service.name}</h3>
                    {service.popular && (
                      <Badge variant="secondary">Popular</Badge>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-brand-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {service.priceRange && (
                    <p className="text-sm font-semibold text-brand-primary">
                      {service.priceRange.message}
                    </p>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Preview Section */}
        <section id="portfolio" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{websiteCopy.portfolio.title}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {websiteCopy.portfolio.subtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {featuredPortfolio.slice(0, 6).map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-gray-200"
                >
                  <Image
                    src={item.images[0].src}
                    alt={item.images[0].alt}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm">{item.metadata?.vehicleType}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button variant="outline" size="lg" asChild>
                <a href="/portfolio">{websiteCopy.portfolio.cta}</a>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{websiteCopy.about.title}</h2>
              <p className="text-lg text-gray-700 mb-4">
                With over {businessInfo.yearsInBusiness} years of experience in the motorcycle accessories industry,
                Seven Star Lining Works has become Chennai&apos;s trusted name for quality seat covers,
                tank covers, and bike accessories.
              </p>
              <p className="text-gray-600 mb-6">
                We take pride in our attention to detail, quality craftsmanship, and commitment to
                customer satisfaction. Every product is carefully crafted to ensure the perfect fit
                and finish for your motorcycle.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-primary mb-2">
                    {businessInfo.yearsInBusiness}+
                  </div>
                  <div className="text-gray-600">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-primary mb-2">10,000+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-primary mb-2">
                    {businessInfo.rating}
                  </div>
                  <div className="text-gray-600">Google Rating ({businessInfo.reviewCount} reviews)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {websiteCopy.testimonials.title}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {websiteCopy.testimonials.subtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.slice(0, 3).map((testimonial) => (
                <Card key={testimonial.id} className="p-6">
                  {testimonial.customerPhoto && (
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={testimonial.customerPhoto}
                        alt={`Work for ${testimonial.customerName}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">&quot;{testimonial.review}&quot;</p>
                  <div>
                    <p className="font-semibold">{testimonial.customerName}</p>
                    {testimonial.vehicleType && (
                      <p className="text-sm text-gray-600">{testimonial.vehicleType}</p>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{websiteCopy.contact.title}</h2>
                <p className="text-gray-600">
                  {websiteCopy.contact.subtitle}
                </p>
              </div>
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-brand-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-gray-600">
                          {businessInfo.address.street}, {businessInfo.address.area}
                          <br />
                          {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.pincode}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-brand-primary" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <a
                          href={`tel:${businessInfo.contact.phone}`}
                          className="text-gray-600 hover:text-brand-primary transition-colors"
                        >
                          {businessInfo.contact.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-6" asChild>
                    <a
                      href={businessInfo.social.googleBusiness}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </Button>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Operating Hours</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Monday - Saturday</span>
                      <span className="font-medium">
                        {businessInfo.hours.Monday.open} - {businessInfo.hours.Monday.close}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium text-red-600">
                        {businessInfo.hours.Sunday.closed ? 'Closed' : `${businessInfo.hours.Sunday.open} - ${businessInfo.hours.Sunday.close}`}
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      💡 <strong>Walk-ins welcome!</strong> No appointment needed.
                    </p>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{websiteCopy.contact.formTitle}</h3>
                  <ContactForm />
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
