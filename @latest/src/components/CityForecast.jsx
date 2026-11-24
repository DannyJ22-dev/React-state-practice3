import { useState, useEffect } from "react";
import { weatherData } from "../WeatherData";

export default function CityForecast({selectedCity}){
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        setForecast(weatherData[selectedCity] || null);
    }, [selectedCity]);

    if (!selectedCity) {
        return <p>Select a city to see the forecast.</p>;
    }
    if (!forecast) {
        return <p>Loading...</p>;
    }
    return(
        <>
            <h2>{selectedCity} Forecast </h2>
            <p>{forecast.summary}</p>
            <p>{forecast.details}</p>
        </>
    )
}