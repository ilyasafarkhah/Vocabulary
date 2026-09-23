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

        prop.setWordList(prev => {
            const exists = prev.some(w => w.id === prop.word.id)
            return exists ?
                prev.map(w => (w.id === prop.word.id ? prop.word : w))
                : [...prev, prop.word]
        })
        
        prop.setWord({
            id : crypto.randomUUID(),
            word : "",
            type : "",
            translate : "",
            example : "",
            level : "",
            category : ""
        })
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
                    value={prop.word.level.toUpperCase()}
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
            <button type="submit">submit</button>
        </form>
        {prop.word.word}
        </>
    )
}

export default AddWord