import logo from "./logo.svg";
import "./App.css";
import { Header } from "./component/Header/Header";
import Menubar from "./component/Menubar/Menubar";
import HeroSection from "./component/HeroSection/HeroSection";
import Banner from "./component/Banner/Banner";
import LatestPost from "./component/LatestPost/LatestPost";
import Download from "./component/Download/Download";
import PopulerPost from "./component/PopulerPosts/PopulerPost";
import BusinessOwner from "./component/BusinessOwner/BusinessOwner";
// import Header from './component/Header/Header';
import postX from "./images/download_option.png";
import addBaner from "./images/Ad 2.png";
import RandomPosts from "./component/RandomPosts/RandomPosts";
import InstagramFeed from "./component/InstagramFeed/InstagramFeed";
import Subscribe from "./component/SubscribeSection/Subscribe";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Menubar />
      <HeroSection />
      <Banner />
      <LatestPost />
      <Download banner={postX} />
      <PopulerPost />
      <BusinessOwner />
      <Download banner={addBaner} />
      <RandomPosts/>
      <InstagramFeed/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
