const express = require("express");
const cors = require("cors");
require('dotenv').config();

const API_KEY = process.env.API_KEY;
console.log(API_KEY)

const app = express();
const port = 3000;
const allowedOrigins = ['http://localhost:5173'];

const options = {
    origin: allowedOrigins
}

app.use(cors(options));
app.use(express.json());


app.get('/currentWeather', async function (req, res) {
    console.log("get hello")
    const city = req.query.city;
    console.log(city)
    try {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`);
        if (response.ok) {
            const data = await response.json();
            const lat = data[0].lat;
            const lon = data[0].lon;
            const geo = [lat, lon];
            console.log(geo);
            try {
                const response2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
                if (response2.ok) {
                    const data2 = await response2.json();
                    console.log(data2);
                    const desc = data2.weather[0].description;
                    const main = data2.main;
                    const wind = data2.wind;
                    const clouds = data2.clouds.all;
                    // const sunrise = new Date(data2.sys.sunrise * 1000).toTimeString("en-US");
                    // const sunset = new Date(data2.sys.sunset * 1000).toTimeString("en-US");
                    // console.log(sunrise, sunset);
                    const packedData = [desc, main, wind, clouds];
                    res.json(packedData);
                }
            } catch (error) {
                console.log(error)
            }
        }
    } catch (error) {
        console.log(error)
    }
});

app.listen(port, () => {
    console.log(`App working on port ${port}`)
})