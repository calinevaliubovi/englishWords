
import Card from "../Card/Card"
import styles from "./cards.module.scss"


export default function Cards () {
    return(
        <div className={styles.cards}>
            <Card word="cat" transcription = "/kæt/" russian = "кот"/>
            {/* {words.map((item, index) => (
            <Card key={index} {...item}/>
            ))} */}
        </div>
    );
}

