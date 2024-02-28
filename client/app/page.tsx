import CTA from './(components)/CTA';
import Cards from './(components)/Cards';
import Categories from './(components)/Categories';
import Footer from './(components)/Footer';
import HeroSection from './(components)/HeroSection';
import Testimonial from './(components)/Testimonial';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Cards />
      <Categories />
      <Testimonial />
      <CTA />
      <Footer />
    </main>
  );
}
