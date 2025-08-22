'use client'
import { createContext, useContext, useState } from "react"

const WeatherContext = createContext<any>(null);

export const WeatherProvider = ({ children }: { children: React.ReactNode}) => {
    const [weatherData, setWeatherData] = useState(null);

    return (
        <WeatherContext.Provider value={{ weatherData, setWeatherData}}>
            {children}
        </WeatherContext.Provider>
    )
}

export const useWeather = () => useContext(WeatherContext);