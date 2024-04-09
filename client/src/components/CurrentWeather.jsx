import React from "react";
import { useState } from "react";
import { Input } from "@material-tailwind/react";
import { Tooltip } from "@material-tailwind/react";
import { CiTempHigh } from "react-icons/ci";
import { FaTemperatureArrowDown } from "react-icons/fa6";
import { FaTemperatureArrowUp } from "react-icons/fa6";
import { IoMdMan } from "react-icons/io";
import { FaWind } from "react-icons/fa";
import { BsCloudsFill } from "react-icons/bs";
import { SiRainmeter } from "react-icons/si";
import { BsSpeedometer } from "react-icons/bs";
function CurrentWeather() {
    const [city, setCity] = useState("")
    const [titleCity, setTitleCity] = useState("")
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
                setWeather(data)
                setTitleCity(city)
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
                <legend className="px-2 text-xl font-bold text-orange-400 bg-white rounded-xl"> Check weather for your city</legend>
                <div className="mb-2 h-4/5 lg:mb-0">
                    {(isInfo) ? (
                        <div className="h-full">
                            <ul className="flex flex-col items-center justify-around h-full class">
                                <div>
                                    <span className="text-xl font-bold text-orange-400">
                                        {titleCity}
                                    </span>
                                </div>
                                <div>
                                    <img src={iconURL} />
                                </div>
                                <li className="flex flex-row">
                                    <span className="text-xl font-bold text-orange-400">
                                        {weather[0]}
                                    </span>
                                </li>
                                <div className="flex flex-row items-center justify-around w-full text-xl lg:w-3/5">
                                    <Tooltip content="Temperature" placement="bottom">
                                        <li className="flex flex-row items-center justify-center w-1/2">
                                            <CiTempHigh /> {weather[1].temp}°C
                                        </li>
                                    </Tooltip>
                                    <Tooltip content="Feels like" placement="bottom">
                                        <li className="flex flex-row items-center justify-center w-1/2">
                                            <IoMdMan /> {weather[1].feels_like}°C
                                        </li>
                                    </Tooltip>
                                </div>
                                <div className="flex flex-row items-center justify-around w-full text-xl lg:w-3/5">
                                    <Tooltip content="Maximum temperature" placement="bottom">
                                        <li className="flex flex-row items-center justify-center w-1/2">
                                            <FaTemperatureArrowUp /> {weather[1].temp_max}°C
                                        </li>
                                    </Tooltip>
                                    <Tooltip content="Minimum temperature" placement="bottom">
                                        <li className="flex flex-row items-center justify-center w-1/2">
                                            <FaTemperatureArrowDown /> {weather[1].temp_min}°C
                                        </li>
                                    </Tooltip>
                                </div>
                                <div className="flex flex-row items-center justify-around w-full text-xl lg:w-3/5">
                                    <Tooltip content="Pressure" placement="bottom">
                                        <li className="flex flex-row items-center justify-center w-1/2">
                                            <BsSpeedometer /> {weather[1].pressure} hPa
                                        </li>
                                    </Tooltip>
                                    <Tooltip content="Humidity" placement="bottom">
                                        <li className="flex flex-row items-center justify-center w-1/2">
                                            <SiRainmeter /> {weather[1].humidity}%
                                        </li>
                                    </Tooltip>
                                </div>
                                <div className="flex flex-row items-center justify-around w-full text-xl lg:w-3/5">
                                    <Tooltip content="Wind speed" placement="bottom">
                                        <li className="flex flex-row items-center justify-center w-1/2">
                                            <FaWind />  {weather[2].speed} m/s
                                        </li>
                                    </Tooltip>
                                    <Tooltip content="Cloudiness" placement="bottom">
                                        <li className="flex flex-row items-center justify-center w-1/2">
                                            <BsCloudsFill /> {weather[3]}%
                                        </li>
                                    </Tooltip>
                                </div>
                            </ul>
                        </div>
                    ) : (
                        <div className="items-center justify-center w-full h-full">
                            Enter city in search below...
                        </div>
                    )}
                </div>
                <div className="w-full border-t-4 border-t-orange-400 ">
                    <div className="flex flex-row items-center justify-center h-full gap-4 pt-2 mt-2 lg:w-full">
                        <div className="flex flex-col gap-3 ">
                            <Input className="" label="City" onChange={(e) => setCity(e.target.value)} />
                        </div>
                        <button className="flex flex-col items-center justify-center p-2 font-bold text-orange-400 border-2 border-orange-400 rounded-xl" onClick={fetchWeather}> Get data </button>
                    </div>
                </div>
            </fieldset>
        </div >
    )
}

export default CurrentWeather;