import { useParams, NavLink } from "react-router"

function WordDetail (prop){
    const { id } = useParams()
    const word = prop.wordList.find(item => item.id === id)
    return(
        <>
        <NavLink to="/">Home</NavLink>
        <p>{word.word}</p>
        <p>{word.translate}</p>
        <p>{word.type}</p>
        <p>{word.example}</p>
        <p>{word.level}</p>
        <p>{word.category}</p>
        </>
    )
}

export default WordDetail