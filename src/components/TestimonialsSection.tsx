import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "PIVINT cut our month-end close from 12 days to 4. Our CFO finally has time to think strategically instead of chasing spreadsheets.",
    name: "Sarah Chen",
    role: "VP Finance",
    company: "Acme Manufacturing",
    revenue: "$28M revenue"
  },
  {
    quote: "The ROI calculator they built shows us real-time profitability by customer. We've already identified $200K in underpriced contracts we would have renewed blindly.",
    name: "Michael Torres",
    role: "CFO",
    company: "TechFlow Solutions",
    revenue: "$42M revenue"
  },
  {
    quote: "Best $25K we've ever spent. The team gets 30+ hours back every week, and our board reporting went from painful to painless.",
    name: "Jennifer Kim",
    role: "Controller",
    company: "GreenLeaf Logistics",
    revenue: "$18M revenue"
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="proof" className="py-20 lg:py-32 bg-background border-t border-divider">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-heading font-bold text-center mb-4">
          Results from Companies Like Yours
        </h2>
        <p className="text-xl text-neutral-mid text-center mb-16">
          Real feedback from $10-50M B2B companies
        </p>

        <div className="max-w-4xl mx-auto relative">
          {/* Quote Mark Background */}
          <div className="absolute -top-8 -left-4 text-9xl text-primary/10 font-serif leading-none select-none">
            "
          </div>

          {/* Testimonial Card */}
          <div className="relative bg-card rounded-xl p-12 shadow-[0_2px_8px_rgba(0,0,0,0.12)] min-h-[280px] flex flex-col justify-between">
            <div className="mb-8">
              <p className="text-xl lg:text-2xl leading-relaxed text-foreground font-medium">
                {testimonials[currentIndex].quote}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-heading font-bold text-lg">{testimonials[currentIndex].name}</p>
                <p className="text-neutral-mid">{testimonials[currentIndex].role}</p>
                <p className="text-sm text-neutral-mid">
                  {testimonials[currentIndex].company} • {testimonials[currentIndex].revenue}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex gap-2">
                <button
                  onClick={goToPrevious}
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary transition-colors duration-150 flex items-center justify-center"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goToNext}
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary transition-colors duration-150 flex items-center justify-center"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "bg-primary w-8" : "bg-neutral-mid/30"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
