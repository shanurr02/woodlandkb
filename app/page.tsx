// app/page.tsx
import DreamDesign from './components/Dreamdesign';
import Footer from './components/Footer';
import HeroSection from './components/Herosection';
import NewsletterSection from './components/NewsletterSection';
import OurServices from './components/Ourservice';
import Testimonials from './components/Testimonials';
import ThreeSteps from './components/ThreeSteps';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <OurServices />
      <DreamDesign />
      <ThreeSteps />
      <Testimonials />
      <NewsletterSection />
      <Footer />




    </div>
  );
}
