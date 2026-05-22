import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";
import { productBySlug, products } from "@/data/products";
import { toast } from "sonner";

export const Route = createFileRoute("/shop/$slug")({
  loader: ({ params }) => {
    const product = productBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    return {
      meta: p
        ? [
            { title: `${p.name} — Atelier Arcos` },
            { name: "description", content: p.description.slice(0, 155) },
            { property: "og:title", content: `${p.name} — Atelier Arcos` },
            { property: "og:description", content: p.description.slice(0, 155) },
            { property: "og:image", content: p.image },
            { name: "twitter:image", content: p.image },
          ]
        : [],
    };
  },
  notFoundComponent: () => (
    <div className="bg-background min-h-screen">
      <Nav />
      <div className="px-6 md:px-10 py-32 text-center">
        <h1 className="font-display italic text-5xl mb-4">Piece not found</h1>
        <p className="text-muted-foreground mb-8">This work is no longer in the catalog.</p>
        <Link to="/shop" className="text-xs uppercase tracking-[0.25em] border-b border-foreground pb-1">
          Back to collections
        </Link>
      </div>
      <Footer />
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div className="bg-background text-foreground">
      <Nav />

      <div className="px-6 md:px-10 pt-8 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        <Link to="/" className="hover:text-primary">Index</Link> /{" "}
        <Link to="/shop" className="hover:text-primary">Collections</Link> /{" "}
        <span>{product.category}</span>
      </div>

      <section className="px-6 md:px-10 py-12 md:py-16 grid grid-cols-12 gap-8 lg:gap-16 items-start">
        <div className="col-span-12 lg:col-span-7 animate-(--animate-scale-in)">
          <div className="overflow-hidden rounded-[2px] bg-muted">
            <img
              src={product.image}
              alt={product.name}
              width={800}
              height={1000}
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-28 animate-(--animate-reveal-up)">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
            {product.number} · {product.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-display italic leading-[1.05] mb-4">
            {product.name}
          </h1>
          <div className="font-mono text-xl mb-8">${product.price.toLocaleString()}</div>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
            {product.description}
          </p>

          <dl className="border-t border-border divide-y divide-border text-sm">
            <Spec label="Material" value={product.material} />
            <Spec label="Dimensions" value={product.dimensions} />
            <Spec label="Lead Time" value={product.leadTime} />
            <Spec label="Origin" value={product.origin} />
          </dl>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() =>
                toast.success("Added to inquiry", {
                  description: `${product.name} — we'll confirm availability shortly.`,
                })
              }
              className="group inline-flex items-center justify-center gap-3 bg-foreground text-background px-7 py-4 text-xs uppercase tracking-[0.25em] hover:bg-primary transition-colors"
            >
              Request availability
              <span className="w-6 h-px bg-background transition-all group-hover:w-10" />
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 border border-foreground/20 px-7 py-4 text-xs uppercase tracking-[0.25em] hover:bg-foreground hover:text-background transition-colors"
            >
              Bespoke version
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-border">
        <Reveal className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-4xl font-display italic">You may also consider</h2>
          <Link to="/shop" className="hidden md:inline text-xs uppercase tracking-[0.25em] hover:text-primary">
            View all works
          </Link>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {related.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <ProductCard product={p} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between py-3">
      <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</dt>
      <dd className="text-right">{value}</dd>
    </div>
  );
}
