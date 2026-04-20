import { LogoIcon } from ".."
import { NavigationButtonList } from "../../Navigation"
import { NavigationButtonProps } from "../../Navigation/NavigationButton/NavigationButton.types.d"
interface HeroPageProps {
    text: string;
    items: NavigationButtonProps[];
}
const HeroPage: React.FC<HeroPageProps> = ({ text, items }) => {
    return (
        <div className="flex flex-col gap-5 sm:gap-10 2xl:gap-20 items-end md:items-center text-right md:text-center mr-10 ml-5 md:mr-0 md:ml-0">
            <LogoIcon imageSrc="/assets/Images/logo.png" imageAlt="logo" />
            <h1 className="text-4xl sm:text-5xl 2xl:text-8xl">{text}</h1>
            <NavigationButtonList items={items} />
        </div>)
}

export default HeroPage