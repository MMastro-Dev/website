import { LogoIcon } from ".."
import { NavigationButtonList } from "../../Navigation"
import { NavigationButtonProps } from "../../Navigation/NavigationButton/NavigationButton.types.d"
interface HeroPageProps {
    text: string;
    subtitle?: string;
    items: NavigationButtonProps[];
}
const HeroPage: React.FC<HeroPageProps> = ({ text, subtitle, items }) => {
    return (
        <div className="flex flex-col gap-5 sm:gap-10 2xl:gap-20 items-end md:items-center text-right md:text-center mr-10 ml-5 md:mr-0 md:ml-0">
            <LogoIcon imageSrc="/assets/Images/logo.png" imageAlt="logo" />
            <div className="flex flex-col gap-2 sm:gap-4 2xl:gap-8 items-end md:items-center">
                <h1 className="text-4xl sm:text-5xl 2xl:text-8xl">{text}</h1>
                {subtitle && <p className="text-base sm:text-lg 2xl:text-3xl text-yellow font-bold tracking-wide">{subtitle}</p>}
            </div>
            <NavigationButtonList items={items} />
        </div>)
}

export default HeroPage