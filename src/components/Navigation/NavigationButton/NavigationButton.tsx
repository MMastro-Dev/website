import { NavigationButtonProps } from "./NavigationButton.types.d";

const NavigationButton: React.FC<NavigationButtonProps> = ({
  href,
  label,
  className="text-white border-2 border-white rounded-4xl text-base font-bold py-2.5 px-5 transition-all duration-300 ease-in-out hover:bg-white hover:text-sea-blue"
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {label}
    </a>
  );
};

export default NavigationButton;
