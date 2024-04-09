import Navbar from "./components/Navbar"
import CurrentWeather from "./components/CurrentWeather"
import AirPollutionStats from "./components/AirPollutionStats"

function App() {

  return (
    <div className="w-screen h-screen ">
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
