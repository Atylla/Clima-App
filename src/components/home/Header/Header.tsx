import styles from './index.module.scss'
import { SearchBar } from './SearchBar/SearchBar'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.contentContainer}>
                <h1>Clima</h1>
                <SearchBar />
            </div>
        </header>
    )
}