import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FooterSection from './lib/sections/FooterSection';
import FourthSection from './lib/sections/FourthSection';
import SecondSection from './lib/sections/SecondSection';

import ThirdSection from './lib/sections/ThirdSection';

function App() {
  return (
    <div className="flex h-full w-dvw flex-col items-center bg-[#F8F4F2]">
      <div className="flex h-full w-full flex-col items-center">
        <Header />
        <HeroSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FooterSection />
      </div>
    </div>
  );
}

export default App;
