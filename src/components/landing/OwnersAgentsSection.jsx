import Badge from './Badge';
import Button from './Button';
import ShielIcon from '../../assets/svg/shielIcon';
import HouseIcon from '../../assets/svg/houseIcon';
import BuildingIcon from '../../assets/svg/buildingIcon';
import CrownIcon from '../../assets/svg/crownIcon';
import AgencyIcon from '../../assets/svg/agencyIcon';
import StarIcon from '../../assets/svg/starIcon';
import AgentsaleImage from '../../assets/img/agentsale.png';

function OwnersAgentsSection() {
  const plans = [
    {
      id: 1,
      title: "Pay Per Listing",
      description: "Single properties",
      icon: <HouseIcon />,
      iconBg: "bg-white",
      iconColor: "text-primary",
      isPopular: false
    },
    {
      id: 2,
      title: "Standard Plan",
      description: "Up to 10 listings",
      icon: <BuildingIcon />,
      iconBg: "bg-primary-gradient",
      iconColor: "text-white",
      isPopular: true
    },
    {
      id: 3,
      title: "Premium Plan",
      description: "Up to 25 listings",
      icon: <CrownIcon />,
      iconBg: "bg-white",
      iconColor: "text-primary",
      isPopular: false
    },
    {
      id: 4,
      title: "Agency Solution",
      description: "Unlimited listings",
      icon: <AgencyIcon />,
      iconBg: "bg-white",
      iconColor: "text-primary",
      isPopular: false
    }
  ];

  return (
    <section className="w-full relative py-10 md:py-14 lg:py-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={AgentsaleImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
            {/* Badge */}
            <div className="w-fit">
              <Badge icon={<ShielIcon />} variant="white">
                FOR OWNER & AGENT
              </Badge>
            </div>

            {/* Headline */}
            <h2 className="text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
              For Owners & Agents<br />
              <span className="text-white">List Safely, Screen Smarter</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <Button variant="primary" className="bg-primary-gradient hover:opacity-90 text-white px-4 py-2 sm:h-[38px] flex items-center justify-center text-base sm:text-lg">
                List Your Property
              </Button>
            </div>
          </div>

          {/* Right Section - Service Plans Grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className="relative backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/20 p-4 transition-all duration-300 flex items-center justify-start gap-4"
                  style={{ backgroundColor: plan.title === "Standard Plan" ? '#00000042' : '#FFFFFF14' }}
                >
                  {/* Popular Tag */}
                  {plan.isPopular && (
                    <div className="absolute -top-4 left-0 right-0 mx-auto w-fit z-10 bg-primary-gradient rounded-lg sm:rounded-xl px-2  py-1  flex items-center gap-1 shadow-lg">
                      <div className='text-xs'>
                        <StarIcon />
                      </div>
                      <span className="text-white text-xs font-bold whitespace-nowrap">POPULAR</span>
                    </div>
                  )}

                  {/* Icon Container */}
                  <div className={`${plan.iconBg} rounded-xl sm:rounded-2xl h-[48px] w-[48px] border border-white/30 flex items-center justify-center shrink-0`}>
                    <span className={`${plan.iconColor} flex items-center justify-center`}>
                      {plan.icon}
                    </span>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-white font-bold text-base sm:text-lg md:text-xl">
                      {plan.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/80 text-sm sm:text-base">
                      {plan.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OwnersAgentsSection;

