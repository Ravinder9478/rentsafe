import Badge from './Badge';
import Button from './Button';
import PropertyCard from './PropertyCard';
import ShielIcon from '../../assets/svg/shielIcon';
import { propertyListings } from '../../constants/data/propertyListings';

function NewestListing() {
  return (
    <section className="w-full py-10 md:py-14 lg:py-16 bg-bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex justify-center mb-4">
            <Badge icon={<ShielIcon />} variant="purple">
              VERIFIED LISTING
            </Badge>
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-text-primary mb-4">
            Newest Listing
          </h2>
          
          <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto">
            Every property is verified. Every landlord is checked. No scams, no fake listings.
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
          {propertyListings.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Browse Listings Button */}
        <div className="flex justify-center">
          <Button variant="primary">
            Browse listings
          </Button>
        </div>
      </div>
    </section>
  );
}

export default NewestListing;

