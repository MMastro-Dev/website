
import { LogoIcon } from "./components/Hero"
import { NavigationButtonList } from "./components/Navigation"

function App(): React.ReactElement {
  return (
    <>
      {/* <div className="w-fit [flex:0.6] bg-sea-blue bg-[url('/assets/Images/dark-leather.png')]">
        <img
          className="w-fit h-screen object-cover"
          src="/assets/Images/_DSC1311.jpg"
          alt="cover"
        />
      </div> */}
      <main className="w-full flex-1 flex flex-col justify-center gap-50 items-center text-white bg-[url('/assets/Images/cartographer.png')]">
        <div className="flex flex-col gap-10 items-end md:items-center text-right md:text-center mr-10 ml-5 md:mr-0 md:ml-5">
          <LogoIcon imageSrc="/assets/Images/logo.png" imageAlt="logo"/>
          <h1 className="text-5xl" >Hi!, I'm Maximilian Mastrogiacomo</h1>
        </div>
        <NavigationButtonList items={[
          { href: "https://cv.mmastro.dev", label: "My CV" },
          { href: "https://blog.mmastro.dev", label: "My Blog" },
          { href: "mailto:maximilian.mastrogiacomo@gmail.com", label: "Contact Me" }
        ]} />
      </main>
    </>
  )
}

export default App
