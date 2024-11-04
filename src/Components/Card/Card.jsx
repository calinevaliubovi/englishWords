import { useState } from "react";
import Button from "../Button/Button";
import styles from "./card.module.scss"

export default function Card ({word, transcription,russian}) {
    const [clicked, setClicked] = useState(false);

const handleCheckState = () => {
setClicked(!clicked)
}
    

    return(
        <div>
            <div className= {styles.word_card}>
            <div className = {styles.text}>{word}</div>
            <div className = {styles.text}>{transcription}</div>
            <div
                style={{ display: clicked ? "block" : "none" }}
                className={styles.translate}
            >
                {russian}
            </div>
            {!clicked && (
                <Button color="transleteButton" btn="Перевод" onClick={handleCheckState} />
            )}
            </div>
        </div>
    )
}