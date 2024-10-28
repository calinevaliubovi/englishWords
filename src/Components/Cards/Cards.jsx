
import words from "../../data/words.json"
import CardItem from "../CardItem/CardItem"
import styles from "./cards.module.scss"


export default function Cards () {
    return(
        <div className={styles.cards}>
            {words.map((item, index) => (
            <CardItem key={index} {...item}/>
            ))}
        </div>
    );
}

