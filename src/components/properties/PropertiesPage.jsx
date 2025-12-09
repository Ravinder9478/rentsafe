import { useState, useMemo } from 'react';
import PropertiesHeader from '../common/PropertiesHeader';
import PageHeading from '../common/PageHeading';
import PropertySearch from './PropertySearch';
import PropertyFilters from './PropertyFilters';
import PropertyList from './PropertyList';
import { propertyListings } from '../../constants/data/propertyListings';

function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    propertyType: 'all',
    amenities: [],
    bhk: 'all',
    priceMin: 0,
    priceMax: 10000
  });

  const filteredProperties = useMemo(() => {
    let result = [...propertyListings];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(property =>
        property.title.toLowerCase().includes(query) ||
        property.address.toLowerCase().includes(query)
      );
    }

    if (filters.propertyType !== 'all') {
      const typeMap = {
        'apartments': ['apartment', 'flat'],
        'house': ['house'],
        'floor': ['floor'],
        'plot': ['plot', 'land'],
        'studio': ['studio'],
        'penthouse': ['penthouse'],
        'villa': ['villa'],
        'agriculture': ['agriculture']
      };
      const searchTypes = typeMap[filters.propertyType] || [];
      result = result.filter(property => {
        const propType = property.type.toLowerCase();
        return searchTypes.some(type => propType.includes(type));
      });
    }

    if (filters.bhk !== 'all') {
      if (filters.bhk === '6+') {
        result = result.filter(property => property.beds >= 6);
      } else {
        const bhkNum = parseInt(filters.bhk);
        result = result.filter(property => property.beds === bhkNum);
      }
    }

    const priceNum = (price) => parseInt(price.replace('€', ''));
    result = result.filter(property => {
      const propPrice = priceNum(property.price);
      return propPrice >= filters.priceMin && propPrice <= filters.priceMax;
    });

    return result;
  }, [searchQuery, filters]);

  return (
    <div className="min-h-screen bg-bg-primary">
      <PropertiesHeader />
      <div className="py-6 sm:py-8 lg:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <PropertySearch
            value={searchQuery}
            onChange={setSearchQuery}
            onSearch={() => {}}
          />

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <aside className="w-full lg:w-1/4">
              <PropertyFilters onFilterChange={setFilters} />
            </aside>
            <main className="flex-1">
              <PropertyList properties={filteredProperties} />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertiesPage;

