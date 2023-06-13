import PricingFAQ from "features/pricing/PricingFAQ";
import PricingHero from "features/pricing/PricingHero";
import PricingTable from "features/pricing/table/PricingTable";

const Pricing = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-woot-dark">
      <PricingHero />
      <PricingTable />
      <PricingFAQ /> 
    </main>
  );
};

export default Pricing;
