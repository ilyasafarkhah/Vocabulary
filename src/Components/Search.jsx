import "/src/CSS/Search.css"

function Search (prop){

    function handleSearch(e){
        prop.setSearch(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (

        <form
            className="search-box"
            onSubmit={handleSubmit}
        >

            <label htmlFor="word-search">
                Search words
            </label>


            <div className="search-input-wrap">

                <span className="search-icon">
                    ⌕
                </span>


                <input
                    id="word-search"
                    type="text"
                    value={prop.search}
                    onChange={handleSearch}
                    placeholder="Search by word..."
                />


                {
                    prop.search && (

                        <button
                            type="button"
                            className="search-clear"
                            onClick={() =>
                                prop.setSearch("")
                            }
                        >
                            ×
                        </button>

                    )
                }

            </div>

        </form>
    )
}

export default Search