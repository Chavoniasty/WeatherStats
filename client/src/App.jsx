import Navbar from "./components/Navbar"
import CurrentWeather from "./components/CurrentWeather"
import AirPollutionStats from "./components/AirPollutionStats"

function App() {

  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col h-full w-full">
        <Navbar />
        <div className="flex flex-col lg:flex-row items-center justify-around h-full">
          <CurrentWeather />
          <AirPollutionStats />
        </div>
      </div>
    </div>
  )
}

export default App
