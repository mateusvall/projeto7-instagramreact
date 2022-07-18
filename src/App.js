import NavBar from "./NavBar";
import ContentArea from "./ContentArea";
import MobileBar from "./MobileBar"

export default function App(){
    console.log("Executou essa função!");
    return (
        <div>
            <NavBar/>
            <ContentArea/>
            <MobileBar/>
        </div>
    );
}

