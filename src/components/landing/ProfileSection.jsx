import Badge from './Badge';
import Button from './Button';
import StarIcon from '../../assets/svg/starIcon';
import ProfileSectionImage from '../../assets/img/profile-section-image.png';

function ProfileSection() {
  return (
    <section className="w-full pt-10 md:pt-14 lg:pt-16">
      <div className="bg-primary">
        <div className='container mx-auto'>
        <div className="flex flex-col lg:flex-row items-center py-4 lg:py-0">
          <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-8 flex flex-col justify-center space-y-6 md:space-y-8">
            <Badge icon={<StarIcon />} variant="white">
              JOINED 10,000+ VERIFIED USERS
            </Badge>
            
            <h2 className="text-3xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-text-light leading-tight">
              Create a profile to showcase to potential agents
            </h2>
            
            <p className="text-base md:text-lg lg:text-xl text-text-light max-w-2xl opacity-90">
              Join thousands of renters and property owners who trust RentEase for their rental needs
            </p>
            
            <div className='!mt-4'>
              <button className="px-6 py-3 rounded-lg font-medium transition-all duration-200 bg-white border-2 border-primary text-primary hover:bg-transparent hover:text-white hover:border-white">
                Explore Services
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2  lg:-mt-10 md:-mt-8 -mt-6">
            <img src={ProfileSectionImage} alt="Modern house" className="w-full h-full object-cover" />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;

