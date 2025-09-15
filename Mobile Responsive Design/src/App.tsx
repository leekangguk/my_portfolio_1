import { Header } from "./components/Header";
import { RewardSection } from "./components/RewardSection";
import { ProductGrid } from "./components/ProductGrid";
import { ProductSpecs } from "./components/ProductSpecs";
import { StorySection } from "./components/StorySection";
import { LivingIdeaShop } from "./components/LivingIdeaShop";
import { CurrentSeries } from "./components/CurrentSeries";
import { JournalSection } from "./components/JournalSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <RewardSection />
        <ProductGrid />
        <ProductSpecs />
        <StorySection />
        <LivingIdeaShop />
        <CurrentSeries />
        <JournalSection />
      </main>
      <Footer />
    </div>
  );
}