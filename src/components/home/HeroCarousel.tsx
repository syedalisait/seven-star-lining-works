'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { WhatsAppButton } from '@/components/contact/WhatsAppButton';
import { Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import { PortfolioItem } from '@/types';
import { businessInfo } from '@/data/business-info';

interface HeroCarouselProps {
  items: PortfolioItem[];
}

export function HeroCarousel({ items }: HeroCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 20 },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();
    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      {/* Carousel */}
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {items.map((item) => (
            <div key={item.id} className="relative flex-[0_0_100%] min-w-0">
              {/* Image */}
              <Image
                src={item.images[0].src}
                alt={item.images[0].alt}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />

              {/* Subtle Dark Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Content Overlay - Bottom Aligned */}
              <div className="absolute inset-x-0 bottom-0 pb-16 md:pb-24">
                <div className="container mx-auto px-4">
                  <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-3 drop-shadow-lg">
                      {businessInfo.name}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/95 mb-3 drop-shadow-md">
                      {businessInfo.tagline}
                    </p>
                    <div className="flex items-center gap-2 mb-6">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className={`w-5 h-5 ${
                              star <= Math.floor(businessInfo.rating || 0)
                                ? 'text-yellow-400 fill-yellow-400'
                                : star === Math.ceil(businessInfo.rating || 0)
                                ? 'text-yellow-400 fill-yellow-400 opacity-70'
                                : 'text-gray-400 fill-gray-400'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-white/95 font-medium drop-shadow-md">
                        {businessInfo.rating} ({businessInfo.reviewCount} reviews)
                      </span>
                    </div>
                    <p className="text-white/90 mb-6 text-sm md:text-base drop-shadow-md">
                      Serving Chennai since 1993 • {businessInfo.yearsInBusiness}+ Years of Excellence
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        size="lg"
                        variant="outline"
                        asChild
                        className="bg-white/95 text-blue-900 border-2 border-white hover:bg-white shadow-lg font-semibold"
                      >
                        <a href="#portfolio">View Our Work</a>
                      </Button>
                      <Button
                        size="lg"
                        className="bg-blue-600 text-white hover:bg-blue-700 border-2 border-blue-600 shadow-lg font-semibold"
                        asChild
                      >
                        <a href={`tel:${businessInfo.contact.phone}`}>
                          <Phone className="mr-2 h-4 w-4" />
                          Call Now
                        </a>
                      </Button>
                      <WhatsAppButton
                        size="lg"
                        className="bg-white border-2 border-green-600 shadow-lg hover:bg-green-50 font-semibold"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-gray-900" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-gray-900" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === selectedIndex
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
