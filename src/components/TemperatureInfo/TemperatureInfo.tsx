'use client'
import { useWeather } from '@/services/WeatherContext'
import styles from './index.module.scss'

export function TemperatureInfo() {
    const { weatherData } = useWeather()

    const weather = weatherData?.weather?.[0]
    const timestamp = weatherData?.dt
    const timezoneOffset = weatherData?.timezone ?? 0

    const localDate = timestamp
        ? new Date((timestamp + timezoneOffset) * 1000)
        : null

    const hour = localDate
        ? localDate.getHours()
        : new Date().getHours()

    const weatherMain = weather?.main?.toLowerCase() ?? ''

    let bgClass = styles.day
    if (hour >= 18 || hour < 6) bgClass = styles.night
    if (weatherMain === 'clouds') bgClass = styles.cloudy
    if (weatherMain === 'rain') bgClass = styles.rainy

    const showSun = weatherMain === 'clear' && hour >= 6 && hour < 18
    const showMoon = hour >= 18 || hour < 6
    const showCloud = ['clouds', 'rain'].includes(weatherMain)

    return (
        <div className={`${styles.contentContainer} ${bgClass}`}>
            <div className={styles.leftColumn}>
                {weatherData?.name && <h1>{weatherData?.name}, {weatherData?.sys?.country}</h1>}
                <h2>Temperatura</h2>
                <div className={styles.info}>
                    <p>Atual: <span>{weatherData?.main?.temp ?? '—'} ºC</span></p>
                    <p>Sensação: <span>{weatherData?.main?.feels_like ?? '—'} ºC</span></p>
                    <p>Mínima: <span>{weatherData?.main?.temp_min ?? '—'} ºC</span></p>
                    <p>Máxima: <span>{weatherData?.main?.temp_max ?? '—'} ºC</span></p>
                </div>
            </div>

            <div className={styles.rightColumn}>
                <div className={styles.mountain}></div>
                {showSun && <div className={styles.sun}></div>}
                {showMoon && <div className={styles.moon}></div>}
                {showCloud && <div className={styles.cloud}></div>}
            </div>
        </div>
    )
}
