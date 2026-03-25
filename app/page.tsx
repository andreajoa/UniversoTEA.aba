import TopBar        from "@/components/sections/TopBar";
import Hero          from "@/components/sections/Hero";
import Pain          from "@/components/sections/Pain";
import Story         from "@/components/sections/Story";
import Author        from "@/components/sections/Author";
import Product       from "@/components/sections/Product";
import Benefits      from "@/components/sections/Benefits";
import Offer         from "@/components/sections/Offer";
import TargetAudience from "@/components/sections/TargetAudience";
import Results       from "@/components/sections/Results";
import FAQ           from "@/components/sections/FAQ";
import FinalCTA      from "@/components/sections/FinalCTA";
import Footer        from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <TopBar />
      <Hero />
      <Pain />
      <Story />
      <Author />
      <Product />
      <Benefits />
      <Offer />
      <TargetAudience />
      <Results />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
