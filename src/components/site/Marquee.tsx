const items = [
  "Seating Systems",
  "Solid Oak Tables",
  "Architectural Lighting",
  "Textile Objects",
  "Bespoke Commissions",
];

export function Marquee() {
  const sequence = [...items, ...items];
  return (
    <div className="border-y border-border py-5 overflow-hidden bg-background">
      <div className="marquee-track gap-12 whitespace-nowrap items-center">
        {sequence.map((label, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            <span className="text-3xl md:text-5xl font-display italic px-4">{label}</span>
            <span className="font-mono text-xs opacity-30">●</span>
          </div>
        ))}
      </div>
    </div>
  );
}
