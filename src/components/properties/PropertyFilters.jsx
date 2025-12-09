import { useState } from 'react';
import { propertyTypeOptions, amenityOptions, bhkOptions } from '../../constants/data/filterOptions';
import FilterGroup from './FilterGroup';
import PriceRange from './PriceRange';

function PropertyFilters({ onFilterChange }) {
  const [filters, setFilters] = useState({
    propertyType: 'all',
    amenities: [],
    bhk: 'all',
    priceMin: 0,
    priceMax: 10000
  });

  const updateFilter = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const toggleAmenity = (value) => {
    const amenities = filters.amenities.includes(value)
      ? filters.amenities.filter(a => a !== value)
      : [...filters.amenities, value];
    updateFilter('amenities', amenities);
  };

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md border border-[#E6E8EC]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg sm:text-xl font-bold text-text-primary">Select Filters</h2>
        <button className="bg-primary-gradient text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90">
          Apply
        </button>
      </div>

      <div className="space-y-6">
        <FilterGroup
          title="Property by Type"
          options={propertyTypeOptions}
          selectedValue={filters.propertyType}
          onSelect={(value) => updateFilter('propertyType', value)}
        />

        <FilterGroup
          title="Amenities"
          options={amenityOptions}
          isMultiSelect={true}
          selectedValues={filters.amenities}
          onSelect={toggleAmenity}
        />

        <FilterGroup
          title="BHK Type"
          options={bhkOptions}
          selectedValue={filters.bhk}
          onSelect={(value) => updateFilter('bhk', value)}
        />

        <PriceRange
          min={filters.priceMin}
          max={filters.priceMax}
          onChange={(value) => updateFilter('priceMax', value)}
        />
      </div>
    </div>
  );
}

export default PropertyFilters;

