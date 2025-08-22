'use client'
import { createContext, useContext, useState } from "react"

type WeatherData = {
    weather?: { main: string; icon: string }[];
    main?: { temp: number; feels_like: number; temp_min: number; temp_max: number };
    wind?: { speed: number; deg: number };
    sys?: { country: string };
    name?: string;
    dt?: number;
    timezone?: number;
};

type WeatherContextType = {
    weatherData: WeatherData | null;
    setWeatherData: React.Dispatch<React.SetStateAction<WeatherData | null>>;
}

const WeatherContext = createContext<WeatherContextType | null>(null);



export const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    return (
        <WeatherContext.Provider value={{ weatherData, setWeatherData }}>
            {children}
        </WeatherContext.Provider>
    )
}

export const useWeather = () => {
    const context = useContext(WeatherContext);
    if (!context) throw new Error("useWeather must be used within a WeatherProvider");
    return context;
};
