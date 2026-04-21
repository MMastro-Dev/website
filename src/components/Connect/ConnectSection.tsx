import NavigationButton from "../Navigation/NavigationButton/NavigationButton";

interface Cta {
  label: string;
  href: string;
  primary: boolean;
}

const CTAS: Cta[] = [
  { label: "Email", href: "mailto:maximilian.mastrogiacomo@gmail.com", primary: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/maximilian-mastrogiacomo-716725179/", primary: true },
  { label: "GitHub", href: "https://github.com/MMastro-Dev", primary: true },
  { label: "Download CV", href: "https://cv.mmastro.dev/cv.pdf", primary: false },
  { label: "Blog", href: "https://blog.mmastro.dev", primary: false },
];

const BASE_CLASS = "w-full justify-center text-base sm:text-lg 2xl:text-2xl py-3 sm:py-4 2xl:py-6";
const PRIMARY_CLASS = " bg-white! text-sea-blue!";

const ConnectSection: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center text-white bg-[url('/assets/Images/cartographer.png')] overflow-y-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 flex flex-col w-full">
        <div className="flex flex-col items-center text-center gap-2 mb-10 sm:mb-14">
          <h2 className="text-4xl sm:text-5xl 2xl:text-8xl font-bold">Let's Connect</h2>
          <p className="text-base sm:text-lg 2xl:text-2xl text-white/60">
            Open to remote roles · React · TypeScript · Python
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 2xl:gap-10 max-w-4xl w-full mx-auto">
          {CTAS.map((cta) => (
            <NavigationButton
              key={cta.label}
              href={cta.href}
              label={<span>{cta.label}</span>}
              additionalClassName={BASE_CLASS + (cta.primary ? PRIMARY_CLASS : "")}
            />
          ))}
        </div>
        <p className="text-xs sm:text-sm text-white/40 mt-10 text-center">
          Rome, Italy · maximilian.mastrogiacomo@gmail.com
        </p>
      </div>
    </div>
  );
};

export default ConnectSection;
