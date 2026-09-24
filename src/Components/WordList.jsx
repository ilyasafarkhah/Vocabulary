import { NavLink, useNavigate } from "react-router"
import Search from "./Search"
import Filter from "./Filter"
import { useState } from "react"
import "/src/CSS/WordList.css"

function WordList(prop) {

    const [search, setSearch] = useState("")
    const [level, setLevel] = useState("All")

    const FilterOptions = [
        "All",
        "A1",
        "A2",
        "B1",
        "B2",
        "C1",
        "C2"
    ]


    function DeleteWord(id) {

        prop.setWordList(
            prev =>
                prev.filter(
                    w => w.id !== id
                )
        )
    }


    function EditWord(item) {

        prop.setWord(item)

        prop.setEditingId(item.id)

        navigate("/addword")
    }


    const navigate = useNavigate()


    let showList = prop.wordList


    if (level !== "All") {

        showList =
            showList.filter(
                item => item.level === level
            )
    }


    if (search !== "") {

        showList =
            showList.filter(item =>
                item.word
                    .toLowerCase()
                    .includes(
                        search.toLowerCase()
                    )
            )
    }


    if (prop.categoryfilter !== "") {

        showList =
            showList.filter(item =>
                item.category
                    .toLowerCase()
                ===
                prop.categoryfilter
                    .toLowerCase()
            )
    }


    return (

        <section className="word-list-page">

            <div className="list-heading">

                <div>

                    <span className="page-kicker">
                        YOUR VOCABULARY
                    </span>

                    <h1>
                        Word list
                    </h1>

                    <p>
                        Search, filter and manage
                        the words you have saved.
                    </p>

                </div>


                <NavLink
                    className="add-list-button"
                    to="/addword"
                    onClick={prop.resetWord}
                >
                    + Add word
                </NavLink>

            </div>


            <div className="filters-panel">

                <Search
                    search={search}
                    setSearch={setSearch}
                />


                <Filter
                    FilterOptions={FilterOptions}
                    setLevel={setLevel}
                    selectedLevel={level}
                />

            </div>


            {
                prop.categoryfilter && (

                    <div className="active-filter">

                        Category:

                        <strong>
                            {prop.categoryfilter}
                        </strong>

                        <button
                            type="button"
                            onClick={() =>
                                prop.setCategoryfilter("")
                            }
                        >
                            Clear
                        </button>

                    </div>

                )
            }


            <div className="list-meta">

                <span>

                    {showList.length}

                    {" "}

                    {
                        showList.length === 1
                            ? "word"
                            : "words"
                    }

                </span>


                {
                    (
                        search ||
                        level !== "All" ||
                        prop.categoryfilter
                    ) && (

                        <span>
                            Filtered view
                        </span>

                    )
                }

            </div>


            {
                showList.length === 0

                    ?

                    <div className="empty-list">

                        <div className="empty-list-icon">
                            ◌
                        </div>

                        <h2>
                            No words found
                        </h2>

                        <p>
                            Try another search or filter,
                            or add a new word to your collection.
                        </p>

                        <NavLink
                            className="empty-list-action"
                            to="/addword"
                            onClick={prop.resetWord}
                        >
                            Add a word
                        </NavLink>

                    </div>

                    :

                    <div className="word-grid">

                        {
                            showList.map(item => (

                                <article
                                    className="word-card"
                                    key={item.id}
                                >

                                    <div className="word-card-top">

                                        <div>

                                            <h2>
                                                {item.word}
                                            </h2>

                                            {
                                                item.type && (

                                                    <span className="word-type">
                                                        {item.type}
                                                    </span>

                                                )
                                            }

                                        </div>


                                        {
                                            item.level && (

                                                <span className="word-level">
                                                    {item.level}
                                                </span>

                                            )
                                        }

                                    </div>


                                    {
                                        item.translate && (

                                            <p className="word-translation">
                                                {item.translate}
                                            </p>

                                        )
                                    }


                                    {
                                        item.example && (

                                            <p className="word-example">
                                                "{item.example}"
                                            </p>

                                        )
                                    }


                                    {
                                        item.category && (

                                            <span className="word-category">
                                                {item.category}
                                            </span>

                                        )
                                    }


                                    <div className="word-card-actions">

                                        <button
                                            type="button"
                                            className="edit-button"
                                            onClick={() =>
                                                EditWord(item)
                                            }
                                        >
                                            Edit
                                        </button>


                                        <button
                                            type="button"
                                            className="delete-button"
                                            onClick={() =>
                                                DeleteWord(item.id)
                                            }
                                        >
                                            Delete
                                        </button>

                                    </div>

                                </article>

                            ))
                        }

                    </div>
            }

        </section>
    )
}

export default WordList