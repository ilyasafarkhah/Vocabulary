function Filter (prop){

    return(
        <>
        <ul>
        {prop.FilterOptions.map(level =>
            <button key={level} type="button" onClick={() => prop.setLevel(level)}>
                {level}
            </button>
        )}
        </ul>
        </>
    )
}

export default Filter