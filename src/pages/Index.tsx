import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Menu from '../components/Menu';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Menu />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;