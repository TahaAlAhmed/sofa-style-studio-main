import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Marquee } from "@/components/site/Marquee";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/data/products";
import heroChair from "@/assets/hero-chair.jpg";
import workshop from "@/assets/studio-workshop.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atelier Arcos — Sculptural Furniture, Copenhagen" },
      { name: "description", content: "Architectural furniture and sculptural objects, crafted by hand in Copenhagen. View the 2024 collection." },
      { property: "og:title", content: "Atelier Arcos — Sculptural Furniture" },
      { property: "og:description", content: "Architectural furniture and sculptural objects, crafted by hand in Copenhagen." },
      { property: "og:image", content: heroChair },
      { name: "twitter:image", content: heroChair },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = products.slice(0, 3);

  return (
    <div className="bg-background text-foreground selection:bg-primary/10">
      <Nav />

      {/* Hero */}
      <section className="relative px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-32 overflow-hidden">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-8 animate-(--animate-fade-in)">
              Collection 02 / 2024
            </div>
            <h1 className="text-[clamp(2.75rem,8vw,6.5rem)] font-display italic leading-[0.92] text-balance animate-(--animate-reveal-up)">
              Sculpting the<br />Domestic <span className="text-primary">Void</span>
            </h1>
            <p
              className="mt-8 max-w-[44ch] text-muted-foreground text-base md:text-lg leading-relaxed animate-(--animate-reveal-up)"
              style={{ animationDelay: "180ms" }}
            >
              Furniture as architectural intervention. We explore the tension
              between heavy form and light function — handmade in our
              Copenhagen workshop.
            </p>
            <div
              className="mt-12 flex flex-wrap items-center gap-6 animate-(--animate-reveal-up)"
              style={{ animationDelay: "320ms" }}
            >
              <Link
                to="/shop"
                className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 text-xs uppercase tracking-[0.25em] hover:bg-primary transition-colors"
              >
                Browse the catalog
                <span className="w-6 h-px bg-background transition-all group-hover:w-10" />
              </Link>
              <Link
                to="/contact"
                className="text-xs uppercase tracking-[0.25em] border-b border-foreground/30 pb-1 hover:text-primary hover:border-primary transition-colors"
              >
                Bespoke inquiry
              </Link>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 animate-(--animate-scale-in)">
            <div className="relative overflow-hidden rounded-[2px] bg-muted">
              <img
                src={heroChair}
                alt="The Arcos Lounge in a brutalist concrete interior"
                width={1280}
                height={1600}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-background/90 mix-blend-difference">
                <span>The Arcos Lounge</span>
                <span>N° 001</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-3 absolute bottom-8 left-10 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <span className="w-12 h-px bg-foreground/30" />
          Scroll to explore
        </div>
      </section>

      <Marquee />

      {/* Featured */}
      <section className="px-6 md:px-10 py-24 md:py-32">
        <Reveal className="flex flex-wrap justify-between items-end mb-16 gap-6">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3 block">
              Featured / Catalog
            </span>
            <h2 className="text-4xl md:text-5xl font-display italic">Selected Objects</h2>
          </div>
          <Link
            to="/shop"
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] hover:text-primary"
          >
            View all available works
            <span className="w-8 h-px bg-foreground transition-all group-hover:w-14 group-hover:bg-primary" />
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 120}>
              <ProductCard product={p} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Brand story */}
      <section className="px-6 md:px-10 py-24 md:py-32 bg-surface border-y border-border">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-8 block">
              Est. 2014 — Copenhagen
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display italic leading-tight mb-12 text-balance">
              We believe in objects that outlive their utility and become{" "}
              <span className="text-primary">relics of the everyday.</span>
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 text-left max-w-3xl mx-auto">
              <p className="text-muted-foreground leading-relaxed">
                Atelier Arcos is a Copenhagen-based studio producing furniture
                that bridges sculptural art and domestic functionality. Our
                process is rooted in the honesty of materials.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Each piece is crafted by hand in our workshop, ensuring that
                the grain of the wood or the patina of the brass tells a
                unique story of origin and intention.
              </p>
            </div>
          </Reveal>
          <Reveal delay={360}>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 mt-12 text-xs uppercase tracking-[0.25em] border-b border-foreground/40 pb-1 hover:text-primary hover:border-primary transition-colors"
            >
              Inside the studio
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Workshop image strip */}
      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
          <Reveal className="col-span-12 md:col-span-7">
            <div className="overflow-hidden rounded-[2px]">
              <img
                src={workshop}
                alt="Hands shaping bent ash wood in the Atelier Arcos workshop"
                loading="lazy"
                width={1400}
                height={900}
                className="w-full aspect-[7/4] object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-5" delay={120}>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-5 block">
              Process / Workshop
            </span>
            <h3 className="text-3xl md:text-4xl font-display italic mb-6 leading-tight">
              Six artisans. One workshop. No shortcuts.
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              Every piece is steam-bent, joined and finished by hand. We accept
              a small number of commissions each year, allowing us to keep our
              attention on a single object at a time.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] hover:text-primary"
            >
              Commission a piece
              <span className="w-8 h-px bg-foreground transition-all group-hover:w-14 group-hover:bg-primary" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-24 md:py-32 bg-foreground text-background">
        <div className="max-w-5xl mx-auto grid grid-cols-12 gap-8 items-end">
          <Reveal className="col-span-12 md:col-span-8">
            <h2 className="text-4xl md:text-6xl font-display italic leading-[1.05] text-balance">
              Begin a project with the studio.
            </h2>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-4" delay={120}>
            <p className="text-background/70 mb-8">
              We collaborate with private clients, architects, and interior
              designers worldwide.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 border border-background/30 px-7 py-4 text-xs uppercase tracking-[0.25em] hover:bg-background hover:text-foreground transition-colors"
            >
              Open a conversation
              <span className="w-6 h-px bg-background transition-all group-hover:w-10 group-hover:bg-foreground" />
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
