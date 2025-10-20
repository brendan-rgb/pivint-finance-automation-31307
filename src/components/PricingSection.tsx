import { useEffect, useRef } from "react";

const pricingRows = [
  { service: "Process Deep Dive", price: "$2,500", details: "1 week • Full automation roadmap" },
  { service: "Implementation", price: "$15K-40K", details: "4-8 weeks • Fixed scope build" },
  { service: "Ongoing Support", price: "$2K-5K/mo", details: "Optional • Monitoring & optimization" },
];

export const PricingSection = () => {
  const tableRef = useRef<HTMLDivElement>(null);
  const calculatorRef = useRef<HTMLDivElement>(null);

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

    if (tableRef.current) observer.observe(tableRef.current);
    if (calculatorRef.current) observer.observe(calculatorRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-heading font-bold text-center mb-4">
          Transparent Numbers. No Surprises.
        </h2>
        <p className="text-xl text-neutral-mid text-center mb-16">
          Fixed pricing that pays for itself in months, not years
        </p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Pricing Table */}
          <div
            ref={tableRef}
            className="opacity-0 -translate-x-8 transition-all duration-700 bg-card rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.12)] overflow-hidden"
          >
            <div className="bg-navy text-primary-foreground p-6">
              <h3 className="text-2xl font-heading font-bold">Investment Breakdown</h3>
            </div>
            <div className="divide-y divide-divider">
              {pricingRows.map((row, idx) => (
                <div
                  key={row.service}
                  className="p-6 hover:bg-neutral-light transition-colors duration-150"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-heading font-semibold text-lg">{row.service}</h4>
                    <span className="text-2xl font-bold text-primary">{row.price}</span>
                  </div>
                  <p className="text-sm text-neutral-mid">{row.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ROI Calculator */}
          <div
            ref={calculatorRef}
            className="opacity-0 translate-x-8 transition-all duration-700 bg-gradient-to-br from-teal to-primary rounded-xl p-8 text-primary-foreground shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
          >
            <h3 className="text-2xl font-heading font-bold mb-6">The Math That Matters</h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-lg opacity-90 mb-2">Typical time savings:</p>
                <p className="text-4xl font-bold">40 hours/week</p>
              </div>

              <div className="h-px bg-primary-foreground/30"></div>

              <div>
                <p className="text-lg opacity-90 mb-2">Value per hour:</p>
                <p className="text-4xl font-bold">$75</p>
              </div>

              <div className="h-px bg-primary-foreground/30"></div>

              <div>
                <p className="text-lg opacity-90 mb-2">Annual value created:</p>
                <p className="text-5xl font-bold">$156,000</p>
              </div>

              <div className="bg-primary-foreground/20 rounded-lg p-4 mt-6">
                <p className="text-sm font-medium">
                  Even at the high end ($40K implementation), you're looking at a 3-month payback period.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-neutral-mid mt-12 text-lg">
          Investment range: <span className="font-semibold text-foreground">$17.5K - $42.5K</span> for full implementation • 
          <span className="font-semibold text-primary ml-2">3-5 month payback</span>
        </p>
      </div>
    </section>
  );
};
