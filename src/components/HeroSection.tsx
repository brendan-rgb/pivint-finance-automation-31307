import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const trustChips = [
  "Fixed Scope",
  "Fixed Price",
  "4-8 Week Build",
  "You Own Everything"
];

export const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground space-y-8">
            <h1 className="text-5xl lg:text-6xl font-heading font-bold leading-tight opacity-0 animate-on-scroll animate-fade-up">
              Automate the financial and operational work that's slowing you down.
            </h1>
            
            <p className="text-xl opacity-80 opacity-0 animate-on-scroll animate-fade-up stagger-1">
              Built for $10-50M B2B companies scaling faster than their processes.
            </p>
            
            <p className="text-lg opacity-70 opacity-0 animate-on-scroll animate-fade-up stagger-2">
              No more manual spreadsheets. No more delayed reporting. Just automated workflows that give your team hours back every week.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-on-scroll animate-fade-up stagger-3">
              <Button variant="hero" size="lg" asChild>
                <a href="#cta">Get Your Automation Roadmap →</a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#results">See Typical Results ↓</a>
              </Button>
            </div>

            {/* Trust Chips */}
            <div className="flex flex-wrap gap-3 opacity-0 animate-on-scroll animate-fade-up stagger-4">
              {trustChips.map((chip) => (
                <div
                  key={chip}
                  className="flex items-center gap-2 px-4 py-2 border-2 border-primary rounded-lg bg-primary/10 backdrop-blur-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{chip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:block opacity-0 animate-on-scroll animate-fade-in stagger-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal to-primary opacity-20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-primary/10 backdrop-blur-md rounded-3xl p-8 border-2 border-primary/30">
                <div className="space-y-4">
                  {/* Flow Diagram Placeholder */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-primary/30 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-lg bg-primary"></div>
                    </div>
                    <div className="flex-1 h-2 bg-primary/30 rounded-full">
                      <div className="h-full w-2/3 bg-primary rounded-full"></div>
                    </div>
                    <div className="w-16 h-16 rounded-xl bg-primary/30 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-lg bg-primary"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-teal/30 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-lg bg-teal"></div>
                    </div>
                    <div className="flex-1 h-2 bg-teal/30 rounded-full">
                      <div className="h-full w-3/4 bg-teal rounded-full"></div>
                    </div>
                    <div className="w-16 h-16 rounded-xl bg-teal/30 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-lg bg-teal"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-success/30 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-lg bg-success"></div>
                    </div>
                    <div className="flex-1 h-2 bg-success/30 rounded-full">
                      <div className="h-full w-full bg-success rounded-full"></div>
                    </div>
                    <div className="w-16 h-16 rounded-xl bg-success/30 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-success" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
