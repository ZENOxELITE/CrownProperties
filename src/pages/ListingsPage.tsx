import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { PropertyCard } from '@/components/PropertyCard';
import { SearchBar, type SearchFilters } from '@/components/SearchBar';
import { properties } from '@/data/properties';
import { agency } from '@/data/agency';

const PAGE_SIZE = 6;

type SortOption = 'date-desc' | 'price-asc' | 'price-desc';

export function ListingsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [sort, setSort] = useState<SortOption>('date-desc');

  const filters: SearchFilters = useMemo(
    () => ({
      type: searchParams.get('type') || 'all',
      area: searchParams.get('area') || 'all',
      minPrice: searchParams.get('minPrice') || '',
      maxPrice: searchParams.get('maxPrice') || '',
      bedrooms: searchParams.get('bedrooms') || 'all',
    }),
    [searchParams],
  );

  const handleSearch = (newFilters: SearchFilters) => {
    const params = new URLSearchParams();
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value && value !== 'all') params.set(key, value);
    });
    setSearchParams(params);
    setVisibleCount(PAGE_SIZE);
  };

  // Filter properties
  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (filters.type !== 'all' && p.type !== filters.type) return false;
      if (filters.area !== 'all' && p.area !== filters.area) return false;
      if (filters.minPrice && p.price < parseInt(filters.minPrice)) return false;
      if (filters.maxPrice && p.price > parseInt(filters.maxPrice)) return false;
      if (filters.bedrooms !== 'all') {
        const min = parseInt(filters.bedrooms);
        if (p.beds < min) return false;
      }
      return true;
    });
  }, [filters]);

  // Sort
  const sorted = useMemo(() => {
    const arr = [...filtered];
    switch (sort) {
      case 'price-asc':
        arr.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        arr.sort((a, b) => b.price - a.price);
        break;
      case 'date-desc':
      default:
        arr.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
        break;
    }
    return arr;
  }, [filtered, sort]);

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [filters]);

  const visible = sorted.slice(0, visibleCount);
  const hasMore = visibleCount < sorted.length;

  return (
    <>
      <SEO
        title={`Property Listings — ${agency.name}, ${agency.city}`}
        description={`Browse properties for sale and rent in ${agency.city}. Filter by area, price, and bedrooms across ${agency.areasServed.join(', ')}.`}
      />

      {/* Page header */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="font-serif text-3xl sm:text-4xl font-medium">Listings</h1>
          <p className="mt-3 font-mono text-xs text-ink/50 uppercase tracking-widest">
            {sorted.length} {sorted.length === 1 ? 'property' : 'properties'} found
          </p>
        </div>
      </div>

      {/* Search bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <SearchBar onSearch={handleSearch} initial={filters} variant="page" />
      </div>

      {/* Sort bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6">
        <div className="flex items-center justify-between border-t border-border pt-6">
          <p className="font-mono text-xs text-ink/50">
            Showing {visible.length} of {sorted.length}
          </p>
          <div className="flex items-center gap-3">
            <label htmlFor="sort" className="font-mono text-[10px] uppercase tracking-widest text-ink/50">
              Sort
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="font-mono text-sm px-3 py-2 bg-paper border border-border focus:outline-none focus:border-copper"
            >
              <option value="date-desc">Newest first</option>
              <option value="price-asc">Price (low to high)</option>
              <option value="price-desc">Price (high to low)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        {sorted.length === 0 ? (
          <div className="border border-border p-12 text-center">
            <p className="font-body text-lg text-ink/70">
              No properties match these filters.
            </p>
            <button
              onClick={() => handleSearch({ ...defaultFilters })}
              className="mt-4 font-mono text-xs uppercase tracking-widest text-copper hover:text-copper-dark transition-colors"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
              {visible.map((property) => (
                <PropertyCard key={property.id} property={property} className="bg-paper" />
              ))}
            </div>

            {hasMore && (
              <div className="mt-12 text-center">
                <button
                  onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                  className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-ink border border-ink px-6 py-3 hover:bg-ink hover:text-paper transition-colors"
                >
                  Load more ({sorted.length - visibleCount} remaining)
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

const defaultFilters: SearchFilters = {
  type: 'all',
  area: 'all',
  minPrice: '',
  maxPrice: '',
  bedrooms: 'all',
};
