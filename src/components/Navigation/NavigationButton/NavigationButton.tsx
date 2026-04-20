import { NavigationButtonProps } from "./NavigationButton.types.d";

const NavigationButton: React.FC<NavigationButtonProps> = ({
  href,
  label,
  className = "text-white border-2 2xl:border-4 border-white rounded-full text-xs sm:text-sm md:text-base 2xl:text-3xl font-bold py-1.25 px-2.5 sm:py-2.5 sm:px-5 2xl:py-5 2xl:px-10 transition-all duration-300 ease-in-out focus:bg-white focus:text-sea-blue hover:bg-white hover:text-sea-blue flex gap-1 items-center",
  icon,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </a>
  );
};

export default NavigationButton;
