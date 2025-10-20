import { useEffect, useRef } from "react";
import { Lock, Brain, FolderLock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SecurityTileProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const SecurityTile = ({ icon, title, description, delay }: SecurityTileProps) => {
  const tileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.add("opacity-100", "translate-y-0");
        }
      },
      { threshold: 0.3 }
    );

    if (tileRef.current) {
      observer.observe(tileRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={tileRef}
      className="opacity-0 translate-y-8 text-center transition-all duration-700"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-20 h-20 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-heading font-bold mb-2">{title}</h3>
      <p className="text-primary-foreground/80">{description}</p>
    </div>
  );
};

export const SecuritySection = () => {
  return (
    <section id="security" className="py-20 lg:py-32 bg-gradient-security relative overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 border-2 border-primary-foreground rotate-12"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 border-2 border-primary-foreground -rotate-12"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-heading font-bold text-center mb-4 text-primary-foreground">
          Bank-Grade Security. Total Control.
        </h2>
        <p className="text-xl text-primary-foreground/80 text-center mb-16">
          No Data Stored. You Own Everything.
        </p>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-12">
          <SecurityTile
            icon={<Lock className="w-10 h-10 text-primary-foreground" />}
            title="Encrypted in Transit & at Rest"
            description="All data flows are encrypted using industry-standard TLS and AES-256 protocols"
            delay={0}
          />
          
          <SecurityTile
            icon={<Brain className="w-10 h-10 text-primary-foreground" />}
            title="SOC 2 Aligned Processes"
            description="Our development and deployment practices follow SOC 2 Type II standards"
            delay={150}
          />
          
          <SecurityTile
            icon={<FolderLock className="w-10 h-10 text-primary-foreground" />}
            title="You Own and Control Your Data"
            description="We build in your environment. No data leaves your systems without your approval"
            delay={300}
          />
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-navy" asChild>
            <a href="#faq">View Full Security Details →</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
