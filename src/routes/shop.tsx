import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";
import { categories, products, type ProductCategory } from "@/data/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Collections — Atelier Arcos" },
      { name: "description", content: "Browse the full catalog of available works from Atelier Arcos — seating, tables, lighting, and storage." },
      { property: "og:title", content: "Collections — Atelier Arcos" },
      { property: "og:description", content: "Browse the full catalog of available works." },
    ],
  }),
  component: ShopPage,
});

type Filter = "All" | ProductCategory;
type Sort = "Featured" | "Price ↑" | "Price ↓";

function ShopPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const [sort, setSort] = useState<Sort>("Featured");

  const visible = useMemo(() => {
    let list = filter === "All" ? products : products.filter((p) => p.category === filter);
    if (sort === "Price ↑") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "Price ↓") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [filter, sort]);

  const filters: Filter[] = ["All", ...categories];

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Nav />

      <header className="px-6 md:px-10 pt-20 md:pt-28 pb-12 md:pb-16 border-b border-border">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6 animate-(--animate-fade-in)">
              Catalog / 2024
            </div>
            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-display italic leading-[0.95] animate-(--animate-reveal-up)">
              Available Works
            </h1>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {visible.length.toString().padStart(2, "0")} / {products.length.toString().padStart(2, "0")} pieces
          </div>
        </div>
      </header>

      <div className="px-6 md:px-10 py-8 border-b border-border sticky top-[68px] z-30 bg-background/85 backdrop-blur-md">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-[10px] uppercase tracking-[0.22em] border transition-all ${
                  filter === f
                    ? "bg-foreground text-background border-foreground"
                    : "border-border hover:border-foreground/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <label className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Sort
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="bg-transparent border-b border-border focus:border-primary outline-none py-1 text-foreground text-[11px]"
            >
              <option>Featured</option>
              <option>Price ↑</option>
              <option>Price ↓</option>
            </select>
          </label>
        </div>
      </div>

      <section className="px-6 md:px-10 py-16 md:py-24">
        {visible.length === 0 ? (
          <p className="text-center text-muted-foreground py-32">No pieces in this category right now.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {visible.map((p, i) => (
              <Reveal key={p.slug} delay={i * 60}>
                <ProductCard product={p} index={i} />
              </Reveal>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
