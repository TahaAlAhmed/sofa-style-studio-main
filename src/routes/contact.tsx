import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ContactForm } from "@/components/site/ContactForm";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Atelier Arcos" },
      { name: "description", content: "Reach the Atelier Arcos studio. Inquiries, bespoke commissions, and showroom visits in Copenhagen." },
      { property: "og:title", content: "Contact — Atelier Arcos" },
      { property: "og:description", content: "Reach the Atelier Arcos studio. Inquiries, bespoke commissions, and showroom visits in Copenhagen." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <Nav />

      <section className="px-6 md:px-10 pt-20 md:pt-28 pb-12">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-9">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6 animate-(--animate-fade-in)">
              Contact / Studio
            </div>
            <h1 className="text-[clamp(2.75rem,7vw,6rem)] font-display italic leading-[0.95] text-balance animate-(--animate-reveal-up)">
              Begin a project<br />with the studio.
            </h1>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-16 md:py-24 border-t border-border">
        <div className="grid grid-cols-12 gap-10 lg:gap-16">
          <Reveal className="col-span-12 lg:col-span-4 lg:sticky lg:top-32 self-start">
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-sm">
              We respond to every inquiry within two working days. For
              architectural projects, please include scope, location and
              indicative timeline.
            </p>

            <Detail label="Studio" lines={["Store Strandstræde 21", "1255 Copenhagen, DK"]} />
            <Detail label="Email" lines={["hello@atelierarcos.design"]} mono />
            <Detail label="Telephone" lines={["+45 00 21 02 33"]} mono />
            <Detail label="Hours" lines={["Tue–Fri  10:00–17:00", "By appointment"]} />
          </Reveal>

          <Reveal className="col-span-12 lg:col-span-8" delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Detail({ label, lines, mono = false }: { label: string; lines: string[]; mono?: boolean }) {
  return (
    <div className="mb-8">
      <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
        {label}
      </div>
      <div className={mono ? "font-mono text-sm" : "text-base"}>
        {lines.map((l) => <div key={l}>{l}</div>)}
      </div>
    </div>
  );
}
