import NavButtonArea from "./NavButtonArea";
import NavLogoArea from "./NavLogoArea";

export default function NavContainer(){
    return(
        <div className="nav-container">
            <NavLogoArea/>
            <input type="search" id="search" name="search" placeholder="Pesquisar"/>
            <NavButtonArea/>
        </div>
    )
}