
import { useRef } from "react"
import { Placeholder } from "./components/Placeholder"
import { HeroPage } from "./components/Hero"
import PlaceholderLove from "./components/Placeholder/PlaceholderLove"
import ScrollDownIndicator from "./components/ScrollDownIndicator/ScrollDownIndicator"
const ArrowIcon: React.FC = () => (
  <svg
    className="rotate-90 md:rotate-0 transition-transform duration-300 w-10 h-10 2xl:w-14 2xl:h-14"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
  </svg>
);

function App(): React.ReactElement {
  const mainRef = useRef<HTMLElement>(null)
  const placeholderRef = useRef<HTMLDivElement>(null)

  const handleScrollToNext = () => {
    placeholderRef.current?.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" })
  }

  /* NORMAL SCREEN SIZES */
  const itemList = [
    { href: "https://cv.mmastro.dev", label: <span>My CV</span>, additionalClassName: "max-xs:hidden" },
    { href: "https://blog.mmastro.dev", label: <span>My Blog</span>, additionalClassName: "max-xs:hidden" },
    { href: "mailto:maximilian.mastrogiacomo@gmail.com", label: <span>Contact Me</span>, additionalClassName: "max-xs:hidden" },
    { href: "", onClick: handleScrollToNext, label: <ArrowIcon />, additionalClassName: "max-md:hidden text-sea-blue! bg-white!" }
  ];

  /* SMALL SCREEN SIZES */
  const itemListSmall = [
    { href: "https://cv.mmastro.dev", label: <span>CV</span>, additionalClassName: "hidden max-xs:flex" },
    { href: "https://blog.mmastro.dev", label: <span>Blog</span>, additionalClassName: "hidden max-xs:flex" },
    { href: "mailto:maximilian.mastrogiacomo@gmail.com", label: <span>Contact</span>, additionalClassName: "hidden max-xs:flex" },
  ];


  return (
    <main ref={mainRef} className="@container/main w-full h-full flex flex-col md:flex-row overflow-y-auto md:overflow-y-hidden overflow-x-hidden md:overflow-x-auto">
      <div className="flex-shrink-0 w-full h-full flex flex-col justify-center gap-50 items-center text-white bg-[url('/assets/Images/cartographer.png')]">

        <HeroPage text="Hi! I'm Maximilian Mastrogiacomo" subtitle="Software Developer" items={itemList.concat(itemListSmall)} />

      </div>
      <div ref={placeholderRef} className="flex-shrink-0 w-full md:w-screen h-full">
        <Placeholder title="Projects" subtitle="Coming soon" />
      </div>
      <div className="flex-shrink-0 w-full md:w-screen h-full">
        <Placeholder title="About" subtitle="More about me" />
      </div>
      <div className="flex-shrink-0 w-full md:w-screen h-full">
        <Placeholder title="Contact" subtitle="Get in touch" />
      </div>
      <ScrollDownIndicator scrollContainerRef={mainRef} onClick={handleScrollToNext} />
    </main>
  )
}

export default App
