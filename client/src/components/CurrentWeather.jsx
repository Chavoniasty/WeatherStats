import React from "react";
import { useState } from "react";
import { Input } from "@material-tailwind/react";

function CurrentWeather() {
    const [city, setCity] = useState("")
    const [isInfo, setIsInfo] = useState(false)
    const [weather, setWeather] = useState()
    const [iconURL, setIconURL] = useState("")
    async function fetchWeather() {
        try {
            const response = await fetch(`http://localhost:3000/currentWeather?city=${city}`, {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            });
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                setWeather(data)
                setIconURL(`https://openweathermap.org/img/wn/${weather[4]}@2x.png`)
                setIsInfo(true)
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="flex flex-col items-center justify-center lg:w-1/3 lg:h-full">
            <fieldset className="flex flex-col justify-around p-6 mt-4 border-4 border-orange-400 shadow-lg bg-gradient-to-t from-orange-100/80 lg:mt-0 rounded-xl lg:pt-2 lg:px-4 lg:h-3/4 lg:w-3/4">
                <legend className="px-2 text-xl font-bold text-orange-400 bg-white"> Check weather for your city</legend>
                <div className="mb-2 h-4/5 lg:mb-0">
                    {(isInfo) ? (
                        <div className="h-full">
                            <ul className="flex flex-col items-center justify-around h-full class">
                                <div>
                                    <img src={iconURL} />
                                </div>
                                <li className="flex flex-row">
                                    <span className="text-xl font-bold text-orange-400">
                                        {weather[0]}
                                    </span>
                                </li>
                                <div className="flex flex-row">
                                    <li>
                                        Temperature: {weather[1].temp}
                                    </li>
                                    <li>
                                        Feels like: {weather[1].feels_like}
                                    </li>
                                </div>
                                <div className="flex flex-row">
                                    <li>
                                        Max temp = {weather[1].temp_max}
                                    </li>
                                    <li>
                                        Min temp = {weather[1].temp_min}
                                    </li>
                                </div>
                                <div className="flex flex-row">
                                    <li>
                                        Pressure = {weather[1].pressure} hPa
                                    </li>
                                    <li>
                                        Humidity = {weather[1].humidity}
                                    </li>
                                </div>
                                <div className="flex flex-row">
                                    <li>
                                        Wind speed = {weather[2].speed} m/s
                                    </li>
                                    <li>
                                        Clouds = {weather[3]}%
                                    </li>
                                </div>
                            </ul>
                        </div>
                    ) : (
                        <h1> Enter your city in search panel under</h1>
                    )}
                </div>
                <div className="w-full border-t-4 border-t-orange-400 ">
                    <div className="flex flex-row items-center justify-center h-full gap-4 pt-2 mt-2 lg:w-full">
                        <div className="flex flex-col gap-3 ">
                            <Input className="" label="City" onChange={(e) => setCity(e.target.value)} />
                            {/* <Input label="Country" onChange={(e) => setCountry(e.target.value)} /> */}
                        </div>
                        <button className="flex flex-col items-center justify-center p-2 font-bold text-orange-400 border-2 border-orange-400 rounded-xl" onClick={fetchWeather}> Get data </button>
                    </div>
                </div>
            </fieldset>
        </div >
    )
}

export default CurrentWeather;