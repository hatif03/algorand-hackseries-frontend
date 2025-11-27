import Marquee from "@/components/magicui/marquee";
const companies = [
  "Algorand Foundation",
  "Pera",
  "Tinyman",
  "Vestige",
  "AlgoNode",
  "NFDomains",
  "Qdrant",
  "Raycast",
];

export default function Logos() {
  return (
    <section id="logos">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <h3 className="text-center text-sm font-semibold text-gray-500">
          TRUSTED BY LEADING TEAMS
        </h3>
        <div className="relative mt-6">
          <Marquee className="max-w-full [--duration:40s]">
            {companies.map((logo, idx) => (
              <div
                key={idx}
                className="h-10 px-6 flex items-center justify-center rounded-full border border-dashed border-foreground/10 text-xs font-semibold uppercase tracking-wide text-foreground/70 whitespace-nowrap"
              >
                {logo}
              </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}
