import Suggestion from "./Suggestion"

export default function SideBar(props){

    const todasSugestoes = [
        {
            img:"img/badvibesmemes 1.png",
            h1:"bad.vibes.memes",
            p:"Segue você",
            h3:"Seguir"
        },
        {
            img:"img/chibirdart 1.png",
            h1:"chibirdart",
            p:"Segue você",
            h3:"Seguir"
        },
        {
            img:"img/razoesparaacreditar 1.png",
            h1:"razoesparaacreditar",
            p:"Segue você",
            h3:"Seguir"
        },
        {
            img:"img/adorableanimals 1.png",
            h1:"adorable_animals",
            p:"Segue você",
            h3:"Seguir"
        },
        {
            img:"img/smallcutecats 1.png",
            h1:"smallcutecats",
            p:"Segue você",
            h3:"Seguir"
        }
    ]

    const sugestoesJFX = todasSugestoes.map((sug) =>(
        <Suggestion img={sug.img} h1={sug.h1} p={sug.p} h3={sug.h3}/>
    ))
    return(
        <div class="side-bar">
            <div className = "main-suggestion">
                <img src={props.img} alt=""/>
                <h1>{props.h1}</h1>
                <p>{props.p}</p>
            </div>
            <div className="suggestions">
                <p>Sugestões para você</p>
                <h1>Ver tudo</h1>
            </div>

            {sugestoesJFX}

            <p class="about">Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                Termos • Localizações • Contas mais relevantes • Hashtags • 
                Idioma
            </p>
            <p class="rights">
                © 2021 INSTAGRAM DO FACEBOOK
            </p>  
        </div>
    )
}