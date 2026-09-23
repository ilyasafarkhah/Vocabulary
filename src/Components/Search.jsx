function Search (prop){

    function handleSearch(e){
        prop.setSearch(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>Search
                <input type="text" value={prop.search} onChange={handleSearch}/>
            </label>
        </form>
        </>
    )
}

export default Search