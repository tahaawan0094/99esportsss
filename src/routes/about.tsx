import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/about")({
  component: About,
});

const KEYWORDS = [
  "PUBG esports team",
  "PUBG Mobile esports Pakistan",
  "competitive gaming team",
  "PUBG tournament team",
  "esports organization PUBG Mobile",
  "gaming team Pakistan",
  "PUBG Mobile competitive players",
  "esports team roster PUBG",
  "professional PUBG team",
  "rising esports teams",
];

function About() {
  useEffect(() => {
    document.title = "99 Esports – PUBG Mobile Esports Team | Competitive Gaming Pakistan";

    let keywordsMeta = document.querySelector("meta[name='keywords']") as HTMLMetaElement | null;
    let descriptionMeta = document.querySelector("meta[name='description']") as HTMLMetaElement | null;
    const keywordsContent = KEYWORDS.join(", ");
    const descriptionContent =
      "99 Esports is a rising PUBG Mobile esports team from Pakistan competing in tournaments and building top-tier competitive players. Follow our journey in esports.";

    if (!keywordsMeta) {
      keywordsMeta = document.createElement("meta");
      keywordsMeta.name = "keywords";
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.content = keywordsContent;

    if (!descriptionMeta) {
      descriptionMeta = document.createElement("meta");
      descriptionMeta.name = "description";
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.content = descriptionContent;

    return () => {
      if (keywordsMeta && keywordsMeta.parentNode === document.head) {
        document.head.removeChild(keywordsMeta);
      }
      if (descriptionMeta && descriptionMeta.parentNode === document.head) {
        document.head.removeChild(descriptionMeta);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative py-20 px-4 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 flex flex-col gap-6 text-center sm:text-left sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-primary tracking-[0.3em] text-xs font-semibold mb-4">ABOUT 99 ESPORTS</p>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Building a recognized PUBG Mobile esports organization with passion,
                skill, and competitive spirit.
              </h1>
            </div>
            <a
              href="/"
              className="inline-flex w-full sm:w-auto min-w-[180px] items-center justify-center rounded-sm border border-primary/70 bg-background px-6 py-3 text-xs font-semibold tracking-[0.35em] uppercase text-primary text-center transition-colors hover:bg-primary hover:text-primary-foreground whitespace-nowrap"
            >
              BACK TO HOME
            </a>
          </div>

          <div className="space-y-8 text-base sm:text-lg leading-relaxed text-muted-foreground">
            <p>
              99 Esports is a competitive PUBG Mobile esports team focused on high-level gameplay, teamwork, and tournament success.
              Based in Pakistan, we are a rising esports organization competing in PUBG Mobile tournaments and building a strong presence
              in the global esports community.
            </p>
            <p>
              Our team is dedicated to developing professional PUBG Mobile players, improving in-game strategies, and consistently performing
              in scrims, custom rooms, and official competitions. With a passion for competitive gaming, 99 Esports aims to become a recognized
              name in PUBG Mobile esports and represent the next generation of esports talent.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
