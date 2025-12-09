import Hero from './Hero';
import SearchBar from './SearchBar';
import ProfileSection from './ProfileSection';
import NewestListing from './NewestListing';
import BrowsePropertyUK from './BrowsePropertyUK';
import OwnersAgentsSection from './OwnersAgentsSection';
import Header from '../common/header';
import Footer from '../common/footer';
import WhyChooseSection from './whyChooseSection';
import Features from './features';

function LandingPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Header/>
      <Hero />
      <SearchBar />
      <ProfileSection />
      <NewestListing />
      <BrowsePropertyUK />
      <WhyChooseSection/>
      <Features/>
      <OwnersAgentsSection />
      <Footer/>
    </div>
  );
}

export default LandingPage;


