
import Button from "../Button/Button";
import styles from "./cardItem.module.scss"

export default function CardItem({ word, transcription, russian}){
    return(
        <div className={styles.card}>
            <div className = {styles.text}>{word}</div>
            <div className = {styles.text}>{transcription}</div>
            <div className = {styles.text}>{russian}</div>
            <Button color = "greenButton" btn = "Редактировать"/>
            <Button color = "redButton" btn = "Удалить"/>
        </div>
    );
}
