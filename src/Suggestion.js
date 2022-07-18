export default function Suggestion(props){
    return(
        <div class="suggestion">
            <img src={props.img} alt=""/>
            <h1>{props.h1}</h1>
            <p>{props.p}</p>
            <h3>{props.h3}</h3>
        </div>
    )
}