import NavigationButton, { NavigationButtonProps } from "../NavigationButton/NavigationButton";

interface NavigationButtonListProps {
    items: NavigationButtonProps[];
}

const NavigationButtonList: React.FC<NavigationButtonListProps> = ({
  items,
}) => {
  return (
    <div className="flex gap-2 sm:gap-5 md:gap-10 md:mt-5">
      {items.map((item, index) => (
        <NavigationButton key={index} {...item} />
      ))}
    </div>
  );
};

export default NavigationButtonList;
