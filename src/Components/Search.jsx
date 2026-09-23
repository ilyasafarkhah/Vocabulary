function Search (prop){

    function handleSearch(e){
        prop.setSearch(e.target.value)
    }

    return(
        <>
        <form>
            <label>Search
                <input type="text" value={prop.search} onChange={handleSearch}/>
            </label>
        </form>
        </>
    )
}

export default Search