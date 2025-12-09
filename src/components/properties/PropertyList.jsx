import PropertyCard from '../landing/PropertyCard';
import Button from '../landing/Button';

function PropertyList({ properties }) {
  if (!properties || properties.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-text-secondary text-lg">No properties found</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      {properties.length > 0 && (
        <div className="mt-8 text-center">
          <Button variant="primary" className="px-8 py-3">
            Browse Listing
          </Button>
        </div>
      )}
    </>
  );
}

export default PropertyList;

