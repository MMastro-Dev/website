import Badge from "../Badge/Badge";

interface Fact {
  label: string;
  value: string;
}

const FACTS: Fact[] = [
  { label: "Experience", value: "5+ years · React · TypeScript · Python" },
  { label: "Current role", value: "AlmavivA — INPS & Agenzia delle Entrate" },
  { label: "Focus areas", value: "WCAG accessibility · Testing · AI integration" },
  { label: "Location", value: "Rome, Italy" },
];

const AboutSection: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center text-white bg-[url('/assets/Images/cartographer.png')] overflow-y-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 flex flex-col gap-6 sm:gap-10 2xl:gap-14 w-full">
        <div className="flex flex-col items-center text-center gap-2">
          <h2 className="text-4xl sm:text-5xl 2xl:text-8xl font-bold">About</h2>
          <p className="text-lg sm:text-xl 2xl:text-3xl text-white/60">Who I am, briefly</p>
        </div>
        <div className="grid gap-8 md:gap-10 md:grid-cols-[2fr_1fr]">
          <p className="text-base sm:text-lg 2xl:text-2xl leading-relaxed text-white/80">
            {/* TODO: rewrite positioning paragraph. Placeholder below. */}
            Software developer based in Rome, currently shipping React & TypeScript frontends used by millions
            of Italian citizens. Open to remote roles internationally. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-col gap-5 sm:gap-6">
            {FACTS.map((fact) => (
              <div key={fact.label}>
                <p className="text-xs sm:text-sm text-yellow font-semibold uppercase tracking-wider mb-1">
                  {fact.label}
                </p>
                <p className="text-base sm:text-lg 2xl:text-2xl text-white">{fact.value}</p>
              </div>
            ))}
            <div>
              <Badge variant="live" label="Open to remote" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
