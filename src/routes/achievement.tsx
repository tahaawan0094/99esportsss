import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

const imageModules = import.meta.glob(
  "../achievments/*.{png,jpg,jpeg,webp}",
  { eager: true, as: "url" },
) as Record<string, string>;

const images = Object.entries(imageModules)
  .map(([path, src]) => ({ path, src }))
  .sort((a, b) =>
    a.path.localeCompare(b.path, undefined, { numeric: true, sensitivity: "base" }),
  );

export const Route = createFileRoute("/achievement")({
  component: Achievement,
});

function Achievement() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative py-20 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12"
          >
            <p className="text-primary tracking-[0.3em] text-xs font-semibold mb-4">ACHIEVMENT</p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Tournament Wins & Screenshots
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              This page showcases the tournaments 99 Esports has won, with screenshots and highlights from our biggest victories.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {images.map((image, index) => (
              <motion.div
                key={image.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="overflow-hidden rounded-3xl border border-border/40 bg-surface"
              >
                <div className="aspect-square w-full overflow-hidden bg-background/60">
                  <img
                    src={image.src}
                    alt={`Achievement ${index + 1}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
