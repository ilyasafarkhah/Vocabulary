import { NavLink } from "react-router"

function AddWord(prop){

    function handleAddWord(e){
        const {name, value} = e.target
        prop.setWord(prev => ({
            ...prev, [name]: value
        }))
    }

    function handleSubmit(e){

        e.preventDefault()

        const normalizedWord = {
            ...prop.word,
            category: prop.word.category.trim(),
            level: prop.word.level.trim().toUpperCase()
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

    return(
        <>
        <NavLink to="/">Back to Home</NavLink>
        <form onSubmit={handleSubmit}>
            <label>word:
                <input 
                    type="text"
                    value={prop.word.word}
                    name="word"
                    onChange={handleAddWord}
                    required
                    placeholder="Enter a word"
                />
            </label>

            <label>
                type:
                <input
                    type="text"
                    value={prop.word.type}
                    name="type"
                    onChange={handleAddWord}
                    placeholder="Enter word type(verb,noune,object,..."
                />
            </label>

            <label>
                translate:
                <input
                    type="text"
                    value={prop.word.translate}
                    name="translate"
                    onChange={handleAddWord}
                    placeholder="Enter meaning"
                />
            </label>

            <label>
                example:
                <input
                    type="text"
                    value={prop.word.example}
                    name="example"
                    onChange={handleAddWord}
                    placeholder="write an example"
                />
            </label>

            <label>
                level:
                <input
                    type="text"
                    value={prop.word.level}
                    name="level"
                    onChange={handleAddWord}
                    placeholder="A1, A2, B1,..."
                />
            </label>

            <label>
                category:
                <input
                    type="text"
                    value={prop.word.category}
                    name="category"
                    onChange={handleAddWord}
                    placeholder="Travel words, book x unit y"
                    required
                />
            </label>
            <button type="submit">
                {prop.editingId === null ? "Add Word" : "Save Changes"}
            </button>
        </form>
        {prop.word.word}
        </>
    )
}

export default AddWord