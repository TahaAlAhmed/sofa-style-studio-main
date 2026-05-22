import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Index" },
  { to: "/shop", label: "Collections" },
  { to: "/about", label: "The Studio" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 backdrop-blur-md transition-colors ${
        scrolled ? "bg-background/85 border-b border-border" : "bg-background/40"
      }`}
    >
      <Link to="/" className="font-display italic text-xl tracking-tight">
        Atelier Arcos
      </Link>

      <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.22em] font-medium">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="relative transition-colors hover:text-primary"
            activeProps={{ className: "text-primary" }}
            activeOptions={{ exact: l.to === "/" }}
          >
            {l.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-5">
        <span className="hidden sm:inline font-mono text-[10px] text-muted-foreground">
          EST. 2014 / CPH
        </span>
        <Link
          to="/contact"
          className="hidden md:inline-flex border border-foreground/15 px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.25em] hover:bg-foreground hover:text-background transition-colors"
        >
          Inquire
        </Link>
        <button
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block h-px w-6 bg-foreground transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="absolute top-full left-0 right-0 md:hidden bg-background border-b border-border px-6 py-8 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-2xl font-display italic"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
