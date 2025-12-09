import HeartIcon from '../../assets/svg/heartIcon';
import ShareIcon from '../../assets/svg/shareIcon';
import LocationIcon from '../../assets/svg/locationIcon';
import BedIcon from '../../assets/svg/bedIcon';
import BathIcon from '../../assets/svg/bathIcon';
import HouseIcon from '../../assets/svg/houseIcon';
import LocationTwo from '../../assets/svg/locationTwo';

function PropertyCard({ property }) {
    return (
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-shadow p-4 border border-[#E6E8EC] relative">
            {/* Image Container */}
            <div>
                <div className="">
                    <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-[200px] sm:h-[240px] object-cover rounded-xl"
                    />
                    {property.isRecent && (
                        <div className="absolute top-0 right-4 bg-[#FFC14D] text-text-primary px-5 py-2 rounded-bl-full text-xs sm:text-sm font-medium">
                            Recent
                        </div>
                    )}
                </div>
                <div className="p-4 sm:p-5">
                    {/* Price and Action Icons */}
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xl sm:text-2xl font-bold text-primary">
                            {property.price}<span className='text-text-secondary font-normal text-md'>/month</span>
                        </span>
                        <div className="flex items-center gap-3">
                            <button className="text-text-secondary hover:text-primary transition-colors">
                                <ShareIcon />
                            </button>
                            <button className="text-text-secondary hover:text-primary transition-colors">
                                <HeartIcon />
                            </button>
                        </div>
                    </div>

                    {/* Property Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-2">
                        {property.title}
                    </h3>

                    {/* Address */}
                    <div className="flex items-start gap-2 mb-4 text-text-secondary text-sm">
                        <span className="mt-0.5 shrink-0">
                            <LocationTwo />
                        </span>
                        <span className="line-clamp-2">{property.address}</span>
                    </div>

                    {/* Property Details */}
                    <div className="flex items-center gap-4 sm:gap-6 text-text-secondary text-sm">
                        <div className="flex items-center gap-1.5">
                            <BedIcon />
                            <span>{property.beds}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <BathIcon />
                            <span>{property.baths}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <HouseIcon />
                            <span>{property.type}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PropertyCard;

