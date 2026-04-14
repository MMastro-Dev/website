
import { NavigationButtonList } from "./components/Navigation"

function App(): React.ReactElement {
  return (
    <>
      <div className="w-fit [flex:0.6] bg-sea-blue bg-[url('/assets/Images/dark-leather.png')]">
        <img
          className="w-fit h-screen object-cover"
          src="/assets/Images/_DSC1311.jpg"
          alt="cover"
        />
      </div>
      <main className="w-full flex-1 flex flex-col justify-center items-center text-white bg-[url('/assets/Images/cartographer.png')]">
        <div className="flex flex-col gap-5 items-center h-fit">
          {/* <img
            className="w-30 h-30 object-cover rounded-full border-4 border-white shadow-[0_2px_8px_rgba(0,0,0,0.15)] block mx-auto mb-6"
            src="/assets/Images/logo.svg"
            alt="logo"
          /> */}
          <h1>Maximilian Mastrogiacomo</h1>
          <h2>Software Developer</h2>
          <p className="mx-[25%] text-justify">
            Hello and welcome! This is my personal website, here you can get to know me and my work.
            If you&apos;re here intentionally, feel free to explore my projects and check out my blog for insights or tutorials on what i do.
            and resources. If you&apos;ve arrived by chance, enjoy your stay and
            have a look around! Keep in mind it's all WIP still, so expect some changes and updates in the future.
          </p>
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
