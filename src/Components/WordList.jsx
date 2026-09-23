import { NavLink, useNavigate } from "react-router"
import Search from "./Search"
import Filter from "./Filter"
import { useState } from "react"

function WordList (prop){

    const [search, setSearch] = useState("")
    const [level, setLevel] = useState("All")
    const FilterOptions = [
    "All", "A1", "A2", "B1", "B2", "C1", "C2"
    ]

    function DeleteWord(id){
        prop.setWordList(prev => prev.filter(w => (w.id !== id)))
    }

    function EditWord(item) {
        prop.setWord(item)
        prop.setEditingId(item.id)
        navigate("/addword")
    }

    const navigate = useNavigate()

    let showList = prop.wordList
    if (level !== "All") {
        showList = showList.filter(item => item.level === level)
    }

    if (search !== "") {
        showList = showList.filter(item => item.word.toLowerCase().includes(search.toLowerCase()))
    }

    if (prop.categoryfilter !== ""){
        showList = showList.filter(item => item.category.toLowerCase() === prop.categoryfilter.toLowerCase())
    }


    return(
        <>
        <NavLink to="/">Back to Home</NavLink>
        <Search search={search} setSearch={setSearch} />
        <Filter FilterOptions={FilterOptions} setLevel={setLevel} />
        {showList.map(item => (
            <div key={item.id}>
                <p>{item.word} {item.translate}</p>
                <button type="button" onClick={() => DeleteWord(item.id)}>Delete</button>
                <button type="button" onClick={() => EditWord(item)}>Edit</button>
            </div>
        ))}
        </>
    )
}

export default WordList