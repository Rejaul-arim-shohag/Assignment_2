import logo from './logo.svg';
import './App.css';
import { Header } from './component/Header/Header';
import Menubar from './component/Menubar/Menubar';
import HeroSection from './component/HeroSection/HeroSection';
import Banner from './component/Banner/Banner';
// import Header from './component/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Menubar />
      <HeroSection />
      <Banner />
    </div>
  );
}

export default App;
