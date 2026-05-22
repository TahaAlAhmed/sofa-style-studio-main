import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/products";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <Link
      to="/shop/$slug"
      params={{ slug: product.slug }}
      className="group block"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="overflow-hidden bg-muted rounded-[2px]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={1000}
          className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-5 flex justify-between items-start">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
            {product.number} · {product.category}
          </div>
          <h3 className="text-lg font-display italic leading-tight">{product.name}</h3>
          <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
            {product.material}
          </p>
        </div>
        <span className="font-mono text-sm shrink-0 pl-3">
          ${product.price.toLocaleString()}
        </span>
      </div>
    </Link>
  );
}
