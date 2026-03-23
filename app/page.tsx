import TopBar        from "@/components/sections/TopBar";
import Hero          from "@/components/sections/Hero";
import Pain          from "@/components/sections/Pain";
import Story         from "@/components/sections/Story";
import Product       from "@/components/sections/Product";
import Testimonials  from "@/components/sections/Testimonials";
import Offer         from "@/components/sections/Offer";
import FAQ           from "@/components/sections/FAQ";
import FinalCTA      from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <TopBar />
      <Hero />
      <Pain />
      <Story />
      <Product />
      <Testimonials />
      <Offer />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
