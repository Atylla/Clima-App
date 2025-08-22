import { Header } from '@/components/home/Header/Header';
import styles from './home.module.scss'
import { TemperatureInfo } from '@/components/TemperatureInfo/TemperatureInfo';

import { WeatherProvider } from '@/services/WeatherContext';

export default function Home() {

  return (
    <WeatherProvider>
      <div className={styles.contentContainer}>
        <title>Clima | Por Atila</title>
        <main className={styles.mainGrid}>
          <Header />
          <TemperatureInfo />
        </main>
      </div>
    </WeatherProvider>
  );
}
