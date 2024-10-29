import CardInput from "../CardInput/CardInput";
import Cards from "../Cards/Cards";

export default function Main () {
    let userEnterDate = true;

    return (
        <main>
            {userEnterDate?  
            <CardInput/>:
            <Cards/>
             }
        </main>
    )
}