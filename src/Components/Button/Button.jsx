
import styles from "./button.module.scss"

export default function Button ({color, btn}) {
    
    const buttonClass = color === 'redButton' 
    ? styles.redButton 
    : color === 'greenButton' 
    ? styles.greenButton
    : color === 'transleteButton'
    ? styles.transleteButton 
    : styles.blueButton;

    return (
        <>
            <button className = {`${styles.button} ${buttonClass}`}>{btn}</button>
        </>
        
    )
}