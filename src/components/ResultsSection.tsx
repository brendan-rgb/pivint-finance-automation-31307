import { useEffect, useRef, useState } from "react";
import { TrendingDown, Clock, DollarSign } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  before: string;
  after: string;
  delay: number;
}

const StatCard = ({ icon, title, before, after, delay }: StatCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`bg-card rounded-xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.12)] transition-all duration-500 hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)] hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-heading font-semibold text-center mb-4">{title}</h3>
      <div className="flex items-center justify-center gap-3 text-3xl font-bold">
        <span className="text-neutral-mid line-through">{before}</span>
        <span className="text-primary">→</span>
        <span className="text-primary">{after}</span>
      </div>
    </div>
  );
};

export const ResultsSection = () => {
  return (
    <section id="results" className="py-20 lg:py-32 bg-neutral-light">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-heading font-bold text-center mb-4">
          Results That Matter
        </h2>
        <p className="text-xl text-neutral-mid text-center mb-16">
          Real time savings from companies like yours
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <StatCard
            icon={<Clock className="w-8 h-8" />}
            title="Close Time"
            before="12 days"
            after="4 days"
            delay={0}
          />
          <StatCard
            icon={<TrendingDown className="w-8 h-8" />}
            title="Manual Reporting"
            before="3 days"
            after="overnight"
            delay={150}
          />
          <StatCard
            icon={<DollarSign className="w-8 h-8" />}
            title="Value Created"
            before="$0"
            after="$156K/yr"
            delay={300}
          />
        </div>

        <p className="text-center text-lg text-neutral-mid font-medium">
          Typical payback in 3-5 months
        </p>
      </div>
    </section>
  );
};
