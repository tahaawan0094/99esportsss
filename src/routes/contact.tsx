// trigger watcher
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative py-20 px-4 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12 text-center"
          >
            <p className="text-primary tracking-[0.3em] text-xs font-semibold mb-4">GET IN TOUCH</p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              CONTACT US
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Have a question, sponsorship inquiry, or want to join the team? Drop us a message below and we'll get back to you as soon as possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="bg-surface border border-border/40 p-8 sm:p-12 rounded-3xl shadow-lg"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-background border border-border/60 rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-background border border-border/60 rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-background border border-border/60 rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-background border border-border/60 rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="How can we help?"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-sm bg-primary px-8 py-3 text-xs font-semibold tracking-[0.2em] text-primary-foreground hover:bg-primary/90 hover:shadow-[var(--shadow-glow)] transition-all uppercase"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <div className="mt-12 text-center">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-sm border border-primary/70 bg-background px-6 py-3 text-xs font-semibold tracking-[0.35em] uppercase text-primary transition-colors hover:bg-primary hover:text-primary-foreground whitespace-nowrap"
            >
              BACK TO HOME
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
