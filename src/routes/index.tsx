import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Menu,
  X,
  Instagram,
  Youtube,
  Twitter,
  MessageCircle,
  ArrowRight,
  Mail,
  AtSign,
} from "lucide-react";
import logo from "@/assets/logo.png";
import heroSoldiers from "@/assets/hero-soldiers.jpg";
import playerImg from "@/assets/player.jpg";
import news1 from "@/assets/news1.jpg";
import news3 from "@/assets/news3.jpg";
import ctaSoldier from "@/assets/cta-soldier.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "/about" },
  { label: "TEAM GEAR", href: "/team-gear" },
  { label: "ACHIEVMENT", href: "/achievement" },
  { label: "ROSTER", href: "#roster" },
  { label: "NEWS", href: "#news" },
  { label: "SPONSORS", href: "#sponsors" },
  { label: "CONTACT", href: "#contact" },
];

const ROSTER = [
  { name: "『99』MOKO", role: "IGL" },
  { name: "『99』TムHム", role: "ASSAULTER" },
  { name: "『99』ムLPHA", role: "SUPPORT" },
  { name: "『99』PIKA", role: "E-Fragger" },
  { name: "『99』TムHIR", role: "FRAGGER" },
];

const NEWS = [
  {
    date: "MAY 20, 2024",
    title: "99 ESPORTS",
    accent: "DOMINATES THE LOBBY!",
    body: "99 Esports takes the chicken dinner in the Pro Scrims Finals!",
    img: news1,
  },
  {
    date: "MAY 15, 2024",
    title: "NEW ROSTER",
    accent: "ANNOUNCEMENT",
    body: "Introducing our new lineup. Stronger. Faster. United.",
    img: null,
  },
  {
    date: "MAY 10, 2024",
    title: "BACK IN",
    accent: "ACTION",
    body: "99 Esports is back and ready for the next challenge.",
    img: news3,
  },
];

const ACHIEVEMENT_IMAGES = import.meta.glob(
  "../hd/*.{png,jpg,jpeg,webp}",
  { eager: true, as: "url" },
) as Record<string, string>;

const ACHIEVEMENT_SELECTION = ["hd1.png", "hd2.png", "hd3.png"];

const ACHIEVEMENTS = Object.entries(ACHIEVEMENT_IMAGES)
  .map(([path, src]) => ({ path, src }))
  .filter((image) => ACHIEVEMENT_SELECTION.some((name) => image.path.includes(name)))
  .sort(
    (a, b) =>
      ACHIEVEMENT_SELECTION.indexOf(
        ACHIEVEMENT_SELECTION.find((name) => a.path.includes(name))!,
      ) -
      ACHIEVEMENT_SELECTION.indexOf(
        ACHIEVEMENT_SELECTION.find((name) => b.path.includes(name))!,
      ),
  );

function Logo({ className = "" }: { className?: string }) {
  return <img src={logo} alt="99 Esports logo" className={className} />;
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <Logo className="h-8 w-8 object-contain" />
          <span className="font-display font-bold tracking-wider text-sm">99 ESPORTS</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-xs font-semibold tracking-widest text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex bg-gradient-primary text-primary-foreground font-display font-semibold tracking-widest text-xs px-5 py-2.5 rounded-sm hover:shadow-[var(--shadow-glow)] transition-shadow"
        >
          JOIN US
        </a>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="md:hidden border-t border-border bg-background overflow-hidden"
        >
          <div className="flex flex-col p-6 gap-4">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold tracking-widest text-muted-foreground hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img
          src={heroSoldiers}
          alt="99 Esports squad"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      {/* Floating embers */}
      <div className="hero-embers" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <span key={i} className={`ember ember-${i}`} />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <div className="flex justify-center mb-6">
          <img
            src={logo}
            alt="99 Esports"
            className="hero-logo h-40 md:h-56 w-auto drop-shadow-[0_0_40px_rgba(255,140,40,0.55)]"
          />
        </div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="font-display text-5xl md:text-7xl font-bold tracking-wider text-foreground"
        >
          99 Esports
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-5 text-lg md:text-xl font-medium leading-8 text-muted-foreground max-w-2xl mx-auto"
        >
          Professional PUBG Mobile esports team competing in tournaments, developing top-tier players,
          and building a strong presence in the competitive gaming scene.
        </motion.p>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.7 }}
          className="mt-4 text-primary font-semibold tracking-[0.3em] text-sm md:text-base"
        >
          BUILT DIFFERENT. DESIGNED TO WIN.
        </motion.p>
      </div>
    </section>
  );
}

function fadeUp(delay = 0) {
  return {
    initial: { y: 40, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  };
}

function About() {
  return (
    <section id="about" className="relative py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div {...fadeUp()}>
          <p className="text-primary tracking-[0.3em] text-xs font-semibold mb-4">ABOUT US</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
            PUBG MOBILE ESPORTS TEAM.
            <br />
            <span className="text-gradient-primary">BUILT TO WIN.</span>
          </h2>
          <div className="max-w-md">
            <p className="text-muted-foreground leading-relaxed">
              99 Esports is a competitive PUBG Mobile esports team focused on high-level gameplay, teamwork, and tournament success.
              Based in Pakistan, we are a rising esports organization competing in PUBG Mobile tournaments and building a strong presence
              in the global esports community.
            </p>
          </div>
          <a
            href="/about"
            className="inline-flex items-center gap-2 mt-8 border border-primary/70 text-foreground font-display tracking-widest text-xs px-6 py-3 rounded-sm hover:bg-primary hover:text-primary-foreground transition-all"
          >
            READ MORE <ArrowRight size={14} />
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(0.2)}
          className="relative"
        >
          <div className="relative bg-surface-2 clip-corner p-12 border border-primary/30 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
            {/* Diagonal scratches */}
            <div className="absolute top-4 left-4 w-16 h-0.5 bg-primary/40 rotate-45" />
            <div className="absolute top-8 left-2 w-10 h-0.5 bg-primary/30 rotate-45" />
            <div className="absolute bottom-6 right-6 w-12 h-0.5 bg-primary/40 rotate-45" />
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex flex-col items-center"
            >
              <img src={logo} alt="" className="h-32 w-auto mb-4 drop-shadow-[0_0_30px_rgba(255,140,40,0.5)]" />
              <span className="font-display text-2xl tracking-widest text-primary">99 ESPORTS</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Roster() {
  return (
    <section id="roster" className="py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp()} className="flex flex-col items-center justify-center gap-4 mb-14 sm:flex-row sm:gap-6">
          <span className="h-px w-10 bg-primary/60" />
          <h2 className="font-display text-primary tracking-[0.4em] text-sm font-semibold">OUR ROSTER</h2>
          <span className="h-px w-10 bg-primary/60" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5">
          {ROSTER.map((p, i) => (
            <motion.div
              key={p.name}
              {...fadeUp(i * 0.08)}
              whileHover={{ y: -8 }}
              className="group relative bg-surface clip-corner-sm border border-primary/20 overflow-hidden cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={playerImg}
                  alt={p.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                <img
                  src={logo}
                  alt=""
                  className="absolute top-3 left-1/2 -translate-x-1/2 h-8 w-auto opacity-90"
                />
              </div>
              <div className="p-4 text-center bg-surface">
                <h3 className="font-display font-bold tracking-wider text-foreground">{p.name}</h3>
                <p className="text-primary text-xs tracking-[0.25em] font-semibold mt-1">{p.role}</p>
              </div>
              <span className="absolute inset-0 ring-1 ring-primary/0 group-hover:ring-primary/60 transition-all" />
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp(0.3)} className="text-center mt-12">
          <a
            href="#roster"
            className="inline-flex items-center gap-2 border border-primary/70 text-foreground font-display tracking-widest text-xs px-7 py-3 rounded-sm hover:bg-primary hover:text-primary-foreground transition-all"
          >
            VIEW FULL ROSTER
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function News() {
  return (
    <section id="news" className="py-24 px-4 sm:px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-10">
          <motion.h2 {...fadeUp()} className="font-display text-primary tracking-[0.3em] text-sm font-semibold">
            ACHIEVEMENTS
          </motion.h2>
          <motion.p
            {...fadeUp(0.1)}
            className="text-xs tracking-widest text-muted-foreground"
          >
            Tournament screenshots from our recent wins
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {ACHIEVEMENTS.slice(0, 3).map((image, index) => (
            <motion.div
              key={image.path}
              {...fadeUp(index * 0.05)}
              whileHover={{ y: -6 }}
              className="overflow-hidden rounded-3xl border border-border/60 bg-background"
            >
              <div className="aspect-[4/5] w-full overflow-hidden bg-background/60">
                <img
                  src={image.src}
                  alt={`Achievement ${index + 1}`}
                  className="block h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeUp(0.2)} className="text-center mt-10">
          <a
            href="/achievement"
            className="inline-flex items-center justify-center rounded-sm border border-primary/70 bg-background px-8 py-3 text-xs font-semibold tracking-widest text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
          >
            VIEW MORE
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Sponsors() {
  const icons = ["S", "V", "X", "A", "G"];
  return (
    <section id="sponsors" className="py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp()} className="flex items-center justify-center gap-4 mb-12">
          <span className="h-px w-10 bg-primary/60" />
          <h2 className="font-display text-primary tracking-[0.4em] text-sm font-semibold">OUR SPONSORS</h2>
          <span className="h-px w-10 bg-primary/60" />
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5">
          {icons.map((c, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.08)}
              whileHover={{ scale: 1.05, borderColor: "var(--primary)" }}
              className="aspect-[2/1] bg-surface border border-border flex flex-col items-center justify-center gap-2 clip-corner-sm group"
            >
              <span className="font-display text-3xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                {c}
              </span>
              <span className="text-[10px] tracking-[0.3em] text-muted-foreground">SPONSOR</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={ctaSoldier} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 grid gap-8 md:grid-cols-[auto_1fr] items-center">
        <motion.img
          {...fadeUp()}
          src={logo}
          alt=""
          className="h-28 w-auto drop-shadow-[0_0_30px_rgba(255,140,40,0.5)]"
        />
        <motion.div {...fadeUp(0.15)}>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-wide">
            ONE TEAM. ONE DREAM.
            <br />
            <span className="text-primary">#99FOREVER</span>
          </h2>
          <div className="mt-6 flex flex-wrap items-center gap-5">
            <a
              href="#"
              className="bg-gradient-primary text-primary-foreground font-display tracking-widest text-xs px-6 py-3 rounded-sm hover:shadow-[var(--shadow-glow)] transition-shadow"
            >
              FOLLOW US
            </a>
            <div className="flex items-center gap-3">
              {[Instagram, Youtube, MessageCircle, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href={
                    i === 0
                      ? "https://www.instagram.com/esports99official/"
                      : "#"
                  }
                  target={i === 0 ? "_blank" : undefined}
                  rel={i === 0 ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -3, color: "var(--primary)" }}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary transition-colors"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background border-t border-border/60 px-4 sm:px-6 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Logo className="h-8 w-8" />
            <span className="font-display font-bold tracking-wider">99 ESPORTS</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Professional PUBG Esports Team. <br />
            Competing. Improving. Achieving.
          </p>
        </div>
        <div>
          <h4 className="font-display tracking-[0.25em] text-xs text-primary mb-4">QUICK LINKS</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#home" className="hover:text-primary">Home</a></li>
            <li><a href="/about" className="hover:text-primary">About</a></li>
            <li><a href="#roster" className="hover:text-primary">Roster</a></li>
            <li><a href="#news" className="hover:text-primary">News</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display tracking-[0.25em] text-xs text-primary mb-4">MEDIA</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-primary">Photos</a></li>
            <li><a href="#" className="hover:text-primary">Videos</a></li>
            <li><a href="#" className="hover:text-primary">Highlights</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display tracking-[0.25em] text-xs text-primary mb-4">CONTACT US</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail size={14} className="text-primary" /> contact@99esports.com</li>
            <li className="flex items-center gap-2"><AtSign size={14} className="text-primary" /> @esports99official</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-border/40 text-center text-xs text-muted-foreground tracking-wider">
        © 2024 99 ESPORTS. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Roster />
      <News />
      <Sponsors />
      <CTA />
      <Footer />
    </div>
  );
}
