import { Metadata } from 'next';
import { PortfolioGallery } from '@/components/portfolio/PortfolioGallery';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { businessInfo } from '@/data/business-info';

export const metadata: Metadata = {
  title: 'Portfolio - Our Work',
  description: `Browse ${businessInfo.name}'s portfolio of custom motorcycle seat covers, tank covers, and accessories. Quality craftsmanship for your motorcycle in Chennai.`,
  openGraph: {
    title: `Portfolio - ${businessInfo.name}`,
    description: 'View our collection of custom motorcycle seat covers, tank covers, and accessories',
  },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
              <p className="text-lg md:text-xl text-blue-100">
                Explore our collection of custom motorcycle accessories.
                Over {businessInfo.yearsInBusiness} years of quality craftsmanship.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Gallery */}
        <PortfolioGallery />
      </main>

      <Footer />
    </div>
  );
}
