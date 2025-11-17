
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import ForWho from './components/ForWho';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import VideoSection from './components/VideoSection';
import Creator from './components/Creator';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-950">
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <ForWho />
      <Benefits />
      <VideoSection />
      <Pricing />
      <Testimonials />
      <Creator />
      <CTA />
      <Footer />
    </div>
  );
}
