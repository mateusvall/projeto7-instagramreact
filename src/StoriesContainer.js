import Story from "./Story";
export default function StoriesContainer(){
    const todosStories = [
        {   
            img:"img/9gag 1.png",
            text:"9gag",
            number:"story1"
        },
        {
            img:"img/meowed 1.png",
            text:"meowed",
            number:"story2"     

        },
        {
            img:"img/barked 1.png",
            text:"barked",
            number:"story3"
        },
        {
            img:"img/nathanwpylestrangeplanet 1.png",
            text:"wawawiwac...",
            number:"story4"

        },
        {
            img:"img/wawawiwacomicsa 1.png",
            text:"wawawiwac...",
            number:"story5"

        },
        {
            img:"img/respondeai 1.png",
            text:"respondeai",
            number:"story6"
        },
        {
            img:"img/filomoderna 1.png",
            text:"filomoderna",
            number:"story7"
        },
        {
            img:"img/memeriagourmet 1.png",
            text:"memeriago...",
            number:"story8"
        },
    ]

    const todosJSX = todosStories.map((story)=>(
        <Story img={story.img} text={story.text} number={story.number}/>
    ))

    console.log(todosJSX)

    return (
    <div className="stories-container">
        {todosJSX}
        <img className="arrow" src="img/Vector.png" alt="" number="story9"/>
    </div>
    );
}