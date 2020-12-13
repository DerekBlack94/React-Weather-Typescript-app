import React from 'react';

type WeatherDisplayProps = {
    name: string,
    temp: any,
    weather: any,
}
const WeatherDisplay = ({name, temp, weather}: WeatherDisplayProps) => {

    return(
        <div>
            <h3>Current Weather in</h3>
            <h1>{name}</h1>
            <p>It's currently {weather.description} with a temp of <h1>{temp.temp} F </h1></p>
            <p>High:{temp.temp_max}</p>
            <p>Low:{temp.temp_min}</p>
        </div>
    )
}

export default WeatherDisplay;