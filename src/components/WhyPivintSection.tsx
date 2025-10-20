import { useEffect, useRef } from "react";
import { Check, X } from "lucide-react";

const weAre = [
  "CFOs & controllers who lived the pain",
  "Automation specialists (not generalist consultants)",
  "Fixed-scope, fixed-price builders",
  "Focused on $10-50M B2B companies",
  "Transparent about ROI and timelines"
];

const weAreNot = [
  "Generic software vendors",
  "Hourly consultants with scope creep",
  "Enterprise platforms that take 18 months",
  "Offshore dev shops that disappear",
  "Sales-heavy, delivery-light firms"
];

export const WhyPivintSection = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-x-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 lg:py-32 bg-neutral-light">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-heading font-bold text-center mb-4">
          Why Leaders Trust PIVINT
        </h2>
        <p className="text-xl text-neutral-mid text-center mb-16">
          We're not for everyone — and that's the point
        </p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* We Are */}
          <div
            ref={leftRef}
            className="opacity-0 -translate-x-8 transition-all duration-700 bg-card rounded-xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
          >
            <h3 className="text-2xl font-heading font-bold mb-6 text-primary flex items-center gap-2">
              <Check className="w-7 h-7" />
              We Are
            </h3>
            <ul className="space-y-4">
              {weAre.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* We're Not */}
          <div
            ref={rightRef}
            className="opacity-0 translate-x-8 transition-all duration-700 bg-card rounded-xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
          >
            <h3 className="text-2xl font-heading font-bold mb-6 text-neutral-mid flex items-center gap-2">
              <X className="w-7 h-7" />
              We're Not
            </h3>
            <ul className="space-y-4">
              {weAreNot.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-neutral-mid/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-neutral-mid" />
                  </div>
                  <span className="text-neutral-mid">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-divider hidden lg:block"></div>
      </div>
    </section>
  );
};
