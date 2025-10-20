import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Search, FileText, Code, Headphones } from "lucide-react";

interface ProcessStepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  metric: string;
  isLast?: boolean;
}

const ProcessStep = ({ number, icon, title, description, metric, isLast }: ProcessStepProps) => {
  const stepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.add("opacity-100", "translate-x-0");
        }
      },
      { threshold: 0.3 }
    );

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={stepRef} className="opacity-0 -translate-x-8 transition-all duration-700 flex gap-6 items-start">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl mb-2 shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
          {number}
        </div>
        {!isLast && <div className="w-0.5 h-24 bg-gradient-to-b from-primary to-primary/20"></div>}
      </div>
      
      <div className="flex-1 pb-12">
        <div className="flex items-center gap-3 mb-3">
          <div className="text-primary">{icon}</div>
          <h3 className="text-2xl font-heading font-semibold">{title}</h3>
        </div>
        <p className="text-neutral-mid mb-3">{description}</p>
        <p className="text-sm font-semibold text-primary">{metric}</p>
      </div>
    </div>
  );
};

export const ProcessSection = () => {
  return (
    <section id="process" className="py-20 lg:py-32 bg-pale-blue">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-heading font-bold text-center mb-4">
          Our 4-Step Process
        </h2>
        <p className="text-xl text-neutral-mid text-center mb-16">
          Simple, Fast, Fixed-Price
        </p>

        <div className="max-w-3xl mx-auto mb-12">
          <ProcessStep
            number={1}
            icon={<Search className="w-6 h-6" />}
            title="Discovery Call"
            description="30-minute conversation to understand your biggest bottlenecks and automation opportunities."
            metric="No cost • No obligation"
          />
          
          <ProcessStep
            number={2}
            icon={<FileText className="w-6 h-6" />}
            title="Process Deep Dive"
            description="We map every manual step, quantify time spent, and design your automation roadmap with exact ROI projections."
            metric="1 week • $2,500 (free if we can't find 40+ hrs/week savings)"
          />
          
          <ProcessStep
            number={3}
            icon={<Code className="w-6 h-6" />}
            title="Implementation"
            description="Fixed-scope build of your automation workflows. You approve each milestone before we proceed."
            metric="4-8 weeks • $15K-40K (depends on scope)"
          />
          
          <ProcessStep
            number={4}
            icon={<Headphones className="w-6 h-6" />}
            title="Support & Optimization"
            description="Ongoing monitoring, troubleshooting, and enhancements as your business evolves."
            metric="Optional • $2K-5K/month"
            isLast
          />
        </div>

        <div className="bg-success/10 border-2 border-success rounded-xl p-8 max-w-2xl mx-auto text-center mb-8">
          <h3 className="text-2xl font-heading font-bold mb-3">Our Guarantee</h3>
          <p className="text-lg">
            <span className="font-semibold">40+ hours/week savings</span> or your Deep Dive is free.
          </p>
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <a href="#cta">Book Discovery →</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
