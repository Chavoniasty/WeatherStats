import Navbar from "./components/Navbar"
import CurrentWeather from "./components/CurrentWeather"
import AirPollutionStats from "./components/AirPollutionStats"

function App() {

  return (
    <div className="w-screen h-screen lg:bg-gradient-to-t lg:from-orange-50/95">
      <div className="flex flex-col w-full h-full">
        <Navbar />
        <div className="flex flex-col items-center justify-around h-full lg:flex-row">
          <CurrentWeather />
          <AirPollutionStats />
        </div>
      </div>
    </div>
  )
}

export default App
