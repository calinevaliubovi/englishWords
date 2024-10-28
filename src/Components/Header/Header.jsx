
import style from "./header.module.scss"

export default function Header() {
    return (
        <header className={style.header}>
            <nav>
                <ul className={style.nav}>
                    <li className={style.nav_element}>Main</li>
                    <li className={style.nav_element}>Card</li>
                    <li className={style.nav_element}>Cards list</li>
                </ul>
            </nav>
        </header>
    )
}