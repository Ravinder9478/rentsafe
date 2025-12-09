import { useState } from 'react';
import Badge from './Badge';
import Button from './Button';
import CityCard from './CityCard';
import ShielIcon from '../../assets/svg/shielIcon';
import { ukCities } from '../../constants/data/ukCities';

function BrowsePropertyUK() {
  const [showAll, setShowAll] = useState(false);
  const displayedCities = showAll ? ukCities : ukCities.slice(0, 6);

  const handleViewMore = () => {
    setShowAll(!showAll);
  };

  return (
    <section className="w-full py-10 md:py-14 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex justify-center mb-4">
            <Badge icon={<ShielIcon />} variant="purple">
              PROPERTIES IN 51+ CITIES
            </Badge>
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-text-primary mb-4">
            Browse Property in UK
          </h2>
          
          <p className="text-base md:text-lg text-text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* City Cards - Mobile: Grid, Desktop: Slider */}
        <div className="mb-8 md:mb-12">
          {/* Mobile View - Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-4 sm:gap-6">
            {displayedCities.map((city) => (
              <CityCard key={city.id} city={city} />
            ))}
          </div>

          {/* Desktop View - Horizontal Slider */}
          <div className="hidden lg:block overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
            <div 
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-4 sm:px-6 lg:px-8"
              style={{ 
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {ukCities.map((city) => (
                <div key={city.id} className="flex-shrink-0" style={{ width: 'calc((100vw - 240px) / 5.5)' }}>
                  <CityCard city={city} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View More Button - Only show on mobile */}
        <div className="flex justify-center lg:hidden">
          <Button variant="primary" onClick={handleViewMore}>
            {showAll ? 'Show Less' : 'View more'}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default BrowsePropertyUK;

