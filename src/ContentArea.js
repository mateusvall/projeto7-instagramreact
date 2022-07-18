import DataArea from "./DataArea";
import SideBar from "./SideBar";


export default function ContentArea(){
    return(
        <div className="content-area">
            <DataArea/>
            <SideBar img="img/catanacomics 1.png" h1="catanacomics" p="Catana"/>
        </div>
    )
}