import Navbar from './Components/Navbar';
import Firstdonorbanner from './Components/Firstdonorbanner';
import './App.css';
import Products from './Components/Products';
import Campaignstories from './Components/Campaignstories';
import Donationcard from './Components/Donationcard';
import Footer from './Components/Footer';
import Imagecarousal from './Components/Imagecarousal';


function App() {
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: '#FDE8D8 ' }}>
        <div className='campaign-layout'>
          <Imagecarousal />
          <Donationcard />
        </div>
        <Firstdonorbanner />
        <Products />
        <Campaignstories />
      </div>
      <Footer />
    </>
  );
}

export default App;
