import NavigationButton from "../NavigationButton/NavigationButton";
import { NavigationButtonListProps } from "./NavigationButtonList.types.d";

const NavigationButtonList: React.FC<NavigationButtonListProps> = ({
  items,
}) => {
  return (
    <div className="flex gap-10 mt-5">
      {items.map((item, index) => (
        <NavigationButton key={index} href={item.href} label={item.label} />
      ))}
    </div>
  );
};

export default NavigationButtonList;
