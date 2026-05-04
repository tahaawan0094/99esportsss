import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/faq")({
  component: FAQ,
});

function fadeUp(delay = 0) {
  return {
    initial: { y: 20, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  };
}

const faqs = [
  {
    question: "What is 99 Esports?",
    answer:
      "99 Esports is a professional PUBG Mobile esports team based in Pakistan. We compete in top-tier tournaments, focusing on high-level gameplay, strategic teamwork, and developing world-class players to dominate the competitive gaming scene.",
  },
  {
    question: "How does 99 Esports operate?",
    answer:
      "Our squad operates through rigorous daily scrims, deep tactical reviews, and intense mechanical practice. We assign dedicated roles—such as In-Game Leader (IGL), Assaulters, and Support—to make sure our synergy is perfect during high-pressure tournament lobbies.",
  },
  {
    question: "How can I join the team or try out?",
    answer:
      "We're always scouting for exceptional talent. If you believe you have the skills to compete at the highest level, keep an eye on our Instagram for open tryout announcements. You can also reach out via our contact page with your competitive experience and highlights.",
  },
  {
    question: "Where can I watch your tournaments and gameplay?",
    answer:
      "We regularly post tournament highlights, clutches, and team updates on our official Instagram and YouTube channels. Make sure to follow @esports99official to catch all the action.",
  },
  {
    question: "Do you sell official team merchandise?",
    answer:
      "Yes! We have a dedicated lineup of official jerseys and team apparel. You can browse and order our latest drops directly from the Team Gear section on our website.",
  },
];

function FAQ() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div {...fadeUp()} className="mb-12">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Back to Home
          </a>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-wider text-foreground mb-4">
            FREQUENTLY ASKED
            <span className="text-primary block mt-2">QUESTIONS</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Everything you need to know about 99 Esports, our operations, and how we compete.
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              {...fadeUp(index * 0.1)}
              className="bg-surface p-6 md:p-8 rounded-sm border border-border/60 hover:border-primary/40 transition-colors"
            >
              <h3 className="font-display text-lg font-bold text-foreground tracking-wide mb-3">
                {faq.question}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
