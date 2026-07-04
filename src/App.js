import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// Home components
import HomeNavbar from './Components/home/Navbar';
import Hero from './Components/home/Hero';
import Campaign from './Components/home/Campaign';
import Trusted from './Components/home/Trusted';
import HowItWorks from './Components/home/HowItWorks';
import VoicesOfCompassion from './Components/home/VoicesOfCompassion';
import HomeFooter from './Components/home/Footer';

// Campaign components
import CampaignNavbar from './Components/campaign/Navbar';
import Firstdonorbanner from './Components/campaign/FirstDonorbanner';
import Products from './Components/campaign/Products';
import Campaignstories from './Components/campaign/Campaignstories';
import Donationcard from './Components/campaign/Donationcard';
import CampaignFooter from './Components/campaign/Footer';
import Imagecarousal from './Components/campaign/Imagecarousal';

// Home Page
function HomePage() {
  return (
    <div>
      <HomeNavbar />
      <Hero />
      <Campaign />
      <Trusted />
      <HowItWorks />
      <VoicesOfCompassion />
      <HomeFooter />
    </div>
  );
}


function CampaignPage() {
  return (
    <>
      <CampaignNavbar />
      <div style={{ backgroundColor: '#FDE8D8' }}>
        <div className='campaign-layout'>
          <Imagecarousal />
          <Donationcard />
        </div>
        <Firstdonorbanner />
        <Products />
        <Campaignstories />
      </div>
      <CampaignFooter />
    </>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/campaign" element={<CampaignPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

