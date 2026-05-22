import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="px-6 md:px-10 pt-20 pb-10 grid grid-cols-2 md:grid-cols-12 gap-10">
        <div className="col-span-2 md:col-span-5">
          <Link to="/" className="font-display italic text-3xl tracking-tight">
            Atelier Arcos
          </Link>
          <p className="mt-5 max-w-sm text-sm text-muted-foreground leading-relaxed">
            Sculptural furniture and architectural objects, made by hand in our
            Copenhagen workshop since 2014.
          </p>
        </div>
        <div className="md:col-span-3">
          <h5 className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-5">Navigate</h5>
          <ul className="space-y-3 text-sm">
            <li><Link to="/shop" className="hover:text-primary transition-colors">Collections</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">The Studio</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <h5 className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-5">Studio</h5>
          <ul className="space-y-3 text-sm">
            <li>Store Strandstræde 21<br />1255 Copenhagen, DK</li>
            <li className="font-mono text-xs">hello@atelierarcos.design</li>
            <li className="font-mono text-xs">+45 00 21 02 33</li>
          </ul>
        </div>
      </div>
      <div className="px-6 md:px-10 py-6 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
        <span>© {new Date().getFullYear()} Atelier Arcos</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary">Instagram</a>
          <a href="#" className="hover:text-primary">Pinterest</a>
          <a href="#" className="hover:text-primary">Journal</a>
        </div>
        <span>Designed in Copenhagen</span>
      </div>
    </footer>
  );
}
