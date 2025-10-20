import { useEffect, useRef } from "react";
import { BookOpen, BarChart3, GitBranch } from "lucide-react";

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  benefit: string;
  example: string;
  timeSaved: string;
  delay: number;
}

const SolutionCard = ({ icon, title, benefit, example, timeSaved, delay }: SolutionCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.add("opacity-100", "translate-y-0");
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="opacity-0 translate-y-8 bg-card rounded-xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)] border border-border transition-all duration-500 hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,0,0.12)] hover:-translate-y-1 hover:rotate-1"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
        {icon}
      </div>
      
      <h3 className="text-2xl font-heading font-semibold mb-3">{title}</h3>
      
      <p className="text-primary font-medium mb-4">{benefit}</p>
      
      <p className="text-neutral-mid mb-6">{example}</p>
      
      <div className="inline-block px-4 py-2 bg-success/20 rounded-lg">
        <span className="text-sm font-semibold text-foreground">Time Saved: {timeSaved}</span>
      </div>
    </div>
  );
};

export const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-heading font-bold text-center mb-4">
          We Fix Three Core Bottlenecks
        </h2>
        <p className="text-xl text-neutral-mid text-center mb-16 max-w-3xl mx-auto">
          The manual work that keeps your finance and ops teams stuck in spreadsheets instead of strategic decisions
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <SolutionCard
            icon={<BookOpen className="w-8 h-8" />}
            title="Close Process Automation"
            benefit="Cut close time by 60%"
            example="Automated journal entries, reconciliations, and variance reporting that used to take days now run overnight."
            timeSaved="50+ hrs/month"
            delay={0}
          />
          
          <SolutionCard
            icon={<BarChart3 className="w-8 h-8" />}
            title="Real-Time Reporting"
            benefit="Always-current dashboards"
            example="Live revenue, cash, and KPI tracking that updates automatically instead of waiting for month-end reports."
            timeSaved="30+ hrs/month"
            delay={150}
          />
          
          <SolutionCard
            icon={<GitBranch className="w-8 h-8" />}
            title="Process Integration"
            benefit="Connect fragmented systems"
            example="Data flows seamlessly between your ERP, CRM, and billing platforms without manual exports or CSV gymnastics."
            timeSaved="40+ hrs/month"
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};
