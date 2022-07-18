import React from 'react';

export default function Content(props){

    

    const [isActive, setIsActive] = React.useState(false);
    let currentColor = isActive?"red":"black";

    return(
    <div className={props.name}>
        <img className="author-img" src={props.authorImg} alt=""/>
        <p className="author">{props.author}</p>
        <img className="three-dots" src="ellipsis-horizontal 1.png" alt=""/>
        <img className="post" src={props.postImg} alt=""/>
        <ion-icon class="like-post" onClick={() => (setIsActive(!isActive))} name={isActive? "heart":"heart-outline"} style={{color:currentColor}}></ion-icon>
        <ion-icon class="message-post" name="chatbubble-outline"></ion-icon>
        <ion-icon class="share-post" name="paper-plane-outline"></ion-icon>
        <img className="like-img" src={props.lastLikeImg} alt=""/>
        <p className="like-message">Curtido por <strong>{props.lastLike}</strong> e <strong>outras {props.qtyPeople} pessoas</strong></p>
        <ion-icon class="favorite" name="bookmark-outline"></ion-icon>
    </div>
    );
}