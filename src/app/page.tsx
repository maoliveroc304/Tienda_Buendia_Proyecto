import Hero from "@/components/Hero";
import PopularCategories from "@/components/PopularCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import ProductSuggestion from "@/components/ProductSuggestion";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PopularCategories />
      <FeaturedProducts />
      <ProductSuggestion />
    </>
  );
}
