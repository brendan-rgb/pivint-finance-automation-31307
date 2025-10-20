import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ResultsSection } from "@/components/ResultsSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { WhyPivintSection } from "@/components/WhyPivintSection";
import { SecuritySection } from "@/components/SecuritySection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ResultsSection />
        <SolutionsSection />
        <ProcessSection />
        <PricingSection />
        <TestimonialsSection />
        <WhyPivintSection />
        <SecuritySection />
        <FAQSection />
        <CTASection />
      </main>
    </div>
  );
};

export default Index;
