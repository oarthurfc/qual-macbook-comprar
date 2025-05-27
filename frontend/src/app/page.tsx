import FilterSection from "./_components/fillter-section/FilterSection";
import Footer from "./_components/Footer";
import HeroSection from "./_components/HeroSection";
import RelationedProducts from "./_components/RelationedProducts";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FilterSection />
      <RelationedProducts />
      <Footer />
    </>
  );
}
