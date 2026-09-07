import { useState } from 'react';
import { Search } from 'lucide-react';
import { agency } from '@/data/agency';

export interface SearchFilters {
  type: string; // 'all' | 'sale' | 'rent'
  area: string; // 'all' | area name
  minPrice: string;
  maxPrice: string;
  bedrooms: string; // 'all' | '1' | '2' | '3' | '4+'
}

interface SearchBarProps {
  onSearch: (filters: SearchFilters) => void;
  initial?: Partial<SearchFilters>;
  variant?: 'hero' | 'page';
}

const defaultFilters: SearchFilters = {
  type: 'all',
  area: 'all',
  minPrice: '',
  maxPrice: '',
  bedrooms: 'all',
};

export function SearchBar({ onSearch, initial, variant = 'hero' }: SearchBarProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    ...defaultFilters,
    ...initial,
  });

  const handleChange = (field: keyof SearchFilters, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  const selectClass =
    variant === 'hero'
      ? 'bg-paper text-ink border-border-dark'
      : 'bg-paper text-ink border-border';

  const inputClass = `${selectClass} font-mono text-sm px-3 py-2.5 border focus:outline-none focus:border-copper w-full appearance-none`;

  const labelClass =
    'font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-1.5 block';

  return (
    <form
      onSubmit={handleSubmit}
      className={`${
        variant === 'hero'
          ? 'bg-paper border border-border-dark'
          : 'border border-border'
      } p-5 sm:p-6`}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {/* Type */}
        <div className="col-span-2 md:col-span-1">
          <label className={labelClass} htmlFor="search-type">
            Buy / Rent
          </label>
          <select
            id="search-type"
            value={filters.type}
            onChange={(e) => handleChange('type', e.target.value)}
            className={inputClass}
          >
            <option value="all">All</option>
            <option value="sale">For sale</option>
            <option value="rent">For rent</option>
          </select>
        </div>

        {/* Area */}
        <div className="col-span-2 md:col-span-1">
          <label className={labelClass} htmlFor="search-area">
            Area
          </label>
          <select
            id="search-area"
            value={filters.area}
            onChange={(e) => handleChange('area', e.target.value)}
            className={inputClass}
          >
            <option value="all">All areas</option>
            {agency.areasServed.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>

        {/* Min price */}
        <div>
          <label className={labelClass} htmlFor="search-min-price">
            Min price
          </label>
          <input
            id="search-min-price"
            type="number"
            placeholder="0"
            value={filters.minPrice}
            onChange={(e) => handleChange('minPrice', e.target.value)}
            className={inputClass}
          />
        </div>

        {/* Max price */}
        <div>
          <label className={labelClass} htmlFor="search-max-price">
            Max price
          </label>
          <input
            id="search-max-price"
            type="number"
            placeholder="Any"
            value={filters.maxPrice}
            onChange={(e) => handleChange('maxPrice', e.target.value)}
            className={inputClass}
          />
        </div>

        {/* Bedrooms */}
        <div>
          <label className={labelClass} htmlFor="search-bedrooms">
            Bedrooms
          </label>
          <select
            id="search-bedrooms"
            value={filters.bedrooms}
            onChange={(e) => handleChange('bedrooms', e.target.value)}
            className={inputClass}
          >
            <option value="all">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </div>

        {/* Submit */}
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-ink text-paper font-mono text-sm px-4 py-2.5 border border-ink hover:bg-copper hover:border-copper transition-colors duration-200"
          >
            <Search size={16} strokeWidth={1.8} />
            Search
          </button>
        </div>
      </div>
    </form>
  );
}
