
import style from "./button.module.scss"

export default function Button (props) {
    return (
        <>
            <button className = {style.button}>{props.button}</button>
        </>
        
    )
}