import { useNavigate } from "react-router"

function Category (prop){

    const categories = [...new Set(prop.wordList.map(word => word.category))]

    function handleCategoryFilter(e){
        prop.setCategoryfilter(e.target.value)
    }

    const navigate = useNavigate()

    return(
        <ul>
        {categories.map(category =>
        <li key={category}><button value={category} onClick={(e) => {handleCategoryFilter(e), navigate("/wordlist")}}>{category}</button></li>
        )}
        </ul>
    )
}

export default Category