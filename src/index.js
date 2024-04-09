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


async function getGeo(city) {
    try {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`);
        if (response.ok) {
            const data = await response.json();
            const lat = data[0].lat;
            const lon = data[0].lon;
            const geo = [lat, lon];

            return geo;
        }
    } catch (error) {
        console.log(error);
    }
}

async function getCurrentWeather(geo) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geo[0]}&lon=${geo[1]}&units=metric&appid=${API_KEY}`)
        if (response.ok) {
            const data = await response.json();
            const desc = data.weather[0].description;
            const icon = data.weather[0].icon;
            const main = data.main;
            const wind = data.wind;
            const clouds = data.clouds.all;

            const weather = [desc, main, wind, clouds, icon];
            return weather;
        }
    } catch (error) {
        console.log(error)
    }
}

async function getPollution(geo) {
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${geo[0]}&lon=${geo[1]}&appid=${API_KEY}`);
        if (response.ok) {
            const data = await response.json();
            const list = data.list;
            const aqi = list[0].main.aqi;
            let components = list[0].components;
            components.aqi = aqi;

            return components;
        }
    } catch (error) {
        console.log(error);
    }
}

app.get('/currentWeather', async function (req, res) {
    const city = req.query.city;
    try {
        const geo = await getGeo(city);
        try {
            const weather = await getCurrentWeather(geo);
            res.json(weather);
        } catch (error) {
            console.log(error)
        }
    } catch (error) {
        console.log(error)
    }
});

app.get('/getPollution', async function (req, res) {
    const city = req.query.city;
    try {
        const geo = await getGeo(city);
        try {
            let pollution = await getPollution(geo);
            pollution.city = city;
            res.json(pollution)
        } catch (error) {
            console.log(error)
        }
    } catch (error) {
        console.log(error);
    }
});

app.listen(port, () => {
    console.log(`App working on port ${port}`)
})