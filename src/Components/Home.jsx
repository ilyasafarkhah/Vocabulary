import { NavLink } from "react-router"
import Category from "./Category"

function Home (prop){

    return(
        <>
        <Category setCategoryfilter={prop.setCategoryfilter} categoryfilter={prop.categoryfilter} wordList={prop.wordList}/>
        <NavLink 
            to="/addword"
            onClick={prop.resetWord}>
                Add new word
        </NavLink>
        <NavLink onClick={() => prop.setCategoryfilter("")} to="/wordlist">Word list</NavLink>
        </>
    )
}

export default Home