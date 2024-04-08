import React from "react";
import { useState } from "react";
import { Input } from "@material-tailwind/react";

function CurrentWeather() {
    // USER
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [isInfo, setIsInfo] = useState(false)

    // RESPONSE
    const [description, setDescription] = useState("")
    const [temp, setTemp] = useState()
    const [pressure, setPressure] = useState()
    const [humidity, setHumidity] = useState()

    async function essa() {
        console.log(city)
        console.log(country)

        try {
            // it works in postman 
            const response = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/geo/1.0/direct?q=${city.toUpperCase()}&appid=24bd9423969a8e6152357abf9fff588d`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                setIsInfo(true)
                const data = await response.json();
                console.log(data);
            }
        } catch (error) {
            console.log("chuj")
        }
    }


    return (
        <div className="w-1/3 flex flex-col items-center justify-center h-full">
            <fieldset className="border-4 rounded-xl p-8 border-blue-400 h-3/4 w-3/4">
                <legend className="text-xl text-blue-400 font-bold px-2"> Check weather for your city</legend>
                <div className="h-4/5">
                    {(isInfo) ? (
                        <h1> hola hola </h1>
                    ) : (
                        <h1> Enter your city in search panel under</h1>
                    )}
                </div>
                <div className="w-full h-1/5 border-t-4 border-t-blue-400">
                    <div className="flex flex-row w-full h-full gap-4 items-center ">
                        <div className="flex flex-col w-4/5 gap-3">
                            <Input label="City" onChange={(e) => setCity(e.target.value)} />
                            <Input label="Country" onChange={(e) => setCountry(e.target.value)} />
                        </div>
                        <button className="w-1/5 h-2/3 bg-blue-400 flex flex-col justify-center items-center rounded-xl font-bold text-white" onClick={essa}> :D </button>
                    </div>
                </div>
            </fieldset >
        </div >
    )
}

export default CurrentWeather;