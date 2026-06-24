import Navbar from './Components/Navbar';
import Firstdonorbanner from './Components/Firstdonorbanner';
import './App.css';
import Products from './Components/Products';
import Campaignstories from './Components/Campaignstories';
import Donationcard from './Components/Donationcard';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Firstdonorbanner />
    <Products />
    <Campaignstories />
    <Donationcard />
    <Footer />
    </>
  );
}

export default App;
