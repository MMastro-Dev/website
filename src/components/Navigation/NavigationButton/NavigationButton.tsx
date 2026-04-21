
export interface NavigationButtonProps {
  href?: string;
  label: React.ReactNode;
  className?: string;
  additionalClassName?: string;
  onClick?: () => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  href,
  label,
  className = "text-white border-2 2xl:border-4 border-white rounded-full text-xs sm:text-sm md:text-base 2xl:text-3xl font-bold py-1.25 px-2.5 sm:py-2.5 sm:px-5 2xl:py-5 2xl:px-10 transition-all duration-300 ease-in-out focus:bg-white focus:text-sea-blue hover:bg-white hover:text-sea-blue flex gap-1 items-center",
  additionalClassName = "",
  onClick,
}) => {
  const content = (
    <>
      {label}
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={`${className} ${additionalClassName}`}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={`${className} ${additionalClassName}`}>
      {content}
    </button>
  );
};

export default NavigationButton;
