import { SmoothScroll } from '@/components/SmoothScroll';
import { Cursor } from '@/components/Cursor';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { FeaturedWork } from '@/components/FeaturedWork';
import { Marquee } from '@/components/Marquee';
import { Services } from '@/components/Services';
import { News } from '@/components/News';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <>
      <SmoothScroll />
      <Cursor />
      <main className="bg-background text-foreground">
        <Navbar />
        <Hero />
        <FeaturedWork />
        <Marquee />
        <Services />
        <News />
        <Footer />
      </main>
    </>
  );
}

export default App;
