import Navbar from "./components/Navbar"
import CurrentWeather from "./components/CurrentWeather"
import Stats from "./components/Stats"

function App() {

  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col h-full w-full">
        <Navbar />
        <div className="flex flex-row items-center justify-around h-full">
          <CurrentWeather />
          <Stats />
        </div>
      </div>
    </div>
  )
}

export default App
