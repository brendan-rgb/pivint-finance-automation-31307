import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Calendar } from "lucide-react";

export const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.add("opacity-100", "translate-y-0");
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta" className="py-24 lg:py-32 bg-navy">
      <div
        ref={sectionRef}
        className="container mx-auto px-6 text-center opacity-0 translate-y-8 transition-all duration-700"
      >
        <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
          Let's Talk About Your Bottlenecks
        </h2>
        
        <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed">
          No sales pitch. Just a 30-minute conversation about what's slowing your team down—and whether we can fix it.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button variant="hero" size="lg" className="gap-3" asChild>
            <a href="mailto:hello@pivint.com?subject=Book%2030-Minute%20Discovery%20Call">
              <Calendar className="w-5 h-5" />
              Book 30-Minute Discovery Call →
            </a>
          </Button>
          
          <Button variant="hero-outline" size="lg" className="gap-3" asChild>
            <a href="mailto:hello@pivint.com?subject=Tell%20Me%20About%20My%20Situation">
              <Mail className="w-5 h-5" />
              Email Us Your Situation →
            </a>
          </Button>
        </div>

        <div className="border-t border-primary-foreground/20 pt-12">
          <div className="text-primary-foreground/60 mb-8">
            <p className="text-lg mb-2">
              <a href="mailto:hello@pivint.com" className="text-primary hover:text-teal-dark transition-colors duration-150">
                hello@pivint.com
              </a>
              {" "} | {" "}
              St. Louis, MO
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/70 mb-8">
            <a href="#process" className="hover:text-primary transition-colors duration-150">Process</a>
            <a href="#pricing" className="hover:text-primary transition-colors duration-150">Pricing</a>
            <a href="#proof" className="hover:text-primary transition-colors duration-150">Proof</a>
            <a href="#security" className="hover:text-primary transition-colors duration-150">Security</a>
            <a href="#faq" className="hover:text-primary transition-colors duration-150">FAQ</a>
          </div>

          <p className="text-primary-foreground/50 text-sm">
            © 2025 Pivint LLC · Automation for $10-50M B2B companies.
          </p>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-12 w-12 h-12 rounded-full bg-primary hover:bg-teal-dark text-primary-foreground shadow-[0_0_12px_rgba(0,182,176,0.5)] transition-all duration-150 hover:scale-110 flex items-center justify-center mx-auto"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      </div>
    </section>
  );
};
