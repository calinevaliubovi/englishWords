
import Button from "../Button/Button";
import styles from "./card.module.scss"

export default function Card ({word, transcription,russian}) {
    return(
        <div>
            <div className= {styles.word_card}>
            <div className = {styles.text}>{word}</div>
            <div className = {styles.text}>{transcription}</div>
            <div className = {styles.text}>{russian}</div>
            <Button color = "transleteButton" btn = "Перевод"/>
            </div>
        </div>
    )
}