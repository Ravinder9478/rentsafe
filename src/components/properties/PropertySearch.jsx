import SearchIcon from '../../assets/svg/searchIcon';
import LocationIcon from '../../assets/svg/locationIcon';

function PropertySearch({ value, onChange, onSearch }) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto mb-6">
      <div className="bg-white rounded-2xl shadow-lg border border-border-search p-4 sm:p-5 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
        <div className="flex-1 relative">
          <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-text-secondary">
            <SearchIcon />
          </div>
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter an address, neighborhood, city, or ZIP code"
            className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 text-sm sm:text-base border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-text-primary placeholder:text-text-secondary"
          />
          <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-text-secondary cursor-pointer">
            <LocationIcon />
          </div>
        </div>
        <button
          onClick={onSearch}
          className="bg-primary-gradient hover:opacity-90 text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg whitespace-nowrap text-sm sm:text-base"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default PropertySearch;

