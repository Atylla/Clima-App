'use client'
import { useState } from 'react';
import styles from './index.module.scss'
import { useWeather } from '@/services/WeatherContext';

export function SearchBar() {
    const { setWeatherData } = useWeather();
    const [city, setCity] = useState('');

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!city.trim()) return;

        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${process.env.NEXT_PUBLIC_CHAVE_API_WEATHER}&lang=pt_br&units=metric`);

            if (!res.ok) {
                throw new Error('Erro na resposta da API');
            }

            const data = await res.json();

            if (data.cod === 200) {
                setWeatherData(data);
                setCity('');
            } else {
                setCity('');
                throw new Error('Nao encontramos essa localização');
            }


        } catch (error) {
            console.error('Erro na busca de clima:', error);
            setCity('');
            throw new Error('Erro ao buscar os dados. Tente novamente mais tarde.');
        }

    }

    return (
        <form className={styles.search} onSubmit={handleSearch}>
            <input
                type="search"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder='Digite a cidade'
            />
            <button type='submit'>Buscar</button>
        </form>
    )
}