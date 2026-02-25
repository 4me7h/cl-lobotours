import './App.scss';
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import Schedules from './components/Schedules';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Services from './components/Services';

// import { Element } from 'react-scroll';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
    <>
      <Header />
      <Hero />
      <About />
      <Schedules />
      <Services />
      <Contact />
      <Footer />
    </>
    </ParallaxProvider>
  );
}

export default App;
