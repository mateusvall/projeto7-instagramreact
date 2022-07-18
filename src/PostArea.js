import Content from "./Content";
export default function PostArea(){
    const todosPosts = [
        {
            name:"content-1",
            authorImg: "img/meowed 2.png",
            author:"meowed",
            postImg:"img/gato-telefone 1.png",
            lastLike:"respondeai",
            lastLikeImg:"img/respondeai 2.png",
            qtyPeople:"101.523"
        },
        {
            name:"content-2",
            authorImg:"img/barked 2.png",
            author:"barked",
            postImg:"img/dog 1.png",
            lastLike:"adorableanimals",
            lastLikeImg:"img/adorableanimals 2.png",
            qtyPeople:"99.159"
        },
        {
            name:"content-3",
            authorImg: "img/meowed 2.png",
            author:"meowed",
            postImg:"img/gato-telefone 1.png",
            lastLike:"respondeai",
            lastLikeImg:"img/respondeai 2.png",
            qtyPeople:"101.523"
            
        }
    ]

    const postsJFX = todosPosts.map((post) => (
        <Content name={post.name} authorImg={post.authorImg} author={post.author} postImg={post.postImg} lastLike={post.lastLike} lastLikeImg={post.lastLikeImg} qtyPeople={post.qtyPeople}/>
    ))

    return(
        <div className="post-area">
            {postsJFX}
        </div>
    )
}