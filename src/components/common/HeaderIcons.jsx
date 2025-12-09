import HouseIcon from '../../assets/svg/houseIcon';
import HeartIcon from '../../assets/svg/heartIcon';

function HeaderIcons() {
  return (
    <div className="flex items-center gap-4 sm:gap-6">
      <button className="text-primary hover:opacity-80 transition-opacity">
        <HouseIcon />
      </button>

      <button className="relative text-gray-600 hover:text-primary transition-colors">
        <HeartIcon />
        <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          6
        </span>
      </button>

      <button className="relative text-primary hover:opacity-80 transition-opacity">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 2C5.58 2 2 5.13 2 9c0 1.66.7 3.18 1.85 4.3L2 18l4.7-1.7C7.82 17.3 9.34 18 11 18c4.42 0 8-3.13 8-7s-3.58-7-8-7z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="15" cy="5" r="3" fill="#EF4444"/>
          <path d="M15 3v4M15 5h4" stroke="white" strokeWidth="1"/>
        </svg>
      </button>
    </div>
  );
}

export default HeaderIcons;

