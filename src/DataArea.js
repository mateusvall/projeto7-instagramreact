import PostArea from "./PostArea";
import Stories from "./Stories";

export default function DataArea(){
    return(
        <div className="data-area">
            <Stories/>
            <PostArea/>
        </div>
    )
}