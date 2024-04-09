import { useState } from "react";
import { Input } from "@material-tailwind/react";
import PollutionTable from "./PollutionTable";


function AirPollutionStats() {
    const [city, setCity] = useState("")
    const [pollutionStats, setPollutionStats] = useState([]);

    async function getPollution() {
        try {
            const response = await fetch(`http://localhost:3000/getPollution?city=${city}`, {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            });
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                setPollutionStats(prevStats => [...prevStats, data])
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="flex flex-col items-center justify-center lg:w-2/3 lg:h-full">
            <fieldset className="flex flex-col mt-4 border-orange-400 lg:border-4 lg:shadow-lg lg:mt-0 rounded-xl lg:h-3/4 lg:w-3/4 lg:pt-2 lg:px-4 bg-gradient-to-t from-orange-100/80 ">
                <legend className="px-2 text-xl font-bold text-orange-400 text-balance rounded-xl lg:bg-white"> Compare Air Pollution around the World</legend>
                <div className="flex flex-row items-center gap-4 px-2 lg:w-full">
                    <div className="flex flex-col gap-3 ">
                        <Input className="" label="City" onChange={(e) => setCity(e.target.value)} />
                    </div>
                    <button className="flex flex-col items-center justify-center p-2 font-bold text-orange-400 border-2 border-orange-400 rounded-xl" onClick={getPollution}> Add new city </button>
                </div>
                <div className="h-full overflow-x-auto">
                    <PollutionTable stats={pollutionStats} setStats={setPollutionStats} />
                </div>
            </fieldset>
        </div>
    );
}

export default AirPollutionStats;