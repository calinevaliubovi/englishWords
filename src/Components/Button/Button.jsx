
import styles from "./button.module.scss"

export default function Button ({color, btn, onClick}) {

    const buttonClass = color === 'redButton' 
    ? styles.redButton 
    : color === 'greenButton' 
    ? styles.greenButton
    : color === 'transleteButton'
    ? styles.translateButton 
    : styles.blueButton;

    return (
        <>
          <button onClick={onClick} className={`${styles.button} ${buttonClass}`}>
            {btn}
        </button>
        </>
        
    )
}