import { NavLink } from "react-router"
import "/src/CSS/AddWord.css"

function AddWord(prop){

    function handleAddWord(e){

        const {name, value} = e.target

        prop.setWord(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function handleSubmit(e){

        e.preventDefault()

        const normalizedWord = {

            ...prop.word,

            category:
            prop.word.category.trim(),

            level:
            prop.word.level.trim().toUpperCase()
        }

        if (prop.editingId === null) {

            prop.setWordList(prev => [
                ...prev,
                normalizedWord
            ])
        } 
        else {

            prop.setWordList(prev =>
                prev.map(item =>
                    item.id === prop.editingId
                        ? normalizedWord
                        : item
                )
            )
        }

        prop.resetWord()
    }

    return (

        <section className="add-word-page">

            <div className="page-top">

                <div>

                    <span className="page-kicker">
                        VOCABULARY
                    </span>

                    <h1>
                        {
                            prop.editingId === null
                                ? "Add a new word"
                                : "Edit word"
                        }
                    </h1>

                    <p>
                        {
                            prop.editingId === null
                                ? "Save a new word with the details you want to remember."
                                : "Update the information for this vocabulary item."
                        }
                    </p>

                </div>


                <NavLink
                    className="back-link"
                    to="/"
                >
                    ← Home
                </NavLink>

            </div>


            <form
                className="word-form"
                onSubmit={handleSubmit}
            >

                <div className="form-grid">

                    <label className="field">

                        <span>
                            Word <b>*</b>
                        </span>

                        <input
                            type="text"
                            value={prop.word.word}
                            name="word"
                            onChange={handleAddWord}
                            required
                            placeholder="Enter a word"
                        />

                    </label>


                    <label className="field">

                        <span>
                            Translation
                        </span>

                        <input
                            type="text"
                            value={prop.word.translate}
                            name="translate"
                            onChange={handleAddWord}
                            placeholder="Enter the meaning"
                        />

                    </label>


                    <label className="field">

                        <span>
                            Word type
                        </span>

                        <input
                            type="text"
                            value={prop.word.type}
                            name="type"
                            onChange={handleAddWord}
                            placeholder="verb, noun, adjective..."
                        />

                    </label>


                    <label className="field">

                        <span>
                            Level
                        </span>

                        <input
                            type="text"
                            value={prop.word.level}
                            name="level"
                            onChange={handleAddWord}
                            placeholder="A1, A2, B1..."
                        />

                    </label>


                    <label className="field field-wide">

                        <span>
                            Example sentence
                        </span>

                        <input
                            type="text"
                            value={prop.word.example}
                            name="example"
                            onChange={handleAddWord}
                            placeholder="Write a short example sentence"
                        />

                    </label>


                    <label className="field field-wide">

                        <span>
                            Category <b>*</b>
                        </span>

                        <input
                            type="text"
                            value={prop.word.category}
                            name="category"
                            onChange={handleAddWord}
                            placeholder="Travel, Unit 2, Animals..."
                            required
                        />

                    </label>

                </div>


                <div className="form-footer">

                    <span>
                        Fields marked with * are required.
                    </span>


                    <div className="form-actions">

                        <NavLink
                            className="cancel-button"
                            to="/"
                            onClick={prop.resetWord}
                        >
                            Cancel
                        </NavLink>


                        <button
                            className="save-button"
                            type="submit"
                        >
                            {
                                prop.editingId === null
                                    ? "Add Word"
                                    : "Save Changes"
                            }
                        </button>

                    </div>

                </div>

            </form>

        </section>
    )
}

export default AddWord