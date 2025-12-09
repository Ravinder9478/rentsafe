import Badge from './Badge';
import Button from './Button';
import ImageBadge from './ImageBadge';
import HeroBanner from "../../assets/img/hero-image.png";
import ShielIcon from '../../assets/svg/shielIcon';
import UsersIcon from '../../assets/svg/usersIcon';

function Hero() {
  return (
    <section className=" py-8 md:py-12 lg:py-16 gap-8 lg:gap-12 bg-bg-primary">
      {/* Left Content */}
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8'>
          <div className="flex-1 max-w-2xl w-full space-y-6 md:space-y-8">
            <Badge icon={<ShielIcon />} variant="purple">
              TRUSTED UK RENTING
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
              Renting Made Safe and Simple
            </h1>

            <p className="text-base md:text-lg text-text-secondary max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button variant="primary">I'm Looking to Rent</Button>
              <Button variant="outline">I have a Property</Button>
            </div>
          </div>
          {/* Right Image */}
          <div className="flex-1 relative w-full lg:w-auto lg:max-w-4xl">
            <div className="relative">
              <div className='rounded-tl-full rounded-tr-full'>
                <img src={HeroBanner} alt="Modern house" className="w-full" />
              </div>
              <ImageBadge
                icon={<ShielIcon />}
                text="100% Free for Renters"
                position="top-left"
              />
              <ImageBadge
                icon={<UsersIcon />}
                text="10,000+ Active Users"
                position="bottom-right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
