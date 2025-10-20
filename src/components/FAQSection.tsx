import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do you guarantee 40+ hours/week in savings?",
    answer: "We map every manual step in your current process, quantify the time spent, and build automation that eliminates repetitive work. If we can't document at least 40 hours of weekly manual effort that we can automate, you don't pay for the Deep Dive."
  },
  {
    question: "What if our systems are too unique or complex?",
    answer: "We've worked with everything from legacy ERPs to custom-built platforms. The beauty of automation is that it bridges incompatible systems. If your data exists somewhere, we can work with it. During the Deep Dive, we'll map your specific setup and show you exactly how we'll connect the pieces."
  },
  {
    question: "How quickly will we see results?",
    answer: "Most clients see immediate time savings as soon as we deploy the first automation. Full implementation takes 4-8 weeks depending on scope. You'll have working prototypes within the first 2 weeks, and we deploy in phases so you're never waiting for everything at once."
  }
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-heading font-bold text-center mb-4">
          Quick Answers Before You Book
        </h2>
        <p className="text-xl text-neutral-mid text-center mb-16">
          The three things CFOs ask most often
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="bg-card rounded-xl border border-divider shadow-[0_1px_3px_rgba(0,0,0,0.08)] px-6 hover:border-primary transition-colors duration-150"
              >
                <AccordionTrigger className="text-lg font-heading font-semibold text-left hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-mid pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <a
              href="#cta"
              className="text-primary hover:text-teal-dark font-medium inline-flex items-center gap-2 transition-colors duration-150"
            >
              Need more details? → See Full FAQ Page
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
