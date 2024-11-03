
import Button from '../Button/Button'
import styles from './cardInput.module.scss'

export default function CardInput(){
    return(
        <>
        <h1 className={styles.h1}>Добавить новое слово</h1>
        <div className= {styles.input_container}>
            <input className={styles.input} type="text" placeholder="english"></input>
            <input className={styles.input} type="text" placeholder="transcription"></input>
            <input className={styles.input} type="text" placeholder="russian"></input>
            <Button color = "blueButton" btn = "Сохранить"/>
        </div>
        </>
    )
}