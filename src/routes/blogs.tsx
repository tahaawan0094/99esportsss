import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";

export const Route = createFileRoute("/blogs")({
  component: Blogs,
});

function fadeUp(delay = 0) {
  return {
    initial: { y: 20, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  };
}

const blogPosts = [
  {
    title: "How 99 Esports is Dominating the PUBG Mobile Scene",
    excerpt: "A deep dive into our team's strategies and the hard work behind our recent tournament victories.",
    date: "May 4, 2024",
    author: "99 Admin",
    category: "Esports",
  },
  {
    title: "Top 5 Tips for Rising PUBG Mobile Players",
    excerpt: "Learn from the pros. We break down the essential skills you need to climb the ranks in PUBG Mobile.",
    date: "April 28, 2024",
    author: "MOKO",
    category: "Guides",
  },
  {
    title: "Behind the Scenes: A Day in the Life of a 99 Pro",
    excerpt: "Ever wondered what it's like to play for a professional esports team? Join us for an exclusive look.",
    date: "April 15, 2024",
    author: "Alpha",
    category: "Team Life",
  },
];

function Blogs() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp()} className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-wider text-foreground mb-6">
            OUR <span className="text-gradient-primary">BLOGS</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Latest news, pro tips, and behind-the-scenes stories from the 99 Esports squad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              {...fadeUp(index * 0.1)}
              whileHover={{ y: -10 }}
              className="bg-surface group relative clip-corner-sm border border-border/50 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-primary mb-4">
                  <span className="bg-primary/10 px-3 py-1 rounded-full uppercase">{post.category}</span>
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-border/40">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {post.date}
                    </span>
                  </div>
                  <a
                    href="#"
                    className="text-primary text-xs font-bold tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    READ MORE <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
