import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import workshop from "@/assets/studio-workshop.jpg";
import hero from "@/assets/hero-chair.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "The Studio — Atelier Arcos" },
      { name: "description", content: "A Copenhagen workshop producing sculptural furniture by hand. Meet the studio behind Atelier Arcos." },
      { property: "og:title", content: "The Studio — Atelier Arcos" },
      { property: "og:description", content: "A Copenhagen workshop producing sculptural furniture by hand." },
      { property: "og:image", content: workshop },
      { name: "twitter:image", content: workshop },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    n: "01",
    title: "Honest materials",
    body: "Solid wood, raw metal, undyed wool. We use materials that earn their character through time, not finish.",
  },
  {
    n: "02",
    title: "One object at a time",
    body: "Each piece is built individually by a single maker, from raw board through final patina. No assembly line.",
  },
  {
    n: "03",
    title: "Built to outlast us",
    body: "We design and build for a hundred years of use. Repair, refinish, and re-upholster are part of the contract.",
  },
];

function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <Nav />

      <section className="px-6 md:px-10 pt-20 md:pt-28 pb-16">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6 animate-(--animate-fade-in)">
              The Studio
            </div>
            <h1 className="text-[clamp(2.75rem,7vw,5.5rem)] font-display italic leading-[0.95] text-balance animate-(--animate-reveal-up)">
              A small workshop with a long horizon.
            </h1>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10">
        <Reveal>
          <div className="overflow-hidden rounded-[2px]">
            <img
              src={workshop}
              alt="The Atelier Arcos workshop"
              loading="lazy"
              width={1400}
              height={900}
              className="w-full aspect-[16/8] object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-8 max-w-6xl mx-auto">
          <Reveal className="col-span-12 md:col-span-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
              Founded 2014
            </span>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-7" delay={120}>
            <h2 className="text-3xl md:text-4xl font-display italic leading-tight mb-8">
              We started Atelier Arcos to make the kind of furniture we wanted
              to live with for the rest of our lives.
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Our workshop sits behind a converted warehouse in Christianshavn,
                Copenhagen. From there, a small team of cabinetmakers, metal
                workers, and upholsterers produces a deliberately limited
                collection each year.
              </p>
              <p>
                We work directly with private clients, architects, and interior
                designers around the world. Most pieces are made to order. All
                are signed by the maker and registered in our archive.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-10 py-20 md:py-28 bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
              Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-display italic mb-16">
              Three commitments we don't compromise.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <Reveal key={v.n} delay={i * 120}>
                <div className="font-mono text-[10px] tracking-[0.25em] text-primary mb-5">— {v.n}</div>
                <h3 className="text-2xl font-display italic mb-4">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 md:py-32 grid grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
        <Reveal className="col-span-12 md:col-span-6">
          <div className="overflow-hidden rounded-[2px]">
            <img
              src={hero}
              alt="Atelier Arcos lounge piece in situ"
              loading="lazy"
              width={1280}
              height={1600}
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
        </Reveal>
        <Reveal className="col-span-12 md:col-span-6" delay={120}>
          <h2 className="text-3xl md:text-4xl font-display italic mb-6 leading-tight">
            Visit the studio.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
            Showroom and workshop visits by appointment. We're happy to walk
            you through the collection, materials, and current works in
            progress.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 border border-foreground/20 px-7 py-4 text-xs uppercase tracking-[0.25em] hover:bg-foreground hover:text-background transition-colors"
          >
            Book an appointment
            <span className="w-6 h-px bg-foreground transition-all group-hover:w-10 group-hover:bg-background" />
          </Link>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
