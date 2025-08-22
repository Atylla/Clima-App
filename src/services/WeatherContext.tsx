'use client'
import { createContext, useContext, useState } from "react"

const WeatherContext = createContext<any>(null);

type WeatherData = {
    weather?: { main: string; icon: string }[];
    main?: { temp: number; feels_like: number; temp_min: number; temp_max: number };
    wind?: { speed: number; deg: number };
    sys?: { country: string };
    name?: string;
    dt?: number;
    timezone?: number;
};

export const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    return (
        <WeatherContext.Provider value={{ weatherData, setWeatherData }}>
            {children}
        </WeatherContext.Provider>
    )
}

export const useWeather = () => useContext(WeatherContext);