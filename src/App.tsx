
import { useRef } from "react"
import { Placeholder } from "./components/Placeholder"
import { HeroPage } from "./components/Hero"
import PlaceholderLove from "./components/Placeholder/PlaceholderLove"

function App(): React.ReactElement {
  const placeholderRef = useRef<HTMLDivElement>(null)

  const handleScrollToNext = () => {
    placeholderRef.current?.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" })
  }

  return (
    <div className="w-full h-full flex flex-col md:flex-row overflow-y-auto md:overflow-y-hidden overflow-x-hidden md:overflow-x-auto">
      <main className="flex-shrink-0 w-full md:w-screen h-full flex flex-col justify-center gap-50 items-center text-white bg-[url('/assets/Images/cartographer.png')]">
      <HeroPage text="Hi!, I'm Maximilian Mastrogiacomo" items={[
            { href: "https://cv.mmastro.dev", label: "My CV" },
            { href: "https://blog.mmastro.dev", label: "My Blog" },
            { href: "mailto:maximilian.mastrogiacomo@gmail.com", label: "Contact Me" },
            { label: "", arrow: true, onClick: handleScrollToNext }
          ]} />
      </main>
      <div ref={placeholderRef} className="flex-shrink-0 w-full md:w-screen h-full">
        <Placeholder />
      </div>
    </div>
  )
}

export default App
