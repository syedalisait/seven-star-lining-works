'use client';

import { useState } from 'react';
import Image from 'next/image';
import { portfolioItems, categories } from '@/data/portfolio';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Tag } from 'lucide-react';

export function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems = selectedCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  const sortedItems = [...filteredItems].sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className="min-w-[100px]"
              >
                {category.name}
              </Button>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Showing {sortedItems.length} {sortedItems.length === 1 ? 'item' : 'items'}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden cursor-pointer group hover:shadow-lg transition-shadow"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                <Image
                  src={item.images[0].src}
                  alt={item.images[0].alt}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                {item.featured && (
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-blue-600 text-white">
                      Featured
                    </Badge>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {item.date.toLocaleDateString('en-IN', {
                      month: 'short',
                      year: 'numeric'
                    })}
                  </div>
                  {item.metadata?.vehicleType && (
                    <div className="flex items-center gap-1">
                      <Tag className="h-3 w-3" />
                      {item.metadata.vehicleType}
                    </div>
                  )}
                </div>
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {item.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {sortedItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No items found in this category.</p>
            <Button
              variant="outline"
              onClick={() => setSelectedCategory('all')}
              className="mt-4"
            >
              View All Items
            </Button>
          </div>
        )}
      </div>

      {/* Modal for Item Details */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] bg-gray-200">
              <Image
                src={selectedItem.images[0].src}
                alt={selectedItem.images[0].alt}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{selectedItem.title}</h2>
                  <p className="text-gray-600">{selectedItem.description}</p>
                </div>
                {selectedItem.featured && (
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    Featured
                  </Badge>
                )}
              </div>

              {selectedItem.metadata && (
                <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                  {selectedItem.metadata.vehicleType && (
                    <div>
                      <p className="text-sm text-gray-500">Vehicle Type</p>
                      <p className="font-medium">{selectedItem.metadata.vehicleType}</p>
                    </div>
                  )}
                  {selectedItem.metadata.material && (
                    <div>
                      <p className="text-sm text-gray-500">Material</p>
                      <p className="font-medium">{selectedItem.metadata.material}</p>
                    </div>
                  )}
                  {selectedItem.metadata.color && (
                    <div>
                      <p className="text-sm text-gray-500">Color</p>
                      <p className="font-medium">{selectedItem.metadata.color}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-medium">
                      {selectedItem.date.toLocaleDateString('en-IN', {
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
              )}

              {selectedItem.tags && selectedItem.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {selectedItem.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
