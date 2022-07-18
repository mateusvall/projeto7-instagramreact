export default function Story(props){
    return(
    <div className={props.number}>
        <img src={props.img} alt=""/>
        <p>{props.text}</p>
    </div>
    )
}