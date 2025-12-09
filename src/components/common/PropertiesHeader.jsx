import { Link } from 'react-router-dom';
import HouseIcon from '../../assets/svg/houseIcon';
import HeaderIcons from './HeaderIcons';
import ProfileMenu from './ProfileMenu';
import logo from '../../assets/img/logo.svg';

function PropertiesHeader() {
  return (
    <header className="bg-white border-b border-blue-200 sticky top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-[70px] px-4 lg:px-6">
        <Link to="/" className="flex items-center gap-2">
        <img
            src={logo}
            alt="Rent Safe logo"
            className="h-8 w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-2 rounded-lg px-4 py-2 border border-gray-300">
          <span className="text-sm font-bold text-[#9FA3AA]">Free Contacts:</span>
          <span className="text-sm font-bold text-orange-500">4<span className='text-[#9FA3AA]'>/5</span></span>
        </div>

        <div className="flex items-center gap-4">
          <HeaderIcons />
          <ProfileMenu />
        </div>
      </div>
    </header>
  );
}

export default PropertiesHeader;

