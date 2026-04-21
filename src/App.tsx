import { useRef } from "react"
import { HeroPage } from "./components/Hero"
import { ProjectsSection } from "./components/Projects"
import { AboutSection } from "./components/About"
import { ConnectSection } from "./components/Connect"
import ScrollDownIndicator from "./components/ScrollDownIndicator/ScrollDownIndicator"
import { PageDots } from "./components/PageDots"

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
  const heroRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const connectRef = useRef<HTMLDivElement>(null)

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) =>
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" })

  /* NORMAL SCREEN SIZES */
  const itemList = [
    { href: "https://cv.mmastro.dev", label: <span>My CV</span>, additionalClassName: "max-custom-nav:hidden" },
    { onClick: () => scrollTo(projectsRef), label: <span>Projects</span>, additionalClassName: "max-custom-nav:hidden" },
    { href: "https://blog.mmastro.dev", label: <span>My Blog</span>, additionalClassName: "max-custom-nav:hidden" },
    { onClick: () => scrollTo(connectRef), label: <span>Let's Connect</span>, additionalClassName: "max-custom-nav:hidden" },
    { onClick: () => scrollTo(projectsRef), label: <ArrowIcon />, additionalClassName: "max-custom-nav:hidden text-sea-blue! bg-white!" },
  ];

  /* SMALL SCREEN SIZES */
  const itemListSmall = [
    { href: "https://cv.mmastro.dev", label: <span>CV</span>, additionalClassName: "hidden max-custom-nav:flex" },
    { onClick: () => scrollTo(projectsRef), label: <span>Projects</span>, additionalClassName: "hidden max-custom-nav:flex" },
    { href: "https://blog.mmastro.dev", label: <span>Blog</span>, additionalClassName: "hidden max-custom-nav:flex" },
    { onClick: () => scrollTo(connectRef), label: <span>Connect</span>, additionalClassName: "hidden max-custom-nav:flex" },
  ];


  return (
    <main ref={mainRef} className="@container/main w-full h-full flex flex-col md:flex-row overflow-y-auto md:overflow-y-hidden overflow-x-hidden md:overflow-x-auto">
      <div ref={heroRef} className="flex-shrink-0 w-full h-full flex flex-col justify-center gap-50 items-center text-white bg-[url('/assets/Images/cartographer.png')]">

        <HeroPage
          text="Hi! I'm Maximilian Mastrogiacomo"
          subtitle="Software Developer"
          items={itemList.concat(itemListSmall)}
        />

      </div>
      <div ref={projectsRef} className="flex-shrink-0 w-full md:w-screen h-full">
        <ProjectsSection />
      </div>
      <div ref={aboutRef} className="flex-shrink-0 w-full md:w-screen h-full">
        <AboutSection />
      </div>
      <div ref={connectRef} className="flex-shrink-0 w-full md:w-screen h-full">
        <ConnectSection />
      </div>
      <ScrollDownIndicator scrollContainerRef={mainRef} onClick={() => scrollTo(projectsRef)} />
      <PageDots
        scrollContainerRef={mainRef}
        sectionRefs={[heroRef, projectsRef, aboutRef, connectRef]}
        labels={["Hero", "Projects", "About", "Connect"]}
      />
    </main>
  )
}

export default App
