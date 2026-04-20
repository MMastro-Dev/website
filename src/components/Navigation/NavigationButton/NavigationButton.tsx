import { NavigationButtonProps } from "./NavigationButton.types.d";

const ArrowIcon: React.FC = () => (
  <svg
    className="rotate-90 md:rotate-0 transition-transform duration-300 w-4 h-4 sm:w-5 sm:h-5 2xl:w-8 2xl:h-8"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
  </svg>
);

const NavigationButton: React.FC<NavigationButtonProps> = ({
  href,
  label,
  className = "text-white border-2 2xl:border-4 border-white rounded-full text-xs sm:text-sm md:text-base 2xl:text-3xl font-bold py-1.25 px-2.5 sm:py-2.5 sm:px-5 2xl:py-5 2xl:px-10 transition-all duration-300 ease-in-out focus:bg-white focus:text-sea-blue hover:bg-white hover:text-sea-blue flex gap-1 items-center",
  icon,
  arrow,
  onClick,
}) => {
  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {label}
      {arrow && <ArrowIcon />}
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {content}
    </button>
  );
};

export default NavigationButton;
